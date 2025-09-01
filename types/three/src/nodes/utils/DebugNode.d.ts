import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class DebugNode<T extends Node = Node> extends TempNode {
    constructor(node: T, callback?: ((code: string) => void) | null);
}

export default DebugNode;

export const debug: <T extends Node>(
    node: T,
    callback?: ((node: NodeBuilder, code: string) => void) | null,
) => ShaderNodeObject<DebugNode<T>>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        debug: typeof debug;
    }
}
