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
    append(value){

        let node=new Node(value)
        if (!this.head) {
            this.head=node
            return
        }
            let curr=this.head
            while (curr.next) {
                curr=curr.next
            }
            curr.next=node
        
        this.size++
        return
    }
    print(){
        if (!this.head) {
            console.log("no list")
            return
        }else{
            let curr=this.head
            let list=""
            while(curr){
                list+=`${curr.value} `
                curr=curr.next
            }
            console.log(list);
        }
        return

    } 
    isPalidrom(){
        let str=""
        let reversed=""
        let curr=this.head
        while (curr) {
            str+=curr.value
            curr=curr.next
        }
        for (let i = str.length-1; i >= 0; i--) {
             reversed+=str[i]
        }
        console.log(reversed);
        console.log(str);
        if(str==reversed){
            return true
        }
        
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);
linkedList.print()
console.log(linkedList.isPalidrom());
