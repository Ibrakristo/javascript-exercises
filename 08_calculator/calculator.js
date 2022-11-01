const add = function(x , y) {
	return x+y;
};

const subtract = function(x , y) {
	return x-y;
};

const sum = function(x) {
	return x.reduce((sum, number) => sum+number,0);
};

const multiply = function(x) {
return x.reduce((result,number) => result*number,1);
};

const power = function(x,y) {
	return x**y;
};

const factorial = function(x) {
  if (x<0) return "ERROR";
  if(x==0) return 1;
	if(x==1) return x;
  return x*factorial(x-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
