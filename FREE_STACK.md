# FREE_STACK.md — Каталог бесплатных решений проекта

Полный список инструментов и ресурсов, которые **используются или могут быть использованы** при разработке лендинга «Appetite for Destruction 40». Все позиции — **проверенно бесплатны на 2026-05-19**, без trial-периодов с обязательной картой, без скрытой подписки.

> **Правило для Claude и пользователя:** при любом новом требовании к проекту сначала ищем решение в этом файле. Платные сервисы не подключаем без явного согласования.

---

## 1. Хостинг и деплой

### 1.1 GitHub Pages — **используется в проекте**
- **URL:** [pages.github.com](https://pages.github.com)
- **Что:** статический хостинг прямо из git-репозитория
- **Бесплатно:** навсегда, для публичных репо без ограничений
- **Лимиты:** 1 ГБ репозиторий, 100 ГБ трафика/месяц, 10 билдов/час
- **Открывается в РФ:** да (GitHub доступен)
- **SSL:** автоматически через Let's Encrypt
- **Деплой:**
  ```bash
  git init
  gh repo create YANWET86/appetite-for-destruction-40 --public --source=. --remote=origin --push
  gh api -X POST repos/YANWET86/appetite-for-destruction-40/pages -f source[branch]=main -f source[path]=/
  ```

### 1.2 Yandex Cloud Object Storage — резерв
- **URL:** [cloud.yandex.ru/services/storage](https://cloud.yandex.ru/services/storage)
- **Бесплатно:** 1 ГБ хранилища + 10 ГБ трафика/мес навсегда
- **Открывается в РФ:** идеально (серверы в РФ)
- **Когда брать:** если GitHub Pages заблокируют или нужна максимальная скорость для российской аудитории

### 1.3 Beget Free — резерв
- **URL:** [beget.com](https://beget.com)
- **Бесплатно:** 1 ГБ места, без рекламы
- **Когда брать:** если нужен российский хостинг с FTP-доступом

---

## 2. Шрифты

### 2.1 Google Fonts — **используется в проекте**
- **URL:** [fonts.google.com](https://fonts.google.com)
- **Бесплатно:** все шрифты, в т.ч. для коммерции
- **Шрифты проекта:**
  - Cinzel (`https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap`)
  - Inter (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`)
  - Special Elite (`https://fonts.googleapis.com/css2?family=Special+Elite&display=swap`)
- **Подключение:** один `<link>` в `<head>` с `display=swap` для мгновенного рендера
- **Performance hack:**
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```

### 2.2 Bunny Fonts — приватная альтернатива
- **URL:** [fonts.bunny.net](https://fonts.bunny.net)
- **Что:** прокси-зеркало Google Fonts без передачи IP в Google
- **Когда брать:** если нужно соответствие GDPR или РКН

### 2.3 Fontshare — премиум-шрифты бесплатно
- **URL:** [fontshare.com](https://fontshare.com)
- **Бесплатно:** в т.ч. для коммерции
- **Когда брать:** если хочется заменить Inter на что-то более редкое (Switzer, General Sans, Satoshi)

---

## 3. Анимационные библиотеки (CDN, без npm)

### 3.1 GSAP 3 — **используется в проекте**
- **URL:** [gsap.com](https://gsap.com)
- **Бесплатно:** с 2024 года полностью, включая ВСЕ премиум-плагины (Webflow купил Greensock и открыл код)
- **Лицензия:** включая коммерческое использование
- **CDN:**
  ```html
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
  ```
- **Применение:** typewriter заголовка, reveal на скролл, count-up чисел, магнитные кнопки

### 3.2 Lenis — **используется в проекте**
- **URL:** [github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis)
- **Бесплатно:** MIT
- **Что:** smooth scroll с инерцией, который ощущается «масляно» — то, что используют сайты-победители Awwwards
- **CDN:** `https://unpkg.com/lenis@1.1.18/dist/lenis.min.js`
- **Размер:** ~4 КБ gzipped

### 3.3 Vanilla-tilt.js — **используется в проекте**
- **URL:** [micku7zu.github.io/vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js)
- **Бесплатно:** MIT
- **Что:** 3D-наклон карточек в сторону курсора
- **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js`
- **Размер:** ~5 КБ

### 3.4 Альтернативы (на случай отказа от GSAP)
- **anime.js** — `https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js` (MIT)
- **Motion One** — `https://cdn.jsdelivr.net/npm/motion@10.18.0/dist/motion.min.js` (MIT)
- **AOS** — `https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js` (только reveal на скролл, простой)

---

## 4. Изображения и фото

### 4.1 Unsplash — **используется в проекте**
- **URL:** [unsplash.com](https://unsplash.com)
- **Лицензия:** Unsplash License — можно всё, включая коммерцию, без указания автора
- **Что искать для лендинга:** `vinyl record`, `guitar`, `rock concert`, `vintage microphone`, `whisky bourbon`
- **API:** есть бесплатный (50 запросов/час) — для прямой загрузки в код

### 4.2 Pexels
- **URL:** [pexels.com](https://pexels.com)
- **Лицензия:** Pexels License (≈CC0, можно всё)
- **Фото + видео-фоны:** до 4K

### 4.3 Pixabay
- **URL:** [pixabay.com](https://pixabay.com)
- **Лицензия:** Pixabay License (≈CC0)
- **Особенность:** фото + векторы + музыка + видео в одном

### 4.4 FreeImages — разрешён методичкой РЭУ
- **URL:** [freeimages.com](https://freeimages.com)
- **Лицензия:** FreeImages License — для коммерции и не-коммерции
- **Когда брать:** для строгого соответствия методичке

### 4.5 Wikimedia Commons
- **URL:** [commons.wikimedia.org](https://commons.wikimedia.org)
- **Что:** исторические фото 80-х (концерты, постеры эпохи)
- **Лицензия:** в основном CC BY-SA — нужно указывать автора

---

## 5. Иконки

Все варианты — copy-paste inline SVG, без зависимостей.

### 5.1 Lucide — **рекомендуется**
- **URL:** [lucide.dev](https://lucide.dev)
- **Лицензия:** ISC (≈MIT)
- **Количество:** 1500+
- **Стиль:** тонкие линии, нейтральные — подходят к Inter

### 5.2 Heroicons
- **URL:** [heroicons.com](https://heroicons.com)
- **Лицензия:** MIT
- **От создателей Tailwind**

### 5.3 Tabler Icons
- **URL:** [tabler.io/icons](https://tabler.io/icons)
- **Лицензия:** MIT
- **Количество:** 5000+

### 5.4 Phosphor Icons
- **URL:** [phosphoricons.com](https://phosphoricons.com)
- **Лицензия:** MIT
- **Особенность:** 6 толщин одной иконки

### 5.5 Simple Icons — логотипы брендов
- **URL:** [simpleicons.org](https://simpleicons.org)
- **Что:** логотипы Rolling Stone, NME, Spotify, Apple Music и т.п.

---

## 6. Аналитика (если решим подключать)

### 6.1 Яндекс.Метрика — приоритет для РФ
- **URL:** [metrika.yandex.ru](https://metrika.yandex.ru)
- **Бесплатно:** полностью, без лимитов
- **Открывается в РФ:** да
- **Тепловые карты, Вебвизор:** в комплекте

### 6.2 Plausible (self-hosted)
- **URL:** [plausible.io](https://plausible.io) — облако платное; self-hosted бесплатно
- **Когда брать:** если нужен GDPR-friendly без сбора PII

### 6.3 Umami (self-hosted)
- **URL:** [umami.is](https://umami.is)
- **Бесплатно:** при self-host
- **Открытый исходный код**

---

## 7. AI для разработки и контента

### 7.1 Claude Code — **используется** (по подписке пользователя)
- Основной инструмент для написания кода

### 7.2 Claude.ai web — **используется** (по подписке пользователя)
- Для обсуждения архитектуры и копирайтинга

### 7.3 ChatGPT free
- **URL:** [chat.openai.com](https://chat.openai.com)
- **Бесплатно:** GPT-4o mini без ограничений + GPT-4o с лимитом ~10 сообщений/3 часа
- **Когда брать:** второе мнение, проверка кода

### 7.4 DeepSeek
- **URL:** [chat.deepseek.com](https://chat.deepseek.com)
- **Бесплатно:** полностью, без лимитов
- **Качество:** на уровне GPT-4
- **Когда брать:** длинные тексты, рассуждения, генерация описаний продукта

### 7.5 Mistral Le Chat
- **URL:** [chat.mistral.ai](https://chat.mistral.ai)
- **Бесплатно:** в т.ч. с Web Search

### 7.6 Perplexity
- **URL:** [perplexity.ai](https://perplexity.ai)
- **Бесплатно:** 5 Pro-запросов/день + неогранич. обычных
- **Когда брать:** поиск с проверяемыми источниками для текстов

---

## 8. Генерация изображений (если стоковые не подходят)

### 8.1 Bing Image Creator (Microsoft Designer)
- **URL:** [bing.com/create](https://bing.com/create)
- **Движок:** DALL-E 3
- **Бесплатно:** 15 быстрых генераций/день, безлимит медленных
- **Качество:** топ из бесплатных

### 8.2 Google Gemini (Imagen 3)
- **URL:** [gemini.google.com](https://gemini.google.com)
- **Бесплатно:** в чате

### 8.3 Leonardo.ai
- **URL:** [leonardo.ai](https://leonardo.ai)
- **Бесплатно:** 150 кредитов/день
- **Когда брать:** для кастомных текстур (film grain, vinyl artwork)

### 8.4 Recraft.ai
- **URL:** [recraft.ai](https://recraft.ai)
- **Бесплатно:** 50 кредитов/день
- **Особенность:** генерация SVG-векторов

---

## 9. Видео-фоны (опционально)

### 9.1 Pexels Videos
- **URL:** [pexels.com/videos](https://pexels.com/videos)
- **Лицензия:** Pexels (можно всё)
- **Качество:** до 4K

### 9.2 Coverr
- **URL:** [coverr.co](https://coverr.co)
- **Лицензия:** CC0

### 9.3 Mixkit
- **URL:** [mixkit.co](https://mixkit.co)
- **Лицензия:** Mixkit License (можно для коммерции)

---

## 10. Звуки и музыка (если решим добавлять)

> ⚠️ **Не ставим autoplay фоновую музыку** — это убивает UX и нарушает требования Web Vitals.

### 10.1 Pixabay Music
- **URL:** [pixabay.com/music](https://pixabay.com/music)
- **Лицензия:** Pixabay (CC0-эквивалент)

### 10.2 YouTube Audio Library
- **URL:** [youtube.com/audiolibrary](https://youtube.com/audiolibrary)
- **Бесплатно:** в т.ч. для коммерции

### 10.3 Freesound.org
- **URL:** [freesound.org](https://freesound.org)
- **Что:** звуковые эффекты (щелчки, винил-crackle, vintage sound)

---

## 11. Оптимизация активов

### 11.1 Squoosh — **рекомендуется**
- **URL:** [squoosh.app](https://squoosh.app)
- **Что:** оптимизация PNG/JPG/WebP в браузере, открытый код Google
- **Бесплатно:** да
- **Использование:** все фото перед использованием → WebP, качество 80, ~50% от исходного размера

### 11.2 TinyPNG
- **URL:** [tinypng.com](https://tinypng.com)
- **Бесплатно:** 20 файлов за раз без аккаунта

### 11.3 SVGOMG
- **URL:** [jakearchibald.github.io/svgomg](https://jakearchibald.github.io/svgomg/)
- **Что:** оптимизация SVG (иконок, логотипов)

### 11.4 PageSpeed Insights
- **URL:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **Что:** Lighthouse-аудит — цель проекта 95+ Performance

### 11.5 GTmetrix
- **URL:** [gtmetrix.com](https://gtmetrix.com)
- **Что:** Waterfall-анализ загрузки

---

## 12. Утилиты разработки

### 12.1 Можно через CLI на пользовательском ПК
- `git` 2.53 — установлен
- `gh` 2.90 — установлен, авторизован
- Chrome — для preview и Ctrl+P → PDF
- VS Code — для ручных правок

### 12.2 Онлайн-инструменты (не нужна установка)
- **CSS Gradient Generator:** [cssgradient.io](https://cssgradient.io)
- **Coolors** (палитры): [coolors.co](https://coolors.co)
- **Realtime Colors** (превью палитры в дизайне): [realtimecolors.com](https://realtimecolors.com)
- **CSS Clip-Path Maker:** [bennettfeely.com/clippy](https://bennettfeely.com/clippy)
- **Cubic-bezier easing:** [cubic-bezier.com](https://cubic-bezier.com)
- **Animista** (готовые CSS-анимации): [animista.net](https://animista.net)

---

## 13. Тестирование

### 13.1 Responsively App
- **URL:** [responsively.app](https://responsively.app)
- **Что:** desktop-приложение для одновременной проверки сайта на 5+ разрешениях
- **Бесплатно:** MIT, опен-сорс

### 13.2 BrowserStack — бесплатный trial (НЕ берём)
- Бесплатные минуты заканчиваются — не подходит под правило проекта

### 13.3 LambdaTest free
- **URL:** [lambdatest.com](https://lambdatest.com)
- **Бесплатно:** 60 минут/месяц на real-device тестирование

### 13.4 Chrome DevTools — главный инструмент
- F12 → Device Mode → ширины 360 / 768 / 1280 (как в CLAUDE.md)
- Lighthouse-аудит встроен

---

## 14. Документация и подсказки

### 14.1 MDN Web Docs
- **URL:** [developer.mozilla.org](https://developer.mozilla.org)
- **Главный источник** по HTML/CSS/JS API. Используется первым при любом вопросе по веб-стандартам.

### 14.2 Can I Use
- **URL:** [caniuse.com](https://caniuse.com)
- **Что:** проверка поддержки CSS/JS-фич в браузерах

### 14.3 web.dev
- **URL:** [web.dev](https://web.dev)
- **Что:** гайды от Google по performance, accessibility, SEO

---

## 15. SEO и meta

### 15.1 Open Graph генератор
- **URL:** [opengraph.xyz](https://opengraph.xyz)
- **Что:** генерация og:image и проверка превью для соцсетей

### 15.2 Schema.org разметка
- **URL:** [schema.org/Product](https://schema.org/Product)
- **Что:** JSON-LD для богатых сниппетов в поиске (для коммерции в будущем)

---

## 16. Деплой-инфраструктура (будущее)

### 16.1 Cloudflare Workers — **❌ заблокирован в РФ**, не используем
### 16.2 Netlify — **❌ нестабилен в РФ**, не используем
### 16.3 Vercel — **❌ периодически блокируется**, не используем

### 16.4 GitHub Actions — **бесплатно для публичных репо**
- **URL:** [github.com/features/actions](https://github.com/features/actions)
- **Лимиты:** 2000 минут/мес для приватных, безлимит для публичных
- **Когда брать:** автодеплой, авто-Lighthouse-аудит при push

### 16.5 Render.com — резервный хостинг
- **URL:** [render.com](https://render.com)
- **Бесплатно:** статика без ограничений (free tier для статики не засыпает)
- **В РФ:** работает нестабильно — только как запасной вариант

---

## 17. Резюме: что подключаем СЕЙЧАС

Для текущего проекта берём только эти позиции:

| Категория | Решение | Где подключаем |
|---|---|---|
| Хостинг | GitHub Pages | git remote |
| Шрифты | Google Fonts (Cinzel, Inter, Special Elite) | `<link>` в `<head>` |
| Анимации | GSAP 3 + ScrollTrigger + SplitText | CDN в `<script>` |
| Smooth scroll | Lenis | CDN |
| Tilt-эффект | vanilla-tilt.js | CDN |
| Фото | Unsplash (ссылки в `assets/README.md`) | прямые URL или загрузка |
| Иконки | Lucide (inline SVG) | копи-паст в HTML |
| Документация | MDN, Can I Use | онлайн при разработке |
| Оптимизация фото | Squoosh.app | перед коммитом |
| Проверка скорости | PageSpeed Insights, Lighthouse | финальный аудит |

**Бюджет проекта: 0 ₽ дополнительно.**

---

## 18. Правила использования

1. **Перед подключением любого нового сервиса** — проверь, есть ли он в этом файле или его бесплатный аналог.
2. **Если бесплатной альтернативы нет** — сообщи пользователю и предложи варианты, не подключай платный сервис автоматически.
3. **При обновлении лимитов сервиса** (например, GSAP вдруг станет платным) — обнови этот файл и предложи альтернативу.
4. **Не используем** Cloudflare/Netlify/Vercel — заблокированы или нестабильны в РФ.
5. **Atomic-обновления:** добавление нового сервиса = новая строка в разделе 17 (резюме).

---

**Последняя проверка статусов:** 2026-05-19
