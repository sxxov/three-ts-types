import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeObject, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BitcastNode<T extends Node = Node> extends TempNode {
    valueNode: T;
    conversionType: string;

    readonly isBitcastNode: true;

    constructor(valueNode: T, conversionType: string);
}

export default BitcastNode;

export const bitcast: <T extends Node | number>(
    x: T,
    y: string,
) => ShaderNodeObject<BitcastNode<NodeObject<T>>>;
