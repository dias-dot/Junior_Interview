function solveEquation(a, b, c) {
  let arr=[],disc,x1,x2,x;
  disc = Math.pow(b,2)- 4 * a * c;
  if(disc < 0){
    arr.push("");
  }
  else if(disc == 0){
    x= (-b)/(2*a);
    arr.push(x);
  }
  else{
    x1= (-b + Math.sqrt(disc))/(2*a);
    x2= (-b - Math.sqrt(disc))/(2*a);
    arr.push(x1,x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
