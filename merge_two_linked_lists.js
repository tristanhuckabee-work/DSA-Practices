// Prompt:
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

const checkValid = (listA, listB) => {
  if ( !listA && !listB) {
      return listA;
  } else if ( !listA && listB ) {
      return listB;
  } else if ( listA && !listB ) {
      return listA;
  }
  return true;
}
var mergeTwoLists = function(list1, list2) {
  let RES, CR;
  let isValid = checkValid(list1, list2)
  if ( isValid !== true ) return isValid;
  
  if ( list1.val < list2.val ) {
      RES = list1;
      list1  = list1.next;
  } else {
      RES = list2;
      list2  = list2.next;
  }
  CR = RES;
  
  while (list1 || list2) {
      if ( list1 === null ) {
          CR.next = list2;
          return RES;
      } else if ( list2 === null ) {
          CR.next = list1;
          return RES;
      } else if ( list1.val < list2.val ) {
          CR.next = list1;
          list1 = list1.next;
      } else if ( list1.val > list2.val ) {
          CR.next = list2;
          list2 = list2.next;
      } else if ( list1.val === list2.val) {
          CR.next = list1;
          list1 = list1.next;
      }
      CR = CR.next;
  }
  return RES;
};