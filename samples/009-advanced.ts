type Awesomeness = "Low" | "Medium" | "High";

interface Advocate {
    name: string;
    twitter: string;
    awesome: Awesomeness;
}

type AdvocateProperty = keyof Advocate;

var advocate: Advocate = { name: "Jeremy Likness", twitter: "@JeremyLikness", awesome: "High" };
//var advocate: Advocate = { name: "John Papa", twitter: "@John_Papa", awesome: "Unmeasurable" };

const getProperty = (adv: Advocate, key: AdvocateProperty) => adv[key];
console.log(getProperty(advocate, "twitter"));
//console.log(getProperty(advocate, "linkedin"));

console.log("...");

interface Point {
    x: number;
    y: number;
}

type Constructor<T> = new(...args: any[]) => T;

const Vertice = <T extends Constructor<Point>>(Base: T) => 
    class extends Base {
        direction: number;
    };

class PointImplementation implements Point {
    constructor(public x: number, public y: number) {}
}

const VerticeImplementation = Vertice(PointImplementation);

var vertice = new VerticeImplementation(1,1);
vertice.direction = Math.PI/2;

console.log("...");

// explicit type guard
const isNumber = (inp: any): inp is number => {
    console.log(`inp: ${inp} typeof inp: ${typeof inp}`);
    return typeof inp === "number";
}

var test:any = 5;
console.log(test.toFixed(0)); // no intellisense
if (isNumber(test)) {
    console.log(test.toFixed(0)); // intellisense
}

var secret:any = "my secret";
console.log(secret.charAt(0)); // no intellisense
if (typeof secret === "string") { // implicit type guard
    console.log(secret.charAt(0)); // intellisense
}