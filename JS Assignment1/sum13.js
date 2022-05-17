/*For loop*/
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    }
console.log('Sum : '+s); 

/*while loop*/

// define a list
const list = [1,2,3,4,5];

// arrow function to sum array element
const result2 = () => {
  var i = list.length;
  var sum = 0;
  while (i--) {
    sum += list[i]
  }
  console.log(sum)
}
result2()
/*do while loop*/
const list1=[10,30,40,50];
const result3=()=>{
var i=list1.length; 
var sum = 0;
do {
    sum += list1[i]; 
    console.log(sum); 
          // --              // -- 
} 
while (i--);    // -- condition
 }
  
 result3() //  
