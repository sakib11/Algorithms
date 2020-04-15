/*
    Time complexity: ??
*/
function cy(a,k){
    let rr;
    for(let i = 0; i<k; i++){
      rr = rota(a);
    }
    return rr;
  }
  
  function rota(a){
          let temp = a[0];
          let s;
          for(let j = 1; j < a.length; j++){
              if(j == a.length - 1){
                a[0] = a[j];
              }
              s = a[j];
              a[j] = temp;
              temp = s;              
          }
          return a;
  }
  console.log(cy([3, 8, 9, 7, 6],3));