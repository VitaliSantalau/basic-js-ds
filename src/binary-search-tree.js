const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = toInsert(this.rootNode, data);

    function toInsert(node, value) {
      if(node === null) return new Node(value);
      if(node.data === value) return node;

      if(value < node.data) {
        node.left = toInsert(node.left, value);
      }
      if(value > node.data) {
        node.right = toInsert(node.right, value);
      }

      return node;
    }

   
  }

  has(data) {
    return search(this.rootNode, data);

    function search(node, value) {
      if(node === null) return false;
      if(node.data === value) return true;

      if(value < node.data) return search(node.left, value);
      if(value > node.data) return search(node.right, value);
    }
  }

  find(data) {
   return search(this.rootNode, data);

   function search(node, value) {
     if(node === null) return null;
     if(value === node.data) return node;

     if(value < node.data) return search(node.left, value);
     if(value > node.data) return search(node.right, value);
   }
  }

  remove(data) {
    this.rootNode = handlerRemove(this.rootNode, data);

    function handlerRemove(node, value) {
      if(node === null) return null;
      if(value < node.data) {
        node.left = handlerRemove(node.left, value);
        return node;
      }
      if(value > node.data) {
        node.right = handlerRemove(node.right, value);
        return node; 
      }
      if(value === node.data) {
        if(!node.left && !node.right) return null;
      
        if(node.left === null) {
          node = node.right;
          return node;
        }
        if(node.right === null) {
          node =node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = handlerRemove(node.right, minFromRight.data)

        return node;
      }
    }
    
    
  }

  min() {
    if(this.rootNode === null) return;
    let temp = this.rootNode;
    while(temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }

  max() {
    if(this.rootNode === null) return;
    let temp = this.rootNode;
    while(temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }

}

// const tree = new BinarySearchTree();

// tree.add(2);
// tree.add(3);
// tree.add(4);

// console.log(tree.root().data);