"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentNode = /** @class */ (function () {
    function StudentNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    return StudentNode;
}());
exports.default = StudentNode;
