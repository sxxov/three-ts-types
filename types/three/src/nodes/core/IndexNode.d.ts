import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export type IndexNodeScope =
    | typeof IndexNode.VERTEX
    | typeof IndexNode.INSTANCE
    | typeof IndexNode.SUBGROUP
    | typeof IndexNode.INVOCATION_LOCAL
    | typeof IndexNode.INVOCATION_SUBGROUP
    | typeof IndexNode.DRAW;

declare class IndexNode<Scope extends IndexNodeScope = IndexNodeScope> extends Node {
    scope: Scope;

    readonly isInstanceNode: true;

    constructor(scope: Scope);

    static VERTEX: "vertex";
    static INSTANCE: "instance";
    static SUBGROUP: "subgroup";
    static INVOCATION_LOCAL: "invocationLocal";
    static INVOCATION_SUBGROUP: "invocationSubgroup";
    static DRAW: "draw";
}

export default IndexNode;

export const vertexIndex: ShaderNodeObject<IndexNode<typeof IndexNode.VERTEX>>;
export const instanceIndex: ShaderNodeObject<IndexNode<typeof IndexNode.INSTANCE>>;
export const subgroupIndex: ShaderNodeObject<IndexNode<typeof IndexNode.SUBGROUP>>;
export const invocationSubgroupIndex: ShaderNodeObject<IndexNode<typeof IndexNode.INVOCATION_SUBGROUP>>;
export const invocationLocalIndex: ShaderNodeObject<IndexNode<typeof IndexNode.INVOCATION_LOCAL>>;
export const drawIndex: ShaderNodeObject<IndexNode<typeof IndexNode.DRAW>>;
