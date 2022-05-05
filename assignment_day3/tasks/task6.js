const counter = {
  value: 0,
  increment() {
    this.value += 1;
    console.log(this.value);
    return this;
  },
  decrement() {
    this.value -= 1;
    console.log(this.value);
    return this;
  },
};

//   const a=  counter.increment(); // value is 1
//    const b= counter.increment(); // value is 2
//    const c= counter.decrement(); // value is 1
//    console.log(a,b,c)

counter.increment().increment().decrement(); // figure out how to do this

