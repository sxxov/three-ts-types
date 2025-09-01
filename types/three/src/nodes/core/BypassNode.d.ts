import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class BypassNode<
    Output extends Node = Node,
    Call extends Node = Node,
> extends Node {
    isBypassNode: true;
    outputNode: Output;
    callNode: Call;

    constructor(outputNode: Output, callNode: Call);
}

export const bypass: <
    Output extends Node,
    Call extends Node,
>(
    outputNode: Output,
    callNode: Call,
) => ShaderNodeObject<BypassNode<Output, Call>>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        bypass: typeof bypass;
    }
}
