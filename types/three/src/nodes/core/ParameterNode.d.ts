import { ShaderNodeObject } from "../tsl/TSLCore.js";
import PropertyNode from "./PropertyNode.js";

declare class ParameterNode<
    Name extends string | null = string | null,
> extends PropertyNode<Name> {
    readonly isParameterNode: true;

    constructor(nodeType: string, name?: Name);
}

export default ParameterNode;

export const parameter: <
    Name extends string | null = null,
>(type: string, name?: Name) => ShaderNodeObject<
    ParameterNode<Name>
>;
