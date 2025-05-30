// @ts-nocheck
/* eslint-disable @typescript-eslint/indent */
import { document, FormElement } from '../runtime'
import { isBoolean, isUndefined, noop } from '../shared'
import Reconciler from '../../react-reconciler'
import { DefaultEventPriority } from '../../react-reconciler/constants'

import { detachDeletedInstance, precacheFiberNode, updateFiberProps } from './componentTree'
import { track } from './inputValueTracking'
import { getUpdatePayload, Props, updateProps, updatePropsByPayload } from './props'

import type { TaroElement, TaroText } from '../runtime'
import type { Fiber, HostConfig } from '../../react-reconciler'

const hostConfig: HostConfig<
  string, // Type
  Props, // Props
  TaroElement, // Container
  TaroElement, // Instance
  TaroText, // TextInstance
  TaroElement, // SuspenseInstance
  TaroElement, // HydratableInstance
  TaroElement, // PublicInstance
  Record<string, any>, // HostContext
  string[], // UpdatePayload
  unknown, // ChildSet
  unknown, // TimeoutHandle
  unknown // NoTimeout
> = {
  // below keys order by {React ReactFiberHostConfig.custom.js}, convenient for comparing each other.

  // -------------------
  // required by @types/react-reconciler
  // -------------------
  getPublicInstance (inst: TaroElement) {
    return inst
  },
  getRootHostContext () {
    return {}
  },
  getChildHostContext (parentHostContext) {
    return parentHostContext
  },
  prepareForCommit (..._: any[]) {
    return null
  },
  resetAfterCommit: noop,
  createInstance (type, props: Props, _rootContainerInstance: any, _hostContext: any, internalInstanceHandle: Fiber) {
    const element = document.createElement(type)

    precacheFiberNode(internalInstanceHandle, element)
    updateFiberProps(element, props)

    return element
  },
  appendInitialChild (parent, child) {
    parent.appendChild(child)
  },
  finalizeInitialChildren (dom, type: string, props: any) {
    let newProps = props
    if (dom instanceof FormElement) {
      const [defaultName, defaultKey] = ['switch', 'checkbox', 'radio'].includes(type) ? ['checked', 'defaultChecked'] : ['value', 'defaultValue']
      if (props.hasOwnProperty(defaultKey)) {
        newProps = { ...newProps, [defaultName]: props[defaultKey] }
        delete newProps[defaultKey]
      }
    }

    updateProps(dom, {}, newProps) // 提前执行更新属性操作，Taro 在 Page 初始化后会立即从 dom 读取必要信息

    if (type === 'input' || type === 'textarea') {
      track(dom)
    }

    return false
  },
  prepareUpdate (instance, _, oldProps, newProps) {
    return getUpdatePayload(instance, oldProps, newProps)
  },
  shouldSetTextContent () {
    return false
  },
  createTextInstance (text: string, _rootContainerInstance: any, _hostContext: any, internalInstanceHandle: Fiber) {
    const textNode = document.createTextNode(text)

    precacheFiberNode(internalInstanceHandle, textNode)

    return textNode
  },
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur: noop,
  afterActiveInstanceBlur: noop,
  preparePortalMount: noop,
  prepareScopeUpdate: noop,
  getInstanceFromScope: () => null,
  getCurrentEventPriority () {
    return DefaultEventPriority
  },
  detachDeletedInstance,

  // -------------------
  //      Microtasks
  //     (optional)
  // -------------------
  supportsMicrotasks: true,
  scheduleMicrotask: isUndefined(Promise)
    ? setTimeout
    : (callback) =>
        Promise.resolve(null)
          .then(callback)
          .catch(function (error) {
            setTimeout(() => {
              throw error
            })
          }),

  // -------------------
  //      Mutation
  //     (required if supportsMutation is true)
  // -------------------
  appendChild (parent, child) {
    parent.appendChild(child)
  },
  appendChildToContainer (parent, child) {
    parent.appendChild(child)
  },
  commitTextUpdate (textInst, _, newText) {
    textInst.nodeValue = newText
  },
  commitMount: noop,
  commitUpdate (dom, updatePayload, _, oldProps, newProps) {
    if (!updatePayload) return
    // payload 只包含 children 的时候，不应该再继续触发后续的属性比较和更新的逻辑了
    if (updatePayload.length === 2 && updatePayload.includes('children')) return

    updatePropsByPayload(dom, oldProps, updatePayload)
    updateFiberProps(dom, newProps)
  },
  insertBefore (parent, child, refChild) {
    parent.insertBefore(child, refChild)
  },
  insertInContainerBefore (parent, child, refChild) {
    parent.insertBefore(child, refChild)
  },
  removeChild (parent, child) {
    parent.removeChild(child)
  },
  removeChildFromContainer (parent, child) {
    parent.removeChild(child)
  },
  resetTextContent: noop,
  hideInstance (instance) {
    const style = instance.style
    style.setProperty('display', 'none')
  },
  hideTextInstance (textInstance) {
    textInstance.nodeValue = ''
  },
  unhideInstance (instance, props) {
    const styleProp = props.style as { display?: any }
    let display = styleProp?.hasOwnProperty('display') ? styleProp.display : null
    display = display == null || isBoolean(display) || display === '' ? '' : ('' + display).trim()
    // eslint-disable-next-line dot-notation
    instance.style['display'] = display
  },
  unhideTextInstance (textInstance, text) {
    textInstance.nodeValue = text
  },
  clearContainer (element) {
    if (element.childNodes.length > 0) {
      element.textContent = ''
    }
  }
}

const TaroReconciler = Reconciler(hostConfig)

if (("production" as string) !== 'production') {
  const foundDevTools = TaroReconciler.injectIntoDevTools({
    bundleType: 1,
    version: '18.0.0',
    rendererPackageName: 'taro-react'
  })
  if (!foundDevTools) {
    // eslint-disable-next-line no-console
    console.info(
      '%cDownload the React DevTools ' +
        'for a better development experience: ' +
        'https://reactjs.org/link/react-devtools',
      'font-weight:bold'
    )
  }
}

export { TaroReconciler }
