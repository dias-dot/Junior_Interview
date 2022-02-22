function compareArrays(arr1, arr2) {
    let result;
    if(arr1.length>arr2.length || arr1.length<arr2.length) {
      result = "False";
    } 
    else {
     for(let i = 0; i < arr1.length; i++){
        if(arr1[i]==arr2[i]){
            result = "True";
        }
        else {
            result = "False";
        }
     }
    }
    return result; // boolean
  
}


function tocheck(value){
  if(value>0 && (value%3==0)){
    value= value * 10;
    return value;
  }
  else{
    value=0;
    return value;
  }
}

function tosolve(value){
   return value>0;
}

 function advancedFilter(arr) {
   let resultArr,sortingarr;
   sortingarr = arr.map(tocheck);
   resultArr = sortingarr.filter(tosolve);
   
 
   return resultArr; // array
 }