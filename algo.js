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


//finding sub arrays with a value of X using naive solution.


array=[3, 4, -7, 3, 1, 3, 1, -4, -2, -2]

function printSubarrays(array) {
  for(i=0;i<n;i++) {
    sum=0
    for(j=i;j<n;j++) {
      sum += array[j]

      if(sum == 0) {
        console.log("Subarray [" + i + ".." + j + "]")

      }
    }
  }
}

printSubarrays(array)


array=[0,1,1,1,0,0,1,1,0]
//sorting a binary array

function sortBinary(array) {
   for(i=0;i<n;i++)  {
     var zeros = 0

     if(array[i] == 0) {
       zeros++
       console.log(zeros)
     }

   }
     zeros = 5
     var k = 0
     while(zeros-- != 0) {
       array[k] = 0
       k++
     }
     while(k < n) {
       array[k] = 1
       k++
     }


   console.log(array)
}

sortBinary(array)
