var chocolateBars = ["sinckers", "hundred", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
   
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element) ;
  return array
}






