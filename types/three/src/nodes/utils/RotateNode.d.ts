import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeObject, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class RotateNode<
    Position extends Node = Node,
    Rotation extends Node = Node,
> extends TempNode {
    positionNode: Position;
    rotationNode: Rotation;

    constructor(positionNode: Position, rotationNode: Rotation);
}

export const rotate: <
    Position extends Node,
    Rotation extends Node | number,
>(
    positionNode: Position,
    rotationNode: Rotation,
) => ShaderNodeObject<RotateNode<Position, NodeObject<Rotation>>>;
