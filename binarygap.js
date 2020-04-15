/*
    Time complexity: ??
*/
function binaryGap(n){
  let binaryN = n.toString(2); 
  let findex = binaryN.indexOf('1'); 
  let lindex = binaryN.lastIndexOf('1'); 
  let sarr = binaryN.slice(findex,lindex+1);
  let a = sarr.split("1");
  let max = 0;
  for(let i = 0; i < a.length; i++){
      if(a[i].length > max){
        max = a[i].length;
      }
  }
  return max;
}

console.log(binaryGap(6));