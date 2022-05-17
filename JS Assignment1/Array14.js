
const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arr)
const max = Math.max(...arr)
var sum = arr.reduce((a, b) => a + b, 0);	//get sum of all elements in array
var avg = (sum / arr.length) || 0; //get average of all elements in array ;)
console.log("min number in given array is =",+min)
console.log("max number in given array is =",+max)
console.log("sum number in given array is =",+sum)
console.log("avg number in given array is =",+avg)

function CountingEvenOdd(arr, arr_size)
{
    let even_count = 0;
    let odd_count = 0;
 
    // loop to read all the values in the array
    for (let i = 0; i < arr_size; i++) {
         
        // checking if a number is completely
        // divisible by 2
        if (arr[i] & 1 == 1)
            odd_count++;
        else
            even_count++;
    }
 
    console.log("Number of even elements = " + even_count);
    console.log("Number of odd elements = " + odd_count);
}
    let n = arr.length;
     
    // Function Call
    CountingEvenOdd(arr, n);
 