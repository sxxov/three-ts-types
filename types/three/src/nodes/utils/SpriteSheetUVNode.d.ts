import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class SpriteSheetUVNode<
    Count extends Node = Node,
    Uv extends Node = Node,
    Frame extends Node = Node,
> extends Node {
    countNode: Count;
    uvNode: Uv;
    frameNode: Frame;

    constructor(countNode: Count, uvNode?: Uv, frameNode?: Frame);
}

export const spritesheetUV: <
    Count extends Node,
    Uv extends Node,
    Frame extends Node,
>(
    countNode: Count,
    uvNode: Uv | null,
    frameNode: Frame | null,
) => ShaderNodeObject<SpriteSheetUVNode<Count, Uv, Frame>>;
