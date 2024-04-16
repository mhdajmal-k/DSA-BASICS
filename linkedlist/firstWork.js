class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
}

const list= new LinkedList()
console.log("list size?",list.getSize());
console.log("list is empty?",list.isEmpty());

const li=new Node(50)

console.log(li);

