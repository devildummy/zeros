module.exports = function getZerosCount(number) {
  let zeros=0;
  let i=1;
  do{
    zeros+= (number - (number%Math.pow(5,i)))/Math.pow(5,i);
    i++;
  }
  while (number>Math.pow(5,i));
  return zeros;
};
