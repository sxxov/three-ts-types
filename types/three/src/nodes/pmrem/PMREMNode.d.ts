import { Texture } from "../../textures/Texture.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class PMREMNode<
    Tex extends Texture = Texture,
    Uv extends Node | null = null,
    Level extends Node | null = null,
> extends TempNode {
    uvNode: Uv;
    levelNode: Level;

    constructor(value: Tex, uvNode?: Uv, levelNode?: Level);

    set value(value: Tex);
    get value(): Tex;
}

export default PMREMNode;

export const pmremTexture: <
    Tex extends Texture,
    Uv extends Node | null = null,
    Level extends Node | null = null,
>(
    value: Tex,
    uvNode?: Uv,
    levelNode?: Level,
) => ShaderNodeObject<PMREMNode<Tex, Uv, Level>>;
