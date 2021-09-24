import { toTypeString } from "@vue/shared";

{
  function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4));
}
{
  const add = function (n: number, m: number): number {
    return n + m;
  };
  console.log(add(2, 4));
}
{
  const add = (n: number, m: number): number => n + m;
  console.log(add(2, 4));
}
{
  const hello = (): void => console.log("hello!");
  hello();
}

{
  interface NumOp {
    (n: number, m: number): number;
  }

  const add: NumOp = (n, m) => n + m;
  const sebtract: NumOp = (n, m) => n - m;

  console.log(add(1, 2));
  console.log(sebtract(7, 2));
}

{
  const add: (n: number, m: number) => number = (n, m) => n + m;
  const subtract: (n: number, m: number) => number = function (n, m) {
    return n - m;
  };
}

{
  const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
  console.log("toArray");
  console.log(toArray(8, 3));
  console.log(toArray("foo", "bar"));
  // console.log(toArray(2, "bar"));
  // 1つ目の引数の型が当てはまるので err
}

{
  const toArrayVariably = <T>(...args: T[]): T[] => [...args];
  console.log(toArrayVariably(1, 2, 3, 4, 5));
  // console.log(toArrayVariably(1, "2", 3));
  // 引数の型が number のため err
}

class Rectangle {
  readonly name = "rectangle";
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}

{
  class Square extends Rectangle {
    // readonly name = "square";
    // err
    // side: number;

    constructor(side: number) {
      super(side, side);
    }
  }
  const square = new Square(11);
}

{
  class Square {
    readonly name = "square";
    side: number;

    constructor(side: number) {
      this.side = side;
    }

    getArea = (): number => new Rectangle(this.side, this.side).getArea();
  }
}

{
  interface Shape {
    readonly name: string;
    getArea: () => number;
  }

  interface Quadrangle {
    sideA: number;
    sideB?: number;
    sideC?: number;
    sideD?: number;
  }

  class Rectangle implements Shape, Quadrangle {
    readonly name = "rectangle";
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
      this.sideA = sideA;
      this.sideB = sideB;
    }

    getArea = (): number => this.sideA * this.sideB;
  }
}

class Point {
  x: number = 0;
  y: number = 0;
}
const pointA = new Point();
const pointB: Point = { x: 2, y: 4 };
interface Point3d extends Point {
  z: number;
}
const pointC: Point3d = { x: 5, y: 5, z: 10 };

type Unit = "USD" | "EUR" | "JPY" | "GBP";
type TCurrency = {
  unit: Unit;
  amount: number;
};
interface ICurrency {
  unit: Unit;
  amount: number;
}
const priceA: TCurrency = { unit: "JPY", amount: 1000 };
const priceB: TCurrency = { unit: "USD", amount: 10 };

interface User {
  name: string;
}
interface User {
  age: number;
}
interface User {
  species: "rabbit" | "bear" | "fox" | "dog";
}
const rolley: User = {
  name: "Rolley Cocker",
  age: 8,
  species: "dog",
};

let id1: number | string = 20000;
let id2: number | string = "20000";

type A = {
  foo: number;
  bar?: string;
};
type B = {
  foo: string;
};
type C = {
  bar: string;
};
type D = {
  baz: boolean;
};
type AorB = A | B;
type AorC = A | C;
type AorD = A | D;

const AorBObject: AorB = {
  foo: 1000,
  bar: "12",
};
const AorDObject: AorD = {
  foo: 1000,
  bar: "12",
  baz: true,
};

type Some = number & string;
// let id: Some = 100;
// number かつ string なので err

type AandB = A & B;
type AandC = A & C;
type CandAorB = (C & A) | B;

let foo: string | null = "fuu";
foo = null;

type Resident = {
  familyName: string;
  lastName: string;
  mom?: Resident;
};
const getMonName = (resident: Resident): string => resident.mom!.lastName;
const patty = {
  familyName: "Hope-rabbit",
  lastName: "patty",
};
getMonName(patty);

console.log(typeof 100);
// number
const arr = [1, 2, 3];
console.log(typeof arr);
// object

type NumArr = typeof arr;
const val1: NumArr = [2, 3, 4];
// const val2: NumArr = ["foo", "bar", "baz"];
// err - 型 number[] のためエラー

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log("a in obj");
