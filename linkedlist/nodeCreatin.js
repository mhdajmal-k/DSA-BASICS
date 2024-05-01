class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tali=null
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tali=node

    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tali=node
    } else {
      let prev = this.head;
      while (prev.next) {
        
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    }
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += `${current.value} `;
      current = current.next;
    }
    console.log(listValues);
  }
  insert(value, index) {
    if (index > this.size || index < 0) {
      console.log("invalid input size");
      return;
    }
    if (index == 0) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  remove(index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index");
      return -1;
    }
    let removed;
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let pr = this.head;
      for (let i = 0; i < index - 1; i++) {
        pr = pr.next;
      }
      removed = pr.next;
      pr.next = removed.next;
    }
    this.size--;
    return;
    // return removed.value
  }
  removeByValue(value) {
    if (this.isEmpty()) {
      console.log("Cannot remove because the list is empty");
      return -1;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log("Removed");
    } else {
      console.log("Inside the else");
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let remove = prev.next;
        prev.next = remove.next;
        this.size--;
        console.log("Removed");
        return 0; // Return success
      } else {
      }
    }
    return -1; // Return failure if value is not found
  }
  search(value) {
    if (this.isEmpty()) {
      console.log("no list");
      return -1;
    } else {
        console.log("here")
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
  toArray(arr){
    console.log("hi")
    if(arr.length==0){
        return -1
    }
    for(let a of arr){
        console.log(a)
        this.append(a)
    }        
    return 
}
 reverse(){
let  prev=null
 let curr=this.head
  while(curr){
   let next=curr.next
   curr.next=prev
    prev=curr
    curr=next
  }
  this.head=prev
 }
 
}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.insert(10,0)
list.insert(11,1)
list.insert(12,2)
list.insert(13,3)
list.insert(14,4)
list.insert(15,5)
list.print()
list.reverse()
list.print()

