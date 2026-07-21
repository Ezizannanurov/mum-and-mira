# MUM & MİRA

Трёхъязычный лендинг-каталог восковых свечей ручной работы. Посетитель выбирает свечу и отправляет готовое локализованное сообщение в WhatsApp.

## Запуск

```bash
npm install
npm run dev
```

## Проверка и сборка

```bash
npm test
npm run build
npm run preview
```

## Где менять данные

- Номер WhatsApp и шаблоны сообщений: `src/lib/whatsapp.js`
- Ассортимент, цены и названия: `src/data/products.js`
- Интерфейсные тексты RU / EN / TR: `src/data/content.js`
- Изображения каталога: `public/images`
- Палитра, типографика и анимации: `src/styles.css`

Номер WhatsApp хранится без пробелов и `+` в формате `905376923649`, как требует `wa.me`.
