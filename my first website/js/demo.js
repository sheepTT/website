document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    //粒子颜色
    dotColor: '#FFFFFF',
    //线颜色
    lineColor: '#FFFFFF'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



// Uncaught SyntaxError: Unexpected identifier  出现此报错是因为某一行少写了一个逗号