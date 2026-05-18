# assets/ — каталог изображений и атрибуция

На лендинге фото **не скачиваются в репозиторий**, а грузятся напрямую через `<img src="...">` с CDN Wikimedia Commons и Unsplash. Это соответствует CLAUDE.md §3 (Stack) и `FREE_STACK.md` §4 (фото).

---

## 1. Используемые в проекте фото

### 1.1 Hero — фоновое фото группы (полноэкранное)
- **Файл:** `Guns_N'_Roses!_(28958187055).jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/7/71/Guns_N%27_Roses%21_%2828958187055%29.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Группа на сцене во время тура «Not in This Lifetime», Сиэтл, 12 августа 2016 года.
- **Автор (Author):** Matt Boulton
- **Лицензия:** **CC-BY-SA 2.0 Generic**
- **Где используется:** `index.html` → `.hero__bg-img` (фон heroskreen)
- **CSS-обработка:** `grayscale(0.6) contrast(1.1) brightness(0.45) sepia(0.15)` — затемнение под палитру DESIGN.md

### 1.2 Hero polaroid слева — Slash
- **Файл:** `Slash_live_in_London_2022_(Cropped).jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/3/39/Slash_live_in_London_2022_%28Cropped%29.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Slash во время выступления в Лондоне, 2022 год.
- **Автор:** Kreepin Deth
- **Лицензия:** **CC-BY-SA 4.0 International**
- **Где используется:** `index.html` → `.polaroid--top`

### 1.3 Hero polaroid справа — Axl Rose
- **Файл:** `Axl_Rose_live_in_London_2022.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/8/86/Axl_Rose_live_in_London_2022.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Axl Rose с микрофоном на сцене в Лондоне, 2022 год.
- **Автор:** Kreepin Deth
- **Лицензия:** **CC-BY-SA 4.0 International**
- **Где используется:** `index.html` → `.polaroid--bot`

### 1.4 Product-секция — фоновое фото справа (Slash)
- **Файл:** `Glasto2023_(216_of_468)_(53008944401)_-_slash_crop.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/0/07/Glasto2023_%28216_of_468%29_%2853008944401%29_-_slash_crop.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Slash на фестивале Glastonbury, 2023 год.
- **Автор:** Raph_PH
- **Лицензия:** **CC-BY 2.0 Generic**
- **Где используется:** `index.html` → `.section--product .section__bg-image--right`

### 1.5 Hero centerpiece — виниловая пластинка
- **URL:** https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=900&q=85&auto=format&fit=crop
- **Источник:** Unsplash
- **Автор:** Pawel Czerwinski (атрибуция не обязательна по Unsplash License)
- **Лицензия:** Unsplash License (можно для коммерции)
- **Где используется:** `index.html` → `.vinyl-stack__img`

### 1.6 CTA-секция — фоновое фото стадиона
- **URL:** https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=2000&q=80&auto=format&fit=crop
- **Источник:** Unsplash
- **Лицензия:** Unsplash License
- **Где используется:** `index.html` → `.section--cta .section__bg-image--full`

### 1.7 OG-image (превью соцсетей)
- **URL:** Тот же винил (`photo-1461360370896-922624d12aa1?w=1200&q=80`)
- **Где:** `<meta property="og:image">` в `index.html`

---

## 2. Стилизованный герб «GN'R 40»

В hero-секции выведен **оригинальный SVG-герб** (inline в `index.html` → `.crest`). Это **собственный дизайн** — щит с надписью «GUNS N' ROSES», крупной цифрой «40», пятью звёздами в нижней части и подписью «YEARS · 1987–2027». **Не воспроизводит** trademark-логотип группы (кросс с пятью черепами от Билла Уайта) — выполнен как трибьют в духе ретро-постера.

Лицензия: оригинальная работа автора проекта, MIT-эквивалент в рамках учебного задания.

---

## 3. Лицензионные требования (обязательная атрибуция)

### Creative Commons CC-BY-SA 4.0 (Slash 2022, Axl Rose 2022)

> Slash, фото © Kreepin Deth, источник Wikimedia Commons,
> лицензия CC-BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
>
> Axl Rose, фото © Kreepin Deth, источник Wikimedia Commons,
> лицензия CC-BY-SA 4.0

**Условие:** при использовании производных работ — лицензировать на той же CC-BY-SA. Указание автора и лицензии обязательно. Учебный проект публикуется на GitHub Pages, исходный код в публичном репо — условие SA соблюдается за счёт открытого исходника репозитория.

### Creative Commons CC-BY-SA 2.0 (Guns N' Roses Seattle 2016)

> Guns N' Roses, Seattle 2016, фото © Matt Boulton, источник Wikimedia Commons,
> лицензия CC-BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/)

### Creative Commons CC-BY 2.0 (Slash Glastonbury 2023)

> Slash, Glastonbury 2023, фото © Raph_PH, источник Wikimedia Commons,
> лицензия CC-BY 2.0 (https://creativecommons.org/licenses/by/2.0/)

**Условие:** указание автора и лицензии (без SA).

### Unsplash License (винил, стадион)
- Указание автора не требуется
- Можно для коммерции
- Источник: https://unsplash.com/license

---

## 4. Атрибуция на лендинге

Для соблюдения требований CC-BY и CC-BY-SA в подвале сайта добавлена строка с указанием источников и авторов. См. `index.html` → `.site-footer__bottom`.

---

## 5. Запасные варианты (если основное фото станет недоступным)

### Винил / пластинки (Unsplash)
- `https://images.unsplash.com/photo-1539375665275-f9de415ef9ac`
- `https://images.unsplash.com/photo-1487537023671-8dce1a785863`
- `https://images.unsplash.com/photo-1518609878373-06d740f60d8b`

### GN'R и музыканты (Wikimedia Commons, все CC)
- Категория группы: https://commons.wikimedia.org/wiki/Category:Guns_N%27_Roses
- Категория Slash: https://commons.wikimedia.org/wiki/Category:Saul_%22Slash%22_Hudson
- Категория Axl Rose: https://commons.wikimedia.org/wiki/Category:Axl_Rose

### Гитара / сцена / атмосфера (Unsplash)
- `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4` — electric guitar
- `https://images.unsplash.com/photo-1510915361894-db8b60106cb1` — Les Paul
- `https://images.unsplash.com/photo-1501612780327-45045538702b` — rock crowd
- `https://images.unsplash.com/photo-1485579149621-3123dd979885` — vintage mic

---

## 6. Параметры Unsplash URL — справка

CDN Unsplash принимает query-параметры для on-the-fly оптимизации:

| Параметр | Что делает | Рекомендация |
|---|---|---|
| `w=900` | ширина в px | `900` для hero, `600` для карточек, `1200` для OG |
| `q=85` | качество JPEG | `80–85` — баланс веса и качества |
| `auto=format` | автовыбор формата (WebP) | **всегда** включаем |
| `fit=crop` | кадрирование | для hero — да |

Wikimedia Commons параметров оптимизации не имеет — отдаёт оригинал. Размеры файлов:
- GN'R Seattle 2016 → 2571×1929, ~1.5 МБ
- Slash London 2022 → 2992×4487, ~2.3 МБ
- Axl Rose London 2022 → 3648×4560, ~3 МБ
- Slash Glastonbury 2023 → 2249×4000, ~2.1 МБ

Это нормально — браузер один раз загружает, дальше кэширует. На GitHub Pages трафик не лимитирован для статики.

---

## 7. Film grain (зерно плёнки)

Реализовано **через inline SVG в `style.css`** (`.grain` → `background-image: data:image/svg+xml,...`). Без отдельного файла. Алгоритм — `feTurbulence` (процедурный шум на GPU). 0 HTTP-запросов, ~0.6 КБ inline-кода.

---

## 8. Иконки

Все SVG-иконки **inline в `index.html`** — `<svg>...</svg>` прямо в разметке. Источник — `lucide.dev` (FREE_STACK.md §5.1). Без отдельных файлов и без зависимостей.

Используются:
- Plus-circle (result-card 1)
- Check-shield (result-card 2)
- Box-package (result-card 3)
- Shield (result-card 4)
- Lock-rect (CTA trust)
- Telegram-paper-plane, VK-marks, YouTube-frame (social-ico)

---

## 9. Если нужно ДОБАВИТЬ файл в `assets/`

1. Оптимизировать через [squoosh.app](https://squoosh.app) (FREE_STACK.md §11.1) → WebP, q≈80.
2. Положить в `assets/`.
3. Подключить через относительный путь: `<img src="assets/имя.webp">`.
4. Атрибуты `loading="lazy"` (кроме hero) и `alt="..."` — обязательно.
5. Обновить эту таблицу.

**Не коммитим:** PSD, RAW, BMP, исходники в `*.png` > 300 КБ. Только финальные WebP/JPG.
