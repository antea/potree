export class BinaryLoader {
    version: any;
    boundingBox: any;
    scale: any;

    constructor(version: any, boundingBox: any, scale: any);

    load(node: any): void;

    parse(node: any, buffer: any): void;
}
