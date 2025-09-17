/**
 * 主题切换器 - 支持浅色/深色主题切换
 * 并同步Giscus评论系统主题
 */

class ThemeSwitcher {
  constructor() {
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  // 获取系统主题偏好
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // 获取存储的主题
  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  // 存储主题设置
  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  // 初始化主题切换器
  init() {
    this.applyTheme(this.currentTheme);
    this.createSwitchButton();
    this.bindEvents();
  }

  // 应用主题
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = document.body.className.replace(/theme-\w+/, '');
    document.body.classList.add(`theme-${theme}`);
    
    // 更新按钮状态
    this.updateButtonState(theme);
    
    // 同步Giscus主题
    this.updateGiscusTheme(theme);
    
    // 存储主题
    this.setStoredTheme(theme);
    this.currentTheme = theme;
  }

  // 创建切换按钮
  createSwitchButton() {
    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle-btn';
    button.setAttribute('aria-label', '切换主题');
    button.innerHTML = `
      <span class="theme-toggle-icon">
        <svg class="sun-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 4V2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zM12 22v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zM20 11h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1zM4 11H2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zM17.7 6.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4s1 .4 1.4 0zM6.3 17.7l-1.4 1.4c-.4.4-.4 1 0 1.4s1 .4 1.4 0l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM17.7 17.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.4-1.4zM6.3 6.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4L6.3 6.3z"/>
        </svg>
        <svg class="moon-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </span>
      <span class="theme-toggle-text">
        <span class="light-text">浅色</span>
        <span class="dark-text">深色</span>
      </span>
    `;

    // 添加到导航栏
    const masthead = document.querySelector('.masthead__inner-wrap');
    if (masthead) {
      masthead.appendChild(button);
    }
  }

  // 更新按钮状态
  updateButtonState(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.setAttribute('data-theme', theme);
    }
  }

  // 绑定事件
  bindEvents() {
    // 按钮点击事件
    document.addEventListener('click', (e) => {
      if (e.target.closest('#theme-toggle')) {
        this.toggleTheme();
      }
    });

    // 键盘事件
    document.addEventListener('keydown', (e) => {
      if (e.key === 't' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.toggleTheme();
      }
    });

    // 系统主题变化监听
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // 切换主题
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  // 更新Giscus主题
  updateGiscusTheme(theme) {
    const giscusTheme = theme === 'dark' ? 'dark' : 'light';
    
    // 如果Giscus已加载，发送主题更新消息
    const giscusFrame = document.querySelector('iframe[src*="giscus"]');
    if (giscusFrame) {
      giscusFrame.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: giscusTheme
            }
          }
        },
        'https://giscus.app'
      );
    }

    // 更新Giscus容器的主题属性
    const giscusContainer = document.querySelector('.giscus');
    if (giscusContainer) {
      giscusContainer.setAttribute('data-theme', giscusTheme);
    }
  }
}

// 等待DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  window.themeSwitcher = new ThemeSwitcher();
});

// 为Giscus提供主题同步函数
window.getGiscusTheme = function() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  return currentTheme === 'dark' ? 'dark' : 'light';
};