/**
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
 class BSTNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null; 
    }
  }
  
  /**
   * Represents an ordered tree of nodes where 
   * the data of left nodes are <= to their parent and
   * the data of nodes to the right are > their parent's data.
   */
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // HELPER METHOD
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
  
    // ================================ DAY 1 ALGOS ============
  
    /**
     * Determines if this tree is empty.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
      if(this.root == null){
        return true
      } 
      return false;
      
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current is default as root of the tree
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
    if(!current){
      return null;
    }
      while(current.left){
        current = current.left;
      }
      return current.data;
    }
  
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current is default as root of the tree
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
      if(!current.left){
        return current.data;
      }
      return this.minRecursive(current.left);
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current is default as root of the tree
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
      while(current.right){
        current = current.right;
      }
      return current.data
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current is default as root of the tree
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
      if(!current.right){
        return current.data
      }
      return this.maxRecursive(current.right);
    }
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);
  // oneNodeTree.print()
  
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
  // twoLevelTree.print()
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  20
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(6);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.right = new BSTNode(20);
  threeLevelTree.root.right.left = new BSTNode(13);
  threeLevelTree.print()
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
  // 
  
  // console.log(oneNodeTree.minRecursive()); //return 10
  // console.log(twoLevelTree.minRecursive()); //return 5
  // console.log(threeLevelTree.minRecursive()); //return 2 
  console.log(oneNodeTree.maxRecursive()); //return 10
  console.log(twoLevelTree.maxRecursive()); //return 5
  console.log(threeLevelTree.maxRecursive()); 