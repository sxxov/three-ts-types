import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeObject, ShaderNodeObject } from "../tsl/TSLCore.js";
import OperatorNode from "./OperatorNode.js";

export type MathNodeMethod1 =
    | typeof MathNode.RADIANS
    | typeof MathNode.DEGREES
    | typeof MathNode.EXP
    | typeof MathNode.EXP2
    | typeof MathNode.LOG
    | typeof MathNode.LOG2
    | typeof MathNode.SQRT
    | typeof MathNode.INVERSE_SQRT
    | typeof MathNode.FLOOR
    | typeof MathNode.CEIL
    | typeof MathNode.NORMALIZE
    | typeof MathNode.FRACT
    | typeof MathNode.SIN
    | typeof MathNode.COS
    | typeof MathNode.TAN
    | typeof MathNode.ASIN
    | typeof MathNode.ACOS
    | typeof MathNode.ATAN
    | typeof MathNode.ABS
    | typeof MathNode.SIGN
    | typeof MathNode.LENGTH
    | typeof MathNode.NEGATE
    | typeof MathNode.ONE_MINUS
    | typeof MathNode.DFDX
    | typeof MathNode.DFDY
    | typeof MathNode.ROUND
    | typeof MathNode.RECIPROCAL
    | typeof MathNode.TRUNC
    | typeof MathNode.FWIDTH
    | typeof MathNode.TRANSPOSE
    | typeof MathNode.DETERMINANT
    | typeof MathNode.INVERSE;

export type MathNodeMethod2 =
    | typeof MathNode.MIN
    | typeof MathNode.MAX
    | typeof MathNode.STEP
    | typeof MathNode.REFLECT
    | typeof MathNode.DISTANCE
    | typeof MathNode.DOT
    | typeof MathNode.CROSS
    | typeof MathNode.POW
    | typeof MathNode.TRANSFORM_DIRECTION;

export type MathNodeMethod3 =
    | typeof MathNode.MIX
    | typeof MathNode.CLAMP
    | typeof MathNode.REFRACT
    | typeof MathNode.SMOOTHSTEP
    | typeof MathNode.FACEFORWARD;

type MathNodeMethodSpecial =
    | typeof MathNode.ALL
    | typeof MathNode.ANY
    | typeof MathNode.EQUALS;

export type MathNodeMethod =
    | MathNodeMethod1
    | MathNodeMethod2
    | MathNodeMethod3;

export default class MathNode<
    Method extends MathNodeMethod | MathNodeMethodSpecial = MathNodeMethod,
    A extends Node = Node,
    B extends Node | null = Node | null,
    C extends Node | null = Node | null,
> extends TempNode {
    // 1 input

    static ALL: "all";
    static ANY: "any";
    static EQUALS: "equals";

    static RADIANS: "radians";
    static DEGREES: "degrees";
    static EXP: "exp";
    static EXP2: "exp2";
    static LOG: "log";
    static LOG2: "log2";
    static SQRT: "sqrt";
    static INVERSE_SQRT: "inversesqrt";
    static FLOOR: "floor";
    static CEIL: "ceil";
    static NORMALIZE: "normalize";
    static FRACT: "fract";
    static SIN: "sin";
    static COS: "cos";
    static TAN: "tan";
    static ASIN: "asin";
    static ACOS: "acos";
    static ATAN: "atan";
    static ABS: "abs";
    static SIGN: "sign";
    static LENGTH: "length";
    static NEGATE: "negate";
    static ONE_MINUS: "oneMinus";
    static DFDX: "dFdx";
    static DFDY: "dFdy";
    static ROUND: "round";
    static RECIPROCAL: "reciprocal";
    static TRUNC: "trunc";
    static FWIDTH: "fwidth";
    static TRANSPOSE: "transpose";
    static DETERMINANT: "determinant";
    static INVERSE: "inverse";

    // 2 inputs

    static MIN: "min";
    static MAX: "max";
    static STEP: "step";
    static REFLECT: "reflect";
    static DISTANCE: "distance";
    static DOT: "dot";
    static CROSS: "cross";
    static POW: "pow";
    static TRANSFORM_DIRECTION: "transformDirection";

    // 3 inputs

    static MIX: "mix";
    static CLAMP: "clamp";
    static REFRACT: "refract";
    static SMOOTHSTEP: "smoothstep";
    static FACEFORWARD: "faceforward";

    method: Method;
    aNode: A;
    bNode: B;
    cNode: C;

    readonly isMathNode: true;

    constructor(method: Method & MathNodeMethod1, aNode: A);
    constructor(method: Method & MathNodeMethod2, aNode: A, bNode: B);
    constructor(method: Method & MathNodeMethod3, aNode: A, bNode: B, cNode: C);
}

export const EPSILON: ShaderNodeObject<Node>;
export const INFINITY: ShaderNodeObject<Node>;
export const PI: ShaderNodeObject<Node>;
export const PI2: ShaderNodeObject<Node>;

type MathNodeParameter = Node | number;

type Unary<
    Method extends MathNodeMethod1 | MathNodeMethodSpecial = MathNodeMethod1,
    A extends MathNodeParameter = MathNodeParameter,
> = (
    a: A,
) => ShaderNodeObject<
    MathNode<
        Method,
        NodeObject<A>,
        null,
        null
    >
>;

export const all: Unary<typeof MathNode.ALL>;
export const any: Unary<typeof MathNode.ANY>;

/**
 * @deprecated "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"
 */
export const equals: Unary<typeof MathNode.EQUALS>;

export const radians: Unary<typeof MathNode.RADIANS>;
export const degrees: Unary<typeof MathNode.DEGREES>;
export const exp: Unary<typeof MathNode.EXP>;
export const exp2: Unary<typeof MathNode.EXP2>;
export const log: Unary<typeof MathNode.LOG>;
export const log2: Unary<typeof MathNode.LOG2>;
export const sqrt: Unary<typeof MathNode.SQRT>;
export const inverseSqrt: Unary<typeof MathNode.INVERSE_SQRT>;
export const floor: Unary<typeof MathNode.FLOOR>;
export const ceil: Unary<typeof MathNode.CEIL>;
export const normalize: <A extends Node | Vector3>(
    a: A,
) => ShaderNodeObject<
    MathNode<
        typeof MathNode.NORMALIZE,
        A extends Node ? A : Node,
        null,
        null
    >
>;
export const fract: Unary<typeof MathNode.FRACT>;
export const sin: Unary<typeof MathNode.SIN>;
export const cos: Unary<typeof MathNode.COS>;
export const tan: Unary<typeof MathNode.TAN>;
export const asin: Unary<typeof MathNode.ASIN>;
export const acos: Unary<typeof MathNode.ACOS>;
export const atan: <
    A extends MathNodeParameter,
    B extends MathNodeParameter,
>(a: A, b?: B) => ShaderNodeObject<
    MathNode<
        typeof MathNode.ATAN,
        NodeObject<A>,
        NodeObject<B>,
        null
    >
>;
export const abs: Unary<typeof MathNode.ABS>;
export const sign: Unary<typeof MathNode.SIGN>;
export const length: Unary<typeof MathNode.LENGTH>;
export const negate: Unary<typeof MathNode.NEGATE>;
export const oneMinus: Unary<typeof MathNode.ONE_MINUS>;
export const dFdx: Unary<typeof MathNode.DFDX>;
export const dFdy: Unary<typeof MathNode.DFDY>;
export const round: Unary<typeof MathNode.ROUND>;
export const reciprocal: Unary<typeof MathNode.RECIPROCAL>;
export const trunc: Unary<typeof MathNode.TRUNC>;
export const fwidth: Unary<typeof MathNode.FWIDTH>;
export const transpose: Unary<typeof MathNode.TRANSPOSE>;
export const determinant: <T extends Node>(x: T) => ShaderNodeObject<
    MathNode<
        typeof MathNode.DETERMINANT,
        T,
        null,
        null
    >
>;
export const inverse: <T extends Node>(x: T) => ShaderNodeObject<
    MathNode<
        typeof MathNode.INVERSE,
        T,
        null,
        null
    >
>;

type Binary<
    Method extends MathNodeMethod2 = MathNodeMethod2,
    A extends MathNodeParameter = MathNodeParameter,
    B extends MathNodeParameter = MathNodeParameter,
> = (a: A, b: B) => ShaderNodeObject<
    MathNode<
        Method,
        NodeObject<A>,
        NodeObject<B>,
        null
    >
>;
type UnaryMul = <A extends MathNodeParameter>(
    a: A,
) => ShaderNodeObject<
    OperatorNode<
        "*",
        NodeObject<A>,
        NodeObject<A>
    >
>;

export const min: <A extends MathNodeParameter, B extends MathNodeParameter>(
    x: A,
    y: B,
    ...values: MathNodeParameter[]
) => ShaderNodeObject<MathNode<typeof MathNode.MIN, NodeObject<A>, NodeObject<B>, null>>;
export const max: <A extends MathNodeParameter, B extends MathNodeParameter>(
    x: A,
    y: B,
    ...values: MathNodeParameter[]
) => ShaderNodeObject<MathNode<typeof MathNode.MAX, NodeObject<A>, NodeObject<B>, null>>;
export const step: Binary<typeof MathNode.STEP>;
export const reflect: Binary<typeof MathNode.REFLECT>;
export const distance: Binary<typeof MathNode.DISTANCE>;
export const difference: Binary<typeof MathNode.DISTANCE>; // alias?
export const dot: Binary<typeof MathNode.DOT>;
export const cross: (x: Node, y: Node) => ShaderNodeObject<MathNode>;
export const pow: Binary<typeof MathNode.POW>;
export const pow2: UnaryMul;
export const pow3: UnaryMul;
export const pow4: UnaryMul;
export const transformDirection: Binary<typeof MathNode.TRANSFORM_DIRECTION>;
export const cbrt: UnaryMul;
export const lengthSq: UnaryMul;

type Ternary<
    Method extends MathNodeMethod3 = MathNodeMethod3,
    A extends MathNodeParameter = MathNodeParameter,
    B extends MathNodeParameter = MathNodeParameter,
    C extends MathNodeParameter = MathNodeParameter,
> = (a: A, b: B, c: C) => ShaderNodeObject<
    MathNode<
        Method,
        NodeObject<A>,
        NodeObject<B>,
        NodeObject<C>
    >
>;

export const mix: Ternary<typeof MathNode.MIX>;
export const clamp: <
    A extends MathNodeParameter,
    B extends MathNodeParameter | undefined = undefined,
    C extends MathNodeParameter | undefined = undefined,
>(
    a: A,
    b?: B,
    c?: C,
) => ShaderNodeObject<
    MathNode<
        typeof MathNode.CLAMP,
        NodeObject<A>,
        B extends undefined ? null : NodeObject<B>,
        C extends undefined ? null : NodeObject<C>
    >
>;
export const saturate: UnaryMul;
export const refract: Ternary<typeof MathNode.REFRACT>;
export const smoothstep: Ternary<typeof MathNode.SMOOTHSTEP>;
export const faceForward: Ternary<typeof MathNode.FACEFORWARD>;

export const rand: (uv: MathNodeParameter) => ShaderNodeObject<OperatorNode>;

export const mixElement: Ternary<typeof MathNode.MIX>;
export const smoothstepElement: Ternary<typeof MathNode.SMOOTHSTEP>;
export const stepElement: Binary<typeof MathNode.STEP>;

/**
 * @deprecated
 */
export const atan2: typeof atan;

// GLSL alias function

export const faceforward: typeof faceForward;
export const inversesqrt: typeof inverseSqrt;

// Method chaining

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        all: typeof all;
        any: typeof any;
        equals: typeof equals;
        radians: typeof radians;
        degrees: typeof degrees;
        exp: typeof exp;
        exp2: typeof exp2;
        log: typeof log;
        log2: typeof log2;
        sqrt: typeof sqrt;
        inverseSqrt: typeof inverseSqrt;
        floor: typeof floor;
        ceil: typeof ceil;
        normalize: typeof normalize;
        fract: typeof fract;
        sin: typeof sin;
        cos: typeof cos;
        tan: typeof tan;
        asin: typeof asin;
        acos: typeof acos;
        atan: typeof atan;
        abs: typeof abs;
        sign: typeof sign;
        length: typeof length;
        lengthSq: typeof lengthSq;
        negate: typeof negate;
        oneMinus: typeof oneMinus;
        dFdx: typeof dFdx;
        dFdy: typeof dFdy;
        round: typeof round;
        reciprocal: typeof reciprocal;
        trunc: typeof trunc;
        fwidth: typeof fwidth;
        atan2: typeof atan2;
        min: typeof min;
        max: typeof max;
        step: typeof stepElement;
        reflect: typeof reflect;
        distance: typeof distance;
        dot: typeof dot;
        cross: typeof cross;
        pow: typeof pow;
        pow2: typeof pow2;
        pow3: typeof pow3;
        pow4: typeof pow4;
        transformDirection: typeof transformDirection;
        mix: typeof mixElement;
        clamp: typeof clamp;
        refract: typeof refract;
        smoothstep: typeof smoothstepElement;
        faceForward: typeof faceForward;
        difference: typeof difference;
        saturate: typeof saturate;
        cbrt: typeof cbrt;
        transpose: typeof transpose;
        determinant: typeof determinant;
        inverse: typeof inverse;
        rand: typeof rand;
    }
}
