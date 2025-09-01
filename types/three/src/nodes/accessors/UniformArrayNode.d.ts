import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ArrayElementNode from "../utils/ArrayElementNode.js";
import BufferNode from "./BufferNode.js";

declare class UniformArrayElementNode extends ArrayElementNode {
    constructor(arrayBuffer: Node, indexNode: Node);
}

declare class UniformArrayNode<
    Value extends unknown[] = unknown[],
    Type extends string | null = string | null,
> extends BufferNode<unknown[]> {
    array: Value;
    elementType: Type;
    paddedType: string;

    readonly isArrayBufferNode: true;

    constructor(value: Value, elementType?: Type);

    getPaddedType(): string;

    element(indexNode: Node): ShaderNodeObject<UniformArrayElementNode>;
}

export default UniformArrayNode;

export const uniformArray: <
    Value extends unknown[],
    Type extends string | null = null,
>(
    values: Value,
    nodeType?: Type,
) => ShaderNodeObject<UniformArrayNode<Value, Type>>;
