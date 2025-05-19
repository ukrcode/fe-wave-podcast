# #test: Тестовий епізод

Шкідливі NPM пакети, Figma Sites, everybody hates React. Це пілотний випуск "Фронтенд Хвилі", подкасту про найважливіші новини фронтенду.

---

Мене звати Станіслав і я розробник з Києва. Ідея цього подкасту виникла після того, як я не знайшов подібного подкасту українською мовою, який виходить регулярно. Тут маю намір розповідати лише про найважливіше, щоб не випадати з контексту професії і технологій які кудись постійно біжуть.

Цей випуск зроблено на основі [Front-end Digest № 99](https://dou.ua/forums/topic/53777/) від Олександра Смольянова, який виходить у фронтед спільноті Dou.

## Веброзробка

- [NPM у небезпеці: хакери використовують кросмовні пакети-підробки](https://www.csoonline.com/article/3980073/hackers-booby-trap-npm-with-cross-language-imposter-packages.html?ref=dailydev)
  У статті описується масштабна кампанія зловмисників, спрямована на NPM, де використовуються пакети-підробки, що імітують назви популярних бібліотек. Основні моменти:

  - **Мета атак**: Викрадення змінних оточення, запуск віддаленого коду та компрометація систем.
  - **Методи**: Зловмисники створюють пакети з назвами, схожими на популярні бібліотеки, щоб обманути розробників.
  - **Приклади**: Пакети, що імітують назви бібліотек, таких як `vite-plugin-remove`.
  - **Рекомендації**:
    - Завжди перевіряти авторів і репутацію пакетів.
    - Використовувати інструменти для аналізу залежностей, такі як [Socket](https://socket.dev/).

Ця кампанія підкреслює важливість обережності при роботі з залежностями у NPM.

- [Як створювати перезавантажувані та реюзабельні вебкомпоненти в Stencil](https://dou.ua/forums/topic/53697/)
  Stencil — це компілятор, який генерує вебкомпоненти, що відповідають усім вебстандартам, і поєднує найкращі ідеї інших фреймворків у зручному інструменті збірки, який використовує TS, JSX та CSS.

  - веб компоненти: custom elements, shadow DOM, HTML templates
  - аналог Svelte і Litelement
  - дозволяє на виході видавати веб-компоненти які нативно підтримуються браузером
  - TypeScript, SSR, lazy loading та Hydration.
  - можна використовувати в умовному Angular чи React проєкті після компіляції

  - користувацький чи кастомний?

- [14 порад щодо вебпродуктивності на 2025 рік](https://sia.codes/posts/web-perf-tips-2025/)
  Sia Karamalegos
  - 1. Know your weaknesses
       базувати оптимізації на реальних даних а не умовному висновку Lighthouse
  - 6. Prevention: Use better architecture
       An ounce of prevention is worth a pound of cure. When deciding on architecture, make sure you keep UX and web perf top of mind. Folks often reach for tools like JS frameworks when they aren't needed, will add extra bloat, and result in higher development costs.
  - 10. Invest in a performance culture

### Інструменти

- [Велике оновлення Figma — публікуйте свої проєкти в вебі за допомогою Figma Sites](https://www.figma.com/blog/introducing-figma-sites/)

  Figma Sites — це функція, представлена Figma, яка дозволяє користувачам публікувати свої дизайнерські проєкти безпосередньо в інтернеті. Вона дає змогу дизайнерам створювати та ділитися повноцінними вебсайтами на основі їхніх дизайнів у Figma без необхідності експорту чи написання коду. Ця функція особливо корисна для демонстрації портфоліо, прототипів або концепцій дизайну у вигляді інтерактивних вебсторінок.

  **Основні особливості Figma Sites:**

  - **Простота використання**: Дизайнери можуть перетворювати свої файли Figma на живі вебсайти з мінімальними зусиллями.
  - **Інтерактивність**: Підтримує інтерактивні елементи, що робить її ідеальною для презентації динамічних дизайнів.
  - **Співпраця**: Спрощує обмін і отримання зворотного зв’язку, надаючи живе посилання на дизайн.
  - **Без необхідності кодування**: Виключає потребу у розробниках для перетворення дизайнів у код.

- [Альтернативна думка: не публікуйте свої дизайни в вебі з Figma Sites...](https://adrianroselli.com/2025/05/do-not-publish-your-designs-on-the-web-with-figma-sites.html)
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

- [Masonry в CSS: чи повинен Grid еволюціонувати, чи поступитися місцем новому модулю](https://www.smashingmagazine.com/2025/05/masonry-css-should-grid-evolve-stand-aside-new-module/)
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

## JavaScript

- [Error.isError(): кращий спосіб перевірки типів помилок у JavaScript](https://www.trevorlasn.com/blog/error-iserror-javascript)

  **Чому `instanceof` може не працювати коректно**:

  - `instanceof` залежить від контексту виконання (наприклад, між різними iframe).
  - Помилки, створені в різних середовищах, можуть не розпізнаватися як екземпляри `Error`.

  **Browser Support**: `Error.isError()` підтримується в сучасних браузерах, але для старих середовищ може знадобитися полівіл.

  Instead of checking the prototype chain, Error.isError() uses a simpler and more reliable approach. It looks for a special internal marker (like a hidden ID tag) that gets added to every genuine Error object when it’s created.

  This method works better than instanceof for two reasons:

  1. It correctly identifies errors even when they come from different contexts (like iframes or modules)
  2. It rejects fake objects that try to pretend they’re errors by manipulating the prototype
     Think of it like checking for a manufacturer’s watermark instead of just looking at the label - it’s much harder to fake.

  **Приклад використання**:

  ```javascript
  const error = new Error("Something went wrong");
  console.log(Error.isError(error)); // true
  ```

- [Оновлення Popover та CSS Anchor Positioning Polyfills](https://www.oddbird.net/2025/05/06/polyfill-updates/)

  У статті розглядаються останні оновлення для поліфілів, які забезпечують підтримку Popover API та CSS Anchor Positioning у браузерах, що ще не впровадили ці функції. Основні моменти:
  - **Popover API**: Дозволяє створювати інтерактивні елементи, такі як модальні вікна та тултіпи, з нативною підтримкою браузера.
  - **CSS Anchor Positioning**: Забезпечує точне позиціонування елементів відносно інших елементів на сторінці, що спрощує створення адаптивних інтерфейсів.
  - **Поліфіли**: Оновлення включають покращення продуктивності, сумісності та нові API для розробників, які дозволяють легше інтегрувати ці функції у проєкти.
  - **Рекомендації**: Використовувати поліфіли для забезпечення кросбраузерної підтримки, поки ці функції не стануть стандартом.

- [Як форматувати дати в JavaScript: Методи, бібліотеки та найкращі практики](https://blog.logrocket.com/javascript-date-format/)
  У статті розглядаються різні способи форматування дат у JavaScript, включаючи вбудовані методи, такі як `toLocaleDateString`, і популярні бібліотеки, наприклад, `date-fns` та `day.js`. Основні моменти:

  - **Вбудовані методи**: Простий спосіб форматування дат без додаткових залежностей.
  - **Бібліотеки**:
    - `date-fns`: Сучасна, модульна та легка бібліотека для роботи з датами.
    - `day.js`: Мінімалістична альтернатива `moment.js` з подібним API.
    - `moment.js`: Вважається застарілою через великий розмір і відсутність активної підтримки.
  - **Нові можливості**: У JavaScript планується впровадження нових нативних API для роботи з датами, таких як `Temporal`, які забезпечать більш сучасний і надійний підхід.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal

- [Як і коли використовувати приведення типів у TypeScript](https://blog.logrocket.com/type-casting-typescript/)
  У статті пояснюється, як і коли використовувати приведення типів у TypeScript для забезпечення гнучкості та точності в роботі з типами. Основні моменти:

  - Type `assertion` — This is a way for you to tell the TypeScript compiler to treat an entity as a different type than it was inferred to be. It doesn’t actually change the underlying data type, it just instructs TypeScript to treat it as the asserted type. Type assertion uses the `as` keyword, like we’ll see below
  - Type `casting/conversion` — This involves actually transforming the data from one type to another. It changes the underlying data type. Type casting can be done using built-in methods like `String`(), `Number`(), `Boolean`(), etc.

  **When casting makes sense**

  Do not throw type casting at the smallest error! Type casting is a powerful feature, but you shouldn’t use it casually. It should be applied thoughtfully, usually when you’re confident about the data’s shape, but TypeScript isn’t. Here are some good use cases:

  - You’re working with third-party libraries that return loosely typed data
  - You’re parsing JSON and know the structure ahead of time
  - When TypeScript can’t infer a more specific type from a generic or any
  - You’re interacting with the DOM or external APIs in browser environments

- [Запуск TypeScript у Node.js: tsx vs ts-node та native](https://blog.logrocket.com/running-typescript-node-js-tsx-vs-ts-node-vs-native/)

  If you wanted to run TypeScript directly in Node.js, you had to rely on third-party tools like ts-node and tsx. However, with the v22.6 release of Node.js, the runtime added experimental lightweight support for TypeScript.

  A TypeScript runner is any program that directly executes TypeScript code. Other JavaScript runtimes like `Bun` and `Deno` have TypeScript runners built in. The runner allows developers to execute TypeScript code in one step instead of the default two steps of transpiling and then executing the resulting JavaScript code.

  **Обмеження нативної підтримки Node.js**:

  - Node.js не виконує повну компіляцію TypeScript, а лише видаляє типи (type stripping). Це означає, що складні TypeScript-функції, такі як декоратори або специфічні типи, можуть викликати помилки під час виконання.
  - Якщо у коді використовується функціонал, який не підтримується, Node.js видасть помилку виконання. Наприклад, використання експериментальних або нестандартних TypeScript можливостей може призвести до збоїв.

  **Nest.js CLI**:

  - Nest.js CLI використовує `tsx` для запуску TypeScript у режимі розробки. Це дозволяє швидко виконувати TypeScript-код без необхідності попередньої компіляції, що значно прискорює розробку. У production-режимі Nest.js зазвичай компілює TypeScript у JavaScript перед виконанням.

  **Deno та Bun**:

  - **Deno**: Має вбудовану підтримку TypeScript без необхідності додаткових інструментів. Deno використовує власний компілятор, заснований на `swc` (Speedy Web Compiler), який забезпечує швидку і ефективну компіляцію TypeScript у JavaScript. Це дозволяє Deno автоматично компілювати TypeScript перед виконанням, забезпечуючи повну підтримку TypeScript-функціоналу.
  - **Bun**: Також підтримує TypeScript "з коробки". Bun використовує `esbuild` як компілятор TypeScript, що робить процес компіляції надзвичайно швидким. Завдяки цьому Bun ідеально підходить для розробників, які цінують продуктивність і швидкість виконання.

  **Рекомендації**:

  - Використовувати `tsx` для швидкого прототипування та розробки.
  - Обирати нативну підтримку Node.js, якщо потрібна мінімальна залежність від сторонніх інструментів, але враховувати її обмеження.
  - Застосовувати `ts-node` для проєктів, які вже інтегровані з цим інструментом.
  - Розглядати Deno або Bun для проєктів, де потрібна повна підтримка TypeScript і висока продуктивність.

### React

- [JSX.lol — комусь взагалі подобається React?](https://jsx.lol/)

  1. Складність
  2. Надмірне навантаження на продуктивність
  3. Розмір бандлу
  4. Крива навчання
  5. Надмірне використання

  [Liskov's Gun](https://www.baldurbjarnason.com/2024/liskovs-gun/) — стаття, яка досліджує, як принцип

  **Я створив issue на GitHub цього сайту, щоб переписати його не Реакт. Якщо хтось хоче зі мною, то пишіть коментар, я скину посилання на форк.**

### Майже увійшло

Цікаві статті які не влізли, але мали б влізти.

- [RSC для розробників на Astro](https://overreacted.io/rsc-for-astro-developers/)
- [Колірні моделі для людей і пристроїв](https://developer.mozilla.org/en-US/blog/color-models-humans-devices/)
- [Перенесення JavaScript-проєкту з Prettier та ESLint на BiomeJS](https://blog.appsignal.com/2025/05/07/migrating-a-javascript-project-from-prettier-and-eslint-to-biomejs.html)
- [Оновлення Popover та CSS Anchor Positioning Polyfills](https://www.oddbird.net/2025/05/06/polyfill-updates/)
- [Чи доступні «CSS Carousels»](https://www.sarasoueidan.com/blog/css-carousels-accessibility/)
