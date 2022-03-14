class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    print() {
        let printing = ""
        let current;

        if(this.head != null) {
            printing += this.head.data
            current = this.head.next
        }
    
        while(current != null) {
            printing += " -> " + current.data
            current = current.next
        }
        console.log(printing)
    }

    insertAtIndex(node, index) {
        this.length++;
        if(index === 0) {this.insert(node); return}

        let nodeAtIndex = this.getNodeAtIndex(index - 1)
        node.next = nodeAtIndex.next
        nodeAtIndex.next = node
    }

    insert(node) {
        this.length++;
        node.next = this.head
        this.head = node
    }

    removeAtIndex(index) {
        if(index === 0) {this.remove(); return}
        this.length--
        let node = this.getNodeAtIndex(index - 1)
        node.next = node.next.next
    }

    remove() {
        this.head = this.head.next
        this.length--
    }

    getNodeAtIndex(index) {
        let nodeAtIndex = this.head
        for(let i = 0; i < index; i++) {
            nodeAtIndex = nodeAtIndex.next
        }
        return nodeAtIndex
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function add_items(list, numItems) {
    for(let i = numItems; i > 0; i--) {
        // let randomVal = Math.floor(Math.random() * 100) + 1
        list.insert(new ListNode(i))
    }
}

list = new LinkedList()
add_items(list, 100)
list.print()
console.log(list.length)

// list.insertAtIndex(new ListNode(61365236236), 1)
// list.insertAtIndex(new ListNode(1234123), 100)
// list.print()
// console.log(list.length)
