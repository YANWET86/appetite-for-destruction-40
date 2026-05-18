# CLAUDE.md — Лендинг «Appetite for Destruction 40»

Учебный проект для РЭУ им. Плеханова (дисциплина «Цифровые инструменты», практические №1–№2). Продающий одностраничник к юбилейному бокс-сету Guns N' Roses.

## 1. Контекст

- Учебное задание, не коммерческий продукт. Сдача — 2 PDF в LMS: карточка проекта + дизайн-макет.
- Подпись «ФИО / группа» в карточке оставить **пустой** (просьба пользователя).
- **Tilda не используется** (отказ пользователя).
- Препод смотрит **живой сайт**, не только PDF — анимации обязательны.

## 2. Параметры (для карточки проекта)

| Параметр | Значение |
|---|---|
| Тема | Юбилейный бокс-сет Guns N' Roses «Appetite for Destruction — 40th Anniversary» |
| Тип | Автономный, продающий |
| Целевое действие | Предзаказ коллекционного бокса |
| Объект | Вымышленный лейбл «Black Frost Records» |
| Цена / тираж | 24 990 ₽ / 5000 нумерованных |

## 3. Стек

- **vanilla HTML + CSS + JS** — без npm/сборщиков. Все библиотеки через CDN.
- **Шрифты:** Google Fonts (Cinzel, Inter, Special Elite) — `FREE_STACK.md` §2.1.
- **Анимации:** GSAP 3 + ScrollTrigger + SplitText (`FREE_STACK.md` §3.1).
- **Smooth scroll:** Lenis (`FREE_STACK.md` §3.2).
- **3D-tilt:** vanilla-tilt.js (`FREE_STACK.md` §3.3).
- **Иконки:** Lucide inline SVG (`FREE_STACK.md` §5.1). **Фото:** Unsplash (`FREE_STACK.md` §4.1).
- **Деплой:** GitHub Pages — публичный, репо `YANWET86/appetite-for-destruction-40`.
- **Окружение:** git 2.53, gh 2.90 с scope `repo`.

**Уровень визуального качества:** «продвинутый» / Awwwards-tier. Не делать статичный лендинг.

## 4. Структура файлов

Корень репозитория = корень папки проекта (Pages раздаёт `index.html` без подпапки).

```
Сайт для вани 2/
├── index.html              ← одностраничник, 6 блоков
├── style.css               ← вся стилизация
├── script.js               ← все анимации + UI-логика
├── DESIGN.md               ← дизайн-система, 9 разделов
├── FREE_STACK.md           ← каталог бесплатных решений
├── assets/README.md        ← ссылки на фото Unsplash
├── docs/
│   ├── karta-proekta.md    │ kharakteristika.md
│   └── struktura-lendinga.md │ otchet.md
├── .gitignore   └── README.md
```

`*.pptx` методичек **не коммитим** (в `.gitignore`).

## 5. Структура лендинга (6 блоков по методичке)

1. **Hero** — «Welcome to the Jungle. Again.», подзаголовок «40 лет легенде. 5000 коллекционных боксов в мире», CTA «Оформить предзаказ — 24 990 ₽», countdown-таймер.
2. **Рассказ о продукте** — что входит: винил 180g remastered, артбук 120 стр., литография Robert Williams, реплика билета Whisky a Go Go 1987, сертификат подлинности, NFC-чип со скрытым неизданным треком.
3. **Результат** — «Один из 5000 в мире», нумерованный сертификат, бесплатная доставка с трекингом, гарантия выкупа лейблом по полной цене в течение года.
4. **CTA** — плашка с ценой, псевдо-счётчик остатков, кнопка «Забронировать сейчас».
5. **Соц. доказательства** — пресса (Rolling Stone, NME, Kerrang!), цитаты, цифры (100M+ копий, 30+ платины), отзывы коллекционеров.
6. **Сопутствующее** — FAQ (доставка, оплата, аутентичность), форма (имя, телефон, текст), контакты, соцсети.

## 6. Визуальный язык (краткая выжимка из DESIGN.md)

**Тема:** Vintage rock vinyl. Sunset Strip 1987. Bourbon, blood, gold leaf.

**Цвета:** `--bg-deep:#0a0604` · `--bg-card:#15100b` · `--accent-blood:#b81e1e` · `--accent-gold:#c9a86a` · `--ink:#f4ecdc` · `--ink-muted:#8b8378`.

**Типографика:** Cinzel 700/900 (display) · Inter 400/500/600 (body) · Special Elite (даты, штампы).

**Лейаут:** max-width 1240px, между секциями `clamp(96px, 12vw, 160px)`.

**Don'ts:** никаких глянцевых градиентов, округлых «бабблов», эмодзи, bouncy-анимаций.

Полная спека (токены, компоненты, breakpoints, код анимаций) — в **`DESIGN.md`**.

## 6.1 Анимации (обязательные, спека в DESIGN.md §9)

Прелоадер · typewriter hero · film grain overlay · Lenis smooth scroll · ScrollTrigger reveal (fade + slide + blur) · parallax · магнитные CTA-кнопки · 3D-tilt карточек · flip-таймер (rotateX) · count-up чисел · marquee логотипов прессы · псевдо-счётчик остатков (тикает −1 каждые 30 сек) · glow на CTA hover · свечение полей при focus · shake при ошибке валидации · плавный аккордеон FAQ · hover-rotation иконок соцсетей.

**Курсор:** стандартный (не кастомный).
**`prefers-reduced-motion`:** все анимации >0.3s отключаются (WCAG 2.3.3).
**Производительность:** только GPU-свойства (transform/opacity), цель Lighthouse Perf ≥ 95.

## 7. Шаги реализации

### Часть 1 — код
1. ✅ **`DESIGN.md`** — создан 2026-05-18. **Не переписывать**, править только точечно.
2. ✅ **`FREE_STACK.md`** — создан 2026-05-19. Проверять перед подключением сервисов.
3. ⏳ **`index.html`** — 6 секций, CDN GSAP/ScrollTrigger/SplitText/Lenis/vanilla-tilt, Google Fonts с `preconnect`, inline SVG Lucide, OG-meta, `theme-color:#0a0604`.
4. ⏳ **`style.css`** — токены DESIGN.md §2–§6, `@keyframes shake/marquee/grain`, media по §8, гард `prefers-reduced-motion`.
5. ⏳ **`script.js`** — Lenis init, ScrollTrigger reveal/parallax, SplitText typewriter, vanilla-tilt, магнит-кнопки, flip-таймер, count-up, псевдо-счётчик, FAQ, валидация формы. Гард `prefers-reduced-motion` в начале.
6. ⏳ **`assets/README.md`** — ссылки Unsplash (vinyl, guitar, rock concert, microphone) + grain SVG-noise inline.
7. ⏳ **`docs/*.md`** — по форме методички (слайды 20–28).
8. ⏳ **`README.md`** — инструкция запуска и PDF-экспорта (Ctrl+P, **Background graphics: ON**).
9. ⏳ **`.gitignore`** — `*.pptx`, `.env`, `node_modules`, `.DS_Store`, `Thumbs.db`.

### Часть 2 — деплой
1. `git init` в корне.
2. `gh repo create YANWET86/appetite-for-destruction-40 --public --source=. --remote=origin --push`.
3. `gh api -X POST repos/YANWET86/appetite-for-destruction-40/pages -f source[branch]=main -f source[path]=/`.
4. Подождать сборку (~1–2 мин), `curl -I https://yanwet86.github.io/appetite-for-destruction-40/` → 200 OK.
5. Live-URL в `README.md`, второй коммит.

## 8. Verification (перед сдачей)

- [ ] `index.html` открывается двойным кликом → видны 6 блоков, Google Fonts грузятся, **прелоадер отыгрывает 1.2 сек**, **hero печатается побуквенно**, **таймер тикает с flip-эффектом**, **Lenis прокручивает плавно**, **карточки наклоняются при наведении**, **CTA магнитные**, **счётчик остатков тикает**, FAQ раскрывается, форма валидируется (shake при ошибке).
- [ ] Console браузера чистая (0 ошибок, 0 предупреждений CSP).
- [ ] Адаптив: DevTools F12 → 360 / 768 / 1280 — контент читается, на mobile магнит/tilt отключены, marquee работает.
- [ ] `prefers-reduced-motion: reduce` (DevTools → Rendering) — анимации мгновенные, без движения.
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 90, без ошибок CLS.
- [ ] PDF сайта: Ctrl+P → Save as PDF → **Background graphics: ON** → `lending-makeup.pdf` с цветами и шрифтами.
- [ ] PDF карточки: `docs/otchet.md` → Print → `karta-proekta.pdf`.
- [ ] Карточка: 3 заполненных поля (тема/тип/категория), характеристика ≤1 страница A4, структура — ровно 6 блоков.
- [ ] Деплой: `curl -I https://yanwet86.github.io/appetite-for-destruction-40/` → 200, страница идентична локальной.

## 9. Что НЕ входит

- Реальная отправка формы — только валидация + `alert()`.
- Подпись «ФИО / группа». Tilda. Кастомный домен. Сборщики, npm, фреймворки.

## 10. Правила работы для Claude

- Один большой `Write` на файл вместо серии `Edit`.
- Не придумывать несуществующие CSS-свойства, API, методы. При сомнении — проверить MDN (`FREE_STACK.md` §14.1).
- Никаких эмодзи в коде и финальном лендинге.
- Не пушить `*.pptx`.
- Перед деплоем — локальная проверка, что сайт открывается без ошибок в консоли.
- **Бесплатность стека:** перед подключением ЛЮБОГО сервиса/CDN — проверить `FREE_STACK.md`. Платное не подключать без согласования.
- **Не использовать** Cloudflare Pages, Netlify, Vercel — заблокированы/нестабильны в РФ. Деплой только GitHub Pages.
- Время важнее токенов: при выборе скорость vs экономия — скорость.

## 11. Связанные документы

- **`DESIGN.md`** — визуальный язык, токены, спека всех 17 анимаций (9 разделов).
- **`FREE_STACK.md`** — каталог бесплатных решений. Обновлять при добавлении/изменении сервисов.

## 12. История ключевых решений

- 2026-05-18: создан DESIGN.md (структурированная дизайн-система из 9 разделов).
- 2026-05-19: создан FREE_STACK.md. Удалён клон `awesome-claude-design/` (репо оказался витриной без файлов). Уровень визуала повышен до «продвинутый» (Awwwards-tier) — препод смотрит живой сайт.
- 2026-05-19: установка open-design desktop провалена (баг #1679 — Electron import error на Windows 10), решено работать через Claude Code без отдельного desktop-инструмента.
