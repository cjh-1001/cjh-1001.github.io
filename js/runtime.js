function updateRuntime() {
  const createTime = new Date('2026-03-10T00:00:00').getTime();
  const now = new Date().getTime();
  let totalSeconds = Math.floor((now - createTime) / 1000);
  const daysInYear = 365;
  const years = Math.floor(totalSeconds / (daysInYear * 24 * 3600));
  totalSeconds %= (daysInYear * 24 * 3600);

  const days = Math.floor(totalSeconds / (24 * 3600));
  totalSeconds %= (24 * 3600);

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formatZero = (num) => num > 9 ? num : '0' + num;

  const currentHour = new Date().getHours();
  let statusHtml = "";

  if (currentHour >= 8 && currentHour < 22) {
    statusHtml = "<span class='boardsign-text'>🌞 小窝营业中 — </span>";
  } else {
    statusHtml = "<span class='boardsign-text'>🌙 小窝打烊了 — </span>";
  }

  const timeHtml = `已经过 ${years} 年 ${days} 天 ${formatZero(hours)} : ${formatZero(minutes)} : ${formatZero(seconds)}`;
  const currentTimeHtml = `${statusHtml}${timeHtml}`;

  // 更新 workboard 元素
  const workboard = document.getElementById("workboard");
  if (workboard) {
    workboard.innerHTML = `<div id='runtime'>${currentTimeHtml}</div>`;
  }

  // 更新 footer 中的 runtime 元素
  const footerRuntime = document.getElementById("runtime");
  if (footerRuntime) {
    footerRuntime.innerHTML = currentTimeHtml;
  }
}

// 初始化并启动计时器
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateRuntime();
    setInterval(updateRuntime, 1000);
  });
} else {
  updateRuntime();
  setInterval(updateRuntime, 1000);
}