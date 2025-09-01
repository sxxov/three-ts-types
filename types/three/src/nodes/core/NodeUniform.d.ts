import UniformNode from "./UniformNode.js";
/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader uniforms that are going to be generated
 * by the builder. A dictionary of node uniforms is maintained in {@link NodeBuilder#uniforms}
 * for this purpose.
 */
declare class NodeUniform<
    T,
    Type extends string | null = string | null,
> {
    readonly isNodeUniform: true;
    name: string;
    type: Type;
    node: UniformNode<T>;
    needsUpdate: boolean | undefined;
    /**
     * Constructs a new node uniform.
     *
     * @param {string} name - The name of the uniform.
     * @param {string} type - The type of the uniform.
     * @param {UniformNode} node - An reference to the node.
     */
    constructor(name: string, type: Type, node: UniformNode<T>);
    /**
     * The value of the uniform node.
     *
     * @type {any}
     */
    get value(): T;
    set value(val: T);
    /**
     * The id of the uniform node.
     *
     * @type {number}
     */
    get id(): number;
    /**
     * The uniform node's group.
     *
     * @type {UniformGroupNode}
     */
    get groupNode(): import("./UniformGroupNode.js").default;
}
export default NodeUniform;
