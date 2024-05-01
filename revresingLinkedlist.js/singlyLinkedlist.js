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
    append(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
            //tail.next=node
            //this.tail=node
            this.tail=node
        }
     
    }
    prepend(value){
        console.log("hi");
        const node=new Node(value)
        if (!this.head) {
                this.head=node
                this.tail=node
                return
        }
        console.log("hihihih");
            node.next=this.head
            this.head=node
        return
    }
    print(){
        if (!this.head) {
            console.log("list is empty");
        return 
        }
           let curr=this.head
            let list=""
        while(curr){
            list+=`${curr.value} `
            curr=curr.next
        }
        console.log(list);
    }
    insertAt(index,value){
        if(index<0){
            console.log("invalidIndex");
            return 
        }
        const node=new Node(value)
        if(index==0){
            if(!this.head){
                this.head=node
                this.tail=node
               
            }else{
                node.next=this.head
                this.head=node
            }
        }
            else if(index==this.size){
                this.tail.next=node
                this.tail=node
            
        }else{
            let i=0
            let curr=this.head
            while(curr.next&&index!==i){
                curr=curr.next
                i++
            }
            node.next=curr.next
            curr.next=node
         
        }
    }
   deleteFirst(){
    this.head=this.head.next
    if(!this.head){
        this.tail=null
    }
   }
   deleteByIndex(index){
    if(index<0){
        console.log("invalid index");
        return
    }
    let curr=this.head
    for (let i = 0; i < index-1; i++) {
        curr=curr.next
        
    }
   let  remove=curr.next
    curr.next=remove.next
    if(!curr.next){
        this.tail=curr
    }
   }
   removeLast(){
    if (!this.head) {
        return
    }else if(!this.head.next){
        this.head=null
        this.tail=null
    }else{
       let curr=this.head
        
        while(curr.next.next){
            curr=curr.next
        }
        curr.next=null
        this.tail-curr
    }
    
   }
   removeByValue(value){
    if (!this.head) {
        return
    }
    if(this.head.value===value){
       this.head=this.head.next
       if(!this.head){
        this.tail=null
       }
    }else{
        let curr=this.head
        while(curr.next&&curr.next.value==value){
            curr=curr.next
        }
        if(curr.next){
            let remove=curr.next
            curr.next=remove.next
            if(!curr.next){
                this.tail=curr
            }
        }
    }
    return -1
   }
   reverse(){
    if (!this.head) {
        return
    }
    let curr=this.head
   let prev=null
    while(curr.next){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next

    }
    this.head=prev
    return
}
palindrome(){
let str=''
let str2=''
let curr=this.head
while(curr){
    str+=curr.value
    curr=curr.next
}
for(let i=str.length-1;i>=0;i--){
    str2+=str[i]
}
console.log(str);
console.log(str2);
if(str==str2){
    console.log(true);
}else{
    console.log(false);
}
}
}

let list=new LinkedList()
list.print()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
// list.print()
list.prepend(9)
// list.print()
list.insertAt(3,35)
list.print()
list.deleteFirst()
// list.deleteFirst()

list.print()
list.removeLast()
list.palindrome()
list.print()
