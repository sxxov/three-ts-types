import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

interface LoopNodeObjectParameter {
    // TODO Expand to other types and update loop function types appropriately
    type?: "int" | "uint" | "float";
    // TODO The variable name should affect the type of the loop function
    // name?: string;
    start: number | Node;
    end: number | Node;
    condition?: string;
}

type LoopNodeParameter = Node | number | LoopNodeObjectParameter;

declare class LoopNode<Params extends unknown[] = unknown[]> extends Node {
    params: Params;

    constructor(params?: Params);

    getProperties(builder: NodeBuilder): unknown;
}

export default LoopNode;

interface Loop {
    (i: LoopNodeParameter, func: (inputs: { readonly i: number }) => void): ShaderNodeObject<LoopNode>;
    (
        i: LoopNodeParameter,
        j: LoopNodeParameter,
        func: (inputs: { readonly i: number; readonly j: number }) => void,
    ): ShaderNodeObject<LoopNode>;
}

export const Loop: Loop;
export const Continue: () => ShaderNodeObject<Node>;
export const Break: () => ShaderNodeObject<Node>;
