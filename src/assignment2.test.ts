import { LinkedList } from "./LinkedList";

describe("Linked List", () => {
  it("can append an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.append("Pippin");
    list.insert("Merry");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );
  });

  it("can insert before an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.before("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual("{ Merry } -> { Pippin } -> { Sam } -> { Frodo } -> NULL");
  });

  it("can insert after an element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.after("Sam", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Pippin } -> { Frodo } -> NULL"
    );
  });

  it("can append an element in an empty list", () => {
    const list = new LinkedList<string>();
    list.append("Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Pippin } -> NULL"
    );
  });

  it("can insert after the final element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.after("Frodo", "Pippin");

    const str = list.toString();
    expect(str).toEqual(
      "{ Merry } -> { Sam } -> { Frodo } -> { Pippin } -> NULL"
    );
  });

  it("can insert before the first element", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");

    list.before("Merry", "Pippin");

    const str = list.toString();
    expect(str).toEqual("{ Pippin } -> { Merry } -> { Sam } -> { Frodo } -> NULL");
  });

  it("can append multiple times", () => {
    const list = new LinkedList<string>();

    list.append("Frodo");
    list.append("Sam");
    list.append("Gandalf");

    const str = list.toString();
    expect(str).toEqual(
      "{ Frodo } -> { Sam } -> { Gandalf } -> NULL"
    );
  });
});