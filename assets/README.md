# assets/ — каталог изображений

На лендинге фото **не скачиваются в репозиторий**, а грузятся напрямую с CDN Unsplash через прямые `<img src="...">`. Это соответствует CLAUDE.md §3 (Stack) и `FREE_STACK.md` §4.1 — лицензия Unsplash позволяет коммерческое использование без указания автора, и хотлинк через `images.unsplash.com` стабилен.

---

## 1. Используемые в проекте фото

### Hero — виниловая пластинка крупным планом
- **URL:** `https://images.unsplash.com/photo-1461360370896-922624d12aa1`
- **Параметры рендеринга:** `?w=900&q=85&auto=format&fit=crop`
- **Автор:** Pawel Czerwinski (Unsplash) — указание не требуется по Unsplash License
- **Применение:** `index.html` → `.vinyl-stack__img` в hero-секции
- **CSS-фильтр в `.vinyl-stack__img`:** `grayscale(0.15) contrast(1.1) brightness(0.85)` — выравнивает фото под палитру DESIGN.md

### OG-image (соцсети)
- Используется тот же URL c параметром `?w=1200&q=80` (для preview в Telegram/VK/iMessage)
- Прописан в `<meta property="og:image">` в `index.html`

---

## 2. Запасные варианты (если основное фото станет недоступным)

Все ссылки на 2026-05-19 рабочие. При замене — обновить `src` в `index.html` и значение `<meta og:image>`.

### Винил / пластинки
- `https://images.unsplash.com/photo-1539375665275-f9de415ef9ac` — vinyl spinning
- `https://images.unsplash.com/photo-1487537023671-8dce1a785863` — record close-up
- `https://images.unsplash.com/photo-1518609878373-06d740f60d8b` — vinyl shelf

### Гитара
- `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4` — electric guitar
- `https://images.unsplash.com/photo-1510915361894-db8b60106cb1` — Les Paul black

### Концерт / сцена
- `https://images.unsplash.com/photo-1501612780327-45045538702b` — rock concert crowd
- `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec` — stage lights

### Микрофон
- `https://images.unsplash.com/photo-1485579149621-3123dd979885` — vintage mic
- `https://images.unsplash.com/photo-1581368135153-a506cf13b1e1` — studio microphone

### Бурбон / виски (атмосфера)
- `https://images.unsplash.com/photo-1527281400683-1aae777175f8` — whisky glass
- `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b` — bourbon bottle

---

## 3. Параметры Unsplash URL — справка

CDN Unsplash принимает query-параметры для on-the-fly оптимизации:

| Параметр | Что делает | Рекомендация |
|---|---|---|
| `w=900` | ширина в px | `900` для hero, `600` для карточек, `1200` для OG |
| `q=85` | качество JPEG | `80–85` — баланс веса и качества |
| `auto=format` | автовыбор формата (WebP для современных браузеров) | **всегда** включаем |
| `fit=crop` | кадрирование | для hero — да |
| `crop=entropy` | умное кадрирование по «центру внимания» | опционально |

Пример с полным набором: `?w=900&q=85&auto=format&fit=crop&crop=entropy`

---

## 4. Film grain (зерно плёнки)

Реализовано **через inline SVG в `style.css`** (`.grain` → `background-image: data:image/svg+xml,...`). Без отдельного файла. Алгоритм — `feTurbulence` (процедурный шум на GPU). Преимущества: 0 HTTP-запросов, ~0.6 КБ inline-кода.

---

## 5. Иконки

Все SVG-иконки **inline в `index.html`** — `<svg>...</svg>` прямо в разметке. Источник — `lucide.dev` (FREE_STACK.md §5.1). Без отдельных файлов и без зависимостей.

Используются:
- Plus-circle (result-card 1)
- Check-shield (result-card 2)
- Box-package (result-card 3)
- Shield (result-card 4)
- Lock-rect (CTA trust)
- Telegram-paper-plane, VK-marks, YouTube-frame (social-ico)

---

## 6. Если нужно ДОБАВИТЬ файл в `assets/`

1. Оптимизировать через [squoosh.app](https://squoosh.app) (FREE_STACK.md §11.1) → WebP, q≈80.
2. Положить в `assets/`.
3. Подключить через относительный путь: `<img src="assets/имя.webp">`.
4. Атрибуты `loading="lazy"` (кроме hero) и `alt="..."` — обязательно.
5. Обновить эту таблицу.

**Не коммитим:** PSD, RAW, BMP, исходники в `*.png` > 300 КБ. Только финальные WebP/JPG.
