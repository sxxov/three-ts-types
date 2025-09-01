import Node from "../core/Node.js";
import { SwizzleOption } from "../tsl/TSLCore.js";

export default class SplitNode<T extends Node = Node> extends Node {
    node: T;
    components: string;

    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    constructor(node: T, components?: SwizzleOption);

    getVectorLength(): number;
}
