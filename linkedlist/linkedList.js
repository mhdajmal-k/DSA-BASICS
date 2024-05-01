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
            console.log("hi");
            console.log("list is empty");
            return 
        }
       let curr=this.head
       let list=""
       while(curr){
        list +=`${curr.value} `
        curr=curr.next
       }
    //    console.log(list)
    }
    APPEND(value){
        let node=new Node(value)
            if(this.isEmpty()){
                this.head=node
            }else{

                let curr=this.head
                while(curr.next){
                    curr=curr.next
                }
                curr.next=node
            }
            this.size++
    }
    insert(value,index){
    
        if(index<0||index>this.size){
            console.log("invalid iNdex")
            return
        }
        if(index==0){
            let node=new Node(value)
            if(this.isEmpty()){
                this.head=node
            }else{
              node.next=this.head
              this.head=node

            }
            this.size++
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
    arrayToList(array){
        console.log("hi");
        if(array.length==0){
            console.log("hihihih");
            console.log("invalid array")
            return -1
        }
        for(let value of array){
            console.log(value);
            this.APPEND(value)
        }
        return
    }
    remove(index){
        console.log("hi");
        if(index<0||index>this.size){
            console.log("invalid index");
            return
        }
        let prev=this.head
        if(index==0){
            let remove=this.head
            this.head=remove.next
            this.size--
        }
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        let remove=prev.next
        prev.next=remove.next
        this.size--
    }
    reverse(){
        prev=null
        curr=this.head
        while(curr){
            next=this.head.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
    search(value){
        if (this.isEmpty()) {
            console.log("is Empty")
        }else{
            let i=0
            if(this.head.value==value){
                return i
            }else{
                while(curr){

                    let curr=this.head
                     if(curr.value==value){
                     return i
                     }
                     curr=curr.next
                     i++
                }

            }
        }
        return -1

    }
    isPalidrom(){
        let str=""
        let str2=""
        let curr=this.headnnnnnn
        while(curr){
            str+=curr.value
            str2+=curr.value+str2
            curr=curr.next
        }
        return str==str2
    }
}

let list=new LinkedList()
// console.log(list.isEmpty());
list.prepend(9)
list.print()
list.isPalidrom()
// list.APPEND(11)
// list.APPEND(12)
// list.insert(8,0)
// list.print()
// list.remove(0)
// list.print()





