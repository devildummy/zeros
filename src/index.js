module.exports = function getZerosCount(number) {
  var zero=0;
  var left = 0;
  for(i=1;i<13;i++){
  if (number>=Math.pow(5,i)){
    left=number % Math.pow(5,i);
    number=number - left;
    zero+=number/Math.pow(5,i)
  }
}
  return zero;
}
