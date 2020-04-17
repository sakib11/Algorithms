/*
    Time complexity: O(n)
    Pattern: Multiple pointers
    #Array must be sorted
*/
function countUniqueValues(arr){
    let i = 0;
    let last_i = i;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
  }
  
  countUniqueValues([1,3,4,4,4,4,5,6,7,10,15,15,16,16,17]);