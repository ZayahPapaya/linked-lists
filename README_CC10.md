# Collection: Linked List

[Assignment instructions](https://canvas.instructure.com/courses/4898196/assignments/30604202)

## Challenge

  Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Features

- [x] Node class & next property (LinkedList)
- [x] Head = top/front property
- [x] push()
- [x] pop()
- [x] peek()
- [x] empty()
- [x] enqueue()
- [x] dequeue()

## Approach

Most of the tools required were already prepared beforehand when I was experimenting with linked lists, so I'll simply repurpose them. Push and enqueue already exist as insert and append. Peek is simply returning the value of the head. Empty simply returns boolean if there is or is not a head value. Dequeue/pop are both simply removal of an element, and in my organization both refer to the head and can be written as one function with two different names. They just return the element and change the head.

## TypeScript Instructions

- Verify your types are correct with `npm run check`
- Verify your implementation is correct with `npm run test`
  - When converting the value in a node to a string, use the `display` function in [`Collection.ts`](./src/Collection.ts).
- DO NOT edit [assignment.test.ts](./src/).
- Add your own tests to [LinkedList.test.ts](./src/LinkedList.test.ts).
- Tests must pass the github workflow for full credit.

## TypeScript resources

- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Common Types

- `boolean` is `true` or `false`.
- `number` is any JavaScript number - `5`, `-17`, `22.356`, `3/10`, `Number.MAX_VALUE`, etc.
- `string` is any JavaScript string - `'hello'`, `'goodbye'`, `\`I am ${age}\``
- `interface Person { name: string; age: number; }` is a JavaScript object with two properties, `name` and `age`. `name` must be a string, and `age` must be a number.
- `(name: string, age: number) => Person` is a function with two parameters, `name` (a string) and `age` (a number), which will return an object of type `Person`.
- `() => void` is a function with no arguments, and returns nothing.
  <!-- - `'hello'`' is the JavaScript string `'hello'` and no other string. -->
  <!-- - `'hello'|'goodbye'` is either the JavaScript string `'hello'` or the string `'goodbye'`, and no other strings. -->
