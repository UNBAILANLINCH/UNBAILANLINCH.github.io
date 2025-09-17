// 网站运营时间计算
(function() {
  // 网站开始运营的日期 - 根据你的需要修改这个日期
  // 这里设置为2024年9月1日，你可以改为实际开始的日期
  const startDate = new Date('2024-09-01T00:00:00'); 
  
  function updateUptime() {
    const now = new Date();
    const diff = now - startDate;
    
    // 计算年、月、天、小时、分钟
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    // 生成显示文本
    let uptimeText = '';
    if (years > 0) {
      uptimeText += `${years} 年 `;
    }
    if (months > 0 || years > 0) {
      uptimeText += `${months} 个月 `;
    }
    if (days > 0 || months > 0 || years > 0) {
      uptimeText += `${days} 天 `;
    }
    if (hours > 0) {
      uptimeText += `${hours} 小时 `;
    }
    uptimeText += `${minutes} 分钟`;
    
    // 更新页面显示
    const uptimeElement = document.getElementById('site-uptime');
    if (uptimeElement) {
      uptimeElement.textContent = uptimeText;
    }
  }
  
  // 页面加载时立即更新一次
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateUptime);
  } else {
    updateUptime();
  }
  
  // 每分钟更新一次
  setInterval(updateUptime, 60000);
})();