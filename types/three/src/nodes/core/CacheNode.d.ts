import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ContextNode from "./ContextNode.js";
import Node from "./Node.js";
import NodeCache from "./NodeCache.js";

export default class CacheNode<T extends Node = Node> extends Node {
    node: T;
    parent: boolean;

    readonly isCacheNode: true;

    constructor(node: T, parent?: boolean);
}

export const cache: <T extends Node>(node: T, cache?: NodeCache) => ShaderNodeObject<CacheNode<T>>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        cache: typeof cache;
    }
}
