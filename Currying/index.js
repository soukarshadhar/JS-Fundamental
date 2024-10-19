const Curry = (func) => {
  const curried = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...restArgs) => {
        return curried(...args.concat(restArgs));
      };
    }
  };
  return curried;
};

function Sum(a, b, c, d) {
  return a + b + c + d;
}

const CurriedSum = Curry(Sum);

console.log(CurriedSum(1, 2, 3, 4));
console.log(CurriedSum(1)(2)(3)(4));
console.log(CurriedSum(1, 2)(3, 4));
console.log(CurriedSum(1, 2)(3)(4));
console.log(CurriedSum(1, 2, 3)(4));
console.log(CurriedSum(1)(2, 3, 4));
