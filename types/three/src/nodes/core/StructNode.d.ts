import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import StructTypeNode, { MembersLayout } from "./StructTypeNode.js";

declare class StructNode<Values extends Node[] = Node[]> extends Node {
    values: Values;

    constructor(structLayoutNode: StructTypeNode, values: Values);
}

export default StructNode;

export interface Struct<
    Layout extends MembersLayout = MembersLayout,
    Name extends string | null = string | null,
> {
    (): ShaderNodeObject<StructNode>;
    (values: Node[]): ShaderNodeObject<StructNode>;
    (...values: Node[]): ShaderNodeObject<StructNode>;
    layout: StructTypeNode<Layout, Name>;
    isStruct: true;
}

export const struct: <
    Layout extends MembersLayout,
    Name extends string | null = null,
>(
    membersLayout: MembersLayout,
    name?: Name,
) => Struct<Layout, Name>;
