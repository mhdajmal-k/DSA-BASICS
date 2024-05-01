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
    prepend(value){
        const node=new Node(value)
        if (!this.head) {
            this.node=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node

        }
        this.size++
    }
    append(value){
            const node=new Node(value)
            if (!this.head) {
                this.head=node
                this.tail=node
            }else{
                this.tail.next=node
                this.tail=node
            }
            this.size++
    }
    deletLast(){
        if (!this.head) {
            console.log("list is empty");
            return
        }
        if(!this.head.next){
            this.head=null
            this.tail=null
        }else{
            let curr=this.head
            while (curr.next!==this.tail) {
                curr=curr.next
            }
            curr.next=null
            this.tail=curr
        }
    }
    printValues() {
        console.log("hi");
        if(!this.head){
           console.log("list is empty");
            return 
        }
      let list=""
        let current = this.head;
        while (current) {
           list+=current.value
            current = current.next;
        }
        console.log(list);
    }

    isPalidrom(){
        let str=''
        let str2=""
        let current=this.head
    while (current) {
        str+=current.value
        current=current.next   
    }
    for (let i = str.length-1; i >= 0; i--) {
         str2+=str[i]
    }
    if(str==str2){
        return true
    }else{
        return false
    }
    }


}

let list=new LinkedList()
// list.prepend("M")
// list.prepend("A")
// list.prepend("L")
// list.prepend("Y")
// list.prepend("A")
// list.prepend("L")
// list.prepend("A")
// list.prepend("M")
list.append("J")
list.append("A")
list.append("J")
list.append("Z")
list.printValues()
list.printValues()
console.log(list.isPalidrom());