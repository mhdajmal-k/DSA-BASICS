class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class doublelist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0

    }
    append(value){
        const node=new Node(value)
        if (!this.head) {
            this.head=node
            this.tail=node
        }else{

            this.tail.next=node
            node.prev=this.tail
            this.tail=node

        }
        this.size++
    }
    prepend(value){
        const node=new Node(value)
        if (!this.head) {
            this.head=node
            this.tail=node
            this.prev=null
        }else{
            node.next=this.head
            this.head.prev=this.head
            this.head=node
        }
        this.size++
    }
    printBackward(){
       let current=this.tail
       let list=""
       while (current) {
        list+=`${current.value} `
        current=current.prev
       }
       console.log(list)
       return
    }
    dublicate(){
        let dublicate=new Set()
        let curr=this.head
        let prev=null
        let dup=[]
        while (curr) {
            if (dublicate.has(curr.value)) {
                prev.next=curr
                dup.push(curr.value)

            }else{
               dublicate.add(curr.value)
               prev=curr
            }
            curr=curr.next
        }
        return dup
    }
}

const list =new doublelist()
list.append(12)
list.append(13)
list.append(14)
list.append(14)
list.printBackward()
console.log(list.dublicate());

