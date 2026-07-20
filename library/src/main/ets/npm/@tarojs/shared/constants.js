var PLATFORM_TYPE;
(function (PLATFORM_TYPE) {
    PLATFORM_TYPE["MINI"] = "mini";
    PLATFORM_TYPE["ASCF"] = "ascf";
    PLATFORM_TYPE["WEB"] = "web";
    PLATFORM_TYPE["RN"] = "rn";
    PLATFORM_TYPE["HARMONY"] = "harmony";
    PLATFORM_TYPE["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
const COMPILE_MODE_IDENTIFIER_PREFIX = 'f';
const COMPILE_MODE_SUB_RENDER_FN = 'subRenderFn';
const PLATFORM_CONFIG_MAP = {
    h5: {
        type: PLATFORM_TYPE.WEB
    },
    harmony: {
        type: PLATFORM_TYPE.HARMONY
    },
    ascf: {
        type: PLATFORM_TYPE.ASCF
    },
    mini: {
        type: PLATFORM_TYPE.MINI
    },
    rn: {
        type: PLATFORM_TYPE.RN
    },
    quickapp: {
        type: PLATFORM_TYPE.QUICK
    },
};

export { COMPILE_MODE_IDENTIFIER_PREFIX, COMPILE_MODE_SUB_RENDER_FN, PLATFORM_CONFIG_MAP, PLATFORM_TYPE };
//# sourceMappingURL=constants.js.map
