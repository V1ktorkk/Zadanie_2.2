# Статический сайт с автоматическим деплоем на GitHub Pages

## Описание проекта

Данный проект демонстрирует создание статического сайта с кастомной темой на основе Bulma CSS Framework и автоматизированным деплоем через GitHub Actions.

## Технологии

-   HTML5
-   CSS3 (Bulma)
-   JavaScript
-   GitHub Actions
-   PostCSS + cssnano
-   W3C HTML Validator

## Структура проекта

\`\`\`
my-website/
├── .github/
│ └── workflows/
│ └── deploy.yml # GitHub Actions workflow
├── src/
│ ├── index.html # Исходный HTML
│ └── styles/
│ └── index.css # Исходные стили
├── dist/ # Собранная версия (генерируется)
├── postcss.config.js # Конфигурация PostCSS
├── package.json # Зависимости проекта
└── README.md # Документация
\`\`\`

## Этапы сборки

1. **Валидация HTML** - проверка корректности разметки через W3C Validator
2. **Минификация HTML** - сжатие HTML файлов
3. **Обработка CSS через PostCSS** - минификация и оптимизация стилей
4. **Минификация JavaScript** - сжатие JS кода
5. **Деплой на GitHub Pages** - публикация сайта

## Workflow файл

См. `.github/workflows/deploy.yml`
