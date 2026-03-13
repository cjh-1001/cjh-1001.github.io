// 页面标题变化效果
(function() {
  const originalTitle = document.title;
  const focusTitle = '欢迎光临(≧∇≦)ﾉ';
  const blurTitle = '欢迎下次光临(｡•̀ᴗ-)✧';

  window.addEventListener('focus', function() {
    document.title = focusTitle;
  });

  window.addEventListener('blur', function() {
    document.title = blurTitle;
  });
})();