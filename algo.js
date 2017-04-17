console.log("hello")
//naive method to find pair with given sum in an array
var array = [8,7,2,5,3,2]

var n = array.length

function findPair(array, sum) {

for (i=0;i<n-1;i++) {
  for(j=0;j<n-1;j++) {
    if(array[i] + array[j] == sum) {
      console.log("we have a pair of" + array[i] + " and " + array[j])
    }
  }
}
}

findPair(array, 10)

//method to find pair with given sum in an array using sorting

function sort(a, b) {
  return a - b;
}
array.sort();
array.reverse();
console.log(array)


function findPairSort(array, n, sum) {
  console.log(array)
  var low = 0
  var high = n-1

  console.log(high)

  while (low<high) {
     if(array[low] + array[high] == sum) {
       console.log("pair found")
       return
     } else if(array[low] + array[high] < sum) {

      low++; high--;
   }
   console.log(high)
  }

}


findPairSort(array, n, 10)
