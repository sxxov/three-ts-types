import { TextureDataType } from "../../constants.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export interface RTTNodeOptions {
    type: TextureDataType;
}

declare class RTTNode<T extends Node = Node> extends TextureNode {
    readonly isRTTNode: true;

    node: T;
    width: number | null;
    height: number | null;

    renderTarget: RenderTarget | null;

    textureNeedsUpdate: boolean;
    autoUpdate: boolean;

    pixelRatio?: number;

    constructor(node: T, width?: number | null, height?: number | null, options?: RTTNodeOptions);

    get autoResize(): boolean;

    setSize(width: number | null, height: number | null): void;

    setPixelRatio(pixelRatio: number): void;
}

export default RTTNode;

export const rtt: <T extends Node>(
    node: T,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => ShaderNodeObject<RTTNode<T>>;
export const convertToTexture: <T extends Node>(
    node: T,
    width?: number | null,
    height?: number | null,
    options?: RTTNodeOptions,
) => ShaderNodeObject<RTTNode<T>>;
