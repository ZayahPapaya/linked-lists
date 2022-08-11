import { LinkedList } from "./LinkedList";

describe("Stacks", () => {

  it("Can successfully push onto a stack & Can successfully instantiate an empty stack", () => {
    const list = new LinkedList<string>();

    list.push("Lumbridge");

    const str = list.toString();
    expect(str).toEqual(
      "{ Lumbridge } -> NULL"
    );
  });

  it("Can successfully push multiple values onto a stack", () => {
    const list = new LinkedList<string>();

    list.push("Lumbridge");
    list.push("Varrock");
    list.push("Falador");

    const str = list.toString();
    expect(str).toEqual(
      "{ Falador } -> { Varrock } -> { Lumbridge } -> NULL"
    );
  });

  it("Can successfully pop off the stack", () => {
    const list = new LinkedList<string>();

    list.push("Lumbridge");
    list.push("Varrock");
    list.push("Falador");

    expect(list.pop()).toEqual("Falador");
    const str = list.toString();
    expect(str).toEqual(
      "{ Varrock } -> { Lumbridge } -> NULL"
    );
  });

  it("Can successfully empty a stack after multiple pops", () => { // Throw exception if list is empty
    const list = new LinkedList<string>();

    list.push("Lumbridge");
    list.push("Varrock");
    list.push("Falador");
    list.pop();
    list.pop();
    list.pop();

    const str = list.toString();
    expect(str).toEqual(
      "NULL"
    );
  });

  it("Can throws an exception when popping an empty stack", () => { // Throw exception if list is empty
    const list = new LinkedList<string>();

    expect(() => { list.pop() }).toThrow();
  });

});

describe("Queue", () => {

  it("Can Can successfully enqueue into a queue & Can successfully instantiate an empty queue", () => {
    const list = new LinkedList<string>();

    list.NQ("Lumbridge");

    const str = list.toString();
    expect(str).toEqual(
      "{ Lumbridge } -> NULL"
    );
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const list = new LinkedList<string>();

    list.NQ("Lumbridge");
    list.NQ("Varrock");
    list.NQ("Falador");

    const str = list.toString();
    expect(str).toEqual(
      "{ Lumbridge } -> { Varrock } -> { Falador } -> NULL"
    );
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const list = new LinkedList<string>();

    list.NQ("Lumbridge");
    list.NQ("Varrock");
    list.NQ("Falador");

    expect(list.DQ()).toEqual("Lumbridge");
    const str = list.toString();
    expect(str).toEqual(
      "{ Varrock } -> { Falador } -> NULL"
    );
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const list = new LinkedList<string>();

    list.NQ("Lumbridge");
    list.NQ("Varrock");
    list.DQ();
    list.DQ();

    const str = list.toString();
    expect(str).toEqual(
      "NULL"
    );
  });

});

describe("Properties/Generic", () => {

  it("Can successfully peek into a list, seeing the expected value", () => {
    const list = new LinkedList<string>();

    list.NQ("Lumbridge");
    list.NQ("Varrock");
    list.NQ("Falador");

    expect(list.peek()).toEqual("Lumbridge");
  });

  it("Can throws an exception when peeking into an empty list", () => {
    const list = new LinkedList<string>();

    expect(() => { list.peek() }).toThrow();
  });

  it("Has a length", () => {
    const list = new LinkedList<string>();
    list.NQ("Falador");
    expect(list.length).toEqual(1);
  });
});