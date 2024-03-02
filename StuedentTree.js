"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentNode_1 = require("./StudentNode");
var StudentTree = /** @class */ (function () {
    function StudentTree() {
        this.root = null;
    }
    StudentTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    StudentTree.prototype.updateHeight = function (node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    };
    StudentTree.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    StudentTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    StudentTree.prototype.insertData = function (node, key) {
        if (!node) {
            return new StudentNode_1.default(key);
        }
        else if (key < node.key) {
            node.left = this.insertData(node.left, key);
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        }
        else {
            return node;
        }
        this.updateHeight(node);
        var balance = this.getBalanceFactor(node);
        if (balance > 1) {
            var select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            var select = node.right;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    StudentTree.prototype.rightRotate = function (node) {
        var x = node.left;
        var T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    StudentTree.prototype.leftRotate = function (node) {
        var x = node.right;
        var T2 = x.left;
        x.left = node;
        node.right = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    StudentTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    };
    // public searchStudent(node: StudentNode | null, key: number): boolean {      //  Method to search student by key
    //     if (node) {
    //         return this.searchStudent(node.left, key);
    //         if (node?.key === key) {
    //             return true;
    //         }
    //         return this.searchStudent(node.right, key);
    //     }
    //     return false;
    // }
    StudentTree.prototype.getTreeHeight = function () {
        return this.getHeight(this.root);
    };
    StudentTree.prototype.countNodes = function (node) {
        var count = 0;
        if (node) {
            this.countNodes(node.left);
            count++;
            this.inOrderTraversal(node.right);
        }
        return count;
    };
    return StudentTree;
}());
exports.default = StudentTree;
