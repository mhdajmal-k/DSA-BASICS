class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

function mergeSort(list1,list2){
    console.log("called");
    const dummy=new Node(-1)
    let curr=dummy

    while(list1&&list2){
        if(list1.value<list2.value){
            curr.next=list1
            list1=list1.next
        }else{
            curr.next=list2
            list2=list2.next
        }
        curr=curr.next

    }
    if(list1||list2){
        curr.next=list1||list2
    }
    return dummy.next
}


let list1=new Node(10)
 list1.next=new Node(11)
list1.next.next=new Node(12)
 list1.next.next=new Node(13)

 let list2=new Node(20)
 list2.next=new Node(21)
list2.next.next=new Node(22)
 list2.next.next.next=new Node(23)

 let mergeSorted=mergeSort(list1,list2)
 let list=""
 while(mergeSorted){
    list+=`${mergeSorted.value} `
    mergeSorted=mergeSorted.next
 }
 console.log(list)