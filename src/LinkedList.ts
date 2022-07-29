import { Collection, display } from "./Collection";

// let name: type = value;

export class LinkedList<T> implements Collection<T> {
  // TODO
  head: Node<T> | undefined; // also known as start
  butt: Node<T> | undefined;
  // newNode{
  //   item: item,
  //   next: this.head
  // }

  // check for edge cases of fails to find node, before/after head or butt, 


  insert(item: T) {
    const newNode = {
      item: item,
      next: this.head,
    };
    this.head = newNode;
    //
    if (this.butt === undefined) {
      this.butt = newNode;
    }
  }

  before(target: T, item: T) { // find target node, point new node at target node, change point previous node to new node
    let found = false;
    let tracker = this.head;
    while (tracker !== undefined) { // loop until the end of the chain
      if (tracker.next?.item === target && found === false) { // the NEXT item is the target
        found = true;
        const holdNext = tracker.next; // store the entire next node
        tracker.next = { item, next: holdNext }; // reassign the current node's next to the inserting item, inserting item holds next as the old next node
      } else if (tracker.item === target && found === false) {
        found = true;
        const holdNext = this.head;
        this.head = { item, next: holdNext };
      }
      tracker = tracker.next;
    }
    if (found === false) {
      throw new Error('Could not find target node');
    }
  }

  after(target: T, item: T) {
    let tracker = this.head;
    let found = false;
    while (tracker !== undefined) {
      if (tracker.item === target && found === false) {
        found = true;
        const holdNext = tracker.next;
        tracker.next = { item, next: holdNext };
      }
      tracker = tracker.next;
    }
    if (found === false) {
      throw new Error('Could not find target node');
    }
  };

  append(item: T) {
    if (this.butt) {
      const newNode = {
        item: item,
        next: undefined,
      };
      this.butt.next = newNode;
      this.butt = newNode;
    } else {
      this.insert(item);
    }
  };

  includes(item: T): boolean {
    let tracker = this.head;
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  };

  toString(): string {
    // for each item, get its string using display(item)
    //put it in { }
    // put an arrow between items
    //end the list with NULL
    let tracker = this.head;
    let str = '';
    while (tracker !== undefined) {
      // This pattern is linked traversal in a nutshell.  Assign start, while loop over, step to next.
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }
    str += 'NULL';
    return str;
  };
};

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}