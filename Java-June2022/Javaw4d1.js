// W4D1 ALGOS
// Create these methods for each of the Stack classes with O(1) time complexity:
//   - push (adds new item and returns new size)
//   - pop (returns removed item)
//   - isEmpty
//   - size
//   - peek (return top item without removing)
// Recreate the stack class using a singly linked list to store the items instead of an array

/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items[this.items.length] = item;
        return this.items.length;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        let item = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return item;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.items.length < 1) return true;
        return false;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}

// LINKED LIST IMPLEMENTATION
class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    push(data) {
        if (isEmpty()) {
            this.head == new StackNode(data);
            return 1;
        }

        let runner = this.head;
        let count = 1;
        while (runner.next) {
            runner = runner.next;
            count++;
        }
        runner.next = new StackNode(data);
        return count + 1;
    }

    pop() {
        if (isEmpty()) {
            return null;
        }
        if (!this.head.next) {
            let head = this.head;
            this.head = null;
            return head.data;
        }

        let fast = this.head.next;
        let slow = this.head;

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = null;
        return fast.data;
    }

    peek() {
        if (isEmpty()) {
            return null;
        }
        let runner = this.head;

        while (runner.next) {
            runner = runner.next;
        }
        return runner.data;
    }

    isEmpty() {
        return !this.head ? true : false;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(4);
console.log(stack);
stack.pop();
console.log(stack);

let stackNode = new StackNode();

stack;

console.log;
