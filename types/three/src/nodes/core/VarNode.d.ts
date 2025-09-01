import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

declare class VarNode<
    T extends Node = Node,
    Name extends string | null = string | null,
    ReadOnly extends boolean = boolean,
> extends Node {
    node: T;
    name: Name;

    readonly isVarNode: true;

    readOnly: ReadOnly;

    intent: boolean;

    constructor(node: T, name?: Name, readOnly?: ReadOnly);

    setIntent(value: boolean): this;
    getIntent(): boolean;
}

export default VarNode;

export const Var: <
    T extends Node,
    Name extends string | null = null,
>(node: T, name?: Name) => ShaderNodeObject<
    VarNode<T, Name, false>
>;

export const Const: <
    T extends Node,
    Name extends string | null = null,
>(node: T, name?: Name) => ShaderNodeObject<
    VarNode<T, Name, true>
>;

export const VarIntent: (node: Node) => Node;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVar: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
        toConst: (node: Node, name?: string | null) => ShaderNodeObject<VarNode>;
        toVarIntent: (node: Node) => Node;
    }
}
