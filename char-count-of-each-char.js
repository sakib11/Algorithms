
/*
    Time complexity: O(n)
*/

function charCount(str){
  if(str == undefined){
      return "pass str";
  }
  let strlen = str.length;
  if(!strlen){
      return null;
  }
  let obj = {};
  for(let i = 0; i < strlen; i++){
    if(str[i] == " "){
        continue;
    }
    let citem = str[i].toLowerCase();
    if(obj[citem]){
       obj[citem]++;
    }else{
       obj[citem] = 1;
    }   
  }  
  return obj;

}
console.log(charCount(" fsdjfhdsjGHFGHFbfjdfghdjytiuerhGHF&^RREDGFjdsa@@@##"));