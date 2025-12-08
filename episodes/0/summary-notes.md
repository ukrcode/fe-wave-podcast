# Summary Notes

## Веброзробка

### ✅ Новини вебплатформи за листопад

**Джерело:** [Web Platform Updates: November 2025](https://web.dev/blog/web-platform-11-2025)

**Основна ідея:** Огляд ключових оновлень веб-платформи за листопад 2025 року, включаючи випуски Safari 26.1, Firefox 145 та бета-версії з новими CSS-функціями.

Листопад 2025 року приніс значні оновлення для веб-розробників у всіх основних браузерах. Safari 26.1 додав підтримку `Atomics.waitAsync()` для роботи з SharedArrayBuffer, властивість `ToggleEvent.source` для більш детального контролю над подіями toggle, та експериментальні заголовки Integrity-Policy для безпеки ресурсів.

Firefox 145 також отримав ці самі функції, що свідчить про збіжність реалізацій між браузерами. Особливо важливою є підтримка `Atomics.waitAsync()`, яка дозволяє головному потоку очікувати на зміни в SharedArrayBuffer без блокування UI.

У бета-версіях з'явилися ще цікавіші функції. Firefox 146 beta додав підтримку CSS-функції `contrast-color()` для автоматичного вибору контрастного кольору та директиву `@scope` для локалізації стилів. Safari 26.2 beta представив CSS-функцію `random()` для генерації випадкових значень, властивість `field-sizing: content` для автоматичного підбору розміру input-полів, та атрибут `hidden="until-found"` для контенту, що можна знайти через пошук на сторінці.

Ці оновлення демонструють активний розвиток веб-стандартів та покращення можливостей для розробників у всіх трьох основних екосистемах браузерів.

### ✅ Що нового в Astro

**Джерело:** [What's new in Astro - November 2025](https://astro.build/blog/whats-new-november-2025/)

**Основна ідея:** Огляд ключових оновлень екосистеми Astro за листопад 2025, включаючи випуски Astro 5.16, Starlight 0.37, нових впроваджувачів та розвиток спільноти.

Листопад 2025 року став продуктивним місяцем для екосистеми Astro. Вийшов Astro 5.16 з важливими покращеннями: оптимізація SVG-файлів за замовчуванням для зменшення розміру бандлів, покращення CLI з кращими повідомленнями про помилки та новими командами для роботи з проєктами.

Starlight 0.37 додав нові можливості для документаційних сайтів, включаючи покращену навігацію та кращу підтримку багатомовності. Важливою новиною стало впровадження Astro великими компаніями: `Cloudflare` використовує Astro для своєї документації, `Microsoft` обрав його для частини своїх веб-ресурсів, Adobe застосовує для внутрішніх інструментів, а `Todoist` переписав свій блог на Astro.

Спільнота активно розвивається: з'явилися нові курси по Astro від провідних освітніх платформ, випущено десятки нових інтеграцій (включаючи покращені адаптери для Cloudflare Workers, Vercel, та Netlify), створено нові теми для швидкого старту проєктів. Особливо цікавими є кейси міграції з Next.js та Gatsby на Astro, які демонструють переваги в продуктивності та простоті розробки.

### ✅ Черв'як Shai-Hulud 2.0

**Джерело:** [Shai-Hulud 2.0: The npm Worm That Hijacked Your Code](https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/)

**Основна ідея:** Детальний аналіз масштабної атаки на npm-екосистему, яка скомпрометувала 796 пакетів з більш ніж 20 мільйонами завантажень щотижня.

Shai-Hulud 2.0 став однією з найбільш досконалих атак на екосистему npm за всю історію. Зловмисник використовував вкрадені облікові дані npm-мейнтейнерів для публікації зловмисних версій популярних пакетів. Шкідливий код збирав credentials з AWS, Azure, Google Cloud Platform, витягував дані з GitHub репозиторіїв (включаючи приватні), та мав механізм самопоширення через npm-пакети.

Особливо небезпечною була система Command & Control через GitHub Actions runners, яка дозволяла атакуючим виконувати довільний код в CI/CD pipeline жертв. За оцінками дослідників, постраждало понад 500 GitHub-користувачів та організацій. Якщо exfiltration даних не вдавався, шкідливий код виконував деструктивні дії для приховування слідів.

Атака виявляє критичні проблеми безпеки в екосистемі npm: відсутність обов'язкової 2FA для мейнтейнерів, недостатня перевірка оновлень пакетів, можливість виконання довільного коду при встановленні. Дослідники рекомендують: увімкнути 2FA для всіх npm-акаунтів, ротацію всіх credentials, перевірку package-lock.json на підозрілі зміни, та використання інструментів для аудиту залежностей.

### ✅ The Performance Inequality Gap, 2026

**Джерело:** [The Performance Inequality Gap, 2026](https://infrequently.org/2025/11/performance-inequality-gap-2026/)

**Основна ідея:** Оновлення бюджетів продуктивності на 2026 рік з урахуванням реальних пристроїв користувачів та аналізом неефективності сучасних SPA-фреймворків.

Для 2026 року встановлено нові бюджети продуктивності: для 3-секундного Time-to-Interactive максимум 2.0 MiB загального розміру (JavaScript, CSS, HTML, зображення), для 5-секундного TTI — 3.7 MiB. Ці цифри базуються на реальних пристроях користувачів, зокрема Samsung Galaxy A24 4G та HP 14, з параметрами мережі 9 Mbps downstream, 3 Mbps upstream, 100ms RTT.

Аналіз показує, що більшість сучасних SPA-додатків не вкладаються в ці бюджети. Проблема особливо гостра для користувачів з недорогих Android-пристроїв, які становлять значну частину глобальної аудиторії. Дослідження виявило, що у типовому SPA співвідношення soft navigation до hard navigation становить лише 1:1, тобто користувачі отримують мінімальну користь від завантаження великих JavaScript-бандлів.

Core Web Vitals показують плато в покращеннях: більшість сайтів застрягли на рівні 40-60% проходження метрик, незважаючи на роки оптимізацій. Це свідчить про фундаментальні проблеми архітектури SPA, де JavaScript-heavy підхід створює непереборні перешкоди для досягнення хорошої продуктивності на середніх пристроях.

Автор закликає розробників переглянути підхід до вибору архітектури та віддавати перевагу Server-Side Rendering, прогресивному покращенню, та мінімізації JavaScript там, де це можливо. Особливо важливо тестувати на реальних пристроях середнього діапазону, а не лише на потужних MacBook.

## CSS

### ✅ CSS Subgrid

**Джерело:** [An Interactive Guide to CSS Subgrid](https://www.joshwcomeau.com/css/subgrid/)

**Support**: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid

**Основна ідея:** Детальний інтерактивний гайд по CSS Subgrid, який дозволяє вкладеним елементам використовувати grid-треки батьківського контейнера для створення узгоджених макетів.

CSS Subgrid вирішує давню проблему Grid Layout: як зробити так, щоб вкладені елементи могли вирівнюватися з grid-лініями батьківського контейнера. Замість створення нового grid-контексту, subgrid дозволяє дочірнім елементам "успадковувати" треки від батька через `grid-template-columns: subgrid` або `grid-template-rows: subgrid`.

Класичний приклад використання — створення карток у портфоліо, де кожна картка має заголовок, опис та кнопку. Без subgrid кожна картка створює власний grid, і елементи не вирівнюються між картками. З subgrid всі заголовки автоматично займають однакову висоту, описи вирівнюються, і кнопки знаходяться на одному рівні незалежно від вмісту.

```css
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid; /* Магія тут */
  grid-row: span 3; /* Резервуємо 3 треки для заголовка, опису, кнопки */
}
```

Важливі gotchas: потрібно резервувати правильну кількість grid-треків через `grid-row: span N`, нумерація grid-ліній починається заново всередині subgrid, subgrid не працює з fluid grids (наприклад, `auto-fit`/`auto-fill`). Підтримка браузерами станом на листопад 2025 досягла 90%, тому можна використовувати з fallback для старих версій.

Subgrid особливо корисний для: карток продуктів в e-commerce, форм з вирівняними label та input, складних dashboard-макетів, будь-яких випадків де потрібна узгодженість розмірів між сусідніми компонентами.

### ✅ CSS if statements

**Джерело:** [An Introduction to CSS if() Statements and Conditional Logic](https://markodenic.com/introduction-to-css-if-statements-and-conditional-logic/)

**Основна ідея:** Огляд експериментальної CSS-функції `if()`, яка дозволяє використовувати умовну логіку безпосередньо в CSS без JavaScript або media queries.

**Support:** https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if

Функція `if()` вводить справжню умовну логіку в CSS через такий синтаксис: `if(condition: value-if-true; value-if-false)`. Наприклад, `color: if(style(--dark-mode): white; black)` встановить білий колір якщо змінна `--dark-mode` визначена, інакше чорний.

Функція підтримує три типи queries:
- `style()` — перевіряє наявність CSS-властивості або кастомної змінної
- `media()` — перевіряє media queries без `@media`
- `supports()` — перевіряє підтримку функції браузером

```css
/* Одна умова */
.button {
  background: if(style(--primary-color): var(--primary-color); blue);
}

/* Множинні умови через вкладення */
.text {
  font-size: if(
    media(width >= 1200px): 20px;
    if(media(width >= 768px): 16px; 14px)
  );
}

/* Комбінація з supports() */
.element {
  display: if(supports(display: grid): grid; block);
}
```

Переваги `if()` над традиційними підходами: чистіший код без дублювання, можливість використання всередині інших властивостей, відсутність каскадних конфліктів. Однак на листопад 2025 підтримка обмежена лише Chrome, Edge та Opera, тому використання в production вимагає fallback-стратегії.

Порівняно з `@media` та `@supports`, `if()` дає більше гнучкості для inline-логіки, але поки не може повністю їх замінити через обмежену підтримку браузерами.

### ✅ CSS-in-JS

**Джерело:** [CSS-in-JS: The Great Betrayal of Frontend Sanity](https://thenewstack.io/css-in-js-the-great-betrayal-of-frontend-sanity/)

**Основна ідея:** Критичний аналіз підходу `CSS-in-JS`, який спочатку обіцяв покращення DX, але призвів до проблем з продуктивністю, відлагодженням та архітектурним боргом.

CSS-in-JS здавався революційним рішенням: стилі поруч з компонентами, динамічні теми, автоматичний scope. Але реальність виявилася іншою. Основна проблема — runtime-генерація CSS. Кожен рендер компоненту потенційно створює нові стилі, парсить їх, інжектує в DOM. Це створює постійне навантаження на JavaScript-потік, особливо критичне на мобільних пристроях.

Developer Experience також постраждав: криптичні згенеровані класи типу `css-1xu2bc8-Button` неможливо дебажити, DevTools показує сотні динамічно створених `<style>` тегів, stack traces ведуть в абстрактні хелпери замість реального коду. Спроби оптимізувати через кешування створюють нові проблеми з інвалідацією та пам'яттю.

Архітектурний борг накопичується: strong coupling між стилями та логікою, складність рефакторингу, проблеми з tree-shaking. Команди витрачають місяці на міграції з styled-components на emotion, потім на zero-runtime рішення, кожна міграція коштує тисячі developer-годин.

Фреймворки рухаються назад до нативного CSS: Remix використовує CSS Modules, Astro підтримує scoped styles out-of-box, Next.js 13 рекомендує CSS Modules замість styled-components. Сучасний CSS має CSS Variables для динаміки, Container Queries для responsive, Cascade Layers для scope — все що обіцяв CSS-in-JS, але без JavaScript-оверхеду.

Висновок: CSS-in-JS був цікавим експериментом, але його фундаментальні недоліки переважають переваги. Час повертатися до нативних CSS-рішень.

### ✅ overscroll-behavior

**Джерело:** [Use overscroll-behavior: contain to prevent a page from scrolling while a dialog is open](https://www.bram.us/2025/11/25/use-overscroll-behavior-contain-to-prevent-a-page-from-scrolling-while-a-dialog-is-open/)

**Основна ідея:** Демонстрація зміни в Chrome 144, яка дозволяє використовувати `overscroll-behavior: contain` на нескроллюваних контейнерах для запобігання прокрутці сторінки під відкритим діалогом.

До Chrome 144 властивість `overscroll-behavior` працювала лише на елементах з `overflow: auto` або `overflow: scroll`. Це створювало проблему з діалогами: коли користувач скролив до кінця вмісту діалогу і продовжував скролити, прокрутка "просочувалася" до основної сторінки позаду.

Традиційне рішення було громіздким:
```css
body:has(dialog[open]) {
  overflow: hidden;
}
```

Проблеми цього підходу: повертає scroll position на початок, приховує scrollbar створюючи layout shift, не працює на iOS. Розробники писали JavaScript workaround з position: fixed та зберіганням scroll position.

Chrome 144 змінив поведінку `overscroll-behavior`: тепер вона працює на будь-яких контейнерах, навіть без overflow. Нове рішення елегантне:

```css
dialog::backdrop {
  overscroll-behavior: contain;
}
```

Або безпосередньо на діалозі:
```css
dialog {
  overscroll-behavior: contain;
}
```

Переваги: зберігає scroll position, немає layout shift, працює нативно без JavaScript, чистіший код. Це ідеальне рішення для модальних вікон, side panels, fullscreen overlays — будь-яких випадків де потрібно ізолювати scroll context.

Підтримка: Chrome 144+, очікується в інших Chromium-браузерах. Для Safari та Firefox поки потрібен fallback через `overflow: hidden` на body.

### ✅ CSS corner-shape

**Джерело:** [How to create fancy corners using CSS corner-shape](https://blog.logrocket.com/create-fancy-corners-css/)

**Основна ідея:** Огляд нової CSS-властивості `corner-shape`, яка розширює можливості `border-radius` дозволяючи створювати squircles, bevels, scoops та інші нестандартні форми кутів без SVG або масок.

`corner-shape` — це еволюція `border-radius`, яка додає шість keyword-значень: `square`, `squircle`, `round` (default), `bevel`, `scoop`, `notch`. Ключова особливість — властивість працює в комбінації з `border-radius`, використовуючи його x/y-axis значення для визначення форми.

```css
/* Базовий приклад */
.element {
  border-radius: 3rem;
  corner-shape: squircle;
}

/* Різні кути */
.card {
  border-radius: 1rem 2.5rem 2.5rem 1rem / 1rem 50% 50% 1rem;
  corner-shape: round bevel bevel round;
}
```

Функція `superellipse()` дає ще більше контролю: `corner-shape: superellipse(0)` = bevel (пряма лінія), `superellipse(1)` = round (звичайне заокруглення), `superellipse(2)` = squircle, `superellipse(infinity)` = square. Негативні значення створюють увігнуті форми: `superellipse(-1)` = scoop, `superellipse(-infinity)` = notch.

Практичні use-cases:
- **Cyberpunk-естетика**: `corner-shape: bevel` + ассиметричний `border-radius`
- **Скошені секції**: `border-bottom-right-radius: 100% 3rem` + `corner-shape: bevel`
- **Tooltip caret**: Трикутники через `border-radius: 100% 50%` + `corner-shape: bevel/scoop`
- **Tech corners**: Комбінація `notch` на внутрішньому елементі з border на зовнішньому
- **Squircle кнопки**: Сучасний iOS-стиль через `corner-shape: squircle`

Додаткові властивості: `corner-top-shape`, `corner-right-shape` і т.д. для окремих кутів, логічні властивості `corner-block-start-shape` для RTL/LTR підтримки.

Підтримка: Chrome 139+, Edge, Opera. Safari та Firefox — в розробці. Можна використовувати з `@supports(corner-shape: squircle)` для прогресивного покращення.

## JavaScript

### ✅ Чому варто використовувати React

**Джерело:** [Why use React?](https://adactio.com/journal/22265)

**Основна ідея:** Критичний аналіз причин використання React у 2025 році, який ставить під сумнів доцільність виконання React на клієнті та закликає тримати фреймворк на сервері.

Джеремі Кіт ставить пряме питання: чому розробники досі обирають React? Головна причина — інерція. Команди звикли до React, найм легший коли "стандартизуємося на React", хоча реальність складніша через мутації екосистеми (Hooks, Suspense, Server Components).

Ключовий момент: React змінився. Спочатку це був frontend-фреймворк зі state management та Virtual DOM. Виявилося, що переваги Virtual DOM були перебільшені. Залишився state management, але головним стало інше — component-based архітектура та JSX. Розробники полюбили писати в JSX, це стало їх ідентичністю.

Але React може працювати на сервері! JavaScript виконується на Node, тому можна писати весь код в React без відправки жодного байта React користувачам. Теоретично. Практика — Next.js. За замовчуванням отримуєш hydration pattern: обчислення на сервері в JavaScript ✓, HTML одразу ✓, але потім відправка всього того самого JavaScript на клієнт ✗. Можна уникнути, але Next.js борються з тобою на кожному кроці.

Astro демонструє інший підхід: мінімум client-side JavaScript за замовчуванням, розробники зберігають улюблене JSX-authoring середовище без покарання користувачів. Але інерція спільноти зв'язана з екосистемою React/Next/Vercel.

Справжнє питання не "why use React", а "why use React in the browser?" Для культурних причин (команда працює в JSX, легший найм) немає потреби змушувати користувачів завантажувати React. Для SPA (які мають бути винятком, не default) варто розглянути Preact замість React — розробники не помітять різниці, користувачі оцінять відсутність bloat.

Висновок: продовжуйте писати в React, використовувати JSX, наймати React-розробників. Але тримайте це на своїй машині. Для користувачів максимально використовуйте можливості веб-браузерів. Не дозволяйте React-на-клієнті обмежувати можливості frontend.

### ✅ State of React 2025

**Джерело:** [State of React 2025](https://survey.devographics.com/en-US/survey/state-of-react/2025)

**Основна ідея:** Щорічне опитування спільноти React для вимірювання поінформованості та популярності React APIs і бібліотек екосистеми, результати якого допомагають розробникам та компаніям визначати пріоритети.

State of React 2025 — це відкрите опитування для всіх, хто використовує React, чи то регулярно, чи зрідка, у роботі, навчанні або просто для fun. Опитування займає 15-20 хвилин та охоплює всі аспекти React-розробки: від базових APIs до Server Components та нових експериментальних функцій.

Цілі опитування: виміряти обізнаність та популярність React APIs (Hooks, Context, Suspense, Server Components), оцінити використання бібліотек екосистеми (state management, routing, form handling, styling), зрозуміти тренди та напрямки розвитку спільноти. Всі дані будуть опубліковані відкрито для консультації розробниками та компаніями.

Опитування проводиться з 25 жовтня до 25 листопада 2025, результати будуть опубліковані невдовзі після завершення. Організатори — Devographics разом з волонтерами, перекладачами та community contributors. Дизайн опитування розроблений з залученням спільноти через відкритий feedback thread.

Іронічно, що фреймворк з компанії з motto "move fast and break things" тепер можна охарактеризувати як "slow and steady". React-команда зробила чудову роботу з еволюції фреймворку, поступово вводячи інновації як Server Components і даючи спільноті час для адаптації у власному темпі.

Цього року очікується офіційний дебют довгоочікуваного React Compiler. Також відбуваються зміни на адміністративному фронті з нещодавно представленою React Foundation. Чи ви на cutting edge нових React-функцій, чи адаптуєте інновації повільніше — опитування допоможе зрозуміти куди рухається React.

### ✅ Ripple

**Джерело:** [Ripple over React? Evaluating the newest JS framework](https://blog.logrocket.com/ripple-over-react-js-framework/)

**Основна ідея:** Огляд RippleJS — нового TypeScript-first реактивного фреймворку від Домініка Ганновея (ex-Meta, автор React Hooks), який переосмислює підхід до UI-розробки з нуля.

RippleJS створений розробником з серйозним бекграундом: Доміник працював над React Hooks в Meta, створив Lexical, authored Inferno, був core maintainer Svelte 5. Прототип побудований за тиждень, що демонструє чіткість бачення. Філософія — TypeScript-first, не TypeScript-added. Компілятор розуміє і типи, і реактивні патерни одночасно.

Ключова відмінність від React: компоненти НЕ повертають JSX, вони Є JSX. Замість `return <div>...</div>` просто `<div>...</div>`. Реактивність через `track()` і `@`:

```typescript
let count = track(0);
let double = track(() => @count * 2);
<button onClick={() => @count++}>Count: {@count}</button>
```

Немає ре-рендерів компонентів — тільки хірургічні оновлення DOM. Немає Virtual DOM, reconciliation, dependency arrays. Реактивні колекції: `#[]` для масивів, `#{}` для об'єктів — просто мутуєш дані, UI оновлюється автоматично.

Native control flow: звичайні `for` loops замість `.map()`, `if/else` замість тернарних операторів, `try/catch` як error boundaries. Component-scoped CSS вбудований через `<style>` тег. Підтримка TypeORM, Sequelize, Mongoose для data layer out-of-box.

Свідоме обмеження: немає глобального state в традиційному сенсі. `track()` працює лише всередині reactive context. Це змушує будувати чіткі компонентні ієрархії через props замість розпорошеного глобального стейту.

Що відсутнє: SSR (поки SPA-only), production testing, великої екосистеми. Але напрямок інтригуючий: AI інтеграція в dev server для діагностики, TypeScript/LLM-friendly `.ripple` extension, фокус на DX без жертви продуктивності.

RippleJS не замінить React, але досліджує інший набір trade-offs: що якщо зробити прості речі простими знову? Це early stage, потребує community contributions, але ідеї genuine interesting.

### ✅ Nest.js

**Джерело:** [Intro to Nest.js: Server-side JavaScript development on Node](https://www.infoworld.com/article/4091407/intro-to-nest-js-server-side-javascript-development-on-node.html)

**Основна ідея:** Вступ до Nest.js — all-in-one server-side фреймворку для Node.js з dependency injection, TypeScript-first підходом та архітектурою натхненною Angular та Spring.

Nest.js (не плутати з Next.js) — server-side фреймворк з понад 73,000 зірок на GitHub, який пропонує повне рішення для побудови веб-додатків. Це відмінний вибір для TypeScript/JavaScript server-side розробки, коли потрібне добре продумане рішення з усіма архітектурними компонентами в одному місці.

Філософія дизайну натхненна Angular. В серці — dependency injection (DI) engine, який з'єднує всі компоненти через єдиний механізм. Якщо знайомі зі Spring Web, відчуватиметесь як вдома.

Основні компоненти:
- **Controllers** — визначають HTTP routes та їх handlers через декоратори `@Controller('birds')`, `@Get(':type')`
- **Providers** — містять middleware логіку (services), інжектяться через `@Injectable()`
- **Modules** — групують controllers та providers через `@Module()`

Додаткові features:
- **Pipes** — валідація та трансформація даних
- **Guards** — authentication та authorization
- **Interceptors** — AOP-підтримка для cross-cutting concerns

Data layer з вбудованою підтримкою TypeORM, Sequelize, Mongoose. Визначаєш entities через декоратори:

```typescript
@Entity()
export class Bird {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
}
```

TypeORM автоматично створює CRUD functions, які інжектяться в services:

```typescript
constructor(
  @InjectRepository(Bird)
  private birdsRepository: Repository<Bird>,
) {}

async findByType(type: string): Promise<Bird[]> {
  return this.birdsRepository.find({ where: { type } });
}
```

DTO validation через class-validator декоратори і ValidationPipe:

```typescript
export class CreateBirdDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsIn(['songbird', 'raptor', 'corvid'])
  type: string;
}
```

Nest має відмінну CLI підтримку: генератори для DTOs, controllers, scaffolding, development mode. Multi-platform deployment: Node, Fastify, Docker-friendly builds. Це modern, full-featured фреймворк для substantial projects з robust server-side потребами.
