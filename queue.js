class Queue {
    constructor() {
        this._queue = []
    }

    addItem(...items) {
        items.forEach(item => this._queue.unshift(item))
    }

    processItem() {
        return this._queue.pop()
    }

    print() {
        console.log(this._queue)
    }
}


queue = new Queue()

console.log("Queue:\nin:")
for(let i = 1; i <= 5; i++) {
    console.log("item in: " + i)
    queue.addItem(i)
    queue.print()
}
console.log("out:")
for(let i = 1; i <= 5; i++) {
    console.log("item out: " + queue.processItem(i)) 
    queue.print()
}