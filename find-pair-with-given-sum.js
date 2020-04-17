
/*
  Time complexity: O(n2)
  Pattern: Naive
 */
function findPair(arr,sum){
    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
        if(arr[i] + arr[j] == sum){
           return [i,j];
        }
      }
    }
    return null;
}

findPair([-2,-5,-6,1,3,4,6],0);

/*
  Time complexity: O(n)
  Pattern: Multiple pointer
  #Array must be sorted
 */

function findPair(arr,sum){
  let low = 0;
  let high = arr.length - 1;

  while(low < high){
     if(arr[low] + arr[high] == sum){
       return [low,high];
     }else if(arr[low] + arr[high] < sum) {
       low++;
     }else{
       high--;
     }
  }
  return null;
}

findPair([-10,-5,-4,1,3,4,6],5);