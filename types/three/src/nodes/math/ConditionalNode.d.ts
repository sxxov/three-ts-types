import Node from "../core/Node.js";
import { NodeObject, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ConditionalNode<
    Conditional extends Node = Node,
    If extends Node = Node,
    Else extends Node | null = Node | null,
> extends Node {
    condNode: Conditional;
    ifNode: If;
    elseNode: Else;

    constructor(condNode: Conditional, ifNode: If, elseNode?: Else);
}

export default ConditionalNode;

export const select: <
    Conditional extends Node,
    If extends Node | number,
    Else extends Node | number | null = null,
>(
    condNode: Conditional,
    ifNode: If,
    elseNode?: Else,
) => ShaderNodeObject<
    ConditionalNode<
        Conditional,
        NodeObject<If>,
        NodeObject<Else>
    >
>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        select: typeof select;
    }
}
