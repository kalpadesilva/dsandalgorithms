import StudentNode from "./StudentNode";

class StudentTree {
    private studentCount: number;
    public root: StudentNode | null;
    constructor() {
        this.root = null;
        this.studentCount = 0;
    }

    private getHeight(node: StudentNode | null): number {
        return node ? node.height : 0;
    }

    private updateHeight(node: StudentNode): void {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    private getBalanceFactor(node: StudentNode): number {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    public insert(key: number): void {
        this.root = this.insertData(this.root, key);
    }

    private insertData(node: StudentNode | null, key: number): StudentNode {
        if (!node) {
            return new StudentNode(key);
        } else if (key < node.key) {
            node.left = this.insertData(node.left, key);
        } else if (key > node.key) {
            node.right = this.insertData(node.right, key);
        } else {
            return node;
        }
        this.updateHeight(node);
        let balance: number = this.getBalanceFactor(node);
        if (balance > 1) {
            let select = node.left as StudentNode;
            if (key < select.key) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left as StudentNode);
                return this.rightRotate(node);
            }
        } else if (balance < -1) {
            let select = node.right as StudentNode;
            if (key > select.key) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.left as StudentNode);
                return this.leftRotate(node);
            }
        }
        return node;
    }

    private rightRotate(node: StudentNode): StudentNode {
        let x: StudentNode = node.left as StudentNode;
        let T2 = x.right as StudentNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    private leftRotate(node: StudentNode): StudentNode {
        let x: StudentNode = node.right as StudentNode;
        let T2 = x.left as StudentNode;
        x.left = node;
        node.right = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    public inOrderTraversal(node: StudentNode | null): void {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    }

    public searchStudent(node: StudentNode | null, key: number): boolean {      //  Method to search student by key
        if (node) {
            return this.searchStudent(node.left, key);
            if (node?.key === key) {
                return true;
            }
            return this.searchStudent(node.right, key);
        }
        return false;
    }

    public getTreeHeight() {                        //  Method to get tree height
        return this.getHeight(this.root);
    }

    public countNodes(node: StudentNode | null): number {       //  Method to count nodes
        if (node) {
            this.countNodes(node.left);

            this.inOrderTraversal(node.right);
        }
        return count;
    }

    private delete(key: number): StudentNode {
        // if (!node) {
        //     return new StudentNode(key);
        // } else if (key < node.key) {
        //     node.left = this.insertData(node.left, key);
        // } else if (key > node.key) {
        //     node.right = this.insertData(node.right, key);
        // } else {
        //     return node;
        // }
        this.updateHeight(node);
        let balance: number = this.getBalanceFactor(node);
        if (balance > 1) {
            let select = node.left as StudentNode;
            if (key < select.key) {
                return this.rightRotate(node);
            } else {
                node.left = this.leftRotate(node.left as StudentNode);
                return this.rightRotate(node);
            }
        } else if (balance < -1) {
            let select = node.right as StudentNode;
            if (key > select.key) {
                return this.leftRotate(node);
            } else {
                node.right = this.rightRotate(node.left as StudentNode);
                return this.leftRotate(node);
            }
        }
        return node;
    }
}

export default StudentTree;