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
        return this.size==0
    }
    getSize(){
        return this.size
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
           let current=this.head
           this.tail.next=node
           this.tail=node
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
         
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        let current=this.head
        let list=''
        while(current){
            list+=`${current.value} `
            current=current.next

        }
        console.log(list);
    }
    arrayToLinkedList(arr){
        for(let value of arr){
            this.append(value)
            this.size++
        }


    }
    insertByIndex(value,index){
        if(index<0||index>this.size){
            console.log("invalid index")
            return
        }
        if(index==0){
            console.log("here")
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    search(value){
        if(this.isEmpty()){
            console.log("not list")
        }else{
            let i=0
            let curr=this.head
            while(curr){
                if(curr.value==value){
                    return i
                }
                curr=curr.next
                i++
            }
            return -1
        }
    }
    remove(index){
        if(this.isEmpty()){
            return 
        }
        if(index<0||index>this.size){
            console.log("invalid index")

        }else{
            if(index==0){
                this.head.next=this.head
            }else{
                let  prev=this.head
                for(let i=0;i<index-1;i++){
                    prev=prev.next
                }
                let remove=prev.next
                prev.next=remove.next
            }
            this.size--

        }
        return
    }
    removeByVale(value){
        if(this.isEmpty()){
            return
        }
        if(value==this.head.value){
            this.head=this.head.next
        }else{
           let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev.next
            }
            if(prev.next&&prev.next.value==value){
               let remove= prev.next
               prev.next=remove.next
            }
            this.size--
        }
        return
    }

    revers(){
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
    middileVale(){
        if (!this.head) {
            console.log("list is empty");
        return
        }
        let slow=this.head
        let fast=this.head
        while(fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        console.log(slow)
        return
    }

}

const list=new LinkedList()
// list.append(10)
// console.log(list.isEmpty())
// list.prepend(20)

// list.print()
// console.log(list.getSize())
// const array=[1,2,3,4,5,6]
// list.arrayToLinkedList(array)
// list.print()
// list.prepend(10)
// list.prepend(11)
// list.prepend(12)
// list.prepend(13)
// list.prepend(14)
// list.print()
// list.revers()
// list.print()
// console.log(list.search(14))
// list.insertByIndex(4,4)
list.print()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.revers()
list.remove(1)
list.removeByVale(1)
list.append(1)
list.append(2)
list.removeByVale(2)
list.print()