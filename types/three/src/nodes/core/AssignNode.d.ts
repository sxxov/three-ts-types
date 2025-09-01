import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import TempNode from "./TempNode.js";

declare class AssignNode<
    Target extends Node = Node,
    Source extends Node = Node,
> extends TempNode {
    readonly isAssignNode: true;

    constructor(targetNode: Target, sourceNode: Source);

    needsSplitAssign(builder: NodeBuilder): boolean;
}

export default AssignNode;

export const assign: <
    Target extends Node,
    Source extends Node,
>(
    targetNode: Target,
    sourceNode: Source | number,
) => ShaderNodeObject<AssignNode<Target, Source>>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        assign: typeof assign;
    }
}
