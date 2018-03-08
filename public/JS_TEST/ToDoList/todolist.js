function addTitle() {
  const input = document.getElementById('write');
  console.log('输出这里得到的value：', input.value);
  var value = input.value;
  if (value.length <= 0) {
    alert('请输入您的待办事项！！！');
    return;
  }
  input.value = '';

  const ul = document.getElementById('myUl');
  const li = document.createElement('li');
  const span = document.createElement('span');

  span.className = 'close';
  span.innerHTML = '&times;';
  spanAddClick(span);

  li.className = 'list';
  li.innerHTML = value;
  liAddClick(li);
  li.appendChild(span);

  ul.appendChild(li);
}

function deleteTitle() {
  var closes = document.getElementsByClassName('close');
  var lis = document.getElementsByClassName('list');
  var i;
  for (i = 0; i < closes.length; i++) {
    const close = closes[i];
    const li = lis[i];
    spanAddClick(close);
    liAddClick(li);
  }
}
deleteTitle();

function spanAddClick(close) {
  if (close) {
    close.addEventListener("click", function() {
      var li = this.parentNode;
      li.style.display = 'none';
    });
  }
}

function liAddClick(li) {
  if (li) {
    li.addEventListener("click", function() {
      li.className = li.className + ' checked';
    });
  }
}
