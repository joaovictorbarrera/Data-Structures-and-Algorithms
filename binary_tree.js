class BinaryTree {
    constructor(root = null) {
        this.root = root
    }

    depthFirstTraversal() {
        let stack = []
        let values = []
        if(!this.root) return []
        stack.push(this.root)
        while(stack.length > 0) {
            let current = stack.pop()
            values.push(current.data)
            if(current.right) stack.push(current.right)
            if(current.left) stack.push(current.left)
        }
        return values
    }

    breadthFirstTraversal() {
        let queue = []
        let values = []
        if(!this.root) return []
        queue.push(this.root)
        while(queue.length > 0) {
            let current = queue.pop()
            values.push(current.data)
            if(current.left) queue.unshift(current.left)
            if(current.right) queue.unshift(current.right)
        }
        return values
    }

    inOrderTraversal(root = this.root) {
        let elements = []

        if(root.left) elements = elements.concat(this.inOrderTraversal(root.left))
        elements.push(root.data)
        if(root.right) elements = elements.concat(this.inOrderTraversal(root.right))
        

        return elements
    }

    size() {
        return this.breadthFirstTraversal().length
    }

    insert(root, data) {
        if(data < root.data) {
            if(root.left) {
                this.insert(root.left, data)
            } else {
                root.left = new TreeNode(data)
                root.left.parent = root
            }
        }
        if (data > root.data) {
            if(root.right) {
                this.insert(root.right, data)
            } else {
                root.right = new TreeNode(data)
                root.right.parent = root
            }
        }
    }

    findMinValue() {
        if(!this.root) return
        let current = this.root
        while(current.left != null) {
            current = current.left
        }
        return current.data
    }

    findMaxValue() {
        if(!this.root) return
        let current = this.root
        while(current.right != null) {
            current = current.right
        }
        return current.data
    }

    getLevel(node) {
        let level = 0
        // if(!node.parent) return level
        while(node.parent != null) {
            level++
            node = node.parent
        }
        return level
    }

    findNode(val) {
        let queue = [this.root]
        // if(!this.root) return null
        // queue.push(this.root)
        while(queue.length > 0) {
            let current = queue.pop()
            // values.push(current.data)
            if(current.data === val) return current
            if(current.left) queue.unshift(current.left)
            if(current.right) queue.unshift(current.right)
        }
    }

    print() {
        let values = this.breadthFirstTraversal()
        values.forEach(val => console.log(this.getLevel(findNode(val))))
    }
}

class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        this.parent = null
    }
}

let vals = [6,1,3,8,5,9,7,4,2,290874, -20,2,2,2,2]
tree = new BinaryTree()
tree.root = new TreeNode(vals[0])
for(let i = 1; i < vals.length; i++) {
    tree.insert(tree.root, vals[i])
}
console.log(tree.depthFirstTraversal())
console.log(tree.breadthFirstTraversal())
console.log(tree)
console.log(tree.size())
console.log(tree.findMinValue())
console.log(tree.findMaxValue())
// tree.inOrderTraversal()
console.log(tree.inOrderTraversal())