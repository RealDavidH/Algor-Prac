/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
                `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    // ================================ DAY 1 ALGOS

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {}

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        while (current) {
            current = current.left;
            if (current.left == null) {
                return current.data;
            }
        }
        return null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (!current.isEmpty) {
            if (current.left == null) {
                return current.data;
            }
            return this.minRecursive(current.left);
        } else return null;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        while (current) {
            current = current.right;
            if (current.right == null) {
                return current.data;
            }
        }
        return null;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (!current.isEmpty) {
            if (current.right == null) {
                return current.data;
            }
            return this.maxRecursive(current.right);
        } else return null;
    }

    // ================================ DAY 2 ALGOS

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        if (!this.root) return false;
        let runner = this.root;

        while (runner) {
            if (runner.data == searchVal) return true;
            if (runner.data > searchVal && runner.left != null) {
                runner = runner.left;
            } else if (runner.data < searchVal && runner.right != null) {
                runner = runner.right;
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (!current) return false;
        if (current.data === searchVal) {
            return true;
        }
        if (current.data < searchVal) {
            return this.containsRecursive(searchVal, current.right);
        }
        if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        return !startNode ? null : this.max(startNode) - this.min(startNode);
    }

    // ================================ DAY 3 ALGOS

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        let runner = this.root;
        if (runner === null) {
            this.root = new BSTNode(newVal);
            return this;
        }
        while (runner) {
            if (runner.data < newVal) {
                if (!runner.right) break;
                runner = runner.right;
            } else if (runner.data > newVal) {
                if (!runner.left) break;
                runner = runner.left;
            } else return this;
        }
        runner.data > newVal
            ? (runner.left = new BSTNode(newVal))
            : (runner.right = new BSTNode(newVal));
        return this;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        if (!curr) {
            this.root = new BSTNode(newVal);
            curr = this.root;
        }
        if (curr.data === newVal) return this;
        if (curr.data > newVal && !curr.left) curr.left = new BSTNode(newVal);
        if (curr.data < newVal && !curr.right) curr.right = new BSTNode(newVal);

        return curr.data > newVal
            ? this.insertRecursive(newVal, curr.left)
            : this.insertRecursive(newVal, curr.right);
    }

    // ================================ DAY 4 ALGOS

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {
        if (!node) return;

        vals.push(node.data);
        node.left && this.toArrPreorder(node.left, vals);
        node.right && this.toArrPreorder(node.right, vals);
        return vals;
    }

    toArrInorder(node = this.root, vals = []) {
        if (!node) return;

        node.left && this.toArrInorder(node.left, vals);
        vals.push(node.data);
        node.right && this.toArrInorder(node.right, vals);
        return vals;
    }

    toArrPostorder(node = this.root, vals = []) {
        if (!node) return;

        node.left && this.toArrPostorder(node.left, vals);
        node.right && this.toArrPostorder(node.right, vals);
        vals.push(node.data);
        return vals;
    }

    // ================================ DAY 5 ALGOS

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        let current = node.data;
        return this.toArrInorder().length;
    }

    size(node = this.root) {
        if (!node) return 0;

        let size = 0;
        size += node.left && this.size(node.left);
        size += node.right && this.size(node.right);
        return size + 1;
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    //

    height(node = this.root) {
        if (!node) return 0;

        let heightLeft = node.left ? this.height(node.left) : 0;
        let heightRight = node.right ? this.height(node.right) : 0;
        return heightLeft > heightRight ? heightLeft + 1 : heightRight + 1;
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     ***/

    isFull(node = this.root) {
        if (!node) return true;

        let isFullLeft = node.left ? this.isFull(node.left) : false;
        let isFullRight = node.right ? this.isFull(node.right) : false;
        return isFullLeft === isFullRight ? true : false;
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90)
    .insert(67);

console.log(fullTree.isFull());
