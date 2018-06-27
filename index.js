// let collection = {random1: {name: 'Alexandra', next: 'random2'},
//                   random2: {name: 'Kirstin', next: 'random3'},
//                   random3: {name: 'Juliet', next: null}
//                 };
//
// let list = 'random1';
//
// let head = collection[list];

function getName(node) {
  return node.name;
};

function headNode(key, list) {
  return list[key];
};

function next(head, list) {
  let nextAddress = head.next;
  return list[nextAddress];
};

//return head node of the linked list
function nodeAt(index, head, list) {
  let node = list[head];
  for(let i = 0; i < index; i++){
     node = next(node, list);
  };

  return node;
};

//return the address of the node at the address
function addressAt(index, head, list) {
  let address = head;
  let node = list[head];

  for(let i = 0; i < index; i++){
      address = node.next;
      node = next(node, list);
  };

  return address;

}

//return the index of the provided node
function indexAt(node, list, head) {
  let index = 0;
  let currentNode = list[head];
  while (node != currentNode) {
    currentNode = next(currentNode, list);
    index++;
  }
  return index;
}
