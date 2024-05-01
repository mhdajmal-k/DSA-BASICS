class Node{
    constructor(value){

        this.value=value
        this.next=null
    }
}

function revers(){
    let prev=null
    let curr=this.head
    while(curr){
        next=curr.next
        curr.next=prev
        prev=curr
        curr=next

    }
}

function search(){
    if (!this.head) {
        return 

    }else{
        i=0
        curr=this.head
        while (curr) {
            if(curr.data=value){
                 return i
            }
            i++
            curr=curr.next
        }
    }
}