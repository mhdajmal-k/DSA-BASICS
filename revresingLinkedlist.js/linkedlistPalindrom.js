class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

function palindrom(list){
    let curr=list
    value=''
    while(curr){
        value+=curr.value
        curr=curr.next
    }
    console.log(value);
    value2=value.split('').reverse().join("")
    console.log(value2);
    if(value==value2){
        console.log("is palindrom");
        return true
    }else{
        console.log("not a palidrom");
        return false
    }
}

let list=new Node("M")
 list.next=new Node("A")
 list.next.next=new Node("L")
 list.next.next.next=new Node("A")
 list.next.next.next.next=new Node("Y")
 list.next.next.next.next.next=new Node("A")
 list.next.next.next.next.next.next=new Node("L")
 list.next.next.next.next.next.next.next=new Node("A")
 list.next.next.next.next.next.next.next.next=new Node("M")

checking=palindrom(list)