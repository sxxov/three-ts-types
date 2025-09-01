import Node from "./Node.js";
/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader attributes that are going to be generated
 * by the builder. Arrays of node attributes is maintained in {@link NodeBuilder#attributes}
 * and {@link NodeBuilder#bufferAttributes} for this purpose.
 */
declare class NodeAttribute<
    Name extends string = string,
    Type extends string | null = string | null,
    Reference extends Node | null = Node | null,
> {
    readonly isNodeAttribute: true;
    name: Name;
    type: Type;
    node: Reference;
    /**
     * Constructs a new node attribute.
     *
     * @param {string} name - The name of the attribute.
     * @param {string} type - The type of the attribute.
     * @param {?Node} node - An optional reference to the node.
     */
    constructor(name: Name, type: Type, node?: Reference);
}
export default NodeAttribute;
