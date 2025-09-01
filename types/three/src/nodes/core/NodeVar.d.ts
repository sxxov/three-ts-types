/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader variables that are going to be generated
 * by the builder. A dictionary of node variables is maintained in {@link NodeBuilder#vars} for
 * this purpose.
 */
declare class NodeVar<
    Name extends string = string,
    Type extends string = string,
    ReadOnly extends boolean = boolean,
    Count extends number | null = number | null,
> {
    readonly isNodeVar: true;
    name: Name;
    type: Type;
    readOnly: ReadOnly;
    count: Count;
    /**
     * Constructs a new node variable.
     *
     * @param {string} name - The name of the variable.
     * @param {string} type - The type of the variable.
     * @param {boolean} [readOnly=false] - The read-only flag.
     * @param {?number} [count=null] - The size.
     */
    constructor(name: Name, type: Type, readOnly?: ReadOnly, count?: Count);
}
export default NodeVar;
