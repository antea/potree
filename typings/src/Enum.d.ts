export class Enum {
    object: any;

    constructor(object: any);

    fromValue(value: any): any;
}

export class EnumItem {
    constructor(object: any);

    inspect(): string;
}
