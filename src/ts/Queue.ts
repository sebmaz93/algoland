class Node<T> {
    value: T;
    prev: Node<T> | null;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = new Node(item);
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        head.next = null;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
