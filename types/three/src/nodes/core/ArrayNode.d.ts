import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import TempNode from "./TempNode.js";

declare class ArrayNode<
    const Values extends Node[] = Node[],
    Count extends Values["length"] = Values["length"],
> extends TempNode {
    count: Count;
    values: Values;
    readonly isArrayNode: true;

    constructor(nodeType: string, count: Count, values: Values);
}

export default ArrayNode;

interface ArrayFunction {
    (values: Node[]): ShaderNodeObject<ArrayNode>;
    (nodeType: string, count: number): ShaderNodeObject<ArrayNode>;
}

export const array: ArrayFunction;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toArray: typeof array;
    }
}
