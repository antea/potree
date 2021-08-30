/**
 * laslaz code taken and adapted from plas.io js-laslaz
 *      http://plas.io/
 *    https://github.com/verma/plasio
 *
 * Thanks to Uday Verma and Howard Butler
 *
 */
export class EptLaszipLoader {
    load(node: any): void;

    parse(node: any, buffer: any): Promise<void>;
}

export class EptLazBatcher {
    node: any;

    constructor(node: any);

    push(las: any): void;
}
