import { Collection, display } from "./Collection";

// let name: type = value;

export class LinkedList<T> implements Collection<T> {
  // TODO
  start: Node<T> | undefined; // also known as head
  // newNode{
  //   item: item,
  //   next: this.start
  // }
  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }
  includes(item: T): boolean {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }
  toString(): string {
    // for each item, get its string using display(item)
    //put it in { }
    // put an arrow between items
    //end the list with NULL
    let tracker = this.start;
    let str = '';
    while(tracker !== undefined) {
      // This pattern is linked traversal in a nutshell.  Assign start, while loop over, step to next.
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }
    str += 'NULL';
    return str;
  }




}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}