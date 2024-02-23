export default class Stack<T> {
    public length: number;
    private head: Node<T> | null;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(item: T): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.length === 1) {
            const head = this.head;
            this.head = null;
            return head.value;
        }

        const head = this.head;
        this.head = head.prev;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

class Node<T> {
    value: T;
    prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.prev = null;
    }
}
