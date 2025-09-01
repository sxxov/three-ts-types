import NodeFunctionInput from "./NodeFunctionInput.js";

export default abstract class NodeFunction<
    Type extends string = string,
    Inputs extends NodeFunctionInput[] = NodeFunctionInput[],
    Name extends string = string,
    Precision extends string = string,
> {
    isNodeFunction: true;
    type: Type;
    inputs: Inputs;
    name: Name;
    precision: Precision;

    constructor(type: Type, inputs: Inputs, name?: Name, precision?: Precision);

    abstract getCode(name?: string): string;
}
