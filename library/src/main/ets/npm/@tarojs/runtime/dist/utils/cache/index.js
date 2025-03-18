/**
 * 一个小型缓存池，用于在切换页面时，存储一些上下文信息
 */
class RuntimeCache {
    constructor(name) {
        this.cache = new Map();
        this.name = name;
    }
    has(identifier) {
        return this.cache.has(identifier);
    }
    set(identifier, ctx) {
        if (identifier && ctx) {
            this.cache.set(identifier, ctx);
        }
    }
    get(identifier) {
        if (this.has(identifier))
            return this.cache.get(identifier);
    }
    delete(identifier) {
        this.cache.delete(identifier);
    }
}

export { RuntimeCache };
//# sourceMappingURL=cache.js.map
