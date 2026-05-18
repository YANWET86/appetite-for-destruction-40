/* =========================================================================
   script.js — Appetite for Destruction 40
   Все 17 анимаций (CLAUDE.md §6.1) + UI-логика.
   Гард prefers-reduced-motion в начале.
   ========================================================================= */

(() => {
  'use strict';

  const PREFERS_REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IS_TOUCH = window.matchMedia('(hover: none)').matches;

  /* -----------------------------------------------------------------------
     0. PRELOADER — 1.2 sec film burn-in (CLAUDE.md §6.1, DESIGN.md §9)
     ----------------------------------------------------------------------- */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const bar = preloader?.querySelector('.preloader__bar-fill');
    const count = document.getElementById('preloader-count');
    if (!preloader) return;

    if (PREFERS_REDUCED) {
      preloader.classList.add('is-hidden');
      setTimeout(() => preloader.remove(), 50);
      return;
    }

    const start = performance.now();
    const duration = 1200;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      if (bar) bar.style.width = (progress * 100).toFixed(1) + '%';
      if (count) count.textContent = String(Math.floor(progress * 100)).padStart(3, '0');
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        preloader.classList.add('is-hidden');
        setTimeout(() => preloader.remove(), 700);
        document.dispatchEvent(new CustomEvent('preloader:done'));
      }
    }
    requestAnimationFrame(tick);
  }

  /* -----------------------------------------------------------------------
     1. LENIS — smooth scroll (FREE_STACK.md §3.2)
     ----------------------------------------------------------------------- */
  let lenisInstance = null;

  function initLenis() {
    if (PREFERS_REDUCED || typeof Lenis === 'undefined') return;

    lenisInstance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Якорные ссылки через Lenis
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = link.getAttribute('href');
        if (target === '#' || target.length < 2) return;
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          lenisInstance.scrollTo(el, { offset: -80, duration: 1.5 });
        }
      });
    });

    // Связь с ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* -----------------------------------------------------------------------
     2. STICKY HEADER — появляется при скролле вниз > 200px, прячется при скролле вверх
     ----------------------------------------------------------------------- */
  function initStickyHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let lastY = 0;
    let ticking = false;

    function update() {
      const y = window.scrollY;
      if (y > 200) {
        header.classList.add('is-visible');
      } else {
        header.classList.remove('is-visible');
      }
      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* -----------------------------------------------------------------------
     3. TYPEWRITER HERO — SplitText (DESIGN.md §9.5)
     ----------------------------------------------------------------------- */
  function initTypewriter() {
    const target = document.querySelector('[data-split]');
    if (!target) return;

    if (PREFERS_REDUCED || typeof gsap === 'undefined' || typeof SplitText === 'undefined') {
      target.style.opacity = '1';
      return;
    }

    document.fonts.ready.then(() => {
      const split = new SplitText(target, { type: 'chars' });
      gsap.from(split.chars, {
        opacity: 0,
        duration: 0.04,
        stagger: 0.05,
        ease: 'none',
        delay: 0.3,
      });
    });
  }

  /* -----------------------------------------------------------------------
     4. SCROLLTRIGGER REVEAL — fade + slide + blur (DESIGN.md §9.3)
     ----------------------------------------------------------------------- */
  function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (PREFERS_REDUCED || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    targets.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('is-visible'),
      });
    });
  }

  /* -----------------------------------------------------------------------
     5. PARALLAX HERO VISUAL
     ----------------------------------------------------------------------- */
  function initParallax() {
    if (PREFERS_REDUCED || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const visual = document.querySelector('.vinyl-stack');
    if (visual) {
      gsap.to(visual, {
        yPercent: -10,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    const sticker = document.querySelector('.vinyl-stack__sticker');
    if (sticker) {
      gsap.to(sticker, {
        rotate: 360,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }
  }

  /* -----------------------------------------------------------------------
     6. МАГНИТНЫЕ КНОПКИ (DESIGN.md §9.4)
     ----------------------------------------------------------------------- */
  function initMagnet() {
    if (PREFERS_REDUCED || IS_TOUCH || typeof gsap === 'undefined') return;

    document.querySelectorAll('[data-magnet]').forEach(el => {
      const strength = 0.4;
      const radius = 80;

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const dist = Math.hypot(x, y);
        if (dist < radius) {
          gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3 });
        }
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  /* -----------------------------------------------------------------------
     7. 3D-TILT карточек (vanilla-tilt.js — FREE_STACK.md §3.3)
     ----------------------------------------------------------------------- */
  function initTilt() {
    if (PREFERS_REDUCED || IS_TOUCH || typeof VanillaTilt === 'undefined') return;

    const cards = document.querySelectorAll('[data-tilt]');
    if (cards.length) {
      VanillaTilt.init(cards, {
        max: 8,
        speed: 800,
        perspective: 1200,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
      });
    }

    const heroVisual = document.querySelector('[data-tilt-hero]');
    if (heroVisual) {
      VanillaTilt.init(heroVisual, {
        max: 12,
        speed: 600,
        perspective: 1400,
        glare: true,
        'max-glare': 0.25,
        scale: 1.03,
      });
    }
  }

  /* -----------------------------------------------------------------------
     8. FLIP-ТАЙМЕР обратного отсчёта (DESIGN.md §9.6)
     Релиз — 2027-07-21 (CLAUDE.md §5.1)
     ----------------------------------------------------------------------- */
  function initCountdown() {
    const root = document.getElementById('countdown');
    if (!root) return;

    const TARGET = new Date('2027-07-21T00:00:00').getTime();
    const cells = {
      days: root.querySelector('[data-unit="days"]'),
      hours: root.querySelector('[data-unit="hours"]'),
      minutes: root.querySelector('[data-unit="minutes"]'),
      seconds: root.querySelector('[data-unit="seconds"]'),
    };
    const lastValues = { days: null, hours: null, minutes: null, seconds: null };

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function update() {
      const now = Date.now();
      let diff = Math.max(0, TARGET - now);
      const days = Math.floor(diff / 86400000); diff -= days * 86400000;
      const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
      const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
      const seconds = Math.floor(diff / 1000);

      const values = { days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };

      Object.entries(values).forEach(([key, val]) => {
        const cell = cells[key];
        if (!cell) return;
        if (lastValues[key] === val) return;

        const span = cell.querySelector('span');
        if (!span) return;

        if (PREFERS_REDUCED) {
          span.textContent = val;
        } else {
          cell.classList.add('is-flipping');
          setTimeout(() => {
            span.textContent = val;
            cell.classList.remove('is-flipping');
          }, 300);
        }
        lastValues[key] = val;
      });
    }

    update();
    setInterval(update, 1000);
  }

  /* -----------------------------------------------------------------------
     9. COUNT-UP чисел (DESIGN.md §9.7)
     ----------------------------------------------------------------------- */
  function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    if (PREFERS_REDUCED || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      counters.forEach(el => { el.textContent = el.dataset.count; });
      return;
    }

    counters.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => { el.textContent = Math.floor(obj.val).toLocaleString('ru-RU'); },
      });
    });
  }

  /* -----------------------------------------------------------------------
     10. ПСЕВДО-СЧЁТЧИК ОСТАТКОВ — тикает −1 каждые 30 сек (CLAUDE.md §6.1)
     ----------------------------------------------------------------------- */
  function initStockTicker() {
    const counterEl = document.getElementById('stock-counter');
    const barEl = document.getElementById('stock-bar-fill');
    if (!counterEl) return;

    const TOTAL = 5000;
    let current = parseInt(counterEl.textContent, 10) || 3127;
    const MIN = 1800; // Не уходит в ноль — учебный проект

    function paint() {
      counterEl.textContent = current.toLocaleString('ru-RU');
      if (barEl) barEl.style.width = ((current / TOTAL) * 100).toFixed(2) + '%';
    }
    paint();

    setInterval(() => {
      if (current > MIN) {
        // случайно −1 или −2 чтобы не выглядело идеально-ровно
        current -= Math.random() < 0.7 ? 1 : 2;
        paint();
      }
    }, 30000);
  }

  /* -----------------------------------------------------------------------
     11. FAQ — плавный аккордеон с max-height
     ----------------------------------------------------------------------- */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const body = item.querySelector('.faq-item__body');
      const head = item.querySelector('.faq-item__head');
      if (!body || !head) return;

      // Перехватываем нативный toggle, чтобы плавно анимировать через max-height
      head.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = item.hasAttribute('open');

        // Закрываем все остальные
        document.querySelectorAll('.faq-item[open]').forEach(other => {
          if (other !== item) {
            const otherBody = other.querySelector('.faq-item__body');
            if (otherBody) otherBody.style.maxHeight = '0px';
            other.removeAttribute('open');
          }
        });

        if (isOpen) {
          body.style.maxHeight = '0px';
          item.removeAttribute('open');
        } else {
          item.setAttribute('open', '');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  /* -----------------------------------------------------------------------
     12. ВАЛИДАЦИЯ ФОРМЫ — shake на ошибку
     ----------------------------------------------------------------------- */
  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#f-name');
    const phoneInput = form.querySelector('#f-phone');
    const phoneRegex = /^[\d\s\-+()]{7,}$/;

    function setError(input, message) {
      const errorBox = form.querySelector(`[data-error-for="${input.id}"]`);
      input.classList.remove('error');
      // Триггер reflow чтобы перезапустить анимацию
      void input.offsetWidth;
      input.classList.add('error');
      if (errorBox) errorBox.textContent = message;
    }

    function clearError(input) {
      input.classList.remove('error');
      const errorBox = form.querySelector(`[data-error-for="${input.id}"]`);
      if (errorBox) errorBox.textContent = '';
    }

    [nameInput, phoneInput].forEach(input => {
      input?.addEventListener('input', () => clearError(input));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, 'Укажите имя');
        ok = false;
      }
      if (!phoneRegex.test(phoneInput.value.trim())) {
        setError(phoneInput, 'Укажите телефон в формате +7 ___ ___ __ __');
        ok = false;
      }

      if (ok) {
        alert('Спасибо! Куратор коллекции свяжется с вами в течение рабочего дня.');
        form.reset();
      }
    });
  }

  /* -----------------------------------------------------------------------
     INIT
     ----------------------------------------------------------------------- */
  function boot() {
    // Регистрируем GSAP-плагины
    if (typeof gsap !== 'undefined') {
      if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
      if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
    }

    initLenis();
    initStickyHeader();
    initReveal();
    initParallax();
    initMagnet();
    initTilt();
    initCountdown();
    initCountUp();
    initStockTicker();
    initFaq();
    initForm();
    initTypewriter();
  }

  // Прелоадер запускается сразу
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
  } else {
    initPreloader();
  }

  // Остальное — после загрузки всех скриптов и шрифтов
  window.addEventListener('load', () => {
    // Небольшая задержка, чтобы defer-скрипты CDN точно подгрузились
    setTimeout(boot, 50);
  });

})();
