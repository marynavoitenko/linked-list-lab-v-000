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

function nodeAt(index, head, list) {
  let node = list[head];
  for(let i = 0; i < index; i++){
     node = next(node, list);
  };

  return node;
};

function indexAt(node, list, head) {

}
