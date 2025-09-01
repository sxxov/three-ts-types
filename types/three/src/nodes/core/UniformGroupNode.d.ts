import Node from "./Node.js";

export default class UniformGroupNode<Name extends string = string> extends Node {
    name: Name;
    version: number;

    shared: boolean;

    readonly isUniformGroup: true;

    constructor(name: Name, shared?: boolean);

    set needsUpdate(value: boolean);
}

export const uniformGroup: (name: string) => UniformGroupNode;
export const sharedUniformGroup: (name: string) => UniformGroupNode;

export const frameGroup: UniformGroupNode;
export const renderGroup: UniformGroupNode;
export const objectGroup: UniformGroupNode;
