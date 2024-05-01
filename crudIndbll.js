class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
        this.tail=null
    }
    AtTheFirst(value){
        const node=new Node(value)
        if (!this.head) {
        this.head=node
        this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
        return
    }
    AtTheEnd(value){
        const node=new Node(value)
        if (!this.head) {
        this.head=node
        this.tail=node
    }else{
        if(!this.tail){

            let  curr=this.head
            while (curr.next) {
             curr=curr.next
            }
            curr.next=node
            this.tail=node
            node.prev=curr
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
    }
    }
    print(){
        if (!this.head) {
            console.log("list is empty");
            return
        }
        let curr=this.head
        let list=''
        while (curr) {
            list+=`${curr.value} >> `
            curr=curr.next
        }
        console.log(list);

        return;
    }
    insertAtPosition(index,value){
        if(index<0||index>this.size){
            console.log("invalid index")
            return 
        }
        const node=new Node(value)
        if(index==1){
this.AtTheFirst(value)
        }else{

            let curr=this.head
            for (let i = 0; i < index-1; i++) {
              curr=curr.next
            }
            node.prev=curr
            node.next=curr.next
            if(curr.next!==null){
                curr.next.prev=node
            }else{
                this.tail=node
            }
            curr.next=node
            
        }
        this.size++
    }
    deleteFirstNode(){
        if(!this.head){
            console.log("invalid list");
            return

        }
        if(!this.head.next){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
        
        this.size--
    }
    deleteLast(){
        if (!this.head) {
            console.log('list is null');
            return
        }
        if(this.head==this.tail){
            this.head=null
            this.tail=null
        }else{
            if (!this.tail) {
                
                curr=this.head
                while (curr.next.next) {
                    curr=curr.next
                }
                curr.next=null
                curr.next.prev=null
            }else{
                this.tail=this.tail.prev
                this.tail.next=null

            }
        }
    }
    revers(){
        console.log("hi");
        let curr=this.head
        let prev=null
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
        return
    }
}

let list=new LinkedList()
list.AtTheFirst(10)
list.AtTheFirst(20)
list.AtTheFirst(30)
list.print()
list.AtTheEnd(40)
list.print()
list.insertAtPosition(1,35)
list.print()
list.insertAtPosition(5,15)
list.print()
list.revers()
list.print()


