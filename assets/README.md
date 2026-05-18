# assets/ — каталог изображений и атрибуция

На лендинге фото **не скачиваются в репозиторий**, а грузятся напрямую через `<img src="...">` с CDN Wikimedia. Это соответствует CLAUDE.md §3 (Stack) и `FREE_STACK.md` §4.

---

## 1. Используемые в проекте фото

### 1.1 Hero — фоновое фото группы (полноэкранное)
- **Файл:** `Guns_N'_Roses!_(28958187055).jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/7/71/Guns_N%27_Roses%21_%2828958187055%29.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Группа на сцене, тур «Not in This Lifetime», Сиэтл, 12 августа 2016 года.
- **Автор:** Matt Boulton
- **Лицензия:** **CC-BY-SA 2.0 Generic**
- **Где используется:** `index.html` → `.hero__bg-img`

### 1.2 Hero centerpiece — обложка альбома «Appetite for Destruction» (1987)
- **Файл:** `GunsnRosesAppetiteforDestructionalbumcover.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/en/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg
- **Источник:** English Wikipedia (non-free media)
- **Описание:** Обложка студийного альбома Guns N' Roses 1987 года — кельтский крест с пятью черепами (символизируют участников группы).
- **Оформление:** Billy White Jr. (на основе татуировки)
- **Правообладатель:** **© Geffen Records, 1987**
- **Использование:** Учебный проект, иллюстрация в дидактическом контексте — ст. 1274 ГК РФ (цитирование в учебных целях). Fair use по правилам Wikipedia.
- **Где используется:** `index.html` → `.album-cover__img`
- **Анимация:** При наведении на обложку из-за неё выезжает крутящийся винил-диск (CSS keyframes vinylSpin).

### 1.3 Hero polaroid слева — Slash
- **Файл:** `Slash_2009.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/9/94/Slash_2009.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Slash, 2009 год. Близко к классическому облику (цилиндр, кудри, очки).
- **Автор:** Glenn Francis (Toglenn, www.PacificProDigital.com)
- **Лицензия:** **CC-BY-SA 3.0 Unported** (+ GFDL 1.2)
- **Где используется:** `index.html` → `.polaroid--top`

### 1.4 Hero polaroid справа — Axl Rose молодой
- **Файл:** `Axl_Rose_at_Yarkon_Park_in_Tel_Aviv,_Israel_--_May_1993.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/7/70/Axl_Rose_at_Yarkon_Park_in_Tel_Aviv%2C_Israel_--_May_1993.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Axl Rose на сцене в Tel Aviv (Yarkon Park), май 1993 года. Эпоха Use Your Illusion Tour.
- **Автор:** Alibaba (Hebrew Wikipedia uploader)
- **Лицензия:** **CC-BY-SA 3.0 Unported** (+ GFDL 1.2)
- **Где используется:** `index.html` → `.polaroid--bot`

### 1.5 Product-секция — фоновое фото справа (Slash)
- **Файл:** `Glasto2023_(216_of_468)_(53008944401)_-_slash_crop.jpg`
- **URL:** https://upload.wikimedia.org/wikipedia/commons/0/07/Glasto2023_%28216_of_468%29_%2853008944401%29_-_slash_crop.jpg
- **Источник:** Wikimedia Commons
- **Описание:** Slash на фестивале Glastonbury, 2023 год.
- **Автор:** Raph_PH
- **Лицензия:** **CC-BY 2.0 Generic**
- **Где используется:** `index.html` → `.section--product .section__bg-image--right`

### 1.6 CTA-секция — фоновое фото стадиона
- **URL:** https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=2000&q=80&auto=format&fit=crop
- **Источник:** Unsplash
- **Лицензия:** Unsplash License (можно для коммерции, атрибуция не обязательна)
- **Где используется:** `index.html` → `.section--cta .section__bg-image--full`

### 1.7 OG-image (превью соцсетей)
- **URL:** https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=1200&q=80
- **Источник:** Unsplash
- **Где:** `<meta property="og:image">` в `index.html`

---

## 2. Почему фото 1987-1990 не использованы

Под свободными лицензиями (CC, GFDL) фото молодого Slash, Axl Rose и других участников Guns N' Roses времён записи Appetite for Destruction **не существуют**. Все архивные кадры эпохи защищены коммерческими правами:

- Marc Canter (друг группы, архив фото 1985-1988) — © Marc Canter Photography
- Robert John — © Robert John / Geffen Records
- Greg Freeman, Jack Lue, Leonard McCardie — индивидуальные права

Wikimedia Commons содержит фото GN'R **начиная с 2009 года** (Slash) и **с 1993** (Axl Rose, Tel Aviv) — это самые ранние доступные под открытыми лицензиями. Для иллюстрации эпохи Appetite использованы:

- **Обложка альбома 1987** (fair use, ст. 1274 ГК РФ)
- **Axl Rose, 1993** — Use Your Illusion Tour, ближайшая к расцвету эпоха
- **Slash, 2009** — классический облик в концертных декорациях

---

## 3. Стилизованный герб «GN'R 40»

В hero-секции выведен **оригинальный SVG-герб** (inline в `index.html` → `.crest`). Это **собственный дизайн** автора проекта — щит с надписью «GUNS N' ROSES», крупной цифрой «40», пятью звёздами и подписью «YEARS · 1987–2027». **Не воспроизводит** trademark-логотип группы (крест с черепами Билла Уайта) — выполнен как трибьют в духе ретро-постера.

Лицензия: оригинальная работа автора проекта, MIT-эквивалент в рамках учебного задания.

---

## 4. Лицензионные требования (обязательная атрибуция)

### Creative Commons CC-BY-SA 3.0 (Slash 2009, Axl Rose 1993)
> Photo: Glenn Francis (Toglenn), Slash, 2009 — Wikimedia Commons, CC-BY-SA 3.0
> https://creativecommons.org/licenses/by-sa/3.0/
>
> Photo: Alibaba / Hebrew Wikipedia, Axl Rose, Tel Aviv 1993 — Wikimedia Commons, CC-BY-SA 3.0 + GFDL

### Creative Commons CC-BY-SA 2.0 (GN'R Seattle 2016)
> Photo: Matt Boulton, Guns N' Roses, Seattle 2016 — Wikimedia Commons, CC-BY-SA 2.0
> https://creativecommons.org/licenses/by-sa/2.0/

### Creative Commons CC-BY 2.0 (Slash Glastonbury 2023)
> Photo: Raph_PH, Slash, Glastonbury 2023 — Wikimedia Commons, CC-BY 2.0
> https://creativecommons.org/licenses/by/2.0/

### Album Cover (Geffen Records, 1987) — non-free / fair use
> Cover art © Geffen Records, 1987. Design: Billy White Jr.
> Used for educational purposes (Russian Civil Code Article 1274).

Атрибуция выведена в подвале сайта (`index.html` → `.site-footer__attribution`).

---

## 5. Запасные варианты (если файлы станут недоступны)

### Wikimedia Commons категории
- GN'R: https://commons.wikimedia.org/wiki/Category:Guns_N%27_Roses
- Slash: https://commons.wikimedia.org/wiki/Category:Saul_%22Slash%22_Hudson
- Axl Rose: https://commons.wikimedia.org/wiki/Category:Axl_Rose
- Posters: https://commons.wikimedia.org/wiki/Category:Guns_N%27_Roses_posters
- Logos: https://commons.wikimedia.org/wiki/Category:Guns_N%27_Roses_logos

### Если обложка альбома удалят с Wikipedia
Запасной URL через Wikipedia API thumbnail: `https://upload.wikimedia.org/wikipedia/en/thumb/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg/600px-GunsnRosesAppetiteforDestructionalbumcover.jpg`

---

## 6. Размеры файлов и производительность

| Файл | Размеры | Вес |
|---|---|---|
| Album cover 1987 | 1500×1500 / 316×316 | ~60 КБ |
| GN'R Seattle 2016 | 2571×1929 | ~1.5 МБ |
| Slash 2009 | 1760×2640 | ~1.2 МБ |
| Axl Rose 1993 | 346×364 | ~50 КБ |
| Slash Glasto 2023 | 2249×4000 | ~2.1 МБ |

Браузер кэширует — повторная загрузка мгновенная. На GitHub Pages трафик статики не лимитирован.

---

## 7. Film grain (зерно плёнки)

Реализовано **через inline SVG в `style.css`** (`.grain` → `background-image: data:image/svg+xml,...`). Без отдельного файла. Алгоритм — `feTurbulence` (процедурный шум на GPU). 0 HTTP-запросов, ~0.6 КБ inline-кода.

---

## 8. Иконки

Все SVG-иконки **inline в `index.html`** — `<svg>...</svg>` прямо в разметке. Источник — `lucide.dev` (FREE_STACK.md §5.1). Без отдельных файлов и без зависимостей.

---

## 9. Если нужно ДОБАВИТЬ файл в `assets/`

1. Оптимизировать через [squoosh.app](https://squoosh.app) (FREE_STACK.md §11.1) → WebP, q≈80.
2. Положить в `assets/`.
3. Подключить через относительный путь: `<img src="assets/имя.webp">`.
4. Атрибуты `loading="lazy"` (кроме hero) и `alt="..."` — обязательно.
5. Обновить эту таблицу.

**Не коммитим:** PSD, RAW, BMP, исходники в `*.png` > 300 КБ. Только финальные WebP/JPG.
