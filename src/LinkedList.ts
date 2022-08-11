import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {

  head: Node<T> | undefined;
  butt: Node<T> | undefined;
  size = 0;

  // check for edge cases of fails to find node, before/after head or butt,

  static zip<T>(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    const zipped = new LinkedList<T>();
    let duration;
    let tracker1 = ll1.head;
    let tracker2 = ll2.head;
    ll1.size > ll2.size ? duration = ll1.size : duration = ll2.size;
    //console.log('DURATION:', duration, ll1, ll2);
    for (let i = 0; i < duration; i++) {
      if (tracker1?.item !== undefined) {
        zipped.append(tracker1.item);
        tracker1 = tracker1.next;
      }
      if (tracker2?.item !== undefined) {
        zipped.append(tracker2.item);
        tracker2 = tracker2.next;
      }
    }
    // check for which list's size is greater and use that for the tracker. Then walk through the list(s) at the same time and use insert on zipped alternating. Use a check for if the node exists in the event of null.
    return zipped;
  }



  insert(item: T) {
    const newNode = { item, next: this.head };
    this.head = newNode;
    this.size += 1;
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
    this.size += 1;
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
    this.size += 1;
    if (found === false) {
      throw new Error('Could not find target node');
    }
  };

  append(item: T) {
    if (this.butt) {
      const newNode = { item, next: undefined };
      this.butt.next = newNode;
      this.butt = newNode;
      this.size += 1;
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

  kthFromEnd(target: number): any {
    let tracker = this.head;
    // let listLength = 0;
    // while (tracker !== undefined) {
    //   listLength += 1;
    //   tracker = tracker.next;
    // }
    if (this.size <= 0 || target < 1) { throw new Error };
    //console.log(this.size);
    const loop = this.size - target;
    if (loop < 0) { throw new Error };
    tracker = this.head;
    for (let i = 0; i < loop; i++) {
      tracker = tracker?.next;
    }
    return tracker?.item;
  }

  push(item: T) {
    this.insert(item);
  }

  NQ(item: T) {
    this.append(item);
  }

  peek(): T {
    if (this.head === undefined) {
      throw new Error('Peeking on empty');
    }
    return this.head?.item;
  }

  remove(): T {
    //do the stuff
    if (this.head) {
      let target = this.head.item;
      this.head = this.head.next;
      this.size--;
      return target;
    } else {
      throw new Error('Removing from empty');
    }
  }

  DQ(): T {
    return this.remove();
  }

  pop(): T {
    return this.remove();
  }

  get length(): number {
    return this.size;
  }

  empty(): boolean {
    // return this.size === 0 ? true : false; // other way to do this
    return this.head ? true : false;
  }

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