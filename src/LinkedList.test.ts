import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  it("runs my custom test", () => {
    const list: Collection<string> = new LinkedList<string>();
    expect(list).toBeDefined();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pippin");
    expect(list.includes("Frodo")).toBe(true);
    expect(list.includes("Sam")).toBe(true);
    expect(list.includes("Merry")).toBe(true);
    expect(list.includes("Pippin")).toBe(true);
    expect(list.includes("Bilbo")).toBe(false);
    //expect(list.includes("Frodo")).toBe(true);
    //console.log(JSON.stringify(list));
  });
});
