import Node from "../core/Node.js";

export default class ConvertNode<T extends Node = Node> extends Node {
    node: T;
    convertTo: string;
    constructor(node: T, convertTo: string);
}
