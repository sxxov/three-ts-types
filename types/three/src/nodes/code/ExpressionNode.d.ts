import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class ExpressionNode<
    Snipped extends string = string,
    Type extends string | null = string | null,
> extends TempNode<Type> {
    snipped: Snipped;

    constructor(snipped?: Snipped, nodeType?: Type);
}

export const expression: <
    Snipped extends string,
    Type extends string | null = null,
>(
    snipped: Snipped,
    nodeType?: Type,
) => ShaderNodeObject<ExpressionNode<Snipped, Type>>;
