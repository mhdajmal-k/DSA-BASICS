class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    preppend(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }else{

            node.next=this.head
             this.head=node
        }
        this.size++
    }
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let curr = this.head;
        let list = "";
        while (curr) {
            list += `${curr.value} `;
            curr = curr.next;
        }
        console.log(list);
    }
    reverse(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    
    
    
}

let list=new LinkedList()
list.preppend(12)
list.preppend(13)
list.preppend(14)
list.preppend(15)
list.print()
list.reverse()
list.print()


