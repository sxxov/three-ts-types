import Node from "../core/Node.js";
import { TempNode } from "../Nodes.js";

/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
export default class JoinNode<T extends Node[] = Node[]> extends TempNode {
    nodes: T;
    constructor(nodes: T);
}
