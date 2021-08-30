/**
 *
 * @class A doubly-linked-list of the least recently used elements.
 */
export class LRU {
    first: any;
    last: any;
    items: {};
    elements: number;
    numPoints: number;

    size(): number;

    contains(node: any): boolean;

    touch(node: any): void;

    remove(node: any): void;

    getLRUItem(): any;

    toString(): string;

    freeMemory(pointLoadLimit: any): void;

    disposeDescendants(node: any): void;
}

export class LRUItem {
    previous: any;
    next: any;
    node: any;

    constructor(node: any);
}
