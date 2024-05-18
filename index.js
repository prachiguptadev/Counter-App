const countValue = document.querySelector("#counter");

// counter app create by addEventListener

const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function () {
  let value = parseInt(countValue.innerHTML);
  value--;
  countValue.innerHTML = value;
});

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  let value = parseInt(countValue.innerHTML);
  value++;
  countValue.innerHTML = value;
});




// using the onclick method use

// const increment = () => {
//   // get the value from UI
//   let value = parseInt(countValue.innerHTML);
//   //   update the value
//   value++;
//   //   set the value on the UI
//   countValue.innerHTML = value;
// };

// const decrement = () => {
//   // get the value from UI
//   let value = parseInt(countValue.innerHTML);
//   //   update the value
//   value--;
//   //   set the value on the UI
//   countValue.innerHTML = value;
// };
