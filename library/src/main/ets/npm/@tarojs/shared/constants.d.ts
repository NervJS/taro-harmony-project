// @ts-nocheck
export declare enum PLATFORM_TYPE {
    MINI = "mini",
    ASCF = "ascf",
    WEB = "web",
    RN = "rn",
    HARMONY = "harmony",
    QUICK = "quickapp"
}
export declare const COMPILE_MODE_IDENTIFIER_PREFIX = "f";
export declare const COMPILE_MODE_SUB_RENDER_FN = "subRenderFn";
export declare const PLATFORM_CONFIG_MAP: {
    h5: {
        type: PLATFORM_TYPE;
    };
    harmony: {
        type: PLATFORM_TYPE;
    };
    ascf: {
        type: PLATFORM_TYPE;
    };
    mini: {
        type: PLATFORM_TYPE;
    };
    rn: {
        type: PLATFORM_TYPE;
    };
    quickapp: {
        type: PLATFORM_TYPE;
    };
};
