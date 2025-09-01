import Node from "../core/Node.js";
import { NodeObject, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class RemapNode<
    T extends Node = Node,
    InLow extends Node = Node,
    InHigh extends Node = Node,
    OutLow extends Node = Node,
    OutHigh extends Node = Node,
> extends Node {
    node: T;
    inLowNode: InLow;
    inHighNode: InHigh;
    outLowNode: OutLow;
    outHighNode: OutHigh;

    doClamp: boolean;

    constructor(node: T, inLowNode: InLow, inHighNode: InHigh, outLowNode?: OutLow, outHighNode?: OutHigh);
}

export const remap: <
    T extends Node,
    InLow extends Node | number,
    InHigh extends Node | number,
    OutLow extends Node | number = NodeObject<number>,
    OutHigh extends Node | number = NodeObject<number>,
>(
    node: T,
    inLowNode: InLow,
    inHighNode: InHigh,
    outLowNode?: OutLow,
    outHighNode?: OutHigh,
) => ShaderNodeObject<
    RemapNode<
        T,
        NodeObject<InLow>,
        NodeObject<InHigh>,
        NodeObject<OutLow>,
        NodeObject<OutHigh>
    >
>;
export const remapClamp: <
    T extends Node,
    InLow extends Node | number,
    InHigh extends Node | number,
    OutLow extends Node | number = NodeObject<number>,
    OutHigh extends Node | number = NodeObject<number>,
>(
    node: T,
    inLowNode: InLow,
    inHighNode: InHigh,
    outLowNode?: OutLow,
    outHighNode?: OutHigh,
) => ShaderNodeObject<
    RemapNode<
        T,
        NodeObject<InLow>,
        NodeObject<InHigh>,
        NodeObject<OutLow>,
        NodeObject<OutHigh>
    >
>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        remap: typeof remap;
        remapClamp: typeof remapClamp;
    }
}
