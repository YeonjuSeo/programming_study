// let count = 0;
// count += 1;

// const message: string = "hello world";
// const done: boolean = true;
// const numbers: number[] = [1, 2, 3];
// const messages: string[] = ["hello", "world"];

// let mingBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;

// let color: "red" | "orange" | "yellow" = "red";
// color = "yellow";

// function sum(x: number, y: number): number {
//   return x + y;
// }
// sum(1, 2);

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
// const total = sumArray([1, 2, 3, 4, 5]);

// function returnNothing(): void {
//   console.log("I am just saying hello world!");
// }

// Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});
