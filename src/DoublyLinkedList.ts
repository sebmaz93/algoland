export default class DoublyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(item: T): void {
    const newNode = new Node(item);
    newNode.next = this.head;

    if (this.head) {
      this.head.prev = newNode;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.length++;
  }

  append(item: T): void {
    const newNode = new Node(item);
    newNode.prev = this.tail;

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    this.length++;
  }

  remove(item: T): T | undefined {
    let current = this.head;

    while (current) {
      if (current.value === item) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        this.length--;
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current!.next;
    }

    return current!.value;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index out of bounds!");
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    const newNode = new Node(item);
    let current = this.head;

    for (let i = 0; i < idx - 1; i++) {
      current = current!.next;
    }

    newNode.next = current!.next;
    newNode.prev = current!.prev;
    current!.next!.prev = newNode;
    current!.next = newNode;
    this.length++;
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }

    if (idx === 0) {
      const removedItem = this.head!.value;
      this.head = this.head!.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return removedItem;
    }

    if (idx === this.length - 1) {
      const removedItem = this.tail!.value;
      this.tail = this.tail!.prev;

      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return removedItem;
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current!.next;
    }
    current!.prev!.next = current!.next;
    current!.next!.prev = current!.prev;
    this.length--;
    return current!.value;
  }
}

class Node<T> {
  value: T;
  public prev: Node<T> | null;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
