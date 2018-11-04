// Description:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

// Test Cases:
// Test.describe( "include ?", function(){
//   var list = [0,1,2,3,5,8,13,2,2,2,11];
  
//   Test.assertEquals(include(list, 13), true, "list includes 13")
//   Test.assertEquals(include(list, 0), true, "list includes 0")
//   Test.assertEquals(include(list, 100), false, "list does not include 100")
//   Test.assertEquals(include(list, 2), true, "list includes 2 multiple times")
//   Test.assertEquals(include(list, 11), true, "list includes 11")
//   Test.assertEquals(include(list, "2"), false, "list includes 2 (integer), not ''2'' (string)")
  
//   Test.assertEquals(include([], 0), false, "empty list doesn't include anything")

// });

//My solution

function include(arr, item){
    return arr.includes(item);
}