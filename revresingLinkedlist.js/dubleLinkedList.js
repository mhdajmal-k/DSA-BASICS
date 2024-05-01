class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    insertFirst(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
            this.prev=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }
    print(){
        if (!this.head) {
            console.log("empty")
            return 
        }else{
           let curr=this.head
           let list=""
            while(curr){
                list+=`${curr.value} `
                curr=curr.next
            }
            console.log(list)
        }
    }
    reverseList(){
        let tail=this.tail
        let list=''
        while(tail!==null){
            list+=`${tail.value} `
            tail=tail.prev
        }
        console.log(list);
    }
    insertLast(value){
        const node=new Node(value)
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
    }
    insertLastWithOutTail(value){
        let curr=this.head
        while (curr.next) {
            curr=curr.next
        }
        const node=new Node(value)
        curr.next=node
        node.prev=curr
    }
    insertByIndex(index,value){
        if (index<0) {
            return
        }
        const node=new Node(value)
        if(index==0){
            if(!this.head){
                this.head=node
                this.tail=node
            
            }else{
                node.next=this.head
                this.head.prev=node
                this.head=node
            }
        }else{
            let curr=this.head
            for (let i = 0; i < index-1; i++) {
                curr=curr.next   
            }
            curr.next=node
            node.prev=curr
            node.next=curr.next
           node.next.prev=node
        }
    }
    removeLast(){
        if (!this.head.next) {
            this.head=null
            this.tail=null
        }
        this.tail=this.tail.prev
        console.log(this.tail);
        this.tail.next=null
    }
    search(value) {
        if (!this.head) {
            return false; // List is empty, value not found
        }
        let curr = this.head;
        let count = 0;
        while (curr && curr.value !== value) {
            count++;
            curr = curr.next;
        }
        if (!curr) {
            console.log("Value not found in the linked list.");
            return false; // Value not found
        } else {
            console.log(`Value found at position ${count}.`);
            return true; // Value found
        }
    }
    
}

let list=new DoublyLinkedList()
list.print()
list.insertFirst(10)
list.insertFirst(20)
list.insertFirst(30)
list.insertFirst(40)
list.insertFirst(50)
list.insertLast(9)
list.insertLast(10)
list.print()
list.insertLastWithOutTail(100)
list.removeLast()
list.print()
list.search(50)


