// 2. Create a function zoin such that
// zoin("z","o","p","s","m","a","r","t") // return "zopsmart"
// zoin("a", "b", "c"); // return "abc"

function zoin(...arg) {
  let ans = "";
  arg.map((el) => {
    ans += el;
  });

  console.log(ans);
}

zoin("z", "o", "p", "s", "m", "a", "r", "t");
zoin("a", "b", "c");

