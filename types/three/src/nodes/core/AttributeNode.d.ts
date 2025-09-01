import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class AttributeNode<Type extends string | null = string | null> extends Node<Type> {
    constructor(attributeName: string, nodeType?: Type);

    setAttributeName(attributeName: string): this;

    getAttributeName(builder: NodeBuilder): string;
}

export const attribute: <Type extends string | null = null>(
    name: string,
    nodeType?: Type,
) => ShaderNodeObject<AttributeNode<Type>>;
