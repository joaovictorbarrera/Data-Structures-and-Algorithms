class Stack {
    constructor() {
        this._stack = []
    }

    addItem(...items) {
        items.forEach(item => this._stack.push(item))
    }

    processItem() {
        return this._stack.pop()
    }

    print() {
        console.log(this._stack)
    }
}


stack = new Stack()

console.log("Stack:\nin:")
for(let i = 1; i <= 5; i++) {
    console.log("item in: " + i)
    stack.addItem(i)
    stack.print()
}
console.log("out:")
for(let i = 1; i <= 5; i++) {
    console.log("item out: " + stack.processItem(i)) 
    stack.print()
}

