import Node from "../core/Node.js";
import { TempNode } from "../Nodes.js";

export default class ArrayElementNode<
    Element extends Node = Node,
    Index extends Node = Node,
> extends TempNode {
    node: Element;
    indexNode: Index;

    constructor(node: Element, indexNode: Index);
}
