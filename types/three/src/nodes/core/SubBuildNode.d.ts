import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

declare class SubBuildNode<
    T extends Node = Node,
    Name extends string = string,
    Type extends string | null = string | null,
> extends Node {
    node: T;
    name: Name;

    readonly isSubBuildNode: true;

    constructor(node: T, name: Name, nodeType?: Type);
}

export default SubBuildNode;

export const subBuild: <
    T extends Node,
    Name extends string,
    Type extends string | null = null,
>(
    node: T,
    name: Name,
    type?: Type,
) => ShaderNodeObject<SubBuildNode<T, Name, Type>>;
