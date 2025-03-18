// @ts-nocheck
import { JSX, JSXElement } from '../../../solid-js'
import { TaroElement } from '../../runtime'
import { AdProps } from './Ad'
import { AdCustomProps } from './AdCustom'
import { AudioProps } from './Audio'
import { ButtonProps } from './Button'
import { CameraProps } from './Camera'
import { CanvasProps } from './Canvas'
import { ChannelLiveProps } from './ChannelLive'
import { ChannelVideoProps } from './ChannelVideo'
import { CheckboxProps } from './Checkbox'
import { CheckboxGroupProps } from './CheckboxGroup'
import { StandardProps } from './common'
import { CoverImageProps } from './CoverImage'
import { CoverViewProps } from './CoverView'
import { CustomWrapperProps } from './CustomWrapper'
import { EditorProps } from './Editor'
import { FormProps } from './Form'
import { FunctionalPageNavigatorProps } from './FunctionalPageNavigator'
import { GridViewProps } from './GridView'
import { IconProps } from './Icon'
import { ImageProps } from './Image'
import { InputProps } from './Input'
import { KeyboardAccessoryProps } from './KeyboardAccessory'
import { LabelProps } from './Label'
import { ListViewProps } from './ListView'
import { LivePlayerProps } from './LivePlayer'
import { LivePusherProps } from './LivePusher'
import { MapProps } from './Map'
import { MatchMediaProps } from './MatchMedia'
import { MovableAreaProps } from './MovableArea'
import { MovableViewProps } from './MovableView'
import { NativeSlotProps } from './NativeSlot'
import { NavigationBarProps } from './NavigationBar'
import { NavigatorProps } from './Navigator'
import { OfficialAccountProps } from './OfficialAccount'
import { OpenDataProps } from './OpenData'
import { PageContainerProps } from './PageContainer'
import { PageMetaProps } from './PageMeta'
import {
  PickerDateProps, PickerMultiSelectorProps,
  PickerRegionProps, PickerSelectorProps, PickerTimeProps
} from './Picker'
import { PickerViewProps } from './PickerView'
import { PickerViewColumnProps } from './PickerViewColumn'
import { ProgressProps } from './Progress'
import { RadioProps } from './Radio'
import { RadioGroupProps } from './RadioGroup'
import { RichTextProps } from './RichText'
import { RootPortalProps } from './RootPortal'
import { ScrollViewProps } from './ScrollView'
import { ShareElementProps } from './ShareElement'
import { SliderProps } from './Slider'
import { SlotProps } from './Slot'
import { SnapshotProps } from './SnapShot'
import { StickyHeaderProps } from './StickyHeader'
import { StickySectionProps } from './StickySection'
import { SwiperProps } from './Swiper'
import { SwiperItemProps } from './SwiperItem'
import { SwitchProps } from './Switch'
import { TextProps } from './Text'
import { TextareaProps } from './Textarea'
import { VideoProps } from './Video'
import { ViewProps } from './View'
import { VoipRoomProps } from './VoipRoom'
import { WebViewProps } from './WebView'

// 重置react的类型
interface SlimProps {
  children?: JSXElement
  class?: string
  style?: string | JSX.CSSProperties | undefined
  innerHTML?: string
}
/** 联合类型不能用omit（比如picker） */
type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never

export type RemoveReactAttribute = 'children' | 'className' | 'style' | 'key' | 'ref' | 'dangerouslySetInnerHTML'

export type TransformReact2SolidType<P extends StandardProps = Record<string, never>> = DistributiveOmit<P, RemoveReactAttribute> & SlimProps & JSX.DirectiveAttributes & JSX.CustomAttributes<TaroElement>

type Components<T> = (props: TransformReact2SolidType<T>) => JSXElement;


/** 视图容器 */
export declare const Block: Components<StandardProps>
export declare const CoverImage: Components<CoverImageProps>
export declare const CoverView: Components<CoverViewProps>
export declare const GridView: Components<GridViewProps>
export declare const ListView: Components<ListViewProps>
export declare const MatchMedia: Components<MatchMediaProps>
export declare const MovableArea: Components<MovableAreaProps>
export declare const MovableView: Components<MovableViewProps>
export declare const PageContainer: Components<PageContainerProps>
export declare const RootPortal: Components<RootPortalProps>
export declare const ScrollView: Components<ScrollViewProps>
export declare const ShareElement: Components<ShareElementProps>
export declare const StickyHeader: Components<StickyHeaderProps>
export declare const StickySection: Components<StickySectionProps>
export declare const Swiper: Components<SwiperProps>
export declare const SwiperItem: Components<SwiperItemProps>
export declare const View: Components<ViewProps>
/** 基础内容 */
export declare const Icon: Components<IconProps>
export declare const Progress: Components<ProgressProps>
export declare const RichText: Components<RichTextProps>
export declare const Text: Components<TextProps>
/** 表单组件 */
export declare const Button: Components<ButtonProps>
export declare const Checkbox: Components<CheckboxProps>
export declare const CheckboxGroup: Components<CheckboxGroupProps>
export declare const Editor: Components<EditorProps>
export declare const Form: Components<FormProps>
export declare const Input: Components<InputProps>
export declare const KeyboardAccessory: Components<KeyboardAccessoryProps>
export declare const Label: Components<LabelProps>
export declare const Picker: Components<PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps | PickerSelectorProps>
export declare const PickerView: Components<PickerViewProps>
export declare const PickerViewColumn: Components<PickerViewColumnProps>
export declare const Radio: Components<RadioProps>
export declare const RadioGroup: Components<RadioGroupProps>
export declare const Slider: Components<SliderProps>
export declare const Switch: Components<SwitchProps>
export declare const Textarea: Components<TextareaProps>
/** 导航 */
export declare const FunctionalPageNavigator: Components<FunctionalPageNavigatorProps>
export declare const Navigator: Components<NavigatorProps>
export declare const NavigationBar: Components<NavigationBarProps>
/** 媒体组件 */
export declare const Audio: Components<AudioProps>
export declare const Camera: Components<CameraProps>
export declare const ChannelLive: Components<ChannelLiveProps>
export declare const ChannelVideo: Components<ChannelVideoProps>
export declare const Image: Components<ImageProps>
export declare const LivePlayer: Components<LivePlayerProps>
export declare const LivePusher: Components<LivePusherProps>
export declare const Video: Components<VideoProps>
export declare const VoipRoom: Components<VoipRoomProps>
/** 地图 */
export declare const Map: Components<MapProps>
/** 画布 */
export declare const Canvas: Components<CanvasProps>
/** 开放能力 */
export declare const Ad: Components<AdProps>
export declare const AdCustom: Components<AdCustomProps>
export declare const OfficialAccount: Components<OfficialAccountProps>
export declare const OpenData: Components<OpenDataProps>
export declare const WebView: Components<WebViewProps>
/** 配置节点 */
export declare const PageMeta: Components<PageMetaProps>

export declare const CustomWrapper: Components<CustomWrapperProps>
export declare const Slot: Components<SlotProps>
export declare const NativeSlot: Components<NativeSlotProps>

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /** 视图容器 */
      block: TransformReact2SolidType<StandardProps>
      'taro-block-core': TransformReact2SolidType<StandardProps>
      'cover-image': TransformReact2SolidType<CoverImageProps>
      'taro-cover-image-core': TransformReact2SolidType<CoverImageProps>
      'cover-view': TransformReact2SolidType<CoverViewProps>
      'taro-cover-view-core': TransformReact2SolidType<CoverViewProps>
      'match-media': TransformReact2SolidType<MatchMediaProps>
      'taro-match-media-core': TransformReact2SolidType<MatchMediaProps>
      'movable-area': TransformReact2SolidType<MovableAreaProps>
      'taro-movable-area-core': TransformReact2SolidType<MovableAreaProps>
      'movable-view': TransformReact2SolidType<MovableViewProps>
      'taro-movable-view-core': TransformReact2SolidType<MovableViewProps>
      'page-container': TransformReact2SolidType<PageContainerProps>
      'taro-page-container-core': TransformReact2SolidType<PageContainerProps>
      'root-portal': TransformReact2SolidType<RootPortalProps>
      'taro-root-portal-core': TransformReact2SolidType<RootPortalProps>
      'scroll-view': TransformReact2SolidType<ScrollViewProps>
      'taro-scroll-view-core': TransformReact2SolidType<ScrollViewProps>
      swiper: TransformReact2SolidType<SwiperProps>
      'taro-swiper-core': TransformReact2SolidType<SwiperProps>
      'swiper-item': TransformReact2SolidType<SwiperItemProps>
      'taro-swiper-item-core': TransformReact2SolidType<SwiperItemProps>
      view: TransformReact2SolidType<ViewProps>
      'taro-view-core': TransformReact2SolidType<ViewProps>
      /** 基础内容 */
      icon: TransformReact2SolidType<IconProps>
      'taro-icon-core': TransformReact2SolidType<IconProps>
      progress: TransformReact2SolidType<ProgressProps>
      'taro-progress-core': TransformReact2SolidType<ProgressProps>
      'rich-text': TransformReact2SolidType<RichTextProps>
      'taro-rich-text-core': TransformReact2SolidType<RichTextProps>
      text: TransformReact2SolidType<TextProps>
      'taro-text-core': TransformReact2SolidType<TextProps>
      /** 表单组件 */
      button: TransformReact2SolidType<ButtonProps>
      'taro-button-core': TransformReact2SolidType<ButtonProps>
      checkbox: TransformReact2SolidType<CheckboxProps>
      'taro-checkbox-core': TransformReact2SolidType<CheckboxProps>
      'checkbox-group': TransformReact2SolidType<CheckboxGroupProps>
      'taro-checkbox-group-core': TransformReact2SolidType<CheckboxGroupProps>
      editor: TransformReact2SolidType<EditorProps>
      'taro-editor-core': TransformReact2SolidType<EditorProps>
      form: TransformReact2SolidType<FormProps>
      'taro-form-core': TransformReact2SolidType<FormProps>
      input: TransformReact2SolidType<InputProps>
      'taro-input-core': TransformReact2SolidType<InputProps>
      'keyboard-accessory': TransformReact2SolidType<KeyboardAccessoryProps>
      'taro-keyboard-accessory-core': TransformReact2SolidType<KeyboardAccessoryProps>
      label: TransformReact2SolidType<LabelProps>
      'taro-label-core': TransformReact2SolidType<LabelProps>
      picker: TransformReact2SolidType<PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps | PickerSelectorProps>
      'taro-picker-core': TransformReact2SolidType<PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps | PickerSelectorProps>
      'picker-view': TransformReact2SolidType<PickerViewProps>
      'taro-picker-view-core': TransformReact2SolidType<PickerViewProps>
      'picker-view-column': TransformReact2SolidType<PickerViewColumnProps>
      'taro-picker-view-column-core': TransformReact2SolidType<PickerViewColumnProps>
      radio: TransformReact2SolidType<RadioProps>
      'taro-radio-core': TransformReact2SolidType<RadioProps>
      'radio-group': TransformReact2SolidType<RadioGroupProps>
      'taro-radio-group-core': TransformReact2SolidType<RadioGroupProps>
      slider: TransformReact2SolidType<SliderProps>
      'taro-slider-core': TransformReact2SolidType<SliderProps>
      switch: TransformReact2SolidType<SwitchProps>
      'taro-switch-core': TransformReact2SolidType<SwitchProps>
      textarea: TransformReact2SolidType<TextareaProps>
      'taro-textarea-core': TransformReact2SolidType<TextareaProps>
      /** Skyline */
      'grid-view': TransformReact2SolidType<GridViewProps>
      'taro-grid-view-core': TransformReact2SolidType<GridViewProps>
      'list-view': TransformReact2SolidType<ListViewProps>
      'taro-list-view-core': TransformReact2SolidType<ListViewProps>
      'share-element': TransformReact2SolidType<ShareElementProps>
      'taro-share-element-core': TransformReact2SolidType<ShareElementProps>
      'snapshot': TransformReact2SolidType<SnapshotProps>
      'taro-snapshot-core': TransformReact2SolidType<SnapshotProps>
      'sticky-header': TransformReact2SolidType<StickyHeaderProps>
      'taro-sticky-header-core': TransformReact2SolidType<StickyHeaderProps>
      'sticky-section': TransformReact2SolidType<StickySectionProps>
      'taro-sticky-section-core': TransformReact2SolidType<StickySectionProps>
      /** 导航 */
      'functional-page-navigator': TransformReact2SolidType<FunctionalPageNavigatorProps>
      'taro-functional-page-navigator-core': TransformReact2SolidType<FunctionalPageNavigatorProps>
      navigator: TransformReact2SolidType<NavigatorProps>
      'taro-navigator-core': TransformReact2SolidType<NavigatorProps>
      'navigation-bar': TransformReact2SolidType<NavigationBarProps>
      'taro-navigation-bar-core': TransformReact2SolidType<NavigationBarProps>
      /** 媒体组件 */
      audio: TransformReact2SolidType<AudioProps>
      'taro-audio-core': TransformReact2SolidType<AudioProps>
      camera: TransformReact2SolidType<CameraProps>
      'taro-camera-core': TransformReact2SolidType<CameraProps>
      'channel-live': TransformReact2SolidType<ChannelLiveProps>
      'taro-channel-live-core': TransformReact2SolidType<ChannelLiveProps>
      'channel-video': TransformReact2SolidType<ChannelVideoProps>
      'taro-channel-video-core': TransformReact2SolidType<ChannelVideoProps>
      image: TransformReact2SolidType<ImageProps>
      'taro-image-core': TransformReact2SolidType<ImageProps>
      'live-player': TransformReact2SolidType<LivePlayerProps>
      'taro-live-player-core': TransformReact2SolidType<LivePlayerProps>
      'live-pusher': TransformReact2SolidType<LivePusherProps>
      'taro-live-pusher-core': TransformReact2SolidType<LivePusherProps>
      video: TransformReact2SolidType<VideoProps>
      'taro-video-core': TransformReact2SolidType<VideoProps>
      'voip-room': TransformReact2SolidType<VoipRoomProps>
      'taro-voip-room-core': TransformReact2SolidType<VoipRoomProps>
      /** 地图 */
      map: TransformReact2SolidType<MapProps>
      'taro-map-core': TransformReact2SolidType<MapProps>
      /** 画布 */
      canvas: TransformReact2SolidType<CanvasProps>
      'taro-canvas-core': TransformReact2SolidType<CanvasProps>
      /** 开放能力 */
      ad: TransformReact2SolidType<AdProps>
      'taro-ad-core': TransformReact2SolidType<AdProps>
      'ad-custom': TransformReact2SolidType<AdCustomProps>
      'taro-ad-custom-core': TransformReact2SolidType<AdCustomProps>
      'official-account': TransformReact2SolidType<OfficialAccountProps>
      'taro-official-account-core': TransformReact2SolidType<OfficialAccountProps>
      'open-data': TransformReact2SolidType<OpenDataProps>
      'taro-open-data-core': TransformReact2SolidType<OpenDataProps>
      'web-view': TransformReact2SolidType<WebViewProps>
      'taro-web-view-core': TransformReact2SolidType<WebViewProps>
      /** 配置节点 */
      'page-meta': TransformReact2SolidType<PageMetaProps>
      'taro-page-meta-core': TransformReact2SolidType<PageMetaProps>

      'custom-wrapper': TransformReact2SolidType<CustomWrapperProps>
      'taro-custom-wrapper-core': TransformReact2SolidType<CustomWrapperProps>
      /** 为了不与vue3模板默认的slot冲突，增加 Record<string, any> */
      'slot': TransformReact2SolidType<SlotProps> & Record<string, any>
      'taro-slot-core': TransformReact2SolidType<SlotProps>
      'native-slot': TransformReact2SolidType<NativeSlotProps>
      'taro-native-slot-core': TransformReact2SolidType<NativeSlotProps>
    }
  }
}


