# 💼 Portfolio Template 
[Пример](https://vanckoe.vercel.app/)

here is an old version of portfolio tamplate

Универсальный шаблон портфолио для разработчиков — на базе **Next.js 15**, **Tailwind CSS**, **TypeScript** и **Bun**.  
Поддержка **i18n**, статическая генерация (`output: 'export'`), pixel-perfect дизайн и удобная архитектура компонентов.


## 🚀 Features

- ⚡ **Мгновенная сборка** и запуск через [Bun](https://bun.sh)
- 🌍 **Мультиязычность (i18n)** с локалями `ru` и `cn`
- 🧱 **App Router** структура (`/app`, `/layout.tsx`)
- 🎨 Полная кастомизация и адаптивная верстка
- 📦 Чистая и модульная архитектура (`components/`, `assets/`, `lib/`, `i18n/`, `messages/`)
- 📤 Поддержка `output: 'export'` — можно деплоить как **чистый статик** (например, GitHub Pages, Vercel, Netlify)


## 🛠 Установка и запуск

### 1. Установи [Bun](https://bun.sh)

#### Для macOS / Linux:
```
curl -fsSL https://bun.sh/install | bash
```
#### Для Windows:

```
powershell -c "irm bun.sh/install.ps1 | iex"

```

2. Клонируй репозиторий
```
git clone https://github.com/Vanckoe/Portfolio-template.git
cd Portfolio-template
```
3. Установи зависимости
```
bun install
```
4. Собери проект
```
bun run build
```
5. Запусти локальный сервер
```
bun run dev
```


## 🗂 Структура проекта
```
src
├── app/               # App Router маршруты (main, about, layout.tsx и т.д.)
├── assets/            # SVG-компоненты и иконки
├── components/        # UI-компоненты (header, footer, button и др.)
├── i18n/              # Настройки локализации и определение языка
├── lib/               # Утилиты и серверные хуки
├── messages/          # JSON-файлы переводов i18n (ru, cn)
└── utils/             # Вспомогательные утилиты
```


Буду рад ⭐ на GitHub, если шаблон оказался полезен!
