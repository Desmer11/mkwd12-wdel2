# Introduction to TypeScript

TypeScript is a typed superset of JavaScript that adds static types to the language. This helps catch errors early during development and provides better tooling and documentation.

## 1. Basic Types in TypeScript

TypeScript provides several built-in types to define the shape of data in your code. Here are some common types:

### **Number**

```ts
let age: number = 25;
```

Here, `age` is explicitly defined as a number.

### **String**

```ts
let firstName: string = "John";
```

In this example, `firstName` is defined as a string.

### **Boolean**

```ts
let isStudent: boolean = true;
```

The variable `isStudent` is defined as a boolean.

### **Array**

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

This defines `numbers` as an array of numbers. You can also use the `Array<Type>` syntax:

```ts
let fruits: Array<string> = ["apple", "banana", "cherry"];
```

### **Union Types**

A union type allows a variable to hold more than one type:

```ts
let id: number | string = 123;
id = "ABC123"; // Both are valid
```

The variable `id` can be a `number` or a `string`.

## 2. Type Aliases

You can create a new name for a type using **type aliases**:

```ts
type ID = number | string;

let userId: ID = 101;
let postId: ID = "post123";
```

Here, `ID` is a custom type that can be either a `number` or `string`.

## 3. Interfaces

Interfaces allow you to define the structure of an object. They describe the shape of an object, which can help ensure that objects follow a certain structure.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "Jane Doe",
  email: "jane@example.com",
};
```

The `User` interface defines the structure that objects must adhere to. The `user` object must have the `id`, `name`, and `email` properties.

### Optional Properties

You can mark properties as optional by using a question mark (`?`):

```ts
interface Product {
  id: number;
  name: string;
  price?: number;
}

const product: Product = {
  id: 101,
  name: "Laptop",
};
```

In this case, the `price` property is optional.

## 4. Functions with Types

In TypeScript, you can specify the types of function parameters and the return value:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Here, both `a` and `b` are numbers, and the function returns a number.

You can also define the types for more complex parameters, like objects:

```ts
function greetUser(user: { name: string; age: number }): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}
```

Alternatively, you can use an interface:

```ts
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

## 5. Type Assertions

Sometimes, you might know more about the type of a variable than TypeScript does. In such cases, you can use **type assertions** to tell the compiler what the type is.

```ts
let unknownValue: any = "Hello, TypeScript!";

let messageLength: number = (unknownValue as string).length;
```

Here, TypeScript doesn’t know the type of `unknownValue`, but by using `as string`, we assert that it is a string and access its `length` property.

## 6. `any` Type

If you want to disable type checking for a variable, you can use the `any` type:

```ts
let value: any = 42;
value = "Now a string!";
```

However, using `any` too much can defeat the purpose of TypeScript, so it should be used sparingly.

These are some of the basic concepts of TypeScript that will help you write safer and more predictable code. Once you're comfortable with these, you can explore more advanced features like **Generics**, **Enums**, and **Namespaces**.

# Node.js with TypeScript Learning Material

## 1. Initializing a Node.js Project with TypeScript

To set up a Node.js project with TypeScript, follow these steps:

1. **Initialize the project** by running:

   ```bash
   npm init -y
   ```

2. **Install TypeScript and required dependencies**:

   ```bash
   npm install typescript ts-node @types/node --save-dev
   ```

3. **Create a `tsconfig.json`** file by running:

   ```bash
    tsc --init
   ```

   This file helps TypeScript know how to compile your project.

## 2. Installing Express with TypeScript

Next, you’ll set up Express in your project with TypeScript support.

1. **Install Express and its TypeScript types**:

   ```bash
   npm install express
   npm install @types/express --save-dev
   ```

## 3. Creating a Simple GET Route with Express

Once you've set up Express, you can create a simple route.

1. In the `src` directory, create a file named `app.ts`.

2. Inside `app.ts`, write a basic Express server with a GET route:

   ```ts
   import express, { Request, Response } from "express";

   const app = express();
   const port = 3000;

   // Define a simple GET route
   app.get("/", (req: Request, res: Response) => {
     res.send("Hello, World!");
   });

   // Start the server
   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   ```

## 4. Running the Project

To run the TypeScript project:

1. **Install `nodemon`** to automatically restart the server when you make changes:

   ```bash
   npm install nodemon --save-dev
   ```

2. Update your `package.json` to add a script for running the server:

   ```json
   "scripts": {
     "start": "ts-node src/app.ts",
     "dev": "nodemon src/app.ts"
   }
   ```

3. **Run the server** using the `dev` script:

   ```bash
   npm run dev
   ```

   This will start the server and watch for changes.

## 5. Testing the GET Route

Open your browser or use a tool like **Postman** or **curl** and navigate to:

```
http://localhost:3000/
```

You should see **"Hello, World!"** displayed as the response.

---

With this setup, you have a basic Express server running on Node.js with TypeScript. You can now expand it by adding more routes, middleware, and functionalities!
