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


function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
