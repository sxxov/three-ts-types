import { Texture } from "../../textures/Texture.js";
import { Node } from "../Nodes.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import OutputStructNode from "./OutputStructNode.js";

export function getTextureIndex(textures: ReadonlyArray<Texture>, name: string): number;

type MRTOutputNodes = { [name: string]: Node };

declare class MRTNode<
    Output extends MRTOutputNodes = MRTOutputNodes,
> extends OutputStructNode {
    outputNodes: Output;

    readonly isMRTNode: true;

    constructor(outputNodes: Output);

    has(name: string): boolean;

    get(name: string): Node;

    merge(mrtNode: MRTNode): ShaderNodeObject<MRTNode>;
}

export default MRTNode;

export const mrt: <
    Output extends MRTOutputNodes,
>(outputNodes: Output) => ShaderNodeObject<MRTNode<Output>>;
