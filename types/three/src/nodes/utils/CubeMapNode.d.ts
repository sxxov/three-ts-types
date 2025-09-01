import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class CubeMapNode<T extends Node = Node> extends TempNode {
    envNode: T;

    constructor(envNode: T);
}

export default CubeMapNode;

export const cubeMapNode: (envNode: Node) => ShaderNodeObject<CubeMapNode>;
