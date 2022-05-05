// create a object called instructor that has a function called evaluate(this function sums this.aptitude, this.coreskill and consoles the same).
// create an array of interns objects(contain two properties aptitude and coreskill).
// loop over every intern and use instructor objects to evaluate the intern and to display the score of each.
// we should use bind, apply concepts here

// let instructor = {
//   aptitude: 10,
//   coreskill: 20,
//   evaluate: function (idx) {
//     console.log(idx+1+": "+"aptitude: "+this.aptitude+" "+ "coreskill: "+ this.coreskill+" "+ "total: " +(this.aptitude+this.coreskill));

//   },
// };

// const intern = [
//   { aptitude: 50, coreskill: 70 },
//   { aptitude: 76, coreskill: 40 },
//   { aptitude: 55, coreskill: 85 },
// ];

//using loop
// intern.map((ele,idx)=>{
//     instructor.aptitude=ele.aptitude;
//     instructor.coreskill=ele.coreskill
//     instructor.evaluate(idx);
// })

let instructor = {
  aptitude: 10,
  coreskill: 20,
  evaluate: function (idx) {
    console.log(
      idx +
        1 +
        ": " +
        "aptitude: " +
        this.aptitude +
        " " +
        "coreskill: " +
        this.coreskill +
        " " +
        "sums: " +
        (this.aptitude + this.coreskill)
    );
  },
};

const intern = [
  { aptitude: 50, coreskill: 70 },
  { aptitude: 76, coreskill: 40 },
  { aptitude: 55, coreskill: 85 },
];

//using bind method
intern.map((ele, idx) => {
  let ans = instructor.evaluate.bind(intern[idx], idx);
  ans();
});
