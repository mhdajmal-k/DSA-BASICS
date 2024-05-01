class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function duplicate(list) {
    if (!list) {
        console.log("list is empty");
        return list;
    }
   
    let curr = list;
    while (curr && curr.next) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return list;
}

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(13);
list.next.next.next = new Node(13);
list.next.next.next.next = new Node(14);
list.next.next.next.next.next = new Node(14);

let duplicated = duplicate(list);

let result = "";
while (duplicated) {
    result += `${duplicated.value} `;
    duplicated = duplicated.next;
}
console.log(result);
