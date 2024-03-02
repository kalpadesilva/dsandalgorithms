import StudentTree from "./StuedentTree";

let stdtree = new StudentTree();

stdtree.insert(35);
stdtree.insert(45);
stdtree.insert(-10);
stdtree.insert(127);

console.log(stdtree.getTreeHeight());
console.log(stdtree.countNodes(stdtree.root));
// console.log(stdtree.inOrderTraversal(stdtree.root));