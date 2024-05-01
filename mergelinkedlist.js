class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


// function mergeTwoList(l1,l2){
//     let dummyHead = new Node(-1);
//     let current = dummyHead;

//     while(l1 && l2){
    
//         if(l1.data < l2.data){
//             current.next = l1;
//             console.log(current);
//             l1 = l1.next;
//         }else{
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }
//     current.next = l1 || l2
//     return dummyHead.next;
// }

function mergetList(list1,list2){
    const dummy=new Node(-1)
    let curr=dummy
    while (list1&&list2) {
    if (list1.data<list2.data) {
        curr.next=list1
        list1=list1.next
    } else {
        curr.next=list2
        list2=list2.next
    }        
    curr=curr.next
    }
    curr.next=list1||list2
    return dummy.next
}

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);


let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);
list2.next.next.next = new Node(8);

let mergetListed = mergetList(list1,list2);

console.log(mergetListed);
let result=''
while (mergetListed) {
    result+=`${mergetListed.data} `
    mergetListed=mergetListed.next
}
console.log(result);




// let result = '';
// while(mergetList){
//     result += `${mergetList.data} `;
//     mergetList = mergetList.next;
// }
// console.log(result);


//merge two sorted linked list