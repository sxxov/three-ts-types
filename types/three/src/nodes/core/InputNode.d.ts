import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export type Precision = "low" | "medium" | "high";

export default abstract class InputNode<
    T,
    Type extends string | null = string,
> extends Node {
    isInputNode: true;
    value: T;
    precision: Precision | null;

    constructor(value: T, nodeType?: Type);

    getInputType(builder: NodeBuilder): string | null;
    setPrecision(precision: Precision): this;
}
