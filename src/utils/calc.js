exports.multiply = (num1,num2)=>{
  return num1*num2;
};

exports.divide = (num1, num2)=>{
  return num1/num2;
};

exports.sum = (num1, num2)=>{
  if(num1 && num2 && typeof num1 !== "number" && typeof num2 !== "number"){
    const err = new Error("parameter must be a number")
    throw err
  }
  return num1+num2;
};

exports.substract = (num1, num2)=>{
  return num1-num2;
}

exports.modulo = (num1, num2)=>{
  return num1%num2;
};