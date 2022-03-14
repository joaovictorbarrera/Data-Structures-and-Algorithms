class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    print() {
        let printing = ""
        let current;

        if(this.head != null) {
            printing += `data: ${this.head.data} next: ${this.head.next?.data} last: Null`
            current = this.head.next
        }
    
        while(current != null) {
            printing += "\n -> " + `data: ${current.data} next: ${current.next?.data} last: ${current.last?.data}`
            current = current.next
        }
        console.log(printing)
    }

    insertAtIndex(node, index) {
        if(index === 0) {this.insert(node); return}
        this.length++;

        let nodeAtIndex = this.getNodeAtIndex(index - 1)
        node.last = nodeAtIndex
        node.next = nodeAtIndex.next
        nodeAtIndex.next.last = node
        nodeAtIndex.next = node
    }

    insert(node) {
        this.length++;
        node.next = this.head
        if(this.head) this.head.last = node
        this.head = node
        
    }

    removeAtIndex(index) {
        if(index === 0) {this.remove(); return}
        this.length--
        let node = this.getNodeAtIndex(index - 1)
        node.next.next.last = node
        node.next = node.next.next
    }

    remove() {
        this.head = this.head.next
        this.head.last = null
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
        this.last = null
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
list.insert(new ListNode(1234123213))
list.print()
console.log(list.length)
