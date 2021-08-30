/**
 * laslaz code taken and adapted from plas.io js-laslaz
 *    http://plas.io/
 *  https://github.com/verma/plasio
 *
 * Thanks to Uday Verma and Howard Butler
 *
 */
export class LasLazLoader {
    version: any;
    extension: any;

    constructor(version: any, extension: any);

    static progressCB(): void;

    load(node: any): void;

    parse(node: any, buffer: any): Promise<void>;

    handle(node: any, url: any): void;
}

export class LasLazBatcher {
    node: any;

    constructor(node: any);

    push(lasBuffer: any): void;
}
