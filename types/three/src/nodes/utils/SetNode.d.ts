import TempNode from "../core/TempNode.js";

declare class SetNode<
    Source extends Node = Node,
    Target extends Node = Node,
> extends TempNode {
    sourceNode: Source;
    components: string[];
    targetNode: Target;

    constructor(sourceNode: Source, components: string[], targetNode: Target);
}

export default SetNode;
