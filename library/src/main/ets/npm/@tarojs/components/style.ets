import { isUndefined } from '../shared'
import { ObjectAssign } from '../runtime'

import { computeBackgroundPosition, convertVp2Px } from './utils'
import { getNormalAttributes } from './utils/helper'
import { isMaxWidthView } from './utils/styles'

import type { TaroAny, HarmonyStyle, TaroElement, TaroStyleType, TaroTextElement }  from '../runtime'

class CommonStyleModify<T extends CommonAttribute = CommonAttribute> implements AttributeModifier<T> {
  initStyle?: TaroStyleType
  node: TaroElement | null = null
  style: TaroStyleType | null = null
  overwriteStyle: TaroStyleType = {}

  setNode (node: TaroElement, initStyle?: TaroStyleType) {
    this.node = node
    this.style = getNormalAttributes(this.node)
    this.initStyle = initStyle
    this.overwriteStyle = {}
    // 覆盖初始化样式
    if (initStyle) {
      Object.keys(initStyle).forEach(key => {
        if (this.style && !this.style[key]) {
          this.style[key] = initStyle[key]
        }
      })
    }
    return this
  }

  setAnimationStyle (overwriteStyle: Record<string, TaroAny>) {
    this.overwriteStyle = overwriteStyle
    if (this.style && this.overwriteStyle && Object.keys(this.overwriteStyle).length) {
      // 防止污染原始样式
      this.style = ObjectAssign({}, this.style)
      Object.keys(this.overwriteStyle).forEach(key => {
        this.style![key] = this.overwriteStyle[key]
      })
    }
    return this
  }

  applyNormalAttribute(instance: T): void {
    if (this.node && this.style) {
      setNormalAttributeIntoInstance(instance, this.style, this.node)
      setTransformAttributeIntoInstance(instance, this.style || {})
    }
  }
}

class TextStyleModify extends CommonStyleModify<TextAttribute> {
  withNormal: boolean = false

  setNode (node: TaroTextElement, initStyle?: HarmonyStyle) {
    this.withNormal = false
    super.setNode(node, initStyle)
    return this
  }

  withNormalStyle () {
    this.withNormal = true
    return this
  }

  applyNormalAttribute(instance: TextAttribute): void {
    if (this.node && this.style) {
      if (this.withNormal) {
        setNormalAttributeIntoInstance(instance, this.style, this.node)
        setTransformAttributeIntoInstance(instance, this.style || {})
      }
      setNormalTextAttributeIntoInstance(instance, this.style, this.node)
    }
  }
}

export function setTransformAttributeIntoInstance(instance: CommonAttribute, style: TaroStyleType) {
  // Animation 需要提前和 @State 变量绑定才能产生动画效果，因此不能做 if else 判断
  instance.translate({
    x: style.transform?.Translate?.x,
    y: style.transform?.Translate?.y,
    z: style.transform?.Translate?.z,
  })
  instance.scale({
    x: style.transform?.Scale?.x,
    y: style.transform?.Scale?.y,
    z: style.transform?.Scale?.z,
    centerX: style.transformOrigin?.x,
    centerY: style.transformOrigin?.y,
  })
  instance.rotate({
    x: style.transform?.Rotate?.x,
    y: style.transform?.Rotate?.y,
    z: style.transform?.Rotate?.z,
    centerX: style.transformOrigin?.x,
    centerY: style.transformOrigin?.y,
    angle: style.transform?.Rotate?.angle || 0,
  })
}

export function setNormalTextAttributeIntoInstance(instance: TextAttribute | SpanAttribute, style: HarmonyStyle, node?: TaroTextElement | null) {
  if (!isUndefined(style.color)) {
    instance.fontColor(style.color)
  }
  if (!isUndefined(style.fontSize)) {
    instance.fontSize(style.fontSize)
  }
  if (!isUndefined(style.fontWeight)) {
    instance.fontWeight(style.fontWeight)
  }
  if (!isUndefined(style.fontStyle)) {
    instance.fontStyle(style.fontStyle)
  }
  if (!isUndefined(style.fontFamily)) {
    instance.fontFamily(style.fontFamily)
  }
  if (!isUndefined(style.textDecoration)) {
    instance.decoration({
      type: style.textDecoration!.type,
      color: style.color
    })
  }
}

export function setNormalAttributeIntoInstance(instance: CommonAttribute, style: TaroStyleType, node?: TaroElement | null) {
  instance.renderFit(RenderFit.RESIZE_FILL)
  if (!isUndefined(style.id)) {
    instance.id(style.id)
    instance.key(style.id)
  }
  if (!isUndefined(style.display) || !isUndefined(style.visibility)) {
    instance.visibility(style.display === 'none' 
      ? Visibility.None : 
      !isUndefined(style.visibility) 
        ? (style.visibility === 'hidden' ? Visibility.Hidden :  Visibility.Visible)
        : Visibility.Visible
    )
  }
  if (!isUndefined(style.flexGrow)) {
    instance.flexGrow(style.flexGrow)
  }
  if (!isUndefined(style.flexShrink)) {
    instance.flexShrink(style.flexShrink)
  }
  if (!isUndefined(style.flexBasis)) {
    instance.flexBasis(style.flexBasis)
  }
  if (!isUndefined(style.alignSelf)) {
    instance.alignSelf(style.alignSelf)
  }
  if (!isUndefined(style.paddingTop) || !isUndefined(style.paddingRight) || !isUndefined(style.paddingBottom) || !isUndefined(style.paddingLeft)) {
    instance.padding({
      top: style.paddingTop,
      right: style.paddingRight,
      bottom: style.paddingBottom,
      left: style.paddingLeft
    })
  }
  if (!isUndefined(style.marginTop) || !isUndefined(style.marginRight) || !isUndefined(style.marginBottom) || !isUndefined(style.marginLeft)) {
    instance.margin({
      top: style.marginTop,
      right: style.marginRight,
      bottom: style.marginBottom,
      left: style.marginLeft
    })
  }
  if (node) {
    instance.width(isMaxWidthView(node as TaroElement) && isUndefined(style.width) ? '100%' : style.width)
  } else {
    if (!isUndefined(style.width)) {
      instance.width(style.width)
    }
  }
  if (!isUndefined(style.height)) {
    instance.height(style.height)
  }
  if (!isUndefined(style.minWidth) || !isUndefined(style.maxWidth) || !isUndefined(style.minHeight) || !isUndefined(style.maxHeight)) {
    instance.constraintSize({
      minWidth: style.minWidth,
      maxWidth: style.maxWidth,
      minHeight: style.minHeight,
      maxHeight: style.maxHeight
    })
  }
  if (!isUndefined(style.backgroundColor)) {
    instance.backgroundColor(style.backgroundColor)
  }
  if (!isUndefined(style.backgroundImage)) {
    if (style.backgroundImage.center) {
      // radialGradient
      instance.radialGradient(style.backgroundImage)
    } else if (style.backgroundImage.colors) {
      // linearGradient
      instance.linearGradient(style.backgroundImage)
    } else {
      instance.backgroundImage(style.backgroundImage?.src, style.backgroundRepeat)
    }
  }
  if (!isUndefined(style.backgroundSize)) {
    instance.backgroundImageSize(style.backgroundSize)
  }
  if (!isUndefined(style.backgroundPosition)) {
    if (typeof style.backgroundPosition !== 'number') {
      let pos = computeBackgroundPosition(style)
      instance.backgroundImagePosition({
        x: pos.offsetX,
        y: pos.offsetY,
      })
    } else {
      instance.backgroundImagePosition(style.backgroundPosition)
    }
  }
  if (!isUndefined(style.borderTopStyle) || !isUndefined(style.borderRightStyle) || !isUndefined(style.borderBottomStyle) || !isUndefined(style.borderLeftStyle)) {
    instance.borderStyle({
      top: style.borderTopStyle,
      right: style.borderRightStyle,
      bottom: style.borderBottomStyle,
      left: style.borderLeftStyle
    })
  }
  if (!isUndefined(style.borderTopWidth) || !isUndefined(style.borderRightWidth) || !isUndefined(style.borderBottomWidth) || !isUndefined(style.borderLeftWidth)) {
    instance.borderWidth({
      top: style.borderTopWidth,
      right: style.borderRightWidth,
      bottom: style.borderBottomWidth,
      left: style.borderLeftWidth
    })
  }
  if (!isUndefined(style.borderTopColor) || !isUndefined(style.borderRightColor) || !isUndefined(style.borderBottomColor) || !isUndefined(style.borderLeftColor)) {
    instance.borderColor({
      top: style.borderTopColor,
      right: style.borderRightColor,
      bottom: style.borderBottomColor,
      left: style.borderLeftColor
    })
  }
  if (!isUndefined(style.borderTopLeftRadius) || !isUndefined(style.borderTopRightRadius) || !isUndefined(style.borderBottomLeftRadius) || !isUndefined(style.borderBottomRightRadius)) {
    instance.borderRadius({
      topLeft: style.borderTopLeftRadius,
      topRight: style.borderTopRightRadius,
      bottomLeft: style.borderBottomLeftRadius,
      bottomRight: style.borderBottomRightRadius
    })
  }
  if (!isUndefined(style.opacity)) {
    instance.opacity(style.opacity)
  }
  if (!isUndefined(style.overflow)) {
    instance.clip(style.overflow === 'hidden')
  }
  if (style.position === 'absolute' || style.position === 'fixed') {
    instance.position({
      x: style.left || 0,
      y: style.top || 0,
    })
    // 绝对定位和固定定位在web上都会脱离文档流，因此需要设置zIndex让它相比正常流的元素更上层
    instance.zIndex(1)
  }
  if (style.position === 'relative') {
    instance.offset({
      x: style.left || 0,
      y: style.top || 0,
    })
    // 绝对定位和固定定位在web上都会脱离文档流，因此需要设置zIndex让它相比正常流的元素更上层
    instance.zIndex(1)
  }
  if (!isUndefined(style.zIndex)) {
    // 为了适应position不设置z-index也能高于同层级组件，估且让设置了z-index的会更高一级
    instance.zIndex(style.zIndex! + 1)
  }
  if (!isUndefined(style.boxShadow)) {
    instance.shadow({
      radius: convertVp2Px(style.boxShadow!.radius),
      color: style.boxShadow!.color,
      offsetX: convertVp2Px(style.boxShadow!.offsetX),
      offsetY: convertVp2Px(style.boxShadow!.offsetY),
      fill: style.boxShadow!.fill,
    })
  }
}

export const rowModify = new CommonStyleModify()
export const columnModify = new CommonStyleModify()
export const textModify = new TextStyleModify()

export default new CommonStyleModify()