var sum = 10;
const answer = function () {
  let temp = sum;
  let obj = {
    add: function (a) {
      sum += a;
      return sum;
    },
    sub: function (a) {
      sum -= a;
      return sum;
    },
    reset: function () {
      sum = temp;
      return sum;
    },
    incr: function () {
      sum++;
      return sum;
    },
    decr: function () {
      sum--;
      return sum;
    },
    print: function () {
      console.log(sum);
    },
  };
  return obj;
};

const ans = answer();
console.log(ans.add(5));
console.log(ans.sub(2));
console.log(ans.incr());
console.log(ans.decr());
console.log(ans.reset());
