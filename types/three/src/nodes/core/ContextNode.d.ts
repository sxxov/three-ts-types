import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import { NodeBuilderContext } from "./NodeBuilder.js";

declare class ContextNode<T extends Node = Node> extends Node {
    readonly isContextNode: true;

    node: T;
    value: NodeBuilderContext;

    constructor(node: T, value?: NodeBuilderContext);
}

export default ContextNode;

export const context: <T extends Node>(
    node: T,
    context?: NodeBuilderContext,
) => ShaderNodeObject<ContextNode<T>>;

export const uniformFlow: <T extends Node>(
    node: T,
) => ShaderNodeObject<ContextNode<T>>;

export const setName: <T extends Node>(
    node: T,
    label: string,
) => ShaderNodeObject<ContextNode<T>>;

/**
 * @deprecated "label()" has been deprecated. Use "setName()" instead.
 */
export function label<T extends Node>(
    node: T,
    label: string,
): ShaderNodeObject<ContextNode<T>>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        context: typeof context;
        label: typeof label;
        uniformFlow: typeof uniformFlow;
        setName: typeof setName;
    }
}
