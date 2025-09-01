import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class FunctionOverloadingNode<
    Functions extends Node[] = Node[],
    Parameters extends Node[] = Node[],
> extends Node {
    functionNodes: Functions;
    parameterNodes: Parameters;

    constructor(functionNodes?: Functions, ...parameterNodes: Parameters);
}

export default FunctionOverloadingNode;

export const overloadingFn: <Functions extends Node[]>(
    functionNodes: Functions,
) => <Parameters extends Node[]>(
    ...params: Parameters
) => ShaderNodeObject<FunctionOverloadingNode<Functions, Parameters>>;
