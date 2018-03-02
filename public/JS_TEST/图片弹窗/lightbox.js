// /*jshint esversion: 6 */
//
// function currentIndex(index) {
//   // 处理图片的转换
//   openModal();
//   slideIndex = index;
//   showSlides(slideIndex);
// }
// // 显示弹窗
// function openModal() {
//   displayElements('none', 'title', 'nav-container');
//   displayElements('block', 'myModal');
// }
//
// // 关闭弹窗
// function closeModal() {
//   displayElements('none', 'myModal');
//   displayElements('block', 'title');
//   displayElements('flex', 'nav-container');
// }
//
// // 隐藏元素 根据传入的元素ID
// function displayElements(dis_name) {
//   if (!dis_name) console.error('缺少参数');
//   if (arguments) {
//     delete arguments[0];
//     for (let name in arguments) {
//       document.getElementById(arguments[name]).style.display = dis_name;
//     }
//   }
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName('mySlides');
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//
//   slides[slideIndex - 1].style.display = "block";
// }









/*jshint esversion: 6 */

function currentIndex(index) {
  // 处理图片的转换
  openModal();
  slideIndex = index;
  showSlides(slideIndex);
}
// 显示弹窗
function openModal() {
  displayElements('none', 'title', 'nav-container');
  displayElements('block', 'myModal');
}

// 关闭弹窗
function closeModal() {
  displayElements('none', 'myModal');
  displayElements('block', 'title');
  displayElements('flex', 'nav-container');
}

// 隐藏元素 根据传入的元素ID
function displayElements(dis_name) {
  if (!dis_name) console.error('缺少参数');
  if (arguments) {
    delete arguments[0];
    for (let name in arguments) {
      document.getElementById(arguments[name]).style.display = dis_name;
    }
  }
}

function currentIndexImg(index) {
  slideIndex = index;
  showSlides(slideIndex);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var p_titles = document.getElementsByClassName('desc');
  var imgs = document.getElementsByClassName('cursor');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    p_titles[i].style.display = 'none';
    imgs[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = "block";
  p_titles[slideIndex - 1].style.display = 'block';
  imgs[slideIndex - 1].style.display = 'block';
}
