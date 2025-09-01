import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class OutputStructNode<Members extends Node[] = Node[]> extends Node {
    members: Members;

    readonly isOutputStructNode: true;

    constructor(...members: Members);
}

export const outputStruct: <
    Members extends Node[],
>(...members: Members) => ShaderNodeObject<
    OutputStructNode<Members>
>;
