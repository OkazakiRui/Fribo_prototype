const num1Arr: number[] = [1, 2, 3];
const num2Arr: Array<number> = [1, 2, 3];

const words: object = ["foo", "bar", "baz"];

const red: { rgb: string; opacity: number } = { rgb: "ff0000", opacity: 1 };

interface Color {
  readonly rgb: string;
  opacity: number;
  name?: string;
}
const turquoise: Color = {
  rgb: "00afcc",
  opacity: 1,
};
turquoise.name = "Turquoise Blue";
// turquoise.rgb = "0000000"; // err

interface Status {
  level: number;
  maxHP: number;
  maxMP: number;
  [attr: string]: number;
}
const myStatus: Status = {
  level: 99,
  maxHP: 999,
  maxMP: 999,
  attack: 999,
  defense: 999,
};

enum Pet {
  Cat,
  Dog,
  Rabbit,
}

console.log(Pet.Cat, Pet.Dog, Pet.Rabbit);
// 0 1 2

let Tom: Pet = Pet.Cat;
console.log(Tom);
// 0

Tom = Pet.Dog;
Tom = 12;
console.log(Tom);

enum Human {
  Man = "👨",
  Woman = "👩",
  Other = "🤖",
}
let Okazaki: Human = Human.Other;
Okazaki = Human.Man;
console.log(Okazaki);

// Okazaki = "👱‍♂️";
// err

let Mary: "Cat" | "Dog" | "Rabbit" = "Cat";
Mary = "Dog";
Mary = "Cat";
Mary = "Rabbit";
console.log(Mary);

const charAttrs: [number, string, boolean] = [1, "patty", true];
const spells: [number, ...string[]] = [7, "heal", "sizz", "snooz"];

const [id, username, isAdmin] = charAttrs;
console.log(id, username, isAdmin);

let val: any = 100;
val = "buz";
val = null;

{
  const str = `{"id":1, "username":"patty"}`;
  const user = JSON.parse(str);
  console.log(user.id, user.address.zipCode);
  // zipCode undefined
}
{
  const str = `{"id":1, "username":"patty"}`;
  const user: unknown = JSON.parse(str);
  console.log(user.id, user.address.zipCode);
  // unknown にすると err
}

// never は何も入らない
const greet = (friend: "Serval" | "Caracal" | "Cheetah") => {
  switch (friend) {
    case "Serval":
      return "Serval";
    case "Caracal":
      return "Caracal";
    // case "Cheetah":
    //   return "Cheetah";
    default: {
      const check: never = friend;
      // Cheetah が入るかもしれないので err が出る
    }
  }
};
