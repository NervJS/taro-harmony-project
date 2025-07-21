// @ts-nocheck
import Taro$1 from './types';
import { TaroAny, Current, Events, History, eventCenter, getCurrentInstance, nextTick } from '../runtime';
export { Current, Events, History, eventCenter, getCurrentInstance, nextTick } from '../runtime';

interface ICallbackResult {
    /** 错误信息 */
    errMsg: string;
}

declare const getUserCryptoManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const setEnableDebug: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getRealtimeLogManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getLogManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const reportPerformance: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getPerformance: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const preloadWebview: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const preloadSkylineView: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const preloadAssets: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/** 获取窗口信息 */
declare const getWindowInfo: typeof Taro$1.getWindowInfo;
/** 获取设备设置 */
declare const getSystemSetting: typeof Taro$1.getSystemSetting;
/** 获取设备设置 */
declare const getDeviceInfo: typeof Taro$1.getDeviceInfo;
/** 获取微信APP基础信息 */
declare const getAppBaseInfo: typeof Taro$1.getAppBaseInfo;
/** 获取微信APP授权设置 */
declare const getAppAuthorizeSetting: typeof Taro$1.getAppAuthorizeSetting;
declare const getSystemInfoSync: typeof Taro$1.getSystemInfoSync;
declare const getSystemInfo: typeof Taro$1.getSystemInfo;

declare const updateWeChatApp: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getUpdateManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const onUnhandledRejection: typeof Taro$1.onUnhandledRejection;
declare const onThemeChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onPageNotFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onLazyLoadError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onError: typeof Taro$1.onError;
declare const onAudioInterruptionEnd: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onAudioInterruptionBegin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onAppShow: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onAppHide: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offUnhandledRejection: typeof Taro$1.offUnhandledRejection;
declare const offThemeChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offPageNotFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLazyLoadError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offError: typeof Taro$1.offError;
declare const offAudioInterruptionEnd: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offAudioInterruptionBegin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offAppShow: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offAppHide: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getLaunchOptionsSync: typeof Taro$1.getLaunchOptionsSync;
declare const getEnterOptionsSync: typeof Taro$1.getEnterOptionsSync;

declare const canIUse: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const arrayBufferToBase64: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const base64ToArrayBuffer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/** 创建离屏 canvas 实例 */
declare const createOffscreenCanvas: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 创建 canvas 的绘图上下文 CanvasContext 对象 */
declare const createCanvasContext: (canvasId: string) => any;
/** 把当前画布指定区域的内容导出生成指定大小的图片 */
declare const canvasToTempFilePath: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 将像素数据绘制到画布 */
declare const canvasPutImageData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 获取 canvas 区域隐含的像素数据 */
declare const canvasGetImageData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const reportMonitor: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const reportAnalytics: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const reportEvent: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getExptInfoSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/**
 * 停止监听加速度数据。
 */
declare const stopAccelerometer: typeof Taro$1.stopAccelerometer;
/**
 * 开始监听加速度数据。
 */
declare const startAccelerometer: typeof Taro$1.startAccelerometer;
/**
 * 监听加速度数据事件。频率根据 Taro.startAccelerometer() 的 interval 参数。可使用 Taro.stopAccelerometer() 停止监听。
 */
declare const onAccelerometerChange: typeof Taro$1.onAccelerometerChange;
/**
 * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
 */
declare const offAccelerometerChange: typeof Taro$1.offAccelerometerChange;

declare const checkIsOpenAccessibility: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getBatteryInfoSync: typeof Taro$1.getBatteryInfoSync;
declare const getBatteryInfo: typeof Taro$1.getBatteryInfo;

declare const stopBluetoothDevicesDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startBluetoothDevicesDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openBluetoothAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBluetoothDeviceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBluetoothAdapterStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBluetoothDeviceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBluetoothAdapterStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const makeBluetoothPair: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const isBluetoothDevicePaired: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getConnectedBluetoothDevices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBluetoothDevices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBluetoothAdapterState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const closeBluetoothAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const writeBLECharacteristicValue: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setBLEMTU: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const readBLECharacteristicValue: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBLEMTUChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBLEConnectionStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBLEMTUChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBLEConnectionStateChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const notifyBLECharacteristicValueChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBLEMTU: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBLEDeviceServices: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBLEDeviceRSSI: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBLEDeviceCharacteristics: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createBLEConnection: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const closeBLEConnection: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const onBLEPeripheralConnectionStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBLEPeripheralConnectionStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createBLEPeripheralServer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const addPhoneRepeatCalendar: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const addPhoneCalendar: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/**
 * 设置系统剪贴板的内容
 */
declare const setClipboardData: typeof Taro$1.setClipboardData;
/**
 * 获取系统剪贴板的内容
 */
declare const getClipboardData: typeof Taro$1.getClipboardData;

/**
 * 停止监听罗盘数据
 */
declare const stopCompass: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 开始监听罗盘数据
 */
declare const startCompass: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
 */
declare const onCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听。
 */
declare const offCompassChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const chooseContact: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const addPhoneContact: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getRandomValues: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/**
 * 停止监听加速度数据。
 */
declare const stopGyroscope: typeof Taro$1.stopGyroscope;
/**
 * 开始监听加速度数据。
 */
declare const startGyroscope: typeof Taro$1.startGyroscope;
/**
 * 监听加速度数据事件。频率根据 Taro.startGyroscope() 的 interval 参数。可使用 Taro.stopGyroscope() 停止监听。
 */
declare const onGyroscopeChange: typeof Taro$1.onGyroscopeChange;
/**
 * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
 */
declare const offGyroscopeChange: typeof Taro$1.offGyroscopeChange;

declare const stopBeaconDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startBeaconDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBeaconUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBeaconServiceChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBeaconUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offBeaconServiceChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBeacons: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const onKeyboardHeightChange: typeof Taro$1.onKeyboardHeightChange;
declare const offKeyboardHeightChange: typeof Taro$1.offKeyboardHeightChange;
declare const hideKeyboard: typeof Taro$1.hideKeyboard;
declare const getSelectedTextRange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const onMemoryWarning: (listener: any) => void;
declare const offMemoryWarning: (listener: any) => void;

declare const stopDeviceMotionListening: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startDeviceMotionListening: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onDeviceMotionChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offDeviceMotionChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getNetworkType: typeof Taro$1.getNetworkType;
/**
 * 在最近的八次网络请求中, 出现下列三个现象之一则判定弱网。
 * - 出现三次以上连接超时
 * - 出现三次 rtt 超过 400
 * - 出现三次以上的丢包
 * > 弱网事件通知规则是: 弱网状态变化时立即通知, 状态不变时 30s 内最多通知一次。
 */
declare const onNetworkWeakChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onNetworkStatusChange: typeof Taro$1.onNetworkStatusChange;
declare const offNetworkWeakChange: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offNetworkStatusChange: typeof Taro$1.offNetworkStatusChange;
declare const getLocalIPAddress: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const stopHCE: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startHCE: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const sendHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offHCEMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getNFCAdapter: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getHCEState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const makePhoneCall: typeof Taro$1.makePhoneCall;

declare const scanCode: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const setVisualEffectOnCapture: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setScreenBrightness: typeof Taro$1.setScreenBrightness;
declare const setKeepScreenOn: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onUserCaptureScreen: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offUserCaptureScreen: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getScreenBrightness: typeof Taro$1.getScreenBrightness;
declare const onScreenRecordingStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offScreenRecordingStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getScreenRecordingState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const sendSms: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const vibrateLong: ({ success, fail, complete }?: Taro$1.vibrateLong.Option) => Promise<unknown>;
declare const vibrateShort: ({ success, fail, complete }?: Taro$1.vibrateLong.Option) => Promise<unknown>;

declare const stopWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onWifiConnectedWithPartialInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onWifiConnected: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onGetWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offWifiConnectedWithPartialInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offWifiConnected: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offGetWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getWifiList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getConnectedWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const connectWifi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getExtConfigSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getExtConfig: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/**
 * HarmonyOS 文档：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687
 *
 * WX 文档：
 * https://developers.weixin.qq.com/miniprogram/dev/api/file/FileSystemManager.html
 *
 * Taro.js 文档
 * https://taro-docs.jd.com/taro/docs/apis/files/FileSystemManager
 *
 * HarmonyOS 不支持接口：
 * readCompressedFile
 * readCompressedFileSync
 * readdirSync
 * readZipEntry
 *
 * HarmonyOS 差异性接口：
 * readFile：encoding 仅支持 utf-8
 * readFileSync：encoding 仅支持 utf-8
 * write：encoding 仅支持 utf-8
 * writeSync：encoding 仅支持 utf-8
 * rmdirSync：recursive 参数无效（即不支持递归删除）
 * statSync：recursive 参数无效（即不支持递归获取目录下的每个文件的 Stats 信息）
 * getSavedFileList：返回值 fileList 中的每一项不包含 createTime 属性
 */

declare function getFileSystemManager(): Taro$1.FileSystemManager;

declare const saveFileToDisk: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * HarmonyOS 不支持 showMenu 选项，并且 type 目前仅支持 *，详情参见：
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-document-0000001168936589#section9616125953711
 */
declare function openDocument(option: Taro$1.openDocument.Option): Promise<any>;
declare function saveFile(option: Taro$1.saveFile.Option): Promise<any>;
declare function removeSavedFile(option: Taro$1.removeSavedFile.Option): Promise<any>;
declare function getFileInfo(option: Taro$1.getFileInfo.Option): Promise<Taro$1.getFileInfo.SuccessCallbackResult | Taro$1.getFileInfo.FailCallbackResult>;
declare function getSavedFileList(option?: Taro$1.getSavedFileList.Option): Promise<Taro$1.getSavedFileList.SuccessCallbackResult>;
declare function getSavedFileInfo(option: Taro$1.getSavedFileInfo.Option): Promise<Taro$1.getSavedFileInfo.SuccessCallbackResult>;

declare const ENV_TYPE: {
    WEAPP: string;
    SWAN: string;
    ALIPAY: string;
    TT: string;
    QQ: string;
    JD: string;
    WEB: string;
    RN: string;
    HARMONY: string;
    QUICKAPP: string;
};
declare function getEnv(): string;
declare const getCurrentPages: () => never[];

declare const requirePlugin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 鸿蒙专属 */
declare function updatePageSync(): void;
declare function unstable_SetPageIsTextNeedLayout(isNeed: boolean): void;

declare const triggerTaskPoolMethods: ({ name, args, complete, fail, success, }?: {
    name?: string;
    args?: TaroAny[];
    complete?: (res: TaroAny) => void;
    fail?: (res: TaroAny) => void;
    success?: (res: TaroAny) => void;
}) => Promise<unknown>;

declare const stopLocationUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startLocationUpdateBackground: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startLocationUpdate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getLocation: typeof Taro$1.getLocation;
declare const onLocationChange: typeof Taro$1.onLocationChange;
declare const offLocationChange: typeof Taro$1.offLocationChange;
declare const onLocationChangeError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLocationChangeError: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const choosePoi: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const chooseLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getFuzzyLocation: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const stopVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setInnerAudioOption: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const playVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const pauseVoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getAvailableAudioSources: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createWebAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createMediaAudioPlayer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 创建内部 audio 上下文 InnerAudioContext 对象。
 */
declare const createInnerAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createAudioContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** Harmony 专属，更新 audio 状态 */
declare const refreshAudioSession: () => void;

declare const stopBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const seekBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const playBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const pauseBackgroundAudio: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBackgroundAudioStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBackgroundAudioPlay: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBackgroundAudioPause: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBackgroundAudioPlayerState: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 获取全局唯一的背景音频管理器
 */
declare const getBackgroundAudioManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createCameraContext: typeof Taro$1.createCameraContext;

declare const previewMedia: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const chooseMedia: typeof Taro$1.chooseMedia;

declare const previewImage: typeof Taro$1.previewImage;
declare const getImageInfo: typeof Taro$1.getImageInfo;
declare const compressImage: typeof Taro$1.compressImage;
declare const chooseImage: typeof Taro$1.chooseImage;
declare const saveImageToPhotosAlbum: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createLivePusherContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createLivePlayerContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createMapContext: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createMediaRecorder: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const stopRecord: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startRecord: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getRecorderManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createVideoContext: typeof Taro$1.createVideoContext;
declare const chooseVideo: typeof Taro$1.chooseVideo;
declare const compressVideo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getVideoInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openVideoEditor: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const saveVideoToPhotosAlbum: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createVideoDecoder: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createMediaContainer: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const updateVoIPChatMuteConfig: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const subscribeVoIPVideoMembers: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setEnable1v1Chat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onVoIPVideoMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onVoIPChatStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onVoIPChatSpeakersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onVoIPChatMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onVoIPChatInterrupted: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offVoIPChatSpeakersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offVoIPVideoMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offVoIPChatStateChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offVoIPChatMembersChanged: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offVoIPChatInterrupted: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const joinVoIPChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const join1v1Chat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const exitVoIPChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const openEmbeddedMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const navigateToMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const navigateBackMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const exitMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openBusinessView: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const downloadFile: typeof Taro$1.uploadFile;

declare const stopLocalServiceDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startLocalServiceDiscovery: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onLocalServiceResolveFail: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onLocalServiceLost: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onLocalServiceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onLocalServiceDiscoveryStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLocalServiceResolveFail: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLocalServiceLost: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLocalServiceFound: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const offLocalServiceDiscoveryStop: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

type TRequest = typeof Taro$1.request;
declare const request: TRequest;

declare const createTCPSocket: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createUDPSocket: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const uploadFile: typeof Taro$1.uploadFile;

declare const connectSocket: typeof Taro$1.connectSocket;

declare const getAccountInfoSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const chooseAddress: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const authorizeForMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const authorize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const openCard: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const addCard: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const reserveChannelsLive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openChannelsUserProfile: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openChannelsLive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openChannelsEvent: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openChannelsActivity: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getChannelsShareKey: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getChannelsLiveNoticeInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getChannelsLiveInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const openCustomerServiceChat: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const requestDeviceVoIP: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getDeviceVoIPList: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const checkIsSupportFacialRecognition: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startFacialRecognitionVerify: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const startFacialRecognitionVerifyAndUploadVideo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const faceVerifyForPay: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const addVideoToFavorites: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const addFileToFavorites: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getGroupEnterInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const chooseInvoiceTitle: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const chooseInvoice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const chooseLicensePlate: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const pluginLogin: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const login: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const checkSession: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const checkIsAddedToMyMiniProgram: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const requirePrivacyAuthorize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const openPrivacyContract: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onNeedPrivacyAuthorization: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getPrivacySetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const showRedPackage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const openSetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getSetting: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const startSoterAuthentication: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const checkIsSupportSoterAuthentication: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const checkIsSoterEnrolledInDevice: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const requestSubscribeMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const requestSubscribeDeviceMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

/**
 * 用户相关API， Harmony ACE API 6
 *
 * 1. 华为账号场景介绍文档 @see https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/harmonyos-js-login-0000001151310900
 * 2. 华为账号API参考 @see https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-overview-0000001063532145
 */
/**
 * 通过Scope数组获取已登录的对应帐号信息(依赖login行为)
 * @param options
 */
declare const getUserInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 获取用户信息
 */
declare const getUserProfile: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const shareToWeRun: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getWeRunData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const requestPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const requestPluginPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const requestOrderPayment: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const navigateTo: typeof Taro$1.navigateTo;
declare const redirectTo: typeof Taro$1.redirectTo;
declare const navigateBack: typeof Taro$1.navigateBack;
declare const reLaunch: typeof Taro$1.reLaunch;
declare const switchTab: typeof Taro$1.switchTab;

/** 更新转发属性 */
declare const updateShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 显示当前页面的转发按钮 */
declare const showShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载 */
declare const showShareImageMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 转发视频到聊天 */
declare const shareVideoMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 转发文件到聊天 */
declare const shareFileMessage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 监听用户点击右上角菜单的「复制链接」按钮时触发的事件 */
declare const onCopyUrl: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 移除用户点击右上角菜单的「复制链接」按钮时触发的事件的监听函数 */
declare const offCopyUrl: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 隐藏当前页面的转发按钮 */
declare const hideShareMenu: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 获取转发详细信息 */
declare const getShareInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/** 验证私密消息。 */
declare const authPrivateMessage: (option?: {}, ...args: any[]) => Promise<ICallbackResult & Record<string, unknown>>;

declare const setBackgroundFetchToken: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const onBackgroundFetchData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBackgroundFetchToken: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getBackgroundFetchData: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createCacheManager: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare function getStorage<T = any>(options: Taro$1.getStorage.Option<T>): Promise<unknown> | undefined;
declare function setStorage(options: Taro$1.setStorage.Option): Promise<unknown> | undefined;
declare function removeStorage(options: Taro$1.removeStorage.Option): Promise<unknown> | undefined;
declare const getStorageInfoSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getStorageInfo: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const createBufferURL: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const revokeBufferURL: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const batchSetStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const batchSetStorage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const batchGetStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const batchGetStorage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const clearStorage: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const getStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const setStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const clearStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const removeStorageSync: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

interface IAnimationAttr {
    duration: number;
    delay: number;
    timingFunction: string;
    transformOrigin: string;
}
type TStep = {
    delay: number;
    duration: number;
    timingFunction: string;
    transformOrigin: string;
    rule: TRule;
};
type TRule = Record<string, any>;
declare class Animation implements Taro$1.Animation {
    unit: string;
    DEFAULT: IAnimationAttr;
    steps: TStep[];
    rule: TRule;
    constructor({ duration, delay, timingFunction, transformOrigin, unit }?: Taro$1.createAnimation.Option);
    setDefault(duration: any, delay: any, timingFunction: any, transformOrigin: any): void;
    export(): {
        actions: any[];
    };
    step(arg?: Partial<IAnimationAttr>): Taro$1.Animation;
    matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Taro$1.Animation;
    matrix3d(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number): Taro$1.Animation;
    rotate(angle: number): Taro$1.Animation;
    rotate3d(x: number, y?: number | undefined, z?: number | undefined, angle?: number | undefined): Taro$1.Animation;
    rotateX(angle: number): Taro$1.Animation;
    rotateY(angle: number): Taro$1.Animation;
    rotateZ(angle: number): Taro$1.Animation;
    scale(sx: number, sy?: number | undefined): Taro$1.Animation;
    scale3d(sx: number, sy: number, sz: number): Taro$1.Animation;
    scaleX(scale: number): Taro$1.Animation;
    scaleY(scale: number): Taro$1.Animation;
    scaleZ(scale: number): Taro$1.Animation;
    skew(ax: number, ay: number): Taro$1.Animation;
    skewX(angle: number): Taro$1.Animation;
    skewY(angle: number): Taro$1.Animation;
    translate(tx?: number | undefined, ty?: number | undefined): Taro$1.Animation;
    translate3d(tx?: number | undefined, ty?: number | undefined, tz?: number | undefined): Taro$1.Animation;
    translateX(translation: number): Taro$1.Animation;
    translateY(translation: number): Taro$1.Animation;
    translateZ(translation: number): Taro$1.Animation;
    opacity(value: number): Taro$1.Animation;
    backgroundColor(value: string): Taro$1.Animation;
    width(value: string | number): Taro$1.Animation;
    height(value: string | number): Taro$1.Animation;
    left(value: string | number): Taro$1.Animation;
    right(value: string | number): Taro$1.Animation;
    top(value: string | number): Taro$1.Animation;
    bottom(value: string | number): Taro$1.Animation;
}

declare const createAnimation: (option: Taro$1.createAnimation.Option) => Animation;

declare const setBackgroundTextStyle: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare function setBackgroundColor(options: Taro.setBackgroundColor.Option): Promise<unknown>;

declare const loadFontFace: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare function showToast(options: any): Promise<unknown>;
declare function showModal(options: any): Promise<unknown>;
declare function showActionSheet(options: any): Promise<unknown>;
declare const hideToast: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const showLoading: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const hideLoading: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const enableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
declare const disableAlertBeforeUnload: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const getMenuButtonBoundingClientRect: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const setNavigationBarTitle: typeof Taro$1.setNavigationBarTitle;
declare const setNavigationBarColor: typeof Taro$1.setNavigationBarColor;
declare const showNavigationBarLoading: typeof Taro$1.setNavigationBarColor;
declare const hideNavigationBarLoading: typeof Taro$1.hideNavigationBarLoading;
declare const hideHomeButton: typeof Taro$1.hideHomeButton;

declare const startPullDownRefresh: typeof Taro$1.startPullDownRefresh;
declare const stopPullDownRefresh: typeof Taro$1.stopPullDownRefresh;

declare const pageScrollTo: typeof Taro$1.pageScrollTo;

declare const setTopBarText: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const showTabBar: (option?: Taro$1.showTabBar.Option | undefined) => Promise<TaroGeneral.CallbackResult>;
declare const hideTabBar: (option?: Taro$1.hideTabBar.Option | undefined) => Promise<TaroGeneral.CallbackResult>;
declare const setTabBarStyle: typeof Taro$1.setTabBarStyle;
declare const setTabBarItem: typeof Taro$1.setTabBarItem;
declare function showTabBarRedDot(options: any): Promise<unknown>;
declare function hideTabBarRedDot(options: any): Promise<unknown>;
declare function setTabBarBadge(options: any): Promise<unknown>;
declare function removeTabBarBadge(options: any): Promise<unknown>;

/**
 * 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
 */
declare const setWindowSize: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;
/**
 * 监听窗口尺寸变化事件
 */
declare const onWindowResize: typeof Taro$1.onWindowResize;
/**
 * 取消监听窗口尺寸变化事件
 */
declare const offWindowResize: typeof Taro$1.offWindowResize;
declare const checkIsPictureInPictureActive: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const createWorker: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare class IntersectionObserver {
    private _component;
    private _observerNodes;
    private _timer;
    _options: {
        thresholds: number[];
        initialRatio: number;
        observeAll: boolean;
    };
    _viewportMargins: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    constructor(component: any, options?: {});
    disconnect(): void;
    observe(targetSelector: any, callback: any): void;
    relativeTo(): this;
    relativeToViewport(option: any): this;
}

declare class NodesRef implements Taro$1.NodesRef {
    _component?: any;
    _selector: string;
    _selectorQuery: SelectorQuery;
    _single: boolean;
    constructor(selector: string, querySelectorQuery: SelectorQuery, single: boolean);
    context(cb: any): SelectorQuery;
    node(cb?: Taro$1.NodesRef.NodeCallback): SelectorQuery;
    boundingClientRect(cb?: Taro$1.NodesRef.BoundingClientRectCallback): SelectorQuery;
    scrollOffset(cb: any): SelectorQuery;
    fields(fields: Taro$1.NodesRef.Fields & {
        nodeCanvasType: Taro$1.NodesRef.Fields['node'];
    }, cb?: Taro$1.NodesRef.FieldsCallback): SelectorQuery;
}

interface ISelectorQueryQueue {
    component: any;
    selector: string;
    single: boolean;
    fields: any;
}
type TSelectorQueryQueueCallback = (res: ISelectorQueryQueue) => void;
declare class SelectorQuery implements Taro$1.SelectorQuery {
    _queue: ISelectorQueryQueue[];
    _queueCb: (TSelectorQueryQueueCallback | null)[];
    _component?: any;
    constructor();
    /**
     * 设置选择器的选取范围
     * @param component 指定组件
     * @return selectQuery 返回查询对象
     */
    in: (component: any) => this;
    /**
     * 在当前页面下选择第一个匹配选择器selector的节点
     * @param selector
     * @return nodesRef 返回一个NodesRef 对象实例，可以用于获取节点信息
     */
    select(selector: string): NodesRef;
    /**
     * 在当前页面下选择匹配选择器selector的所有节点
     * @param selector
     */
    selectAll(selector: string): NodesRef;
    /**
     * 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息
     */
    selectViewport(): NodesRef;
    exec(cb?: (...args: any[]) => any): any;
    _push(selector: any, component: any, single: any, fields: any, callback?: Taro$1.NodesRef.FieldsCallback | null): void;
}

declare const createSelectorQuery: () => SelectorQuery;
declare const createIntersectionObserver: typeof Taro$1.createIntersectionObserver;
declare const createMediaQueryObserver: (option?: {}, ...args: any[]) => Promise<Partial<ICallbackResult> & Record<string, unknown> & ICallbackResult>;

declare const apis_Current: typeof Current;
declare const apis_ENV_TYPE: typeof ENV_TYPE;
declare const apis_Events: typeof Events;
declare const apis_History: typeof History;
type apis_IntersectionObserver = IntersectionObserver;
declare const apis_IntersectionObserver: typeof IntersectionObserver;
declare const apis_addCard: typeof addCard;
declare const apis_addFileToFavorites: typeof addFileToFavorites;
declare const apis_addPhoneCalendar: typeof addPhoneCalendar;
declare const apis_addPhoneContact: typeof addPhoneContact;
declare const apis_addPhoneRepeatCalendar: typeof addPhoneRepeatCalendar;
declare const apis_addVideoToFavorites: typeof addVideoToFavorites;
declare const apis_arrayBufferToBase64: typeof arrayBufferToBase64;
declare const apis_authPrivateMessage: typeof authPrivateMessage;
declare const apis_authorize: typeof authorize;
declare const apis_authorizeForMiniProgram: typeof authorizeForMiniProgram;
declare const apis_base64ToArrayBuffer: typeof base64ToArrayBuffer;
declare const apis_batchGetStorage: typeof batchGetStorage;
declare const apis_batchGetStorageSync: typeof batchGetStorageSync;
declare const apis_batchSetStorage: typeof batchSetStorage;
declare const apis_batchSetStorageSync: typeof batchSetStorageSync;
declare const apis_canIUse: typeof canIUse;
declare const apis_canvasGetImageData: typeof canvasGetImageData;
declare const apis_canvasPutImageData: typeof canvasPutImageData;
declare const apis_canvasToTempFilePath: typeof canvasToTempFilePath;
declare const apis_checkIsAddedToMyMiniProgram: typeof checkIsAddedToMyMiniProgram;
declare const apis_checkIsOpenAccessibility: typeof checkIsOpenAccessibility;
declare const apis_checkIsPictureInPictureActive: typeof checkIsPictureInPictureActive;
declare const apis_checkIsSoterEnrolledInDevice: typeof checkIsSoterEnrolledInDevice;
declare const apis_checkIsSupportFacialRecognition: typeof checkIsSupportFacialRecognition;
declare const apis_checkIsSupportSoterAuthentication: typeof checkIsSupportSoterAuthentication;
declare const apis_checkSession: typeof checkSession;
declare const apis_chooseAddress: typeof chooseAddress;
declare const apis_chooseContact: typeof chooseContact;
declare const apis_chooseImage: typeof chooseImage;
declare const apis_chooseInvoice: typeof chooseInvoice;
declare const apis_chooseInvoiceTitle: typeof chooseInvoiceTitle;
declare const apis_chooseLicensePlate: typeof chooseLicensePlate;
declare const apis_chooseLocation: typeof chooseLocation;
declare const apis_chooseMedia: typeof chooseMedia;
declare const apis_choosePoi: typeof choosePoi;
declare const apis_chooseVideo: typeof chooseVideo;
declare const apis_clearStorage: typeof clearStorage;
declare const apis_clearStorageSync: typeof clearStorageSync;
declare const apis_closeBLEConnection: typeof closeBLEConnection;
declare const apis_closeBluetoothAdapter: typeof closeBluetoothAdapter;
declare const apis_compressImage: typeof compressImage;
declare const apis_compressVideo: typeof compressVideo;
declare const apis_connectSocket: typeof connectSocket;
declare const apis_connectWifi: typeof connectWifi;
declare const apis_createAnimation: typeof createAnimation;
declare const apis_createAudioContext: typeof createAudioContext;
declare const apis_createBLEConnection: typeof createBLEConnection;
declare const apis_createBLEPeripheralServer: typeof createBLEPeripheralServer;
declare const apis_createBufferURL: typeof createBufferURL;
declare const apis_createCacheManager: typeof createCacheManager;
declare const apis_createCameraContext: typeof createCameraContext;
declare const apis_createCanvasContext: typeof createCanvasContext;
declare const apis_createInnerAudioContext: typeof createInnerAudioContext;
declare const apis_createIntersectionObserver: typeof createIntersectionObserver;
declare const apis_createLivePlayerContext: typeof createLivePlayerContext;
declare const apis_createLivePusherContext: typeof createLivePusherContext;
declare const apis_createMapContext: typeof createMapContext;
declare const apis_createMediaAudioPlayer: typeof createMediaAudioPlayer;
declare const apis_createMediaContainer: typeof createMediaContainer;
declare const apis_createMediaQueryObserver: typeof createMediaQueryObserver;
declare const apis_createMediaRecorder: typeof createMediaRecorder;
declare const apis_createOffscreenCanvas: typeof createOffscreenCanvas;
declare const apis_createSelectorQuery: typeof createSelectorQuery;
declare const apis_createTCPSocket: typeof createTCPSocket;
declare const apis_createUDPSocket: typeof createUDPSocket;
declare const apis_createVideoContext: typeof createVideoContext;
declare const apis_createVideoDecoder: typeof createVideoDecoder;
declare const apis_createWebAudioContext: typeof createWebAudioContext;
declare const apis_createWorker: typeof createWorker;
declare const apis_disableAlertBeforeUnload: typeof disableAlertBeforeUnload;
declare const apis_downloadFile: typeof downloadFile;
declare const apis_enableAlertBeforeUnload: typeof enableAlertBeforeUnload;
declare const apis_eventCenter: typeof eventCenter;
declare const apis_exitMiniProgram: typeof exitMiniProgram;
declare const apis_exitVoIPChat: typeof exitVoIPChat;
declare const apis_faceVerifyForPay: typeof faceVerifyForPay;
declare const apis_getAccountInfoSync: typeof getAccountInfoSync;
declare const apis_getAppAuthorizeSetting: typeof getAppAuthorizeSetting;
declare const apis_getAppBaseInfo: typeof getAppBaseInfo;
declare const apis_getAvailableAudioSources: typeof getAvailableAudioSources;
declare const apis_getBLEDeviceCharacteristics: typeof getBLEDeviceCharacteristics;
declare const apis_getBLEDeviceRSSI: typeof getBLEDeviceRSSI;
declare const apis_getBLEDeviceServices: typeof getBLEDeviceServices;
declare const apis_getBLEMTU: typeof getBLEMTU;
declare const apis_getBackgroundAudioManager: typeof getBackgroundAudioManager;
declare const apis_getBackgroundAudioPlayerState: typeof getBackgroundAudioPlayerState;
declare const apis_getBackgroundFetchData: typeof getBackgroundFetchData;
declare const apis_getBackgroundFetchToken: typeof getBackgroundFetchToken;
declare const apis_getBatteryInfo: typeof getBatteryInfo;
declare const apis_getBatteryInfoSync: typeof getBatteryInfoSync;
declare const apis_getBeacons: typeof getBeacons;
declare const apis_getBluetoothAdapterState: typeof getBluetoothAdapterState;
declare const apis_getBluetoothDevices: typeof getBluetoothDevices;
declare const apis_getChannelsLiveInfo: typeof getChannelsLiveInfo;
declare const apis_getChannelsLiveNoticeInfo: typeof getChannelsLiveNoticeInfo;
declare const apis_getChannelsShareKey: typeof getChannelsShareKey;
declare const apis_getClipboardData: typeof getClipboardData;
declare const apis_getConnectedBluetoothDevices: typeof getConnectedBluetoothDevices;
declare const apis_getConnectedWifi: typeof getConnectedWifi;
declare const apis_getCurrentInstance: typeof getCurrentInstance;
declare const apis_getCurrentPages: typeof getCurrentPages;
declare const apis_getDeviceInfo: typeof getDeviceInfo;
declare const apis_getDeviceVoIPList: typeof getDeviceVoIPList;
declare const apis_getEnterOptionsSync: typeof getEnterOptionsSync;
declare const apis_getEnv: typeof getEnv;
declare const apis_getExptInfoSync: typeof getExptInfoSync;
declare const apis_getExtConfig: typeof getExtConfig;
declare const apis_getExtConfigSync: typeof getExtConfigSync;
declare const apis_getFileInfo: typeof getFileInfo;
declare const apis_getFileSystemManager: typeof getFileSystemManager;
declare const apis_getFuzzyLocation: typeof getFuzzyLocation;
declare const apis_getGroupEnterInfo: typeof getGroupEnterInfo;
declare const apis_getHCEState: typeof getHCEState;
declare const apis_getImageInfo: typeof getImageInfo;
declare const apis_getLaunchOptionsSync: typeof getLaunchOptionsSync;
declare const apis_getLocalIPAddress: typeof getLocalIPAddress;
declare const apis_getLocation: typeof getLocation;
declare const apis_getLogManager: typeof getLogManager;
declare const apis_getMenuButtonBoundingClientRect: typeof getMenuButtonBoundingClientRect;
declare const apis_getNFCAdapter: typeof getNFCAdapter;
declare const apis_getNetworkType: typeof getNetworkType;
declare const apis_getPerformance: typeof getPerformance;
declare const apis_getPrivacySetting: typeof getPrivacySetting;
declare const apis_getRandomValues: typeof getRandomValues;
declare const apis_getRealtimeLogManager: typeof getRealtimeLogManager;
declare const apis_getRecorderManager: typeof getRecorderManager;
declare const apis_getSavedFileInfo: typeof getSavedFileInfo;
declare const apis_getSavedFileList: typeof getSavedFileList;
declare const apis_getScreenBrightness: typeof getScreenBrightness;
declare const apis_getScreenRecordingState: typeof getScreenRecordingState;
declare const apis_getSelectedTextRange: typeof getSelectedTextRange;
declare const apis_getSetting: typeof getSetting;
declare const apis_getShareInfo: typeof getShareInfo;
declare const apis_getStorage: typeof getStorage;
declare const apis_getStorageInfo: typeof getStorageInfo;
declare const apis_getStorageInfoSync: typeof getStorageInfoSync;
declare const apis_getStorageSync: typeof getStorageSync;
declare const apis_getSystemInfo: typeof getSystemInfo;
declare const apis_getSystemInfoSync: typeof getSystemInfoSync;
declare const apis_getSystemSetting: typeof getSystemSetting;
declare const apis_getUpdateManager: typeof getUpdateManager;
declare const apis_getUserCryptoManager: typeof getUserCryptoManager;
declare const apis_getUserInfo: typeof getUserInfo;
declare const apis_getUserProfile: typeof getUserProfile;
declare const apis_getVideoInfo: typeof getVideoInfo;
declare const apis_getWeRunData: typeof getWeRunData;
declare const apis_getWifiList: typeof getWifiList;
declare const apis_getWindowInfo: typeof getWindowInfo;
declare const apis_hideHomeButton: typeof hideHomeButton;
declare const apis_hideKeyboard: typeof hideKeyboard;
declare const apis_hideLoading: typeof hideLoading;
declare const apis_hideNavigationBarLoading: typeof hideNavigationBarLoading;
declare const apis_hideShareMenu: typeof hideShareMenu;
declare const apis_hideTabBar: typeof hideTabBar;
declare const apis_hideTabBarRedDot: typeof hideTabBarRedDot;
declare const apis_hideToast: typeof hideToast;
declare const apis_isBluetoothDevicePaired: typeof isBluetoothDevicePaired;
declare const apis_join1v1Chat: typeof join1v1Chat;
declare const apis_joinVoIPChat: typeof joinVoIPChat;
declare const apis_loadFontFace: typeof loadFontFace;
declare const apis_login: typeof login;
declare const apis_makeBluetoothPair: typeof makeBluetoothPair;
declare const apis_makePhoneCall: typeof makePhoneCall;
declare const apis_navigateBack: typeof navigateBack;
declare const apis_navigateBackMiniProgram: typeof navigateBackMiniProgram;
declare const apis_navigateTo: typeof navigateTo;
declare const apis_navigateToMiniProgram: typeof navigateToMiniProgram;
declare const apis_nextTick: typeof nextTick;
declare const apis_notifyBLECharacteristicValueChange: typeof notifyBLECharacteristicValueChange;
declare const apis_offAccelerometerChange: typeof offAccelerometerChange;
declare const apis_offAppHide: typeof offAppHide;
declare const apis_offAppShow: typeof offAppShow;
declare const apis_offAudioInterruptionBegin: typeof offAudioInterruptionBegin;
declare const apis_offAudioInterruptionEnd: typeof offAudioInterruptionEnd;
declare const apis_offBLECharacteristicValueChange: typeof offBLECharacteristicValueChange;
declare const apis_offBLEConnectionStateChange: typeof offBLEConnectionStateChange;
declare const apis_offBLEMTUChange: typeof offBLEMTUChange;
declare const apis_offBLEPeripheralConnectionStateChanged: typeof offBLEPeripheralConnectionStateChanged;
declare const apis_offBeaconServiceChange: typeof offBeaconServiceChange;
declare const apis_offBeaconUpdate: typeof offBeaconUpdate;
declare const apis_offBluetoothAdapterStateChange: typeof offBluetoothAdapterStateChange;
declare const apis_offBluetoothDeviceFound: typeof offBluetoothDeviceFound;
declare const apis_offCompassChange: typeof offCompassChange;
declare const apis_offCopyUrl: typeof offCopyUrl;
declare const apis_offDeviceMotionChange: typeof offDeviceMotionChange;
declare const apis_offError: typeof offError;
declare const apis_offGetWifiList: typeof offGetWifiList;
declare const apis_offGyroscopeChange: typeof offGyroscopeChange;
declare const apis_offHCEMessage: typeof offHCEMessage;
declare const apis_offKeyboardHeightChange: typeof offKeyboardHeightChange;
declare const apis_offLazyLoadError: typeof offLazyLoadError;
declare const apis_offLocalServiceDiscoveryStop: typeof offLocalServiceDiscoveryStop;
declare const apis_offLocalServiceFound: typeof offLocalServiceFound;
declare const apis_offLocalServiceLost: typeof offLocalServiceLost;
declare const apis_offLocalServiceResolveFail: typeof offLocalServiceResolveFail;
declare const apis_offLocationChange: typeof offLocationChange;
declare const apis_offLocationChangeError: typeof offLocationChangeError;
declare const apis_offMemoryWarning: typeof offMemoryWarning;
declare const apis_offNetworkStatusChange: typeof offNetworkStatusChange;
declare const apis_offNetworkWeakChange: typeof offNetworkWeakChange;
declare const apis_offPageNotFound: typeof offPageNotFound;
declare const apis_offScreenRecordingStateChanged: typeof offScreenRecordingStateChanged;
declare const apis_offThemeChange: typeof offThemeChange;
declare const apis_offUnhandledRejection: typeof offUnhandledRejection;
declare const apis_offUserCaptureScreen: typeof offUserCaptureScreen;
declare const apis_offVoIPChatInterrupted: typeof offVoIPChatInterrupted;
declare const apis_offVoIPChatMembersChanged: typeof offVoIPChatMembersChanged;
declare const apis_offVoIPChatSpeakersChanged: typeof offVoIPChatSpeakersChanged;
declare const apis_offVoIPChatStateChanged: typeof offVoIPChatStateChanged;
declare const apis_offVoIPVideoMembersChanged: typeof offVoIPVideoMembersChanged;
declare const apis_offWifiConnected: typeof offWifiConnected;
declare const apis_offWifiConnectedWithPartialInfo: typeof offWifiConnectedWithPartialInfo;
declare const apis_offWindowResize: typeof offWindowResize;
declare const apis_onAccelerometerChange: typeof onAccelerometerChange;
declare const apis_onAppHide: typeof onAppHide;
declare const apis_onAppShow: typeof onAppShow;
declare const apis_onAudioInterruptionBegin: typeof onAudioInterruptionBegin;
declare const apis_onAudioInterruptionEnd: typeof onAudioInterruptionEnd;
declare const apis_onBLECharacteristicValueChange: typeof onBLECharacteristicValueChange;
declare const apis_onBLEConnectionStateChange: typeof onBLEConnectionStateChange;
declare const apis_onBLEMTUChange: typeof onBLEMTUChange;
declare const apis_onBLEPeripheralConnectionStateChanged: typeof onBLEPeripheralConnectionStateChanged;
declare const apis_onBackgroundAudioPause: typeof onBackgroundAudioPause;
declare const apis_onBackgroundAudioPlay: typeof onBackgroundAudioPlay;
declare const apis_onBackgroundAudioStop: typeof onBackgroundAudioStop;
declare const apis_onBackgroundFetchData: typeof onBackgroundFetchData;
declare const apis_onBeaconServiceChange: typeof onBeaconServiceChange;
declare const apis_onBeaconUpdate: typeof onBeaconUpdate;
declare const apis_onBluetoothAdapterStateChange: typeof onBluetoothAdapterStateChange;
declare const apis_onBluetoothDeviceFound: typeof onBluetoothDeviceFound;
declare const apis_onCompassChange: typeof onCompassChange;
declare const apis_onCopyUrl: typeof onCopyUrl;
declare const apis_onDeviceMotionChange: typeof onDeviceMotionChange;
declare const apis_onError: typeof onError;
declare const apis_onGetWifiList: typeof onGetWifiList;
declare const apis_onGyroscopeChange: typeof onGyroscopeChange;
declare const apis_onHCEMessage: typeof onHCEMessage;
declare const apis_onKeyboardHeightChange: typeof onKeyboardHeightChange;
declare const apis_onLazyLoadError: typeof onLazyLoadError;
declare const apis_onLocalServiceDiscoveryStop: typeof onLocalServiceDiscoveryStop;
declare const apis_onLocalServiceFound: typeof onLocalServiceFound;
declare const apis_onLocalServiceLost: typeof onLocalServiceLost;
declare const apis_onLocalServiceResolveFail: typeof onLocalServiceResolveFail;
declare const apis_onLocationChange: typeof onLocationChange;
declare const apis_onLocationChangeError: typeof onLocationChangeError;
declare const apis_onMemoryWarning: typeof onMemoryWarning;
declare const apis_onNeedPrivacyAuthorization: typeof onNeedPrivacyAuthorization;
declare const apis_onNetworkStatusChange: typeof onNetworkStatusChange;
declare const apis_onNetworkWeakChange: typeof onNetworkWeakChange;
declare const apis_onPageNotFound: typeof onPageNotFound;
declare const apis_onScreenRecordingStateChanged: typeof onScreenRecordingStateChanged;
declare const apis_onThemeChange: typeof onThemeChange;
declare const apis_onUnhandledRejection: typeof onUnhandledRejection;
declare const apis_onUserCaptureScreen: typeof onUserCaptureScreen;
declare const apis_onVoIPChatInterrupted: typeof onVoIPChatInterrupted;
declare const apis_onVoIPChatMembersChanged: typeof onVoIPChatMembersChanged;
declare const apis_onVoIPChatSpeakersChanged: typeof onVoIPChatSpeakersChanged;
declare const apis_onVoIPChatStateChanged: typeof onVoIPChatStateChanged;
declare const apis_onVoIPVideoMembersChanged: typeof onVoIPVideoMembersChanged;
declare const apis_onWifiConnected: typeof onWifiConnected;
declare const apis_onWifiConnectedWithPartialInfo: typeof onWifiConnectedWithPartialInfo;
declare const apis_onWindowResize: typeof onWindowResize;
declare const apis_openBluetoothAdapter: typeof openBluetoothAdapter;
declare const apis_openBusinessView: typeof openBusinessView;
declare const apis_openCard: typeof openCard;
declare const apis_openChannelsActivity: typeof openChannelsActivity;
declare const apis_openChannelsEvent: typeof openChannelsEvent;
declare const apis_openChannelsLive: typeof openChannelsLive;
declare const apis_openChannelsUserProfile: typeof openChannelsUserProfile;
declare const apis_openCustomerServiceChat: typeof openCustomerServiceChat;
declare const apis_openDocument: typeof openDocument;
declare const apis_openEmbeddedMiniProgram: typeof openEmbeddedMiniProgram;
declare const apis_openLocation: typeof openLocation;
declare const apis_openPrivacyContract: typeof openPrivacyContract;
declare const apis_openSetting: typeof openSetting;
declare const apis_openVideoEditor: typeof openVideoEditor;
declare const apis_pageScrollTo: typeof pageScrollTo;
declare const apis_pauseBackgroundAudio: typeof pauseBackgroundAudio;
declare const apis_pauseVoice: typeof pauseVoice;
declare const apis_playBackgroundAudio: typeof playBackgroundAudio;
declare const apis_playVoice: typeof playVoice;
declare const apis_pluginLogin: typeof pluginLogin;
declare const apis_preloadAssets: typeof preloadAssets;
declare const apis_preloadSkylineView: typeof preloadSkylineView;
declare const apis_preloadWebview: typeof preloadWebview;
declare const apis_previewImage: typeof previewImage;
declare const apis_previewMedia: typeof previewMedia;
declare const apis_reLaunch: typeof reLaunch;
declare const apis_readBLECharacteristicValue: typeof readBLECharacteristicValue;
declare const apis_redirectTo: typeof redirectTo;
declare const apis_refreshAudioSession: typeof refreshAudioSession;
declare const apis_removeSavedFile: typeof removeSavedFile;
declare const apis_removeStorage: typeof removeStorage;
declare const apis_removeStorageSync: typeof removeStorageSync;
declare const apis_removeTabBarBadge: typeof removeTabBarBadge;
declare const apis_reportAnalytics: typeof reportAnalytics;
declare const apis_reportEvent: typeof reportEvent;
declare const apis_reportMonitor: typeof reportMonitor;
declare const apis_reportPerformance: typeof reportPerformance;
declare const apis_request: typeof request;
declare const apis_requestDeviceVoIP: typeof requestDeviceVoIP;
declare const apis_requestOrderPayment: typeof requestOrderPayment;
declare const apis_requestPayment: typeof requestPayment;
declare const apis_requestPluginPayment: typeof requestPluginPayment;
declare const apis_requestSubscribeDeviceMessage: typeof requestSubscribeDeviceMessage;
declare const apis_requestSubscribeMessage: typeof requestSubscribeMessage;
declare const apis_requirePlugin: typeof requirePlugin;
declare const apis_requirePrivacyAuthorize: typeof requirePrivacyAuthorize;
declare const apis_reserveChannelsLive: typeof reserveChannelsLive;
declare const apis_revokeBufferURL: typeof revokeBufferURL;
declare const apis_saveFile: typeof saveFile;
declare const apis_saveFileToDisk: typeof saveFileToDisk;
declare const apis_saveImageToPhotosAlbum: typeof saveImageToPhotosAlbum;
declare const apis_saveVideoToPhotosAlbum: typeof saveVideoToPhotosAlbum;
declare const apis_scanCode: typeof scanCode;
declare const apis_seekBackgroundAudio: typeof seekBackgroundAudio;
declare const apis_sendHCEMessage: typeof sendHCEMessage;
declare const apis_sendSms: typeof sendSms;
declare const apis_setBLEMTU: typeof setBLEMTU;
declare const apis_setBackgroundColor: typeof setBackgroundColor;
declare const apis_setBackgroundFetchToken: typeof setBackgroundFetchToken;
declare const apis_setBackgroundTextStyle: typeof setBackgroundTextStyle;
declare const apis_setClipboardData: typeof setClipboardData;
declare const apis_setEnable1v1Chat: typeof setEnable1v1Chat;
declare const apis_setEnableDebug: typeof setEnableDebug;
declare const apis_setInnerAudioOption: typeof setInnerAudioOption;
declare const apis_setKeepScreenOn: typeof setKeepScreenOn;
declare const apis_setNavigationBarColor: typeof setNavigationBarColor;
declare const apis_setNavigationBarTitle: typeof setNavigationBarTitle;
declare const apis_setScreenBrightness: typeof setScreenBrightness;
declare const apis_setStorage: typeof setStorage;
declare const apis_setStorageSync: typeof setStorageSync;
declare const apis_setTabBarBadge: typeof setTabBarBadge;
declare const apis_setTabBarItem: typeof setTabBarItem;
declare const apis_setTabBarStyle: typeof setTabBarStyle;
declare const apis_setTopBarText: typeof setTopBarText;
declare const apis_setVisualEffectOnCapture: typeof setVisualEffectOnCapture;
declare const apis_setWifiList: typeof setWifiList;
declare const apis_setWindowSize: typeof setWindowSize;
declare const apis_shareFileMessage: typeof shareFileMessage;
declare const apis_shareToWeRun: typeof shareToWeRun;
declare const apis_shareVideoMessage: typeof shareVideoMessage;
declare const apis_showActionSheet: typeof showActionSheet;
declare const apis_showLoading: typeof showLoading;
declare const apis_showModal: typeof showModal;
declare const apis_showNavigationBarLoading: typeof showNavigationBarLoading;
declare const apis_showRedPackage: typeof showRedPackage;
declare const apis_showShareImageMenu: typeof showShareImageMenu;
declare const apis_showShareMenu: typeof showShareMenu;
declare const apis_showTabBar: typeof showTabBar;
declare const apis_showTabBarRedDot: typeof showTabBarRedDot;
declare const apis_showToast: typeof showToast;
declare const apis_startAccelerometer: typeof startAccelerometer;
declare const apis_startBeaconDiscovery: typeof startBeaconDiscovery;
declare const apis_startBluetoothDevicesDiscovery: typeof startBluetoothDevicesDiscovery;
declare const apis_startCompass: typeof startCompass;
declare const apis_startDeviceMotionListening: typeof startDeviceMotionListening;
declare const apis_startFacialRecognitionVerify: typeof startFacialRecognitionVerify;
declare const apis_startFacialRecognitionVerifyAndUploadVideo: typeof startFacialRecognitionVerifyAndUploadVideo;
declare const apis_startGyroscope: typeof startGyroscope;
declare const apis_startHCE: typeof startHCE;
declare const apis_startLocalServiceDiscovery: typeof startLocalServiceDiscovery;
declare const apis_startLocationUpdate: typeof startLocationUpdate;
declare const apis_startLocationUpdateBackground: typeof startLocationUpdateBackground;
declare const apis_startPullDownRefresh: typeof startPullDownRefresh;
declare const apis_startRecord: typeof startRecord;
declare const apis_startSoterAuthentication: typeof startSoterAuthentication;
declare const apis_startWifi: typeof startWifi;
declare const apis_stopAccelerometer: typeof stopAccelerometer;
declare const apis_stopBackgroundAudio: typeof stopBackgroundAudio;
declare const apis_stopBeaconDiscovery: typeof stopBeaconDiscovery;
declare const apis_stopBluetoothDevicesDiscovery: typeof stopBluetoothDevicesDiscovery;
declare const apis_stopCompass: typeof stopCompass;
declare const apis_stopDeviceMotionListening: typeof stopDeviceMotionListening;
declare const apis_stopGyroscope: typeof stopGyroscope;
declare const apis_stopHCE: typeof stopHCE;
declare const apis_stopLocalServiceDiscovery: typeof stopLocalServiceDiscovery;
declare const apis_stopLocationUpdate: typeof stopLocationUpdate;
declare const apis_stopPullDownRefresh: typeof stopPullDownRefresh;
declare const apis_stopRecord: typeof stopRecord;
declare const apis_stopVoice: typeof stopVoice;
declare const apis_stopWifi: typeof stopWifi;
declare const apis_subscribeVoIPVideoMembers: typeof subscribeVoIPVideoMembers;
declare const apis_switchTab: typeof switchTab;
declare const apis_triggerTaskPoolMethods: typeof triggerTaskPoolMethods;
declare const apis_unstable_SetPageIsTextNeedLayout: typeof unstable_SetPageIsTextNeedLayout;
declare const apis_updatePageSync: typeof updatePageSync;
declare const apis_updateShareMenu: typeof updateShareMenu;
declare const apis_updateVoIPChatMuteConfig: typeof updateVoIPChatMuteConfig;
declare const apis_updateWeChatApp: typeof updateWeChatApp;
declare const apis_uploadFile: typeof uploadFile;
declare const apis_vibrateLong: typeof vibrateLong;
declare const apis_vibrateShort: typeof vibrateShort;
declare const apis_writeBLECharacteristicValue: typeof writeBLECharacteristicValue;
declare namespace apis {
  export {
    apis_Current as Current,
    apis_ENV_TYPE as ENV_TYPE,
    apis_Events as Events,
    apis_History as History,
    apis_IntersectionObserver as IntersectionObserver,
    apis_addCard as addCard,
    apis_addFileToFavorites as addFileToFavorites,
    apis_addPhoneCalendar as addPhoneCalendar,
    apis_addPhoneContact as addPhoneContact,
    apis_addPhoneRepeatCalendar as addPhoneRepeatCalendar,
    apis_addVideoToFavorites as addVideoToFavorites,
    apis_arrayBufferToBase64 as arrayBufferToBase64,
    apis_authPrivateMessage as authPrivateMessage,
    apis_authorize as authorize,
    apis_authorizeForMiniProgram as authorizeForMiniProgram,
    apis_base64ToArrayBuffer as base64ToArrayBuffer,
    apis_batchGetStorage as batchGetStorage,
    apis_batchGetStorageSync as batchGetStorageSync,
    apis_batchSetStorage as batchSetStorage,
    apis_batchSetStorageSync as batchSetStorageSync,
    apis_canIUse as canIUse,
    apis_canvasGetImageData as canvasGetImageData,
    apis_canvasPutImageData as canvasPutImageData,
    apis_canvasToTempFilePath as canvasToTempFilePath,
    apis_checkIsAddedToMyMiniProgram as checkIsAddedToMyMiniProgram,
    apis_checkIsOpenAccessibility as checkIsOpenAccessibility,
    apis_checkIsPictureInPictureActive as checkIsPictureInPictureActive,
    apis_checkIsSoterEnrolledInDevice as checkIsSoterEnrolledInDevice,
    apis_checkIsSupportFacialRecognition as checkIsSupportFacialRecognition,
    apis_checkIsSupportSoterAuthentication as checkIsSupportSoterAuthentication,
    apis_checkSession as checkSession,
    apis_chooseAddress as chooseAddress,
    apis_chooseContact as chooseContact,
    apis_chooseImage as chooseImage,
    apis_chooseInvoice as chooseInvoice,
    apis_chooseInvoiceTitle as chooseInvoiceTitle,
    apis_chooseLicensePlate as chooseLicensePlate,
    apis_chooseLocation as chooseLocation,
    apis_chooseMedia as chooseMedia,
    apis_choosePoi as choosePoi,
    apis_chooseVideo as chooseVideo,
    apis_clearStorage as clearStorage,
    apis_clearStorageSync as clearStorageSync,
    apis_closeBLEConnection as closeBLEConnection,
    apis_closeBluetoothAdapter as closeBluetoothAdapter,
    apis_compressImage as compressImage,
    apis_compressVideo as compressVideo,
    apis_connectSocket as connectSocket,
    apis_connectWifi as connectWifi,
    apis_createAnimation as createAnimation,
    apis_createAudioContext as createAudioContext,
    apis_createBLEConnection as createBLEConnection,
    apis_createBLEPeripheralServer as createBLEPeripheralServer,
    apis_createBufferURL as createBufferURL,
    apis_createCacheManager as createCacheManager,
    apis_createCameraContext as createCameraContext,
    apis_createCanvasContext as createCanvasContext,
    apis_createInnerAudioContext as createInnerAudioContext,
    apis_createIntersectionObserver as createIntersectionObserver,
    apis_createLivePlayerContext as createLivePlayerContext,
    apis_createLivePusherContext as createLivePusherContext,
    apis_createMapContext as createMapContext,
    apis_createMediaAudioPlayer as createMediaAudioPlayer,
    apis_createMediaContainer as createMediaContainer,
    apis_createMediaQueryObserver as createMediaQueryObserver,
    apis_createMediaRecorder as createMediaRecorder,
    apis_createOffscreenCanvas as createOffscreenCanvas,
    apis_createSelectorQuery as createSelectorQuery,
    apis_createTCPSocket as createTCPSocket,
    apis_createUDPSocket as createUDPSocket,
    apis_createVideoContext as createVideoContext,
    apis_createVideoDecoder as createVideoDecoder,
    apis_createWebAudioContext as createWebAudioContext,
    apis_createWorker as createWorker,
    apis_disableAlertBeforeUnload as disableAlertBeforeUnload,
    apis_downloadFile as downloadFile,
    apis_enableAlertBeforeUnload as enableAlertBeforeUnload,
    apis_eventCenter as eventCenter,
    apis_exitMiniProgram as exitMiniProgram,
    apis_exitVoIPChat as exitVoIPChat,
    apis_faceVerifyForPay as faceVerifyForPay,
    apis_getAccountInfoSync as getAccountInfoSync,
    apis_getAppAuthorizeSetting as getAppAuthorizeSetting,
    apis_getAppBaseInfo as getAppBaseInfo,
    apis_getAvailableAudioSources as getAvailableAudioSources,
    apis_getBLEDeviceCharacteristics as getBLEDeviceCharacteristics,
    apis_getBLEDeviceRSSI as getBLEDeviceRSSI,
    apis_getBLEDeviceServices as getBLEDeviceServices,
    apis_getBLEMTU as getBLEMTU,
    apis_getBackgroundAudioManager as getBackgroundAudioManager,
    apis_getBackgroundAudioPlayerState as getBackgroundAudioPlayerState,
    apis_getBackgroundFetchData as getBackgroundFetchData,
    apis_getBackgroundFetchToken as getBackgroundFetchToken,
    apis_getBatteryInfo as getBatteryInfo,
    apis_getBatteryInfoSync as getBatteryInfoSync,
    apis_getBeacons as getBeacons,
    apis_getBluetoothAdapterState as getBluetoothAdapterState,
    apis_getBluetoothDevices as getBluetoothDevices,
    apis_getChannelsLiveInfo as getChannelsLiveInfo,
    apis_getChannelsLiveNoticeInfo as getChannelsLiveNoticeInfo,
    apis_getChannelsShareKey as getChannelsShareKey,
    apis_getClipboardData as getClipboardData,
    apis_getConnectedBluetoothDevices as getConnectedBluetoothDevices,
    apis_getConnectedWifi as getConnectedWifi,
    apis_getCurrentInstance as getCurrentInstance,
    apis_getCurrentPages as getCurrentPages,
    apis_getDeviceInfo as getDeviceInfo,
    apis_getDeviceVoIPList as getDeviceVoIPList,
    apis_getEnterOptionsSync as getEnterOptionsSync,
    apis_getEnv as getEnv,
    apis_getExptInfoSync as getExptInfoSync,
    apis_getExtConfig as getExtConfig,
    apis_getExtConfigSync as getExtConfigSync,
    apis_getFileInfo as getFileInfo,
    apis_getFileSystemManager as getFileSystemManager,
    apis_getFuzzyLocation as getFuzzyLocation,
    apis_getGroupEnterInfo as getGroupEnterInfo,
    apis_getHCEState as getHCEState,
    apis_getImageInfo as getImageInfo,
    apis_getLaunchOptionsSync as getLaunchOptionsSync,
    apis_getLocalIPAddress as getLocalIPAddress,
    apis_getLocation as getLocation,
    apis_getLogManager as getLogManager,
    apis_getMenuButtonBoundingClientRect as getMenuButtonBoundingClientRect,
    apis_getNFCAdapter as getNFCAdapter,
    apis_getNetworkType as getNetworkType,
    apis_getPerformance as getPerformance,
    apis_getPrivacySetting as getPrivacySetting,
    apis_getRandomValues as getRandomValues,
    apis_getRealtimeLogManager as getRealtimeLogManager,
    apis_getRecorderManager as getRecorderManager,
    apis_getSavedFileInfo as getSavedFileInfo,
    apis_getSavedFileList as getSavedFileList,
    apis_getScreenBrightness as getScreenBrightness,
    apis_getScreenRecordingState as getScreenRecordingState,
    apis_getSelectedTextRange as getSelectedTextRange,
    apis_getSetting as getSetting,
    apis_getShareInfo as getShareInfo,
    apis_getStorage as getStorage,
    apis_getStorageInfo as getStorageInfo,
    apis_getStorageInfoSync as getStorageInfoSync,
    apis_getStorageSync as getStorageSync,
    apis_getSystemInfo as getSystemInfo,
    apis_getSystemInfoSync as getSystemInfoSync,
    apis_getSystemSetting as getSystemSetting,
    apis_getUpdateManager as getUpdateManager,
    apis_getUserCryptoManager as getUserCryptoManager,
    apis_getUserInfo as getUserInfo,
    apis_getUserProfile as getUserProfile,
    apis_getVideoInfo as getVideoInfo,
    apis_getWeRunData as getWeRunData,
    apis_getWifiList as getWifiList,
    apis_getWindowInfo as getWindowInfo,
    apis_hideHomeButton as hideHomeButton,
    apis_hideKeyboard as hideKeyboard,
    apis_hideLoading as hideLoading,
    apis_hideNavigationBarLoading as hideNavigationBarLoading,
    apis_hideShareMenu as hideShareMenu,
    apis_hideTabBar as hideTabBar,
    apis_hideTabBarRedDot as hideTabBarRedDot,
    apis_hideToast as hideToast,
    apis_isBluetoothDevicePaired as isBluetoothDevicePaired,
    apis_join1v1Chat as join1v1Chat,
    apis_joinVoIPChat as joinVoIPChat,
    apis_loadFontFace as loadFontFace,
    apis_login as login,
    apis_makeBluetoothPair as makeBluetoothPair,
    apis_makePhoneCall as makePhoneCall,
    apis_navigateBack as navigateBack,
    apis_navigateBackMiniProgram as navigateBackMiniProgram,
    apis_navigateTo as navigateTo,
    apis_navigateToMiniProgram as navigateToMiniProgram,
    apis_nextTick as nextTick,
    apis_notifyBLECharacteristicValueChange as notifyBLECharacteristicValueChange,
    apis_offAccelerometerChange as offAccelerometerChange,
    apis_offAppHide as offAppHide,
    apis_offAppShow as offAppShow,
    apis_offAudioInterruptionBegin as offAudioInterruptionBegin,
    apis_offAudioInterruptionEnd as offAudioInterruptionEnd,
    apis_offBLECharacteristicValueChange as offBLECharacteristicValueChange,
    apis_offBLEConnectionStateChange as offBLEConnectionStateChange,
    apis_offBLEMTUChange as offBLEMTUChange,
    apis_offBLEPeripheralConnectionStateChanged as offBLEPeripheralConnectionStateChanged,
    apis_offBeaconServiceChange as offBeaconServiceChange,
    apis_offBeaconUpdate as offBeaconUpdate,
    apis_offBluetoothAdapterStateChange as offBluetoothAdapterStateChange,
    apis_offBluetoothDeviceFound as offBluetoothDeviceFound,
    apis_offCompassChange as offCompassChange,
    apis_offCopyUrl as offCopyUrl,
    apis_offDeviceMotionChange as offDeviceMotionChange,
    apis_offError as offError,
    apis_offGetWifiList as offGetWifiList,
    apis_offGyroscopeChange as offGyroscopeChange,
    apis_offHCEMessage as offHCEMessage,
    apis_offKeyboardHeightChange as offKeyboardHeightChange,
    apis_offLazyLoadError as offLazyLoadError,
    apis_offLocalServiceDiscoveryStop as offLocalServiceDiscoveryStop,
    apis_offLocalServiceFound as offLocalServiceFound,
    apis_offLocalServiceLost as offLocalServiceLost,
    apis_offLocalServiceResolveFail as offLocalServiceResolveFail,
    apis_offLocationChange as offLocationChange,
    apis_offLocationChangeError as offLocationChangeError,
    apis_offMemoryWarning as offMemoryWarning,
    apis_offNetworkStatusChange as offNetworkStatusChange,
    apis_offNetworkWeakChange as offNetworkWeakChange,
    apis_offPageNotFound as offPageNotFound,
    apis_offScreenRecordingStateChanged as offScreenRecordingStateChanged,
    apis_offThemeChange as offThemeChange,
    apis_offUnhandledRejection as offUnhandledRejection,
    apis_offUserCaptureScreen as offUserCaptureScreen,
    apis_offVoIPChatInterrupted as offVoIPChatInterrupted,
    apis_offVoIPChatMembersChanged as offVoIPChatMembersChanged,
    apis_offVoIPChatSpeakersChanged as offVoIPChatSpeakersChanged,
    apis_offVoIPChatStateChanged as offVoIPChatStateChanged,
    apis_offVoIPVideoMembersChanged as offVoIPVideoMembersChanged,
    apis_offWifiConnected as offWifiConnected,
    apis_offWifiConnectedWithPartialInfo as offWifiConnectedWithPartialInfo,
    apis_offWindowResize as offWindowResize,
    apis_onAccelerometerChange as onAccelerometerChange,
    apis_onAppHide as onAppHide,
    apis_onAppShow as onAppShow,
    apis_onAudioInterruptionBegin as onAudioInterruptionBegin,
    apis_onAudioInterruptionEnd as onAudioInterruptionEnd,
    apis_onBLECharacteristicValueChange as onBLECharacteristicValueChange,
    apis_onBLEConnectionStateChange as onBLEConnectionStateChange,
    apis_onBLEMTUChange as onBLEMTUChange,
    apis_onBLEPeripheralConnectionStateChanged as onBLEPeripheralConnectionStateChanged,
    apis_onBackgroundAudioPause as onBackgroundAudioPause,
    apis_onBackgroundAudioPlay as onBackgroundAudioPlay,
    apis_onBackgroundAudioStop as onBackgroundAudioStop,
    apis_onBackgroundFetchData as onBackgroundFetchData,
    apis_onBeaconServiceChange as onBeaconServiceChange,
    apis_onBeaconUpdate as onBeaconUpdate,
    apis_onBluetoothAdapterStateChange as onBluetoothAdapterStateChange,
    apis_onBluetoothDeviceFound as onBluetoothDeviceFound,
    apis_onCompassChange as onCompassChange,
    apis_onCopyUrl as onCopyUrl,
    apis_onDeviceMotionChange as onDeviceMotionChange,
    apis_onError as onError,
    apis_onGetWifiList as onGetWifiList,
    apis_onGyroscopeChange as onGyroscopeChange,
    apis_onHCEMessage as onHCEMessage,
    apis_onKeyboardHeightChange as onKeyboardHeightChange,
    apis_onLazyLoadError as onLazyLoadError,
    apis_onLocalServiceDiscoveryStop as onLocalServiceDiscoveryStop,
    apis_onLocalServiceFound as onLocalServiceFound,
    apis_onLocalServiceLost as onLocalServiceLost,
    apis_onLocalServiceResolveFail as onLocalServiceResolveFail,
    apis_onLocationChange as onLocationChange,
    apis_onLocationChangeError as onLocationChangeError,
    apis_onMemoryWarning as onMemoryWarning,
    apis_onNeedPrivacyAuthorization as onNeedPrivacyAuthorization,
    apis_onNetworkStatusChange as onNetworkStatusChange,
    apis_onNetworkWeakChange as onNetworkWeakChange,
    apis_onPageNotFound as onPageNotFound,
    apis_onScreenRecordingStateChanged as onScreenRecordingStateChanged,
    apis_onThemeChange as onThemeChange,
    apis_onUnhandledRejection as onUnhandledRejection,
    apis_onUserCaptureScreen as onUserCaptureScreen,
    apis_onVoIPChatInterrupted as onVoIPChatInterrupted,
    apis_onVoIPChatMembersChanged as onVoIPChatMembersChanged,
    apis_onVoIPChatSpeakersChanged as onVoIPChatSpeakersChanged,
    apis_onVoIPChatStateChanged as onVoIPChatStateChanged,
    apis_onVoIPVideoMembersChanged as onVoIPVideoMembersChanged,
    apis_onWifiConnected as onWifiConnected,
    apis_onWifiConnectedWithPartialInfo as onWifiConnectedWithPartialInfo,
    apis_onWindowResize as onWindowResize,
    apis_openBluetoothAdapter as openBluetoothAdapter,
    apis_openBusinessView as openBusinessView,
    apis_openCard as openCard,
    apis_openChannelsActivity as openChannelsActivity,
    apis_openChannelsEvent as openChannelsEvent,
    apis_openChannelsLive as openChannelsLive,
    apis_openChannelsUserProfile as openChannelsUserProfile,
    apis_openCustomerServiceChat as openCustomerServiceChat,
    apis_openDocument as openDocument,
    apis_openEmbeddedMiniProgram as openEmbeddedMiniProgram,
    apis_openLocation as openLocation,
    apis_openPrivacyContract as openPrivacyContract,
    apis_openSetting as openSetting,
    apis_openVideoEditor as openVideoEditor,
    apis_pageScrollTo as pageScrollTo,
    apis_pauseBackgroundAudio as pauseBackgroundAudio,
    apis_pauseVoice as pauseVoice,
    apis_playBackgroundAudio as playBackgroundAudio,
    apis_playVoice as playVoice,
    apis_pluginLogin as pluginLogin,
    apis_preloadAssets as preloadAssets,
    apis_preloadSkylineView as preloadSkylineView,
    apis_preloadWebview as preloadWebview,
    apis_previewImage as previewImage,
    apis_previewMedia as previewMedia,
    apis_reLaunch as reLaunch,
    apis_readBLECharacteristicValue as readBLECharacteristicValue,
    apis_redirectTo as redirectTo,
    apis_refreshAudioSession as refreshAudioSession,
    apis_removeSavedFile as removeSavedFile,
    apis_removeStorage as removeStorage,
    apis_removeStorageSync as removeStorageSync,
    apis_removeTabBarBadge as removeTabBarBadge,
    apis_reportAnalytics as reportAnalytics,
    apis_reportEvent as reportEvent,
    apis_reportMonitor as reportMonitor,
    apis_reportPerformance as reportPerformance,
    apis_request as request,
    apis_requestDeviceVoIP as requestDeviceVoIP,
    apis_requestOrderPayment as requestOrderPayment,
    apis_requestPayment as requestPayment,
    apis_requestPluginPayment as requestPluginPayment,
    apis_requestSubscribeDeviceMessage as requestSubscribeDeviceMessage,
    apis_requestSubscribeMessage as requestSubscribeMessage,
    apis_requirePlugin as requirePlugin,
    apis_requirePrivacyAuthorize as requirePrivacyAuthorize,
    apis_reserveChannelsLive as reserveChannelsLive,
    apis_revokeBufferURL as revokeBufferURL,
    apis_saveFile as saveFile,
    apis_saveFileToDisk as saveFileToDisk,
    apis_saveImageToPhotosAlbum as saveImageToPhotosAlbum,
    apis_saveVideoToPhotosAlbum as saveVideoToPhotosAlbum,
    apis_scanCode as scanCode,
    apis_seekBackgroundAudio as seekBackgroundAudio,
    apis_sendHCEMessage as sendHCEMessage,
    apis_sendSms as sendSms,
    apis_setBLEMTU as setBLEMTU,
    apis_setBackgroundColor as setBackgroundColor,
    apis_setBackgroundFetchToken as setBackgroundFetchToken,
    apis_setBackgroundTextStyle as setBackgroundTextStyle,
    apis_setClipboardData as setClipboardData,
    apis_setEnable1v1Chat as setEnable1v1Chat,
    apis_setEnableDebug as setEnableDebug,
    apis_setInnerAudioOption as setInnerAudioOption,
    apis_setKeepScreenOn as setKeepScreenOn,
    apis_setNavigationBarColor as setNavigationBarColor,
    apis_setNavigationBarTitle as setNavigationBarTitle,
    apis_setScreenBrightness as setScreenBrightness,
    apis_setStorage as setStorage,
    apis_setStorageSync as setStorageSync,
    apis_setTabBarBadge as setTabBarBadge,
    apis_setTabBarItem as setTabBarItem,
    apis_setTabBarStyle as setTabBarStyle,
    apis_setTopBarText as setTopBarText,
    apis_setVisualEffectOnCapture as setVisualEffectOnCapture,
    apis_setWifiList as setWifiList,
    apis_setWindowSize as setWindowSize,
    apis_shareFileMessage as shareFileMessage,
    apis_shareToWeRun as shareToWeRun,
    apis_shareVideoMessage as shareVideoMessage,
    apis_showActionSheet as showActionSheet,
    apis_showLoading as showLoading,
    apis_showModal as showModal,
    apis_showNavigationBarLoading as showNavigationBarLoading,
    apis_showRedPackage as showRedPackage,
    apis_showShareImageMenu as showShareImageMenu,
    apis_showShareMenu as showShareMenu,
    apis_showTabBar as showTabBar,
    apis_showTabBarRedDot as showTabBarRedDot,
    apis_showToast as showToast,
    apis_startAccelerometer as startAccelerometer,
    apis_startBeaconDiscovery as startBeaconDiscovery,
    apis_startBluetoothDevicesDiscovery as startBluetoothDevicesDiscovery,
    apis_startCompass as startCompass,
    apis_startDeviceMotionListening as startDeviceMotionListening,
    apis_startFacialRecognitionVerify as startFacialRecognitionVerify,
    apis_startFacialRecognitionVerifyAndUploadVideo as startFacialRecognitionVerifyAndUploadVideo,
    apis_startGyroscope as startGyroscope,
    apis_startHCE as startHCE,
    apis_startLocalServiceDiscovery as startLocalServiceDiscovery,
    apis_startLocationUpdate as startLocationUpdate,
    apis_startLocationUpdateBackground as startLocationUpdateBackground,
    apis_startPullDownRefresh as startPullDownRefresh,
    apis_startRecord as startRecord,
    apis_startSoterAuthentication as startSoterAuthentication,
    apis_startWifi as startWifi,
    apis_stopAccelerometer as stopAccelerometer,
    apis_stopBackgroundAudio as stopBackgroundAudio,
    apis_stopBeaconDiscovery as stopBeaconDiscovery,
    apis_stopBluetoothDevicesDiscovery as stopBluetoothDevicesDiscovery,
    apis_stopCompass as stopCompass,
    apis_stopDeviceMotionListening as stopDeviceMotionListening,
    apis_stopGyroscope as stopGyroscope,
    apis_stopHCE as stopHCE,
    apis_stopLocalServiceDiscovery as stopLocalServiceDiscovery,
    apis_stopLocationUpdate as stopLocationUpdate,
    apis_stopPullDownRefresh as stopPullDownRefresh,
    apis_stopRecord as stopRecord,
    apis_stopVoice as stopVoice,
    apis_stopWifi as stopWifi,
    apis_subscribeVoIPVideoMembers as subscribeVoIPVideoMembers,
    apis_switchTab as switchTab,
    apis_triggerTaskPoolMethods as triggerTaskPoolMethods,
    apis_unstable_SetPageIsTextNeedLayout as unstable_SetPageIsTextNeedLayout,
    apis_updatePageSync as updatePageSync,
    apis_updateShareMenu as updateShareMenu,
    apis_updateVoIPChatMuteConfig as updateVoIPChatMuteConfig,
    apis_updateWeChatApp as updateWeChatApp,
    apis_uploadFile as uploadFile,
    apis_vibrateLong as vibrateLong,
    apis_vibrateShort as vibrateShort,
    apis_writeBLECharacteristicValue as writeBLECharacteristicValue,
  };
}

declare function initPxTransform({ designWidth, deviceRatio, baseFontSize, unitPrecision, targetUnit }: {
    designWidth?: number | undefined;
    deviceRatio?: Record<string | number, number> | undefined;
    baseFontSize?: number | undefined;
    unitPrecision?: number | undefined;
    targetUnit?: string | undefined;
}): void;
declare function pxTransformHelper(size: number, unit?: string, isNumber?: boolean): number | string;
declare function pxTransform(size: number, designWidth?: number): number | string;

declare const taro: typeof apis;
declare function initNativeApi(taro: any): void;
declare function getApp(): any;

declare function canIUseWebp(): boolean;
declare function getAppInfo(): {
    platform: string;
    taroVersion: string;
    designWidth: any;
};
declare function getUIContext(): any;

export { ENV_TYPE, IntersectionObserver, addCard, addFileToFavorites, addPhoneCalendar, addPhoneContact, addPhoneRepeatCalendar, addVideoToFavorites, arrayBufferToBase64, authPrivateMessage, authorize, authorizeForMiniProgram, base64ToArrayBuffer, batchGetStorage, batchGetStorageSync, batchSetStorage, batchSetStorageSync, canIUse, canIUseWebp, canvasGetImageData, canvasPutImageData, canvasToTempFilePath, checkIsAddedToMyMiniProgram, checkIsOpenAccessibility, checkIsPictureInPictureActive, checkIsSoterEnrolledInDevice, checkIsSupportFacialRecognition, checkIsSupportSoterAuthentication, checkSession, chooseAddress, chooseContact, chooseImage, chooseInvoice, chooseInvoiceTitle, chooseLicensePlate, chooseLocation, chooseMedia, choosePoi, chooseVideo, clearStorage, clearStorageSync, closeBLEConnection, closeBluetoothAdapter, compressImage, compressVideo, connectSocket, connectWifi, createAnimation, createAudioContext, createBLEConnection, createBLEPeripheralServer, createBufferURL, createCacheManager, createCameraContext, createCanvasContext, createInnerAudioContext, createIntersectionObserver, createLivePlayerContext, createLivePusherContext, createMapContext, createMediaAudioPlayer, createMediaContainer, createMediaQueryObserver, createMediaRecorder, createOffscreenCanvas, createSelectorQuery, createTCPSocket, createUDPSocket, createVideoContext, createVideoDecoder, createWebAudioContext, createWorker, taro as default, disableAlertBeforeUnload, downloadFile, enableAlertBeforeUnload, exitMiniProgram, exitVoIPChat, faceVerifyForPay, getAccountInfoSync, getApp, getAppAuthorizeSetting, getAppBaseInfo, getAppInfo, getAvailableAudioSources, getBLEDeviceCharacteristics, getBLEDeviceRSSI, getBLEDeviceServices, getBLEMTU, getBackgroundAudioManager, getBackgroundAudioPlayerState, getBackgroundFetchData, getBackgroundFetchToken, getBatteryInfo, getBatteryInfoSync, getBeacons, getBluetoothAdapterState, getBluetoothDevices, getChannelsLiveInfo, getChannelsLiveNoticeInfo, getChannelsShareKey, getClipboardData, getConnectedBluetoothDevices, getConnectedWifi, getCurrentPages, getDeviceInfo, getDeviceVoIPList, getEnterOptionsSync, getEnv, getExptInfoSync, getExtConfig, getExtConfigSync, getFileInfo, getFileSystemManager, getFuzzyLocation, getGroupEnterInfo, getHCEState, getImageInfo, getLaunchOptionsSync, getLocalIPAddress, getLocation, getLogManager, getMenuButtonBoundingClientRect, getNFCAdapter, getNetworkType, getPerformance, getPrivacySetting, getRandomValues, getRealtimeLogManager, getRecorderManager, getSavedFileInfo, getSavedFileList, getScreenBrightness, getScreenRecordingState, getSelectedTextRange, getSetting, getShareInfo, getStorage, getStorageInfo, getStorageInfoSync, getStorageSync, getSystemInfo, getSystemInfoSync, getSystemSetting, getUIContext, getUpdateManager, getUserCryptoManager, getUserInfo, getUserProfile, getVideoInfo, getWeRunData, getWifiList, getWindowInfo, hideHomeButton, hideKeyboard, hideLoading, hideNavigationBarLoading, hideShareMenu, hideTabBar, hideTabBarRedDot, hideToast, initNativeApi, initPxTransform, isBluetoothDevicePaired, join1v1Chat, joinVoIPChat, loadFontFace, login, makeBluetoothPair, makePhoneCall, navigateBack, navigateBackMiniProgram, navigateTo, navigateToMiniProgram, notifyBLECharacteristicValueChange, offAccelerometerChange, offAppHide, offAppShow, offAudioInterruptionBegin, offAudioInterruptionEnd, offBLECharacteristicValueChange, offBLEConnectionStateChange, offBLEMTUChange, offBLEPeripheralConnectionStateChanged, offBeaconServiceChange, offBeaconUpdate, offBluetoothAdapterStateChange, offBluetoothDeviceFound, offCompassChange, offCopyUrl, offDeviceMotionChange, offError, offGetWifiList, offGyroscopeChange, offHCEMessage, offKeyboardHeightChange, offLazyLoadError, offLocalServiceDiscoveryStop, offLocalServiceFound, offLocalServiceLost, offLocalServiceResolveFail, offLocationChange, offLocationChangeError, offMemoryWarning, offNetworkStatusChange, offNetworkWeakChange, offPageNotFound, offScreenRecordingStateChanged, offThemeChange, offUnhandledRejection, offUserCaptureScreen, offVoIPChatInterrupted, offVoIPChatMembersChanged, offVoIPChatSpeakersChanged, offVoIPChatStateChanged, offVoIPVideoMembersChanged, offWifiConnected, offWifiConnectedWithPartialInfo, offWindowResize, onAccelerometerChange, onAppHide, onAppShow, onAudioInterruptionBegin, onAudioInterruptionEnd, onBLECharacteristicValueChange, onBLEConnectionStateChange, onBLEMTUChange, onBLEPeripheralConnectionStateChanged, onBackgroundAudioPause, onBackgroundAudioPlay, onBackgroundAudioStop, onBackgroundFetchData, onBeaconServiceChange, onBeaconUpdate, onBluetoothAdapterStateChange, onBluetoothDeviceFound, onCompassChange, onCopyUrl, onDeviceMotionChange, onError, onGetWifiList, onGyroscopeChange, onHCEMessage, onKeyboardHeightChange, onLazyLoadError, onLocalServiceDiscoveryStop, onLocalServiceFound, onLocalServiceLost, onLocalServiceResolveFail, onLocationChange, onLocationChangeError, onMemoryWarning, onNeedPrivacyAuthorization, onNetworkStatusChange, onNetworkWeakChange, onPageNotFound, onScreenRecordingStateChanged, onThemeChange, onUnhandledRejection, onUserCaptureScreen, onVoIPChatInterrupted, onVoIPChatMembersChanged, onVoIPChatSpeakersChanged, onVoIPChatStateChanged, onVoIPVideoMembersChanged, onWifiConnected, onWifiConnectedWithPartialInfo, onWindowResize, openBluetoothAdapter, openBusinessView, openCard, openChannelsActivity, openChannelsEvent, openChannelsLive, openChannelsUserProfile, openCustomerServiceChat, openDocument, openEmbeddedMiniProgram, openLocation, openPrivacyContract, openSetting, openVideoEditor, pageScrollTo, pauseBackgroundAudio, pauseVoice, playBackgroundAudio, playVoice, pluginLogin, preloadAssets, preloadSkylineView, preloadWebview, previewImage, previewMedia, pxTransform, pxTransformHelper, reLaunch, readBLECharacteristicValue, redirectTo, refreshAudioSession, removeSavedFile, removeStorage, removeStorageSync, removeTabBarBadge, reportAnalytics, reportEvent, reportMonitor, reportPerformance, request, requestDeviceVoIP, requestOrderPayment, requestPayment, requestPluginPayment, requestSubscribeDeviceMessage, requestSubscribeMessage, requirePlugin, requirePrivacyAuthorize, reserveChannelsLive, revokeBufferURL, saveFile, saveFileToDisk, saveImageToPhotosAlbum, saveVideoToPhotosAlbum, scanCode, seekBackgroundAudio, sendHCEMessage, sendSms, setBLEMTU, setBackgroundColor, setBackgroundFetchToken, setBackgroundTextStyle, setClipboardData, setEnable1v1Chat, setEnableDebug, setInnerAudioOption, setKeepScreenOn, setNavigationBarColor, setNavigationBarTitle, setScreenBrightness, setStorage, setStorageSync, setTabBarBadge, setTabBarItem, setTabBarStyle, setTopBarText, setVisualEffectOnCapture, setWifiList, setWindowSize, shareFileMessage, shareToWeRun, shareVideoMessage, showActionSheet, showLoading, showModal, showNavigationBarLoading, showRedPackage, showShareImageMenu, showShareMenu, showTabBar, showTabBarRedDot, showToast, startAccelerometer, startBeaconDiscovery, startBluetoothDevicesDiscovery, startCompass, startDeviceMotionListening, startFacialRecognitionVerify, startFacialRecognitionVerifyAndUploadVideo, startGyroscope, startHCE, startLocalServiceDiscovery, startLocationUpdate, startLocationUpdateBackground, startPullDownRefresh, startRecord, startSoterAuthentication, startWifi, stopAccelerometer, stopBackgroundAudio, stopBeaconDiscovery, stopBluetoothDevicesDiscovery, stopCompass, stopDeviceMotionListening, stopGyroscope, stopHCE, stopLocalServiceDiscovery, stopLocationUpdate, stopPullDownRefresh, stopRecord, stopVoice, stopWifi, subscribeVoIPVideoMembers, switchTab, triggerTaskPoolMethods, unstable_SetPageIsTextNeedLayout, updatePageSync, updateShareMenu, updateVoIPChatMuteConfig, updateWeChatApp, uploadFile, vibrateLong, vibrateShort, writeBLECharacteristicValue };
