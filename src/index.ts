//  What is TypeScript? Why Should You Use It?

// ### What is TypeScript?
// TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional static types to JavaScript, allowing for better tooling, error checking, and code maintainability.

// ### Why Should You Use TypeScript?
// 1. **Type Safety**: Helps catch errors at compile-time rather than runtime.
// 2. **Improved IDE Support**: Offers better autocompletion, navigation, and refactoring.
// 3. **Modern JavaScript Features**: Supports ES6+ features and compiles down to ES5 for compatibility.
// 4. **Scalability**: Makes it easier to manage large codebases.
// 5. **Interoperability**: Works seamlessly with existing JavaScript libraries and frameworks.

// ## tsconfig.json Rundown

// The `tsconfig.json` file is the configuration file for TypeScript. It specifies the root files and the compiler options required to compile the project.

// ### Basic `tsconfig.json`:
// ```json
// {
//   "compilerOptions": {
//     "target": "es6",        // Specify ECMAScript target version
//     "module": "commonjs",   // Specify module code generation
//     "strict": true,         // Enable all strict type-checking options
//     "esModuleInterop": true,// Enable compatibility with ES6 module systems
//     "outDir": "./dist"      // Redirect output structure to the dist directory
//   },
//   "include": ["src"]        // Include all TypeScript files in the src directory
// }
// ```

// ## Type Annotations

// Type annotations allow you to explicitly specify the types of variables, function parameters, and return values.

// ### Examples:
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isDone: boolean = false;

function greet(name: string): string {
  return `Hello, ${name}`;
}

let greeting: string = greet("Mark");
console.log(greeting); // Output: Hello, Mark

// ## Interfaces and Types

// Interfaces and types in TypeScript allow you to define custom types.

// ### Interface Example:
interface Person {
  name: string;
  age: number;
  greet(): string;
}

const john: Person = {
  name: "John",
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(john.greet()); // Output: Hello, my name is John

// ### Type Alias Example:
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point); // Output: { x: 10, y: 20 }

// ## Unions and Intersections

// ### Unions
// A union type allows a variable to be one of several types.
let value: string | number;
value = "Hello";
value = 42;

function format(input: string | number): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  } else {
    return `Number: ${input}`;
  }
}

console.log(format("Hello")); // Output: String: Hello
console.log(format(42)); // Output: Number: 42

// ### Intersections
// An intersection type combines multiple types into one.

interface Draggable {
  drag(): void;
}

interface Resizable {
  resize(): void;
}

type UIElement = Draggable & Resizable;

const button: UIElement = {
  drag() {
    console.log("Dragging...");
  },
  resize() {
    console.log("Resizing...");
  },
};

button.drag(); // Output: Dragging...
button.resize(); // Output: Resizing...

// ## Enums

// Enums allow you to define a set of named constants.

// ### Example:
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0 (the value of Direction.Up)

// ## Generics

// Generics allow you to create reusable components that can work with any data type.

// ### Example:
function identity<T>(value: T): T {
  return value;
}

let num: number = identity<number>(42);
let str: string = identity<string>("Hello");

console.log(num); // Output: 42
console.log(str); // Output: Hello

// ## Read-Only Variables

// Read-only variables are variables that cannot be reassigned after their initial value is set.

// ### Example:
const readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4];
// readonlyArray.push(5); // Error: Property 'push' does not exist on type 'readonly number[]'.

interface Point2 {
  readonly x: number;
  readonly y: number;
}

let p: Point = { x: 10, y: 20 };
p.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.

// ## Additional Useful Information

// ### Type Inference
// TypeScript can automatically infer the type of a variable based on its initial value.
let inferredString = "Hello, world!"; // inferred as string
let inferredNumber = 42; // inferred as number

// ### Function Types
// You can specify types for function parameters and return values.
function add(a: number, b: number): number {
  return a + b;
}

// ### Optional Properties
// Properties can be marked as optional using a question mark (`?`).
interface User {
  name: string;
  age?: number; // age is optional
}

let user1: User = { name: "Alice" };
let user2: User = { name: "Bob", age: 25 };

// ### Default Parameters
// You can provide default values for function parameters.
function greet2(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet2()); // Output: Hello, Guest
