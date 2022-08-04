import { LinkedList } from "./LinkedList";

describe("Linked List", () => {

  it("Finds K", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");
    list.insert("Varrok");
    list.append("Falador");
    list.insert("Catherby");

    expect(list.kthFromEnd(3)).toEqual("Varrok");

    const str = list.toString();
    expect(str).toEqual(
      "{ Catherby } -> { Varrok } -> { Lumbridge } -> { Falador } -> NULL"
    );
  });

  it("K is greater than the length of the list", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");
    list.insert("Varrok");
    list.insert("Catherby");

    expect(() => { list.kthFromEnd(5) }).toThrow();
  });

  it("K is equal to the length of the list", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");
    list.insert("Varrok");
    list.append("Falador");
    list.insert("Catherby");

    expect(list.kthFromEnd(4)).toEqual("Catherby");
  });

  it("K is a negative integer", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");
    list.insert("Varrok");
    list.append("Falador");
    list.insert("Catherby");

    expect(() => { list.kthFromEnd(-1) }).toThrow();
  });

  it("The list length = 1", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");

    expect(list.kthFromEnd(1)).toEqual("Lumbridge");
  });

  
  it("Request is 0", () => {
    const list = new LinkedList<string>();

    list.insert("Lumbridge");

    expect(() => { list.kthFromEnd(0) }).toThrow();
  });

});