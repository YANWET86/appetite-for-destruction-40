# DESIGN.md — Appetite for Destruction 40

Дизайн-система лендинга юбилейного бокс-сета Guns N' Roses «Appetite for Destruction — 40th Anniversary Edition». Документ построен как структурированная дизайн-система: 9 разделов, каждый описывает токен / правило / обоснование. Любой раздел можно передать Claude Code как источник истины для генерации новых страниц или компонентов.

---

## 1. Visual Theme & Atmosphere

**Тема:** Vintage rock vinyl. Sunset Strip 1987. Bourbon, blood, gold leaf.

**Настроение:** Кинематографичная плёнка 35mm. Подвальный концертный зал в Лос-Анджелесе после полуночи. Свет лампы накаливания пробивается сквозь сигаретный дым. Кожа, латунь, выцветший постер.

**Density:** Просторно, но не «воздушно». Большие монументальные блоки, плотная типографика, много чёрного негативного пространства. Каждая секция — отдельный «трек» альбома, разделённый паузой 96–160 px.

**Тон коммуникации:** Уверенный, без рекламной слащавости. Короткие предложения. Глаголы в настоящем времени. Никаких «эксклюзивно», «уникальная возможность», «торопитесь». Только факты + ощущение причастности к легенде.

**Rationale:** Целевая аудитория — коллекционеры 35–55 лет, готовые платить 25k за физический объект. Они презирают глянец маркетплейсов и узнают эстетику родом из своего детства. Поэтому весь лендинг должен ощущаться как **артефакт**, а не интернет-магазин.

---

## 2. Color Palette & Roles

Все цвета объявлены как CSS Custom Properties в `:root`. Никакие hex не пишутся в компонентах напрямую.

| Token | Hex | Роль |
|---|---|---|
| `--bg-deep` | `#0a0604` | Основной фон сайта. Чернее, чем pure black — даёт ощущение бархата, а не OLED-пустоты. |
| `--bg-card` | `#15100b` | Фон карточек, секций второго уровня. Whisky shadow. |
| `--bg-elevated` | `#1f1810` | Hover-состояние карточек, модальные подложки. |
| `--accent-blood` | `#b81e1e` | Основной акцент: CTA-кнопки, состояния ошибок, активные ссылки. Кровь, не пожар. |
| `--accent-blood-hover` | `#d12626` | Hover для `--accent-blood`. |
| `--accent-gold` | `#c9a86a` | Премиум-акцент: цена, рамки коллекционных элементов, иконки. Состаренная латунь, не золото. |
| `--accent-gold-soft` | `#8a7547` | Тени и подложки под gold. |
| `--ink` | `#f4ecdc` | Основной текст. Cream parchment — не чистый белый, чуть тёплый. Снижает усталость глаз на тёмном фоне. |
| `--ink-muted` | `#8b8378` | Вторичный текст, подписи, метаданные. |
| `--ink-dim` | `#5a5249` | Disabled-состояния, разделители. |
| `--border-subtle` | `rgba(201, 168, 106, 0.12)` | Тонкие линии-разделители. Прозрачный gold даёт «латунную нить». |
| `--shadow-warm` | `rgba(184, 30, 30, 0.25)` | Свечение под CTA-кнопками. |
| `--shadow-deep` | `rgba(0, 0, 0, 0.6)` | Тени под карточками. |

**Don'ts:** Никаких пюрно-белых `#fff`, никаких glossy-gradient из 2010-х (purple→pink), никаких неоновых. Цветовая палитра ограниченная — это часть характера.

---

## 3. Typography Rules

Три шрифта. Все — Google Fonts (бесплатно, GDPR-friendly, грузятся параллельно с DNS-prefetch).

| Token | Font | Weight | Применение |
|---|---|---|---|
| `--font-display` | **Cinzel** | 700, 900 | H1, H2, заголовки секций. Шрифт «классических плакатов», засечки с римскими пропорциями. |
| `--font-body` | **Inter** | 400, 500, 600 | Основной текст, кнопки, формы. Современная нейтральность, отлично читается на маленьком кегле. |
| `--font-accent` | **Special Elite** | 400 | Даты, штампы, цитаты, пресс-маркировка. Печатная машинка с неровностями — даёт «документальность». |

**Type scale (modular, base 16px, ratio 1.333):**

```
--fs-xs:    0.75rem   (12 px)  – метаданные, лейблы
--fs-sm:    0.875rem  (14 px)  – подписи, формы
--fs-base:  1rem      (16 px)  – body
--fs-md:    1.333rem  (21 px)  – lead-параграфы
--fs-lg:    1.777rem  (28 px)  – подзаголовки
--fs-xl:    2.369rem  (38 px)  – H3
--fs-2xl:   3.157rem  (51 px)  – H2
--fs-3xl:   4.209rem  (67 px)  – H1
--fs-display: 5.61rem (90 px)  – hero-заголовок
```

**Line-height:**
- Display (Cinzel): `1.05` — плотно, как на постере
- Body (Inter): `1.6` — комфорт чтения
- Accent (Special Elite): `1.4`

**Letter-spacing:**
- Cinzel uppercase: `0.04em`
- Inter body: `-0.01em`
- Special Elite: `0.02em`

**Rationale:** Cinzel + Inter + Special Elite — каноничная связка для «vinyl reissue» эстетики. Cinzel несёт монументальность, Inter обеспечивает читаемость, Special Elite даёт документально-винтажную «грязь».

---

## 4. Component Stylings

### 4.1 Кнопки

```
.btn-primary {
  background: var(--accent-blood);
  color: var(--ink);
  padding: 16px 36px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--fs-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;            /* zero radius — это критично для эстетики */
  cursor: pointer;
  position: relative;
  transition: background 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background: var(--accent-blood-hover);
  box-shadow: 0 0 40px var(--shadow-warm);
}

.btn-secondary {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--accent-gold);
  /* остальное идентично */
}
```

**Магнитный эффект:** кнопка `.btn-primary` притягивается к курсору на ±15 px при приближении в радиусе 80 px (реализация — JS, см. раздел 9.4).

### 4.2 Карточки продукта

```
.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 32px;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover {
  background: var(--bg-elevated);
  border-color: var(--accent-gold);
  box-shadow: 0 20px 60px var(--shadow-deep);
}
```

**3D-tilt:** vanilla-tilt.js даёт наклон ±10° в сторону курсора, perspective 1000.

### 4.3 Поля ввода

```
.input {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--ink-muted);
  color: var(--ink);
  padding: 12px 0;
  font-family: var(--font-body);
  font-size: var(--fs-base);
  transition: border-color 0.3s;
}

.input:focus {
  outline: none;
  border-bottom-color: var(--accent-blood);
  box-shadow: 0 1px 0 0 var(--accent-blood);
}

.input.error {
  border-bottom-color: var(--accent-blood);
  animation: shake 0.4s;
}
```

### 4.4 Навигация

Sticky-хедер, появляется при скролле вниз более 200 px, исчезает при скролле обратно вверх. Высота 72 px. Фон `rgba(10, 6, 4, 0.8)` + `backdrop-filter: blur(20px)`.

### 4.5 FAQ-аккордеон

Кастомный (`<details>` нативно ограничен по стилизации). При раскрытии — плавный transition `max-height` через JS-расчёт scrollHeight, стрелка крутится на 180°.

### 4.6 Тикер-таймер обратного отсчёта

Шесть «механических» цифр (DD HH MM). Каждая цифра — отдельный блок 80×120 px с переворотом по оси X на 180° при смене значения (CSS transform + перекрытие двух половин).

---

## 5. Layout Principles

**Контейнер:**
- max-width: `1240px`
- горизонтальные паддинги: `24px` (mobile) → `64px` (desktop)
- центрирование: `margin-inline: auto`

**Вертикальный ритм:**
- между секциями: `clamp(96px, 12vw, 160px)`
- внутри секции, между заголовком и контентом: `48px`
- между блоками одного типа (карточками): `24px`

**Spacing scale (base 8 px):**
```
--space-1:  8px    – inline-зазоры
--space-2:  16px   – padding мелких элементов
--space-3:  24px   – gap между карточками
--space-4:  32px   – padding карточек
--space-6:  48px   – margin между заголовком и контентом
--space-8:  64px   – горизонтальные паддинги desktop
--space-12: 96px   – минимальный отступ между секциями
--space-16: 128px  – средний отступ между секциями
--space-20: 160px  – максимальный отступ для hero / финала
```

**Сетка:**
- Карточки продукта: CSS Grid `repeat(auto-fit, minmax(280px, 1fr))`, gap 24px
- Логотипы прессы: flex, gap 64px, бесконечная marquee
- Hero: 2-колоночный grid `1fr 1fr`, на мобиле — стек

**Rationale:** Большие отступы между секциями — главный признак премиум-сегмента. Сжатый layout = распродажа.

---

## 6. Depth & Elevation

Иерархия теней, всего 4 уровня:

```
--elev-0:  none                                       /* fond */
--elev-1:  0 2px 8px var(--shadow-deep)              /* hover-состояние мелких элементов */
--elev-2:  0 8px 24px var(--shadow-deep)             /* карточки на hover */
--elev-3:  0 20px 60px var(--shadow-deep)            /* модальные окна, sticky-CTA */
--elev-glow: 0 0 40px var(--shadow-warm)             /* свечение под CTA */
```

**Surface hierarchy:**
- Уровень 0 (фон страницы): `--bg-deep`
- Уровень 1 (секции): иногда `--bg-deep`, иногда `--bg-card` для разделения
- Уровень 2 (карточки): `--bg-card`
- Уровень 3 (карточки на hover, модалки): `--bg-elevated`

**Film grain overlay:**

Поверх всего сайта — фиксированный слой `position: fixed; inset: 0; pointer-events: none; opacity: 0.06; mix-blend-mode: overlay;` с SVG-noise или PNG-grain. Эмулирует зерно плёнки 35mm. Анимируется (медленное перемещение на ±1 px) — даёт ощущение живой плёнки.

---

## 7. Do's and Don'ts

### Do
- ✓ Использовать только токены из этого файла (никаких inline-цветов)
- ✓ Сохранять `border-radius: 0` для всех кнопок и большинства карточек
- ✓ Uppercase для всех CTA и заголовков на Cinzel
- ✓ Длинные текстовые блоки разбивать на 2–4 строки максимум
- ✓ Для дат и пресс-цитат использовать Special Elite — это «голос документа»

### Don't
- ✗ Никаких emoji в финальной разметке
- ✗ Никаких округлых «бабблов», pill-кнопок, soft-shadow карточек в стиле dribbble
- ✗ Никаких glossy-градиентов purple→pink, никакого «фиолетового свечения»
- ✗ Никаких bouncy-анимаций (spring, elastic) — только linear/ease-in-out/cubic-bezier
- ✗ Никаких эмодзи-стрелочек в кнопках, только текст
- ✗ Никаких stock-иконок material/feather — для иконок используем inline SVG со своими параметрами

---

## 8. Responsive Behavior

**Breakpoints (mobile-first):**

```
--bp-sm:  640px    /* большой телефон */
--bp-md:  768px    /* планшет */
--bp-lg:  1024px   /* малый десктоп */
--bp-xl:  1280px   /* десктоп */
--bp-2xl: 1536px   /* большой десктоп */
```

**Адаптивные изменения:**

| Элемент | < 640 | 640–1023 | ≥ 1024 |
|---|---|---|---|
| Hero | стек, заголовок 48 px | 2-кол, 64 px | 2-кол, 90 px |
| Карточки продукта | 1 в ряд | 2 в ряд | 3 в ряд |
| Навигация | бургер | бургер | горизонтальная |
| Таймер | DD-HH-MM в стек | в ряд | в ряд, крупно |
| Логотипы прессы | marquee медленнее | стандартно | стандартно |

**Touch targets:** минимум 44×44 px (требование WCAG 2.5.5).

**Анимации на мобильных:**
- Магнитные кнопки отключаются (`pointer-events`)
- 3D-tilt карточек отключается
- Lenis smooth scroll работает (хорошо чувствует тач)
- ScrollTrigger reveal-эффекты сохраняются

**`prefers-reduced-motion`:** все анимации длительностью > 0.3 s отключаются, остаётся только мгновенное появление. Это требование WCAG 2.3.3.

---

## 9. Agent Prompt Guide

Эти промпты можно переиспользовать в Claude Code для генерации новых страниц/секций без потери стиля.

### 9.1 Базовый промпт для генерации новой секции

> «Создай секцию [НАЗВАНИЕ] в стилистике текущего DESIGN.md. Используй только токены из `:root`, шрифты Cinzel/Inter/Special Elite. Без округлых углов, без эмодзи, без bouncy-анимаций. Цвета: фон `--bg-card`, акцент `--accent-blood` для CTA, `--accent-gold` для премиум-элементов.»

### 9.2 Промпт для генерации компонента

> «Сгенерируй компонент [НАЗВАНИЕ] vanilla HTML+CSS. border-radius: 0. Hover-состояние: `--bg-elevated` + `--accent-gold` border. Анимации только через transform/opacity, длительность 0.3–0.4 s, easing cubic-bezier(0.25, 0.46, 0.45, 0.94).»

### 9.3 Промпт для добавления анимации появления

> «Добавь reveal-анимацию: opacity 0→1, translateY 32px→0, blur 8px→0, длительность 0.8 s, ease-out. Триггер — GSAP ScrollTrigger, start "top 80%". Для группы элементов — stagger 0.1 s.»

### 9.4 Промпт для магнитной кнопки

```js
// Магнитный эффект: кнопка тянется за курсором при приближении.
// Реализация на vanilla JS + GSAP.
function magnetize(el) {
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
}
```

### 9.5 Промпт для анимации появления букв (typewriter)

```js
// Заголовок печатается побуквенно — эффект машинки Special Elite.
// SplitText от GSAP разбивает текст на <span>'ы по символам.
const split = new SplitText('.hero-title', { type: 'chars' });
gsap.from(split.chars, {
  opacity: 0,
  duration: 0.04,
  stagger: 0.05,
  ease: 'none',
  delay: 0.3,
});
```

### 9.6 Промпт для flip-таймера

```js
// Каждая цифра — два полу-блока (верх/низ).
// При смене значения верхняя половина новой цифры «падает» сверху,
// нижняя половина старой «уходит» вниз — эффект механического табло.
// Anime style: rotateX 180° на overlay-элементе с perspective.
```

### 9.7 Промпт для count-up чисел

```js
// При появлении в viewport — цифра тикает от 0 до целевого значения.
// GSAP TweenLite + onUpdate callback.
gsap.to(counter, {
  innerHTML: targetValue,
  duration: 2,
  snap: { innerHTML: 1 },
  scrollTrigger: { trigger: counter, start: 'top 80%' },
});
```

---

## Анимационный бюджет (общий)

| Эффект | Технология | Вес | Триггер |
|---|---|---|---|
| Smooth scroll | Lenis (4 KB) | загружен на всех страницах | автоматически |
| Reveal на скролл | GSAP + ScrollTrigger (35 KB) | загружен | вход секции в viewport |
| Typewriter заголовка | GSAP SplitText (8 KB) | загружен | onload + delay 0.3s |
| Магнитные кнопки | vanilla JS (~1 KB) | inline | mouseenter/mousemove |
| 3D-tilt карточек | vanilla-tilt.js (5 KB) | загружен | mouseenter |
| Flip-таймер | vanilla JS + CSS (~2 KB) | inline | каждую секунду |
| Count-up чисел | GSAP уже подключён | 0 | ScrollTrigger |
| Marquee прессы | CSS @keyframes | 0 | автоматически |
| Film grain overlay | SVG noise (~2 KB) | inline | автоматически |
| Прелоадер | vanilla JS + GSAP | inline | onload |
| Parallax футера | ScrollTrigger | 0 | скролл |

**Итого:** ~55 KB JS-кода + ~10 KB CSS, всё с GPU-ускоренными свойствами (transform/opacity). Целевой Lighthouse Performance: **95+**.

---

## Связь со SPEC и стеком

- Все стили выводятся в `style.css`
- Все JS-эффекты в `script.js`
- GSAP + ScrollTrigger + SplitText подключаются через CDN (gsap.com/cdn)
- Lenis подключается через CDN (`https://unpkg.com/lenis/dist/lenis.min.js`)
- vanilla-tilt подключается через CDN (`https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js`)
- Никакой сборки, никакого `npm` — открыл `index.html` двойным кликом, всё работает

Все промпты раздела 9 переносимы — можно скопировать этот файл целиком в любой будущий проект Claude Code для воспроизведения этой эстетики.
