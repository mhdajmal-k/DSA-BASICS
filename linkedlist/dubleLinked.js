class Node{
    constructor(data){
        this.data=data
        this.prev=null
        this.next=null
    }
}

class DoubleListkedlist{
    constructor(){
        this.head=null
    }
    addFirst(data){
        const node=new Node(data)
        if(!this.head){
            this.head=node
        }else{
          node.nex=this.head
          this.head.prev=node
          this.head=node
        }
    }
    addToList(data){
        const node=new Node(data)
        if(!this.head){
            this.head=node
            return 
        }
        let current=this.head
        while (current.next) {
            current=current.next
        }
        current.next=node
        node.prev=current
    }
    insert(index,data){
        const node=new Node(data)
        if(index==0){
            if(!this.head){

                this.head=node
            }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        }  else{
            let current=this.head
            for (let i = 0; i < index-1; i++) {
              current=current.next
            }
            node.next=current.next
            node.prev=current
            current.next=node
            current.next.prev=node

        }

    }
    remove(){
        this.head=this.head.next
        this.head.prev=null

    }
    removeLast(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head=null
        }
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        let remove=current.next
        current.next=remove.next

    }
}