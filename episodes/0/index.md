# #0: Пілотний епізод

[Front-end Digest № 99: Figma Sites, чи подобається комусь React і NPM у небезпеці](https://dou.ua/forums/topic/53777/)

NPM в небезпеці, веб-компоненти в Stencil, everybody hates React. Це пілотний випуск подкасту "Фронтенд Хвиля" подкасти про найважливіші новини фронтенду.

Цей випуск зроблено на основі [Front-end Digest № 99](https://dou.ua/forums/topic/53777/) від Олександра Смольянова, який виходить у фронтед спільноті Dou.

Мене звати Станіслав і я розробник з Києва. Ідея цього подкасту виникла після того, як я не знайшов подібного подкасту українською мовою, який виходить регулярно. Тут маю намір розповідати леше про найважливіше, щоб не випадати з контексту професії і технологій які кудись постійно біжуть.

## Веброзробка

- ✅ [NPM у небезпеці: хакери використовують кросмовні пакети-підробки](https://www.csoonline.com/article/3980073/hackers-booby-trap-npm-with-cross-language-imposter-packages.html?ref=dailydev)
  - mimics names.
  - from China (allegedly).
  - vite-plugin-remove.
  - хочуть вкрасти змінні оточення, запустить віддалений код тощо.
- ✅ [Як створювати перезавантажувані та реюзабельні вебкомпоненти в Stencil](https://dou.ua/forums/topic/53697/)
  - веб компоненти: custom elements, shadow DOM, HTML templates
  - аналог Svelte і Litelement
  - дозволяє на виході видавати веб-компоненти які нативно підтримуються браузером
- ✅ [14 порад щодо вебпродуктивності на 2025 рік](https://sia.codes/posts/web-perf-tips-2025/)
  Sia Karamalegos

### Інструменти

- ✅ [Велике оновлення Figma — публікуйте свої проєкти в вебі за допомогою Figma Sites](https://www.figma.com/blog/introducing-figma-sites/)

  Figma Sites — це функція, представлена Figma, яка дозволяє користувачам публікувати свої дизайнерські проєкти безпосередньо в інтернеті. Вона дає змогу дизайнерам створювати та ділитися повноцінними вебсайтами на основі їхніх дизайнів у Figma без необхідності експорту чи написання коду. Ця функція особливо корисна для демонстрації портфоліо, прототипів або концепцій дизайну у вигляді інтерактивних вебсторінок.

  **Основні особливості Figma Sites:**

  - **Простота використання**: Дизайнери можуть перетворювати свої файли Figma на живі вебсайти з мінімальними зусиллями.
  - **Інтерактивність**: Підтримує інтерактивні елементи, що робить її ідеальною для презентації динамічних дизайнів.
  - **Співпраця**: Спрощує обмін і отримання зворотного зв’язку, надаючи живе посилання на дизайн.
  - **Без необхідності кодування**: Виключає потребу у розробниках для перетворення дизайнів у код.

- ✅ [Альтернативна думка: не публікуйте свої дизайни в вебі з Figma Sites...](https://adrianroselli.com/2025/05/do-not-publish-your-designs-on-the-web-with-figma-sites.html)
  Adrian Roselli

  Автор статті критикує використання Figma Sites для публікації дизайнів у вебі. Основні аргументи:

  - **Доступність**: Figma Sites не забезпечує належної доступності для користувачів з обмеженими можливостями.
  - **Продуктивність**: Сайти, створені через Figma Sites, можуть бути повільними через неефективний код.
  - **SEO**: Вебсайти, створені таким чином, мають обмежені можливості для оптимізації пошукових систем.
  - **Безпека**: Відсутність контролю над кодом може створити ризики для безпеки.
  - **Обмеження функціоналу**: Figma Sites не підходить для складних або інтерактивних вебпроєктів.

  Автор рекомендує використовувати Figma Sites лише для прототипів або внутрішніх презентацій, але не для продакшену.

  https://www.config.new/ нарахував 10 заголовків h1

## CSS

- ✅ [Masonry в CSS: чи повинен Grid еволюціонувати, чи поступитися місцем новому модулю](https://www.smashingmagazine.com/2025/05/masonry-css-should-grid-evolve-stand-aside-new-module/)
  Поточний стан: різні хаки, JS бібліотеки, хоча з грідами 

  1. **Еволюція Grid Layout**:
    Працює в Firefox nightly за прапорцем
    `grid-template-row: masonry`

    - Пропонується розширити існуючий CSS Grid, додавши підтримку Masonry.
    - **Переваги**: Знайомий синтаксис, інтеграція з поточними стандартами.
    - **Недоліки**: Може ускладнити Grid і зробити його менш зрозумілим.

  2. **Новий модуль Masonry**:
    `display: masonry`
    - Ідея створити окремий CSS-модуль, спеціально розроблений для Masonry.
    - **Переваги**: Оптимізований для нерівномірних макетів, гнучкість.
    - **Недоліки**: Потребує вивчення нового синтаксису, можливі проблеми з підтримкою браузерами.

  3. **Item Flow** від WebKit:
    Item Flow: A Unified Layout Resolution
    Flow об'єднує переваги flex-flow та grid-auto-flow у новий shorthand item-flow, додаючи чотири властивості:

    - `item-direction`: напрямок потоку (row, column, row-reverse).
    - `item-wrap`: поведінка переносу (wrap, nowrap, wrap-reverse).
    - `item-pack`: щільність розташування (sparse, dense, balance).
    - `item-slack`: допуск для коригування макета (shrink, shift).

    - Пропонується новий підхід, який дозволяє елементам автоматично "текти" у доступний простір, створюючи Masonry-стиль макетів.
    - **Переваги**: Гнучкість, природна інтеграція з існуючими CSS-властивостями.
    - **Недоліки**: Потребує значних змін у специфікації CSS, можливі проблеми з продуктивністю.

- ⁉️ [Smashing Animations Part 1: як класичні мультфільми надихають сучасний CSS](https://www.smashingmagazine.com/2025/05/smashing-animations-part-1-classic-cartoons-inspire-css/)
- ⁉️ [Оновлення Popover та CSS Anchor Positioning Polyfills](https://www.oddbird.net/2025/05/06/polyfill-updates/)
- ✅ [Чи доступні «CSS Carousels»](https://www.sarasoueidan.com/blog/css-carousels-accessibility/)

## JavaScript

- ✅ [Error.isError(): кращий спосіб перевірки типів помилок у JavaScript](https://www.trevorlasn.com/blog/error-iserror-javascript)
- [Сила spread та rest синтаксису в JavaScript](https://allthingssmitty.com/2025/05/05/the-power-of-spread-and-rest-patterns-in-javascript.md/)
- ✅ [Як форматувати дати в JavaScript: Методи, бібліотеки та найкращі практики](https://blog.logrocket.com/javascript-date-format/)
- ✅ [Як і коли використовувати приведення типів у TypeScript](https://blog.logrocket.com/type-casting-typescript/)
- ✅ [Запуск TypeScript у Node.js: tsx vs ts-node та native](https://blog.logrocket.com/running-typescript-node-js-tsx-vs-ts-node-vs-native/)

### React

- ✅ [JSX.lol — комусь взагалі подобається React?](https://jsx.lol/)

  1. Complexity
  2. Performance Overhead
  3. Bundle Size
  4. Learning Curve
  5. Overuse

  Я створив issue на GitHub цього сайту, щоб переписати його не Реакт. Якщо хтось хоче зі мною, то пишіть коментар, я скину посилання на форк.

### Майже увійшло

Цікаві статті які не влізли, але мали б влізти.

- ✅ [RSC для розробників на Astro](https://overreacted.io/rsc-for-astro-developers/)
- ✅ [Колірні моделі для людей і пристроїв](https://developer.mozilla.org/en-US/blog/color-models-humans-devices/)
- ⁉️ [Перенесення JavaScript-проєкту з Prettier та ESLint на BiomeJS](https://blog.appsignal.com/2025/05/07/migrating-a-javascript-project-from-prettier-and-eslint-to-biomejs.html)
