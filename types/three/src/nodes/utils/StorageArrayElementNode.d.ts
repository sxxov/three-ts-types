import StorageBufferNode from "../accessors/StorageBufferNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import ArrayElementNode from "./ArrayElementNode.js";

export default class StorageArrayElementNode<
    Element extends StorageBufferNode = StorageBufferNode,
    Index extends Node = Node,
> extends ArrayElementNode<Element, Index> {
    node: Element;

    readonly isStorageArrayElementNode: true;

    constructor(storageBufferNode: Element, indexNode: Index);

    get storageBufferNode(): Element;
    set storageBufferNode(value: Element);
}

export const storageElement: <
    Element extends StorageBufferNode,
    Index extends Node,
>(
    storageBufferNode: Element,
    indexNode: Index,
) => ShaderNodeObject<StorageArrayElementNode<Element, Index>>;
