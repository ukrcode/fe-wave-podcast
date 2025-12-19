# Summary Notes

## Веброзробка

### ✅ Як HTML змінюється в ePub

**Джерело:** [How HTML changes in ePub](https://htmhell.dev/adventcalendar/2025/11/)

**Основна ідея:** ePub використовує XHTML замість звичайного HTML, що вносить суттєві зміни у синтаксис та можливості розмітки для створення електронних книг.

ePub - це стандарт W3C для електронних книг, який використовує XHTML (XML-версію HTML) замість звичайного HTML. Це означає, що потрібний синтаксично коректний XML: самозакриваючі теги, правильні простори імен, XML-атрибути у XML-просторі (`xml:lang`). Важливо, що будь-яка синтаксична помилка призведе до того, що електронна читалка просто відмовиться відкривати книгу.

Одна з ключових особливостей - можливість включати інші XML-мови безпосередньо у XHTML через простори імен. Наприклад, MathML можна використовувати для математичних формул, а SVG - для векторної графіки. Синтаксис виглядає як `<m:math>` для MathML або `<svg:svg>` для SVG, де префікс вказує на простір імен, визначений у кореневому елементі документа.

CSS у ePub працює майже як звичайний CSS, але з обмеженнями. Електронні читалки зазвичай використовують старіші, базові рушії, тому не варто розраховувати на сучасні псевдокласи як `:is()`. Навіть `:not()` може не працювати на багатьох пристроях. Важливо, що CSS також повинен враховувати простори імен - для стилізації елементів з атрибутом `xml:lang` потрібно використовувати `@namespace xml "http://www.w3.org/XML/1998/namespace"; q[xml|lang] { … }`.

ePub розширює можливості через атрибут `epub:type` та Structural Semantics Vocabulary. Це дозволяє створювати семантично багаті елементи, як-от посилання на виноски, які електронна читалка може відображати у модальному вікні. Наприклад, `<a href="endnotes.xhtml#note-1" epub:type="noteref">1</a>` створить посилання, яке відкривається всередині читалки без переходу на іншу сторінку. Поки це працює краще за нові `role` атрибути з Digital Publishing WAI-ARIA spec, які ще не повністю підтримуються.

Створення ePub вимагає певної структури: файл `container.xml` у директорії `META-INF`, package файл з метаданими, manifest усіх XHTML файлів, та spine, що визначає порядок відображення. Все це запаковується у ZIP архів з розширенням `.epub`. Для початку роботи рекомендується використовувати Standard Ebooks toolset, який автоматизує створення необхідної структури та включає інструменти для забезпечення сумісності.

### ✅ Як швидко браузери можуть обробляти дані в base64?

**Джерело:** [How fast can browsers process base64 data?](https://lemire.me/blog/2025/11/29/how-fast-can-browsers-process-base64-data/)

**Основна ідея:** Браузери отримали нові вбудовані функції для роботи з base64, і їхня швидкість значно відрізняється між різними браузерами - від 0.34 GB/s до 19 GB/s.

Base64 - це схема кодування binary-to-text, яка перетворює довільні бінарні дані у безпечний, придатний для друку ASCII-рядок, використовуючи алфавіт з 64 символів (A-Z, a-z, 0-9, +, /). Браузери нещодавно додали зручні та безпечні функції `Uint8Array.toBase64()` та `Uint8Array.fromBase64()`, які спрощують роботу з base64 кодуванням.

При кодуванні береться 24 біти з вхідних даних, які діляться на чотири 6-бітні сегменти. Кожне 6-бітне значення (від 0 до 63) відображається на конкретний символ з алфавіту Base64. Теоретично, якщо споживати 3 байти і виробляти 4 байти за такт процесора на частоті 4.5 GHz, це дало б швидкість кодування 13.5 GB/s. Декодування зазвичай повільніше, оскільки потрібно обробляти помилки та пропускати пробіли.

Результати тестування на процесорі Apple M4 з блоками по 64 КіБ показали значні розбіжності між браузерами. Safari та SigmaOS (на WebKit) показали 17 GB/s при кодуванні та 9.4 GB/s при декодуванні. Chromium-браузери (Chrome, Edge, Brave) виявилися швидшими при кодуванні (19 GB/s), але значно повільнішими при декодуванні (4.6 GB/s) через те, що рушій V8 спочатку декодує у тимчасовий буфер, а потім копіює у фінальне призначення. Firefox та Servo показали найгіршу продуктивність (0.34 GB/s кодування, 0.40 GB/s декодування), хоча Firefox Nightly вже демонструє покращення на 20%.

Для контексту, диск хорошого ноутбука може підтримувати понад 3 GB/s швидкості читання/запису, деякі high-end моделі досягають понад 5 GB/s. WiFi 7 теоретично може досягати близько 5 GB/s. Це означає, що швидкість base64 кодування/декодування у більшості браузерів швидша за мережу чи диск. Mozilla повідомила, що майбутні зміни у Firefox значно прискорять роботу цих функцій. Важливо, що ці швидкості вже набагато вищі, ніж можна було б наївно очікувати.

### ✅ Як завантажити CSS (швидко)

**Джерело:** [How to load CSS (fast)](https://calendar.perfplanet.com/2025/how-to-load-css/)

**Основна ідея:** Compression dictionaries пропонують революційний підхід до завантаження CSS, дозволяючи завантажувати лише критичний CSS на початковій сторінці, а потім отримувати повний CSS практично безкоштовно завдяки дельта-компресії.

Традиційний підхід до завантаження CSS для Multi-Page App вимагає компромісів: ви або завантажуєте критичний CSS для кожної сторінки (що призводить до дублювання коду між сторінками), або завантажуєте повний CSS одразу (що уповільнює FCP та LCP). Compression dictionaries дають третій варіант, який уникає цих компромісів.

Compression dictionaries працюють у двох режимах: використання існуючого ресурсу як словника (дельта-компресія), та завантаження окремого словника. Для CSS можна використовувати обидва режими комплементарно. Припустимо, сайт має сторінки A і B. На сторінці A завантажується `a.css` зі звичайною Brotli компресією. Потім у час простою завантажується `full.css` (суперсет обох CSS-файлів), але використовується `a.css` як словник - це означає, що ви платите лише за ті правила `full.css`, яких немає в `a.css`.

Коли користувач переходить на сторінку B, `b.css` завантажується з `full.css` як словником. Оскільки `full.css` є суперсетом, через мережу передається лише кілька сотень байтів. Це працює завдяки заголовкам: `Use-As-Dictionary: match="/dictionary/full.css"` на файлах стилів і `<link rel="compression-dictionary" href="/full.css">` у HTML. При оновленні контенту повторні відвідувачі отримають CSS, стиснений старим повним CSS-словником, що означає завантаження лише змін у новій версії.

З серверної точки зору, для N різних типів сторінок потрібно обчислити N критичних CSS-файлів, N дельт між ними і повним CSS, та N представлень критичного CSS з використанням повного CSS-словника. Це можна генерувати статично. CDN кеш потрібно варіювати на `Available-Dictionary` або `Dictionary-Id`, що може дещо зменшити ефективність кешу. У браузерах без підтримки compression dictionaries (наразі лише Chromium) це елегантно деградує до підходу "критичний CSS". Firefox [активно працює](https://bugzilla.mozilla.org/show_bug.cgi?id=1882979) над підтримкою цієї функції.


### ✅ Корисні шаблони для створення HTML-інструментів

**Джерело:** [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/)

**Основна ідея:** HTML-інструменти - це автономні HTML застосунки, які поєднують HTML, JavaScript та CSS в одному файлі для надання корисної функціональності, причому більшість можна створити за допомогою LLM.

Анатомія HTML-інструменту передбачає кілька ключових характеристик: єдиний файл з inline JavaScript та CSS для простоти розповсюдження, уникнення React та будь-яких build steps (JSX вимагає компіляції, що ускладнює роботу), завантаження залежностей з CDN, та збереження невеликого розміру (кілька сотень рядків). Це дозволяє легко копіювати та вставляти код у GitHub репозиторій без складних налаштувань.

Найпростіший спосіб створити такий інструмент - почати з ChatGPT Artifacts, Claude Artifacts або Gemini Canvas. Промпт "Build a canvas that lets me paste in JSON and converts it to YAML. No React" створить робочий застосунок за секунди. Важливо завжди додавати "No React" до промптів, оскільки інакше LLM схильні використовувати React, що вимагає build step та створює більше помилок. Для складніших проєктів можна перейти на coding agents як Claude Code або Codex CLI.

Потужні можливості надають copy-paste операції. Більшість операційних систем підтримують множинні формати у clipboard - це дозволяє копіювати контент з текстовим редактором зі збереженням форматування, але вставляти його як простий текст. Ці rich copy operations доступні у JavaScript paste events: інструмент може отримати HTML з копійованого контенту, зображення, або навіть отримувати різні формати clipboard одночасно. Наприклад, `clipboard-viewer` показує всі типи даних на clipboard, що допомагає розробникам зрозуміти, які дані доступні для використання.

Для збереження стану можна використовувати URL (для закладок і шерінгу) або localStorage (для secrets як API ключі або більших об'ємів даних). URL підходить для інструментів типу `icon-editor`, який кодує весь стан іконки прямо в URL. localStorage ідеальний для зберігання API ключів для LLM сервісів - це запобігає витоку ключів на сервер, навіть якщо хостинг має server logs.

CORS-enabled APIs - золота жила для HTML-інструментів. GitHub raw.githubusercontent.com, iNaturalist, PyPI, Bluesky та Mastodon - всі мають щедрі CORS політики. GitHub Gists особливо цінні, оскільки дозволяють HTML додаткам зберігати стан у permanent Gist через cross-origin API виклики. Усі три основні LLM провайдери (OpenAI, Anthropic, Gemini) надають JSON APIs, доступні через CORS, хоча потребують API ключів користувача.

Pyodide - розподіл Python, скомпільований у WebAssembly для браузерів - відкриває можливість запуску Python коду безпосередньо в браузері, включаючи micropip для завантаження pure-Python пакетів з PyPI. WebAssembly загалом дозволяє запускати софт, написаний іншими мовами: Tesseract.js для OCR, порт SLOCCount, MicroPython для швидкого завантаження. Найбільша перевага великої колекції інструментів - можливість remix попередніх інструментів: LLM асистенти можуть комбінувати існуючі рішення у нові застосунки, використовуючи вихідний код як документацію.

## CSS

### ✅ CSS Wrapped 2025: щорічні підсумки від Google

**Джерело:** [CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)

**Основна ідея:** CSS Wrapped 2025 від Google Chrome представляє 22 нові функції CSS та UI, які дозволяють створювати динамічні інтерфейси без JavaScript, включаючи customizable select, invoker commands, scroll-state queries та багато іншого.

**Customizable Components** - революційна зміна для веб-компонентів. Customizable `<select>` нарешті дозволяє повністю стилізувати HTML select елементи через CSS після застосування `appearance: base-select`. Це розблоковує повну CSS кастомізацію: кожну частину select (кнопку, випадаючий список, опції) можна стилізувати, включаючи кольори, шрифти, відступи та анімації. Dropdown список рендериться у top-layer сторінки, браузер автоматично обробляє позиціонування. Можна включати HTML елементи як `<img>` та `<span>` всередину `<option>` для створення багатих візуальних меню. Елемент `<selectedcontent>` відображає HTML-контент вибраної опції, дозволяючи показувати частину контенту або лише іконку через `display: none` на певних елементах.

Invoker commands дозволяють кнопкам виконувати дії на інших елементах декларативно без JavaScript. Атрибут `commandfor` приймає ID (подібно до `for`), а `command` приймає вбудовані значення: `show-modal`, `close`, `show-popover`, `hide-popover`, `toggle-popover`. Наприклад, `<button commandfor="my-dialog" command="show-modal">Show Dialog</button>` відкриє діалог модально без жодного JavaScript. Можна створювати власні команди з префіксом `--` та обробляти їх через `toggle` event. Доступний [polyfill](https://github.com/keithamus/invokers-polyfill).

**Scroll-state queries** дозволяють стилізувати елементи на основі scroll стану: чи є елемент stuck (position: sticky), snapped (scroll-snap), чи scrollable (overflow). Після декларації `container-type: scroll-state` на елементі, його нащадки можуть запитувати стан через `@container scroll-state(snapped: x)` для стилізації поточного snap-елемента, або `@container scroll-state(scrollable: block)` для виявлення overflowing контенту. Це дозволяє створювати scroll-shadows, індикатори snapped елементів, та інші UX паттерни чистим CSS без JavaScript.

Tree counting functions `sibling-count()` та `sibling-index()` надають нативне розуміння позиції елемента серед siblings. `sibling-index()` повертає 1-based індекс позиції елемента, `sibling-count()` - загальну кількість siblings. Це дозволяє писати математичні формули для layouts та анімацій: `transition-delay: calc(0.1s * (sibling-index() - 1))` створює staggered delay, де перший елемент починається миттєво (0s), а кожен наступний затримується на 0.1s більше. Це автоматично адаптується до кількості елементів у DOM.

**Advanced attr() function** розширює можливості `attr()` функції: тепер вона може використовуватися з будь-якою CSS властивістю (не лише `content`), та парсити значення атрибутів у різні типи даних (colors, lengths, custom identifiers). Синтаксис: `color: attr(data-color type(<color>), red)` встановить колір з data-атрибута з fallback на red. Можна динамічно встановлювати `view-transition-name` для множини елементів через їх `id`: `view-transition-name: attr(id type(<custom-ident>), none)`. Це дозволяє використовувати один rating атрибут і для візуального заповнення зірки через `--percent-fill: calc(attr(data-rating type(<number>)) * 20%)`, і для відображення числа через `content: attr(data-rating)`.

**Custom Functions** у CSS - фантастичне нове доповнення. Функція складається з `@function` statement, імені з префіксом `--`, аргументів (можуть мати default значення), та `result` блоку. Наприклад, `@function --negate(--value) { result: calc(-1 * var(--value)); }` створює функцію для інверсії значення. Використання: `padding: --negate(var(--gap))`. Функції можна зберігати у `utils.css` файлі для повторного використання. Цікавий приклад - conditionally rounded border radius: `@function --conditional-radius(--radius, --edge-dist: 4px) { result: clamp(0px, ((100vw - var(--edge-dist)) - 100%) * 1e5, var(--radius)); }` видаляє `border-radius` коли елемент наближається до краю viewport.

**if() statements** у CSS надають умовну логіку для динамічної стилізації. Синтаксис: `if(condition-1: value-1; condition-2: value-2; else: fallback-value)`. Підтримуються три типи queries: `media()` для media queries, `supports()` для feature queries, `style()` для style queries. Приклад inline media query: `flex-direction: if(media(orientation: landscape): row; else: column)` змінює напрямок flexbox на основі орієнтації без окремих `@media` блоків. Range syntax тепер працює у style queries: `background: if(style(--rain-percent > 45%): blue; else: gray)` дозволяє писати умови з операторами порівняння. Це робить CSS більш консистентним та зручним для читання.

### ✅ Думки про нативні CSS-міксини

**Джерело:** [Thoughts on Native CSS Mixins](https://frontendmasters.com/blog/thoughts-on-native-css-mixins/)

**Основна ідея:** CSS Working Group схвалила просування нативних CSS mixins, які будуть працювати подібно до Sass `@mixin`, але з інтеграцією custom properties та можливостями, недоступними у препроцесорах.

Ідея CSS mixins походить від Sass `@mixin`. У Sass міксин визначається через `@mixin cover { position: absolute; inset: 0; }` і використовується через `@include cover`. Компіляція Sass просто копіює вміст міксину у місце використання. Sass mixins підтримують вкладеність, можуть використовувати інші міксини, та приймати параметри як функції для обчислення значень у виводі.

Нативна CSS версія використовуватиме `@apply` замість `@include` (оскільки Sass має конфлікт з `@include`): `@mixin --cover { position: absolute; inset: 0; } .modal-overlay { @apply --cover; }`. CSS Working Group вже схвалила цю ідею, що означає визначену цінність для нативного CSS. Причини включають: не потрібні препроцесорні інструменти (paved cowpath), менше дублювання коду у вихідному CSS (менші файли навіть з gzip/brotli), інтеграція з `--custom-properties` (параметри можуть бути custom properties, які можуть змінюватися динамічно), та custom properties можуть каскадно змінюватись у різних точках DOM.

Обробка параметрів виглядає складною. Наприклад, `@mixin --setColors(--color) { color: var(--color); background-color: oklch(from var(--color) calc(l - 40%) c h / 0.9); }` приймає параметр `--color`. Але що відбувається при виклику без параметрів? Можливо `--color` вже встановлений на рівні cascade? Як працює `!important`? Можливо, потрібні типізовані параметри та default значення: `@mixin --setColors(--color type(color): red)`, хоча синтаксис може бути verbose для CSS.

"Private" змінні - цікаве питання. Чи "витікають" custom properties, визначені всередині міксину? `@mixin --my-thing { --space: 1rem; gap: var(--space); margin: var(--space); } .card { @apply --my-thing; padding: var(--space); /* defined or not? */ }`. Це може бути корисним (return values), але іноді потрібна приватність. Можливо через `@private { --space: 1rem; }` блок або `!private` прапорець. Source order також створює питання: що отримає перевагу при `--papaBear: 50px; @apply --set-vars;` - значення до чи після міксину?

Custom Idents (подвійне тире як `--my-mixin`) здається будуть обов'язковими, як для custom functions. Це непослідовно з іншими CSS features (container names не потребують, але anchor names потребують), але підтримує зворотну сумісність. Було б чудово, якби це було стандартом для keyframes теж: `animation: --slide 0.2s forwards` було б чіткішим за `animation: slide 0.2s forwards`. Викликати множинні міксини, можливо, потрібно буде індивідуально: `@apply --mixin-one; @apply --mixin-two;`.

Функції можуть викликати міксини: `@mixin --box { gap: --get-spacing(2); }` виглядає логічно. Але чи можуть функції викликати міксини? Це може створити проблеми з infinite loops при обчисленні стилів. "Unmixing" - можливість відміняти міксин через `@unapply` - було б потужною можливістю, недоступною у препроцесорах. Цей feature може відкрити світ third-party CSS usage: уявіть CSS carousels, обгорнуті у `@mixin --radCarousel(--gap: 10px, --navArrows: true)` - це було б схоже на jQuery plugins або React components, але чистим CSS з DIY HTML (SSR безкоштовно).

### ✅ Що ще можуть робити Container Queries... Query?

**Джерело:** [What Else Could Container Queries... Query?](https://css-tricks.com/what-else-could-container-queries-query/)

**Основна ідея:** Container queries еволюціонували від простих size queries до потужної екосистеми, включаючи style, scroll-state та anchored queries, з потенціалом для розширення на будь-які CSS властивості.

Container size queries дозволяють стилізувати елементи на основі розміру їх контейнера, а не viewport. Це корисно для компонентів у sidebar, які потребують інших стилів ніж у main content area. Container style queries дозволяють запитувати значення custom properties (поки що тільки custom properties). Наприклад, `@container style(--theme: dark) { .card { background: black; } }` стилізує картки на основі значення змінної `--theme` у контейнері.

Container scroll-state queries виявляють, чи є контейнер scrollable, scroll-snapped до target, або має `position: sticky` і є 'stuck'. Буквально під час написання статті Chrome анонсував підтримку `scrolled`. Це унікальні можливості - наприклад, `scrollable` виявляє реальний overflow, а не просто `overflow: scroll` (який може бути встановлений, але контент не переповнює). Anchored container queries виявляють fallback позиції для anchor positioning. Якщо tooltip flip через `position-try-fallbacks: flip-inline`, anchored query може виявити флип і також перевернути caret tooltip.

В майбутньому container style queries зможуть запитувати значення будь-якої CSS властивості, а не лише custom properties. Це не зробить інші типи container queries зайвими: scroll-state queries виявляють snapping та stickiness (для яких немає псевдокласів), та scrollability (overflow: scroll не означає реальний overflow). Anchored queries виявляють не `position-try-fallbacks` значення, а коли, наприклад, `position-area` flip.

Цікаві ідеї для майбутніх container queries включають: запит, чи елемент on-screen, wrapping, або ellipsing (Adam Argyle), можливість рахувати child nodes (частково реалізовано через `sibling-count()` та `sibling-index()`), псевдокласи для деяких container queries (Matthew Dean), запит чи flex container wrapped та яка row/column у flexbox/grid. Можливо, container queries могли б отримувати computed значення будь-якої CSS властивості, хоча альтернативна пропозиція `compute()` функції виглядає більш елегантно: `compute(height, self)`, `compute(height, inherit)`, `compute(height, #abc)`.

Автор впевнений, що ці ідеї будуть реалізовані, або як container queries, або як інший синтаксис. Прогноз на 2026: container queries будуть домінувати у 2026 році. Дуже різноманітні можливості вже працюють: size queries для responsive компонентів, style queries з range syntax для умовних стилів, scroll-state для детекції scroll поведінки, anchored queries для позиціонування. З планами розширення на будь-які CSS властивості та нові типи запитів, container queries стають універсальним інструментом для контекстно-залежної стилізації.

### ✅ Призупинення CSS-анімації за допомогою getAnimations()

**Джерело:** [Pausing a CSS animation with getAnimations()](https://cassidoo.co/post/pause-css-animation/)

**Основна ідея:** Метод `getAnimations()` дозволяє паузити CSS анімації програмно через JavaScript, отримуючи масив Animation об'єктів для елемента.

Виклик `getAnimations()` на елементі повертає масив усіх Animation об'єктів на цьому елементі, включаючи CSS анімації. Animation об'єкт надає різні можливості: отримання `currentTime` з timeline анімації, перевірка `playState` (стан відтворення), або фактична пауза через метод `pause()`.

Щоб запаузити всі анімації на елементі, можна пройтись по масиву і викликати `pause()` на кожній: `const animations = element.getAnimations(); animations.forEach(animation => animation.pause());`. Якщо потрібно запаузити лише одну конкретну анімацію, можна відфільтрувати результати з повернутого масиву.

У реальному демо з однією анімацією можна паузити її на основі поточного `playState`. Це дозволяє toggle між play та pause станами. Метод особливо корисний коли потрібен програмний контроль над CSS анімаціями без переписування їх на JavaScript-based анімації. Наприклад, можна паузити анімацію при hover, при scroll події, або при будь-якій іншій користувацькій взаємодії.

Animation об'єкти також надають інші корисні властивості та методи: `play()` для відновлення анімації, `reverse()` для реверсу напрямку, `finish()` для миттєвого завершення, `cancel()` для скасування, `updatePlaybackRate()` для зміни швидкості. Також можна підписатися на події як `onfinish` та `oncancel` для реагування на зміни стану анімації.

## JavaScript

### ✅ ES2026 вирішує головний біль JavaScript з датами, математикою та модулями

**Джерело:** [ES2026 Solves JavaScript Headaches With Dates, Math and Modules](https://thenewstack.io/es2026-solves-javascript-headaches-with-dates-math-and-modules/)

**Основна ідея:** ECMAScript 2026 принесе значні покращення у роботу з датами через Temporal API, математичні операції, internationalization, та управління ресурсами, а також довгоочікувані фіксації для роботи з модулями.

**Math.sumPrecise** надає більш точні результати для floating point чисел, використовуючи кращий (але повільніший) алгоритм. Хоча це не виправляє дивність, де JavaScript не може правильно додати 0.1 та 0.2 (через floating point представлення), новий алгоритм робить багато речей набагато простішими. **Uint8Array to base64** додає методи для кодування binary даних як base64 (для обробки SSH ключів або вбудовування малих зображень) та створення масиву з base64 або hex рядків.

**JSON.parse Source Text** дозволяє отримати raw JSON source і конвертувати його настільки точно, наскільки потрібно - або у BigInt, або подивитися які символи були escaped для композиції рядка саме так, як потрібно. **Error.isError** використовується для перевірки, чи є JavaScript значення дійсно error об'єктом, оскільки throw можна використовувати з чим завгодно, включаючи числа. Це надійніше ніж instanceof Error, працює через різні execution contexts (browser extensions, iframes), і не обманюється об'єктами, які просто виглядають як помилки. **Iterator Sequencing** спрощує об'єднання послідовності ітераторів через `Iterator.concat` функцію - вже доступно у Firefox та Safari.

**Intl Locale** бере інформацію про перший день тижня (в деяких країнах це неділя, в інших - понеділік, weekend може бути п'ятниця-субота або четвер-п'ятниця), right-to-left чи left-to-right рендеринг, та інші деталі з Unicode locale data. ECMAScript 2026 також включить variants API для Intl.Locale, що дозволяє використовувати Unicode locale деталі як регіон, мову, script та numerals без ISO коду для точної комбінації. Наприклад, "ca-Latn-ES-fonipa-valencia-u-nu-roman" представляє каталанську мову з Latin script, як говорять в Іспанії, з валенсійським варіантом, захопленим фонетичним IPA та використовуючи римську систему нумерації.

**Array.fromAsync** для async iterables (які загортають значення у promises) вже доступний у всіх браузерах та JavaScript runtimes, але деталі реалізації не були додані до специфікації через minor bug. **Explicit Resource Management** використовує `using` блок замість const, де об'єкти можуть визначити Symbol.dispose або Symbol.asyncDispose, що автоматично викликаються наприкінці code block. Це гарантує cleanup навіть якщо код кидає exception або просто returns. "У минулому люди покладалися на garbage collector, який непередбачуваний" - Ashley Claymore. Вже підтримується у Chrome, Node, Deno, Firefox (за флагом), Babel, TypeScript.

**Temporal** - довгоочікувана заміна "зламаного Date об'єкта JavaScript" досягла Stage 3 draft з першими імплементаціями. Date не старіє добре - розробники або використовують його неправильно з багами, або уникають повністю через бібліотеки як Moment.js. "Якщо взяти будь-який web app і проаналізувати bundle, найбільший квадрат зазвичай Moment.js або щось подібне" - Jason Williams. Temporal краще спроектований: обробляє time zones, включає вбудований календар, парсить та форматує дати правильно. Temporal має 4,000 тестів (більше ніж весь ES6). Rust crate temporal_rs містить більшість логіки, яку можуть використовувати інші JavaScript engine. V8 вже unflagged для Chromium 144 (stable 7 січня 2026), Safari implementation майже наполовину закінчена, два production polyfills доступні.

**Import defer** відкладає evaluation модуля до першого використання namespace, дозволяючи оплачувати лише те, що використовується: `import defer * as utils from './utils.js'`. "Це дуже корисно у великих code bases з deep module graphs, що можуть займати сотні мілісекунд завантаження" - Rob Palmer. Bloomberg terminal вже використовує цей паттерн. Все ще синхронне (на відміну від dynamic import), тому легше вставити як оптимізацію. Підтримка у TypeScript, Prettier, Babel, webpack. Імплементації у V8 та WebKit JavaScriptCore engine у розробці. **Upsert** для maps та weak maps дозволяє перевірити значення 'it exists' або 'insert if it doesn't' без написання conditional test - звична операція у базах даних. Буде у Chrome 145 у січні 2026, студенти з University of Bergen працюють над кодом.
