function isEven(num){
  if(num === 1){
    console.log("Odd");
  } else if (num === 0) {
    console.log("Even");
  } else {
    num -= 2;
    isEven(num);
  }
}

isEven(-1);
