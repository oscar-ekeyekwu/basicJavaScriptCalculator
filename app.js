//This is a file for  tryig out JS Number Variables
let num1;
const operation_holder = document.getElementById('operation-holder');
const result_holder = document.getElementById('result-holder');
const nums = document.getElementsByClassName('num');

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener('click', function () {
    operation_holder.innerHTML += this.innerHTML;
    let result = eval(operation_holder.innerHTML);
    result_holder.innerHTML = result;
  });
}

const opBtns = document.getElementsByClassName('optors');

for (let i = 0; i < opBtns.length; i++) {
  opBtns[i].addEventListener('click', function () {
    operation_holder.innerHTML += this.innerHTML;
  });
}
const eqBtn = document.getElementById('eqBtn');
eqBtn.addEventListener('click', function () {
  let result = eval(operation_holder.innerHTML);
  operation_holder.innerHTML = result;
  result_holder.innerHTML = result;
});

const clrBtn = document.getElementById('clrBtn');
clrBtn.addEventListener('click', function () {
  operation_holder.innerHTML = '';
  result_holder.innerHTML = '';
});

const abs = document.getElementById('abs');
abs.addEventListener('click', function () {
  let val = Number(operation_holder.innerHTML);
  console.log(val == Math.abs(val));
  if (val == Math.abs(val)) {
    operation_holder.innerHTML = -val;
    result_holder.innerHTML = eval(operation_holder.innerHTML);
  } else {
    operation_holder.innerHTML = val;
    result_holder.innerHTML = eval(operation_holder.innerHTML);
  }
});

const bkspc = document.getElementById('bkspc');
bkspc.addEventListener('click', function () {
  if (operation_holder.innerHTML != '') {
    operation_holder.innerHTML = operation_holder.innerHTML.slice(0, -1);
    result_holder.innerHTML = eval(operation_holder.innerHTML);
  } else {
    operation_holder.innerHTML = '';
    result_holder.innerHTML = '';
  }
});

const percent = document.getElementById('percent');
percent.addEventListener('click', function () {
  let val = Number(result_holder.innerHTML) / 100;
  operation_holder.innerHTML = val;
  result_holder.innerHTML = val;
});
