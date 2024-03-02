class StudentNode {
    key: number;
    left: StudentNode | null;
    right: StudentNode | null;
    height: number;

    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

export default StudentNode;