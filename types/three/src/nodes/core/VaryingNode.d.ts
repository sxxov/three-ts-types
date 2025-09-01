import { InterpolationSamplingMode, InterpolationSamplingType } from "../../constants.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeVarying from "./NodeVarying.js";

export default class VaryingNode<
    T extends Node = Node,
    Name extends string | null = string | null,
> extends Node {
    node: T;
    name: Name;
    readonly isVaryingNode: true;
    interpolationType: InterpolationSamplingType | null;
    interpolationSampling: InterpolationSamplingMode | null;

    constructor(node: T, name?: Name);

    setInterpolation(type: InterpolationSamplingType | null, sampling?: InterpolationSamplingMode | null): this;

    setupVarying(builder: NodeBuilder): NodeVarying;
}

export const varying: <
    T extends Node,
    Name extends string | null = null,
>(node: T, name?: Name) => ShaderNodeObject<
    VaryingNode<T, Name>
>;

export const vertexStage: <
    T extends Node,
    Name extends string | null = null,
>(node: T, name?: Name) => ShaderNodeObject<
    VaryingNode<T, Name>
>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toVarying: typeof varying;
        toVertexStage: typeof vertexStage;

        /**
         * @deprecated .varying() has been renamed to .toVarying().
         */
        varying: typeof varying;
        /**
         * @deprecated .vertexStage() has been renamed to .toVertexStage().
         */
        vertexStage: typeof vertexStage;
    }
}
