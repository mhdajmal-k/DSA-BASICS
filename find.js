function find(arr,target){
let a=[]
    a= arr.map((elem1,elem2)=>{
        console.log(elem1,elem2);
        if(elem1+elem2==target)
            return elem1;
    })
    // for(i=0;i<arr.length;i++){
    //     arr.map(elem=>{if(elem+arr[i]==target){
    //         a.push(arr[i]);
    //         a.push(elem)
    //     }})  
    // }
    return a
}

let arr= [1,6,7,4,5,8]
let target=9
console.log(find(arr,target));


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }
// class dobulelist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     append(value){
//         const node=new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.prev=this.tail
//             this.tail=node
//         }
//         this.size++ 
//         return
  

    // remove(){
    //     if(!this.head){
    //         console.log("list is empty")
    //         return
    //     }
    //     if(!this.head.next){
    //         this.head=null
    //         this.tail=null
    //         return
    //     }
    //     let last=this.tail
    //    last.prev=t
    //     last=null
    //     return 
    // }
//     remove(value){
//         if (!this.head) {
//             console.log("no list ");
//             return
//         }
//         let curr=this.head
//         while(curr.next.value!==value){
//             curr=curr.next
//         }
//          remove=prev.next
//         curr.next=remove.next
//     }


//     print(){
//         if (!this.head) {
//             console.log("list is empty")
//         }
//        let curr=this.head
//        list=""
//        while(curr){
//         list+=`${curr.value} `
//         curr=curr.next
//        }
//        console.log(list)
//        return
//     }
    
// }

// let list=new dobulelist()
// list.append(10)
// list.append(11)
// list.append(12)
// list.append(13)
// list.remove()
// list.print()

