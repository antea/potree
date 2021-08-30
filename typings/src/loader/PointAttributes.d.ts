export class PointAttributes {
    attributes: any[];
    byteSize: number;
    size: number;
    vectors: any[];

    constructor(pointAttributes: any);

    add(pointAttribute: any): void;

    addVector(vector: any): void;

    hasColors(): boolean;

    hasNormals(): boolean;
}

export namespace PointAttributeTypes {
    namespace DATA_TYPE_DOUBLE {
        const ordinal: number;
        const name: string;
        const size: number;
    }
    namespace DATA_TYPE_FLOAT {
        const ordinal_1: number;
        export {ordinal_1 as ordinal};
        const name_1: string;
        export {name_1 as name};
        const size_1: number;
        export {size_1 as size};
    }
    namespace DATA_TYPE_INT8 {
        const ordinal_2: number;
        export {ordinal_2 as ordinal};
        const name_2: string;
        export {name_2 as name};
        const size_2: number;
        export {size_2 as size};
    }
    namespace DATA_TYPE_UINT8 {
        const ordinal_3: number;
        export {ordinal_3 as ordinal};
        const name_3: string;
        export {name_3 as name};
        const size_3: number;
        export {size_3 as size};
    }
    namespace DATA_TYPE_INT16 {
        const ordinal_4: number;
        export {ordinal_4 as ordinal};
        const name_4: string;
        export {name_4 as name};
        const size_4: number;
        export {size_4 as size};
    }
    namespace DATA_TYPE_UINT16 {
        const ordinal_5: number;
        export {ordinal_5 as ordinal};
        const name_5: string;
        export {name_5 as name};
        const size_5: number;
        export {size_5 as size};
    }
    namespace DATA_TYPE_INT32 {
        const ordinal_6: number;
        export {ordinal_6 as ordinal};
        const name_6: string;
        export {name_6 as name};
        const size_6: number;
        export {size_6 as size};
    }
    namespace DATA_TYPE_UINT32 {
        const ordinal_7: number;
        export {ordinal_7 as ordinal};
        const name_7: string;
        export {name_7 as name};
        const size_7: number;
        export {size_7 as size};
    }
    namespace DATA_TYPE_INT64 {
        const ordinal_8: number;
        export {ordinal_8 as ordinal};
        const name_8: string;
        export {name_8 as name};
        const size_8: number;
        export {size_8 as size};
    }
    namespace DATA_TYPE_UINT64 {
        const ordinal_9: number;
        export {ordinal_9 as ordinal};
        const name_9: string;
        export {name_9 as name};
        const size_9: number;
        export {size_9 as size};
    }
}

export class PointAttribute {
    name: any;
    type: any;
    numElements: any;
    byteSize: number;
    description: string;
    range: number[];

    constructor(name: any, type: any, numElements: any);
}

export namespace PointAttribute {
    export const POSITION_CARTESIAN: PointAttribute;
    export const RGBA_PACKED: PointAttribute;
    import COLOR_PACKED = RGBA_PACKED;
    export {COLOR_PACKED};
    export const RGB_PACKED: PointAttribute;
    export const NORMAL_FLOATS: PointAttribute;
    export const INTENSITY: PointAttribute;
    export const CLASSIFICATION: PointAttribute;
    export const NORMAL_SPHEREMAPPED: PointAttribute;
    export const NORMAL_OCT16: PointAttribute;
    export const NORMAL: PointAttribute;
    export const RETURN_NUMBER: PointAttribute;
    export const NUMBER_OF_RETURNS: PointAttribute;
    export const SOURCE_ID: PointAttribute;
    export const INDICES: PointAttribute;
    export const SPACING: PointAttribute;
    export const GPS_TIME: PointAttribute;
}
