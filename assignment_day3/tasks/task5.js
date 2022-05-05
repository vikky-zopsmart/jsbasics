const obj = {
  b: 10,
  c: {
    d: {
      e: 20,
    },
  },
};

function objCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  let copy = {};
  Object.keys(obj).forEach((key) => {
    if (obj.hasOwnProperty(key)) copy[key] = objCopy(obj[key]);
  });
  return copy;
}

const newObj = objCopy(obj);

obj.c.d.e = 30;
console.log(obj.c.d.e); // 30
console.log(newObj.c.d.e); //20
