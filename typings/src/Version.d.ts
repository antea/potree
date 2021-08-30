export class Version {
    version: any;
    versionMajor: number;
    versionMinor: number;

    constructor(version: any);

    newerThan(version: any): boolean;

    equalOrHigher(version: any): boolean;

    upTo(version: any): boolean;
}
