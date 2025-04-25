import './global.d.ts'

import './taro.api.d.ts'
import './taro.component.d.ts'
import './taro.config.d.ts'
import './taro.lifecycle.d.ts'

export = Taro
export as namespace Taro

declare const Taro: Taro.TaroStatic

declare namespace Taro {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TaroStatic {}
}
declare global {
  const defineAppConfig: (config: Taro.Config) => Taro.Config
  const definePageConfig: (config: Taro.Config) => Taro.Config
}