/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
        this.data = data; //data -> 10
        this.next = null; //next -> next
    }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    // -----------W1D3 -------------
    /**
     * Creates a new node with the given data and inserts that node at the front
     * of the list.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        var newNode = new ListNode(data); //data -> 10
        newNode.next = this.head;
        this.head = newNode;
        // instantiate the ListNode with data
        // pointer of the newNode to the original head
        // reassign the head
        // edge case: how do we handle an empty list
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The data from the removed node.
     */
    removeHead() {}

    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        var runner = this.head;
        while (runner) {
            // while(runner != null)
            console.log(runner.data);
            runner = runner.next;
        }
    }
}

var sll1 = new SLL(); // EMPTY LIST
sll1.printList();


var sll2 = new SLL();
sll2.insertAtBack(5);
sll2.insertAtBack(6);
sll2.insertAtBack(7);
sll2.insertAtFront(14).insertAtFront(20);


// HEAD
// (5) -> (6) -> (7) -> NULL

sll2.printList();
