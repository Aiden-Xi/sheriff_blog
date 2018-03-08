// 清除数据
function clearAll() {
  var input = document.getElementById('write');
  console.log([input.value, input]);
  input.value = '';
}

function numberAddClick() {
  var i, j;
  var btn_numbers = document.getElementsByClassName('number');
  let oper_names = ['add', 'mul', 'del', 'point', 'divi']
  var opers = oper_names.map(x => document.getElementsByClassName(x)[0])
  for (i = 0; i < btn_numbers.length; i++) {
    var btn = btn_numbers[i];
    var oper = opers[i];
    if (oper) {
      addClick(oper);
    }
    addClick(btn);
  }
}

function addClick(elm) {
  elm.addEventListener('click', function() {
    var input = document.getElementById('write');
    input.value = input.value + elm.value;
  });
}

numberAddClick();

function equalCal() {
  var input = document.getElementById('write');
  input.value = eval(input.value);
}
