import InputNode from "./InputNode.js";
import NodeBuilder from "./NodeBuilder.js";

export default class ConstNode<
    T,
    Type extends string | null = string | null,
> extends InputNode<T, Type> {
    isConstNode: true;
    constructor(value: T, nodeType?: Type);

    generateConst(builder: NodeBuilder): string;
}
