// Bubble sort Implementation using Javascript
  
// Creating the bblSort function
function bblSort(arr){
     
    for(var i = 0; i < arr.length; i++){
        
      // Last i elements are already in place  
      for(var j = 0; j < ( arr.length - i -1 ); j++){
          
        // Checking if the item at present iteration 
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
            
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    // Print the sorted array
    console.log(arr);
   }
     
     
   // This is our unsorted array
   var arr = [23, 43, 55, 63,  5, 6, 25, 47];
     
     
   // Now pass this array to the bblSort() function
   bblSort(arr);

   //merge sort Implementation 
   function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));