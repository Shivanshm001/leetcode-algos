class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
        this.val = val;
        this.left = left;
        this.right = right;
    };
};

function insert(node: TreeNode | null, val: number): TreeNode {
    if(node === null) return new TreeNode(val,null,null);
        if(val < node.val){
            node.left = insert(node,val);
        } else {
            node.right = insert(node,val);
        }
    return node;
};

function createTree(nums: number[]) {
    let root = null;

    for(const num of nums){
        root = insert(root,num);
    }
    return root;    
}
let root = createTree([10,5,15,4]);

function inorderTreeTransversal(root: TreeNode | null){
    const result: number[] = []
    function traverse(node: TreeNode | null){
        if(!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };
    traverse(root);
    return result;
}

const val = inorderTreeTransversal(root);
console.log(val)