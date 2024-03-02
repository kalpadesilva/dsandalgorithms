"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StuedentTree_1 = require("./StuedentTree");
var stdtree = new StuedentTree_1.default();
stdtree.insert(35);
stdtree.insert(45);
stdtree.insert(-10);
stdtree.insert(127);
console.log(stdtree.getTreeHeight());
console.log(stdtree.countNodes(stdtree.root));
// console.log(stdtree.inOrderTraversal(stdtree.root));