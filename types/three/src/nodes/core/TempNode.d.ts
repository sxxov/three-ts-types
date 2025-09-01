import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class TempNode<
    Type extends string | null = string | null,
> extends Node<Type> {
    isTempNode: true;

    constructor(type: Type);

    hasDependencies(builder: NodeBuilder): boolean;
}
