/* ===========================
   上海拓达联国际贸易有限公司
   官方网站 — 交互脚本
   =========================== */

document.addEventListener('DOMContentLoaded', function() {

  // ========== 移动端菜单 ==========
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // 点击导航链接关闭菜单
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ========== Header滚动效果 ==========
  const header = document.getElementById('header');

  function onScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    updateActiveNav();
    updateBackToTop();
  }

  // 使用 passive 监听提升移动端滚动性能
  window.addEventListener('scroll', onScroll, { passive: true });

  // ========== 导航高亮 ==========
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  // ========== 回到顶部按钮 ==========
  const backToTop = document.getElementById('backToTop');

  function updateBackToTop() {
    if (window.pageYOffset > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  // 合并滚动事件 — 统一在 onScroll 中处理

  // ========== 数字滚动动画 ==========
  function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
    });
  }

  // ========== Hero粒子效果 ==========
  function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');
      const size = Math.random() * 6 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 8 + 4) + 's';
      container.appendChild(particle);
    }
  }
  createParticles();
  animateNumbers();

  // ========== 滚动入场动画 (移动端降低触发阈值) ==========
  const isMobile = window.innerWidth <= 768;
  const observerOptions = {
    threshold: isMobile ? 0.05 : 0.15,
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatableElements = document.querySelectorAll(
    '.adv-card, .trade-card, .sc-card, .product-card, .partner-card, .news-card, .contact-item'
  );

  animatableElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ========== 联系表单处理 ==========
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  // 检测URL参数，显示提交成功提示
  if (window.location.search.includes('sent=success')) {
    showToast('✅ 提交成功！感谢您的咨询，我们将在24小时内与您联系。', 'success');
    window.history.replaceState({}, '', window.location.pathname + window.location.hash);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // 基本验证
      if (!name || !email || !message) {
        e.preventDefault();
        showToast('请填写所有必填字段（姓名、电子邮箱、留言内容）', 'error');
        return false;
      }

      // 邮箱格式验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        showToast('请输入有效的电子邮箱地址', 'error');
        return false;
      }

      // 显示提交中状态，表单正常提交到FormSubmit
      if (submitBtn) {
        submitBtn.innerHTML = '<span>正在提交...</span>';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';
      }
    });
  }

  // ========== Toast提示 ==========
  function showToast(message, type) {
    // 移除已有的toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.classList.add('toast');
    if (type === 'error') {
      toast.style.background = '#c0392b';
    }
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3200);
  }

  // ========== 键盘导航支持 ==========
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (nav.classList.contains('open')) {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
});
