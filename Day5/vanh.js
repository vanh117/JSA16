// // for(let i = 4; i < 21; i++){
// //     let number = Math.floor(Math.random() *)
// // }
// let b = prompt("nhập số từ 4 đến 20");
// b = Number(b);
// function findEven() {
//   for (let i = 4; i < 21; i++) {
//     console.log(i);
//     for (let c = 4; c < b + 1; c++) {
//       console.log(c);
//     }
//   }
// }
function bai1() {
  function findEven(a) {
    if (a < 4 || a > 20) {
      alert("Sai");
    } else
      for (let i = 4; i <= a; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
  }
  let x = prompt("Nhập số từ 4 - 20");
  findEven(Number(x));
}
function bai3() {
  // let b = Number(prompt(Triangle height){

  // }
  function numberOneTriangle() {
    let k = prompt("Nhap gia tri bat ki");
    k = parseInt(k);
    for (let i = 0; i <= x; i++) {
      document.writeln("1");
    }
    for (let b = 0; b <= i; b++) {
      document.writeln("1");
    }
    document.writeln("<br/>");
  }
}
// bai 4
// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

// function myStopFunction() {
//   clearInterval(myInterval);
// }
function clock() {
  let h = document.getElementsByClassName("h");
  let m = document;
}
