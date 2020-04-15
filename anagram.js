
/*
    Time complexity: O(n)
*/

function isAnagram(str1,str2){

    let str1len = str1.length;
    let str2len = str2.length;
  
    if(str1len !== str2len){
      return false;
    }
  
    let obj = {};
  
    for(let i = 0; i < str1len; i++){
        if(obj[str1[i]]){
          obj[str1[i]] = obj[str1[i]] + 1;
        }else{
          obj[str1[i]] = 1;
        }
    }
  
    for(let i = 0; i < str2len; i++){
      if(!obj[str2[i]]){
            return false; 
      }else{
        obj[str2[i]] = obj[str2[i]] - 1;
      }
    }
    return true;
  
  }
  
  isAnagram("apple","lpepa");

  /*-------------------------------------------------------------------------*/
  /*
    Time complexity: O(n)
*/

function objectEquals(obj1, obj2) {
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if (!obj2.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    for (var i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (!obj1.hasOwnProperty(i)) return false;
            if (obj1[i] != obj2[i]) return false;
        }
    }
    return true;
}

function isAnagram(str1,str2){
  let obj1 = {};
  let obj2 = {};
  let str1len = str1.length;
  let str2len = str2.length;

  if(str1len != str2len){
      return false;   
  }
  if(str1len == 0 && str2len == 0){
      return true;
  }
  
  for(let i = 0; i < str1len; i++){
      
      if(obj1[str1[i]]){
        obj1[str1[i]]++
      }else{
        obj1[str1[i]] = 1;
      }
  }

  for(let i = 0; i < str2len; i++){
      
      if(obj2[str2[i]]){
        obj2[str2[i]]++
      }else{
        obj2[str2[i]] = 1;
      }
  }

  if(objectEquals(obj1,obj2)){
    return true;
  }
}

isAnagram("apple","lpepa");