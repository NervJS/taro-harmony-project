// @ts-nocheck
import Taro from '../../index'

declare module '../../index' {
  namespace downloadFile {
    interface Option {
      /** 下载资源的 url */
      url: string
      /** 指定文件下载后存储的路径 */
      filePath?: string
      /** HTTP 请求的 Header，Header 中不能设置 Referer */
      header?: TaroGeneral.IAnyObject
      /** 超时时间，单位为毫秒 */
      timeout?: number
      /** 是否应使用传出凭据 (cookie) 发送此请求
       * @default true
       * @supported h5
       */
      withCredentials?: boolean
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: TaroGeneral.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: TaroGeneral.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: FileSuccessCallbackResult) => void
    }

    interface FileSuccessCallbackResult extends TaroGeneral.CallbackResult {
      /** 用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致 */
      filePath: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
      tempFilePath: string
      /** 调用结果 */
      errMsg: string
      /**
       * 开发者服务器返回的 HTTP Response Header
       * @supported weapp
       * @weapp 非官方文档标注属性
       */
      header?: TaroGeneral.IAnyObject
      /**
       * 数据长度，单位 Byte
       * @supported weapp
       * @weapp 非官方文档标注属性
       */
      dataLength?: number
      /**
       * cookies
       * @supported weapp
       * @weapp 非官方文档标注属性
       */
      cookies?: string[]
      /** 网络请求过程中一些调试信息 */
      profile?: TaroGeneral.IAnyObject
    }
  }

  namespace DownloadTask {
    /** HTTP Response Header 事件的回调函数 */
    type OnHeadersReceivedCallback = (
        result: OnHeadersReceivedCallbackResult,
    ) => void
    /** 下载进度变化事件的回调函数 */
    type OnProgressUpdateCallback = (
        result: OnProgressUpdateCallbackResult,
    ) => void
    interface OnHeadersReceivedCallbackResult {
      /** 开发者服务器返回的 HTTP Response Header */
      header: TaroGeneral.IAnyObject
    }
    interface OnProgressUpdateCallbackResult {
      /** 下载进度百分比 */
      progress: number
      /** 预期需要下载的数据总长度，单位 Bytes */
      totalBytesExpectedToWrite: number
      /** 已经下载的数据长度，单位 Bytes */
      totalBytesWritten: number
    }

    type DownloadTaskPromise = Promise<downloadFile.FileSuccessCallbackResult> & DownloadTask & {
      headersReceive: DownloadTask['onHeadersReceived']
      progress: DownloadTask['onProgressUpdate']
    }
  }

  /** 一个可以监听下载进度变化事件，以及取消下载任务的对象
   * @supported weapp, swan, alipay, h5, rn, tt, harmony_hybrid
   * @example
   * ```tsx
   * const downloadTask = Taro.downloadFile({
   *   url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
   *   success (res) {
   *     Taro.playVoice({
   *       filePath: res.tempFilePath
   *     })
   *   }
   * })
   *
   * downloadTask.onProgressUpdate((res) => {
   *   console.log('下载进度', res.progress)
   *   console.log('已经下载的数据长度', res.totalBytesWritten)
   *   console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
   * })
   *
   * downloadTask.abort() // 取消下载任务
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html
   */
  interface DownloadTask {
    /** 中断下载任务
     * @supported weapp, h5, tt, harmony_hybrid
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html
     */
    abort(): void
    /** 监听下载进度变化事件
     * @supported weapp, h5, tt, harmony_hybrid
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html
     */
    onProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTask.OnProgressUpdateCallback,
    ): void
    /** 取消监听下载进度变化事件
     * @supported weapp, h5, tt, harmony_hybrid
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html
     */
    offProgressUpdate(
      /** 下载进度变化事件的回调函数 */
      callback: DownloadTask.OnProgressUpdateCallback,
    ): void
    /** 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @supported weapp, h5
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html
     */
    onHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTask.OnHeadersReceivedCallback,
    ): void
    /** 取消监听 HTTP Response Header 事件
     * @supported weapp, h5
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html
     */
    offHeadersReceived(
      /** HTTP Response Header 事件的回调函数 */
      callback: DownloadTask.OnHeadersReceivedCallback,
    ): void
  }

  interface TaroStatic {
    /** 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
     *
     * 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
     * @supported weapp, h5, alipay, swan, rn, tt, harmony_hybrid, harmony
     * @example
     * ```tsx
     * Taro.downloadFile({
     *   url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
     *   success: function (res) {
     *     // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
     *     if (res.statusCode === 200) {
     *       Taro.playVoice({
     *         filePath: res.tempFilePath
     *       })
     *     }
     *   }
     * })
     * ```
     * @see https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html
     */
    downloadFile(option: downloadFile.Option): DownloadTask.DownloadTaskPromise
  }
}
