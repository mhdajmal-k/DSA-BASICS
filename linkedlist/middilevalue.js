class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.tali=null
        this.size=0
    }
    prepend(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tali=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++
    }
    print(){
        if(!this.head){
            console.log("list is empty")
            return
        }else{
            let current=this.head
            let list=""
            while(current){
                list+=`${current.value} `
                current=current.next
            }
            console.log(list)
        }
        return
    }
    middilevale(){
        if(!this.head){
            return "no list"
        }else{
            let first=this.head
            let second=this.head
            while(second && second.next){
                first=first.next
                second=second.next.next
            }
            return first
        }
    }
    search(value){
        if(!this.head){
            console.log("list is empty");
            return 
        }
        if(this.head.value==value){
            return 0
        }else{
            let i=0
             let current=this.head
            while(current){
                if(current.value==value){
                    return i
                }
                current=current.next
                i++
            }
     
        }
        return false
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
    removeByValue(value){
        if(this.head.value==value){
            this.head=this.head.next
        }else{
            let curr=this.head
            while(curr.next&&curr.next.value!==value){
                curr=curr.next
            }
            let remove=curr.next
            curr.next=remove.next
            return 0
        }
    }
    remove(index){
        if(index<0){
            console.log("invalid index")
            return
        }
        if(index==0){
            this.head=this.head.next

        }else{
            let curr=this.head
            for (let i = 0; i < index-1; i++) {
                curr=curr.next
                
            }
            let remove=curr.next
            curr.next=remove.next
        }
    }
}

let list=new LinkedList()
list.prepend(12)
list.prepend(13)
list.prepend(14)
list.prepend(15)
list.prepend(16)
list.prepend(14)
list.print()
console.log(list.middilevale());
console.log(list.search(13));
console.log(list.reverse());
list.removeByValue(14)
list.print()
