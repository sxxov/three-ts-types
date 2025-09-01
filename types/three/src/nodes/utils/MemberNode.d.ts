import Node from "../core/Node.js";

declare class MemberNode<T extends Node = Node, Property extends string = string> extends Node {
    node: T;
    property: Property;
    readonly isMemberNode: true;

    constructor(node: T, property: Property);
}

export default MemberNode;
