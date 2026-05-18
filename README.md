# Appetite for Destruction 40 — продающий лендинг

Учебный проект для РЭУ им. Г. В. Плеханова, дисциплина «Цифровые инструменты», практические работы №1 и №2. Юбилейный коллекционный бокс-сет к 40-летию альбома Guns N' Roses «Appetite for Destruction» от вымышленного лейбла Black Frost Records.

**Live URL:** https://yanwet86.github.io/appetite-for-destruction-40/

---

## Стек

- **HTML + CSS + JavaScript** без сборщиков и фреймворков
- **Шрифты:** Cinzel + Inter + Special Elite (Google Fonts)
- **Анимации:** GSAP 3 + ScrollTrigger + SplitText (CDN)
- **Smooth scroll:** Lenis (CDN)
- **3D-tilt карточек:** vanilla-tilt.js (CDN)
- **Иконки:** Lucide inline SVG
- **Фото:** Unsplash hotlink
- **Деплой:** GitHub Pages

Бюджет проекта: 0 ₽.

---

## Структура файлов

```
appetite-for-destruction-40/
├── index.html              ← одностраничник, 6 блоков
├── style.css               ← дизайн-система и стили
├── script.js               ← 17 анимаций + UI-логика
├── DESIGN.md               ← дизайн-система, 9 разделов
├── FREE_STACK.md           ← каталог бесплатных решений
├── CLAUDE.md               ← инструкции AI-ассистенту
├── assets/
│   └── README.md           ← каталог изображений Unsplash
├── docs/
│   ├── karta-proekta.md    ← карточка проекта для сдачи
│   ├── kharakteristika.md  ← характеристика на 1 страницу
│   ├── struktura-lendinga.md  ← структура 6 блоков
│   └── otchet.md           ← финальный отчёт
└── README.md
```

---

## Локальный запуск

### Вариант 1 — двойной клик
Открыть `index.html` двойным кликом → откроется в браузере по умолчанию. Работает на 100% без сервера.

### Вариант 2 — локальный сервер (рекомендуется для разработки)
В терминале из корня проекта:
```bash
python -m http.server 8765
```
Открыть в браузере: `http://localhost:8765/`.

Зачем сервер: некоторые браузерные API (CORS-чувствительные) ведут себя ровно только из-под HTTP. Для финальной проверки перед сдачей — этот вариант надёжнее.

---

## Деплой на GitHub Pages

Выполнить **один раз** из корня проекта:

```bash
git init -b main
git add .
git commit -m "init: appetite for destruction 40 landing"
gh repo create YANWET86/appetite-for-destruction-40 --public --source=. --remote=origin --push
gh api -X POST repos/YANWET86/appetite-for-destruction-40/pages \
  -f source[branch]=main -f source[path]=/
```

После создания GitHub соберёт страницу за 1–2 минуты. Проверка готовности:
```bash
curl -I https://yanwet86.github.io/appetite-for-destruction-40/
```
Ожидаемый ответ: `HTTP/2 200`.

Дальнейшие обновления — стандартно через `git push`. Pages пересоберётся автоматически.

---

## Экспорт в PDF для сдачи в LMS

Преподавателю нужны **два PDF**:

### PDF №1 — макет сайта
1. Открыть `index.html` в Chrome.
2. Дождаться загрузки шрифтов и завершения прелоадера (1.2 секунды).
3. `Ctrl + P` → принтер `Save as PDF`.
4. **Important:** в разделе «More settings» включить **Background graphics: ON** — иначе тёмный фон и цвета не пропечатаются.
5. Сохранить как `lending-makeup.pdf`.

### PDF №2 — карточка проекта
1. Открыть `docs/otchet.md` через любой markdown-просмотрщик (VS Code: `Ctrl+Shift+V`).
2. Включить любой простой стиль (или экспортировать через [dillinger.io](https://dillinger.io)).
3. `Ctrl + P` → `Save as PDF` → `karta-proekta.pdf`.

Альтернативный путь для PDF №2: открыть `docs/otchet.md` на GitHub → нажать «Raw» → `Ctrl + P`.

---

## Проверка перед сдачей (чеклист)

- [ ] `index.html` открывается, 6 блоков, прелоадер 1.2 с, печатается заголовок, тикает таймер
- [ ] Скролл плавный, карточки наклоняются при наведении, CTA-кнопки магнитные
- [ ] Счётчик остатков тикает в CTA-блоке, FAQ раскрывается, форма валидируется
- [ ] Консоль браузера: ноль ошибок, ноль предупреждений CSP
- [ ] Адаптив: DevTools (`F12`) проверены ширины 360, 768, 1280 пикселей
- [ ] `prefers-reduced-motion: reduce` (DevTools → Rendering): анимации мгновенные
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 90, без ошибок CLS
- [ ] PDF `lending-makeup.pdf` — с цветами и шрифтами (Background graphics: ON)
- [ ] PDF `karta-proekta.pdf` — карточка из `docs/otchet.md`
- [ ] Деплой: `curl -I` к опубликованному адресу даёт 200, страница идентична локальной

---

## Что НЕ входит в проект

- Реальная отправка формы (только клиентская валидация и `alert()`)
- Подпись «ФИО / группа» в карточке проекта (заполняется студентом вручную)
- Tilda и любые конструкторы сайтов
- Кастомный домен
- Сборщики, npm-зависимости, фреймворки

---

## Документация проекта

- [`DESIGN.md`](DESIGN.md) — дизайн-система: токены, типографика, компоненты, анимации (9 разделов)
- [`FREE_STACK.md`](FREE_STACK.md) — каталог бесплатных решений, 18 разделов
- [`CLAUDE.md`](CLAUDE.md) — инструкции для AI-ассистента, ведущего разработку
- [`docs/karta-proekta.md`](docs/karta-proekta.md) — карточка проекта (на сдачу)
- [`docs/kharakteristika.md`](docs/kharakteristika.md) — характеристика (на сдачу)
- [`docs/struktura-lendinga.md`](docs/struktura-lendinga.md) — структура 6 блоков
- [`docs/otchet.md`](docs/otchet.md) — итоговый отчёт

---

## Лицензия и атрибуция

Учебный проект, без коммерческого использования. Все имена групп, лейблов и продуктов — учебная иллюстрация.

- GSAP — лицензия GreenSock Standard No-Charge (с 2024 — полностью бесплатно)
- Lenis — MIT
- vanilla-tilt.js — MIT
- Lucide иконки — ISC
- Шрифты Google Fonts — OFL
- Фото Unsplash — Unsplash License (можно для коммерции без указания автора)

Логотипы и торговые марки Guns N' Roses, Rolling Stone, NME, Kerrang!, Mojo, Billboard, Pitchfork, Classic Rock принадлежат правообладателям и используются только для иллюстрации учебной задачи.
