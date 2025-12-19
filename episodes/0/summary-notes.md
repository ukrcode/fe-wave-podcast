# Summary Notes

## Веброзробка

### ✅ Найкращі практики безпеки NPM: як захистити свої пакети після атаки Shai Hulud Attack у 2025 році

**Джерело:** [NPM Security Best Practices: Shai Hulud Attack](https://snyk.io/articles/npm-security-best-practices-shai-hulud-attack/)

**Основна ідея:** Атака Shai Hulud у 2025 році продемонструвала нові вразливості в екосистемі NPM, підкресливши важливість сучасних практик безпеки для захисту пакетів та проєктів.

Атака Shai Hulud стала одним з найбільш значущих security інцидентів в екосистемі NPM, демонструючи, як зловмисники можуть компрометувати supply chain через вразливості в популярних пакетах. Назва атаки відсилає до гігантських піщаних хробаків з "Дюни" Френка Герберта, що символізує масштаб та глибину проникнення загрози в екосистему JavaScript.

Ключові практики безпеки після цього інциденту включають: регулярний аудит залежностей з використанням інструментів як `npm audit`, `snyk test` та automated security scanning у CI/CD pipeline; впровадження принципу найменших привілеїв для NPM токенів та доступів до репозиторіїв; використання lockfiles (`package-lock.json`, `yarn.lock`) для гарантування консистентності залежностей між environment; enable 2FA (two-factor authentication) для всіх NPM облікових записів з правами публікації пакетів.

Важливо впроваджувати перевірку integrity через subresource integrity (SRI) hashes, monitoring підозрілої активності в dependency tree, та regularly updating залежностей для отримання security patches. Організації повинні розглянути використання private NPM registries або artifact repositories для критичних внутрішніх пакетів, щоб зменшити exposure до публічних загроз. Code review процеси мають включати перевірку змін у lockfiles та аналіз нових залежностей перед їх додаванням до проєкту.

Supply chain attacks, як Shai Hulud, підкреслюють необхідність defense-in-depth стратегії: не покладатися лише на один рівень захисту, а створювати множинні бар'єри між потенційними загрозами та критичною інфраструктурою. Це включає automated scanning, manual review для критичних змін, sandboxing для testing нових пакетів, та incident response plan на випадок виявлення компрометованих залежностей.

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

### ✅ Нативний компілятор TypeScript 7: наслідки для фронтенд-розробки

**Джерело:** [TypeScript 7's Native Compiler: What It Really Means for Frontend Engineering](https://www.iocombats.com/blogs/typescript-7-native-compiler-impact-frontend-engineering)

**Основна ідея:** TypeScript 7 переходить на нативний компілятор, що обіцяє радикальні покращення швидкості збірки, але також видаляє підтримку legacy форматів модулів та робить strict mode стандартом за замовчуванням.

TypeScript завжди був досить швидким, але обмеженим тим, що написаний на JavaScript. З TS7 компілятор перебудовується з нативною архітектурою, яка може використовувати низькорівневі оптимізації, недоступні для JS. Результат: драматично швидші повні збірки, значно швидший incremental + watch mode, мінімальне використання пам'яті, чистіший output для ES6+. Це не "2-3% покращення" - команди, які тестували ранні збірки, повідомляють про двозначні покращення в cold builds та масивні стрибки у responsiveness watch mode.

Одна з найважливіших змін - видалення legacy форматів модулів. TypeScript 7 припиняє підтримку AMD, UMD та SystemJS. Натомість TS7 очікує, що екосистема стандартизується навколо ES Modules (primary target) та CommonJS (мінімальна підтримка для Node interop). Якщо у вас старі Rollup конфігурації, RequireJS ланцюги, legacy мікрофронтенди або enterprise додатки на SystemJS - TS7 змусить переписати. Це буде шумно для команд, які не модернізували свої bundling стратегії.

Strict mode тепер увімкнений за замовчуванням, і екосистема має розглядати strictness як baseline, а не advanced опцію. Якщо ваш репозиторій має casual `any` usage, weak null checking, type fallthrough across modules, або inconsistent type definitions - TS7 це виявить. Це може здаватися болючим, але насправді це узгоджується з напрямком frontend engineering: безпечніші, більш передбачувані та оптимізовані codebase. Повідомлення від TS команди чітке: якщо ваші типи не strict, вони не допомагають.

TypeScript's internal resolver завжди мав проблеми з path aliasing. У TS7 команда спрощує dependency resolution, зменшуючи залежність від `baseUrl` та більше узгоджуючись з Node та bundler resolution patterns. Команди з глибокими aliasing структурами як `import Button from '@/components/ui/button'` можуть потребувати налаштувань конфігурації. Це також штовхає екосистему до більш передбачуваних module graphs, менше "magic paths", чистішого bundler alignment.

Реальні бенчмарки від senior engineers показують: 20-50% швидші cold builds у середніх React/Next репозиторіях, 30-70% швидший watch mode responsiveness для великих monorepo, нижчі CPU спайки на incremental rebuilds, зменшений memory footprint під час великих компіляцій. Mozilla повідомила про майбутні зміни у Firefox, які значно прискорять роботу.

Цей зсув не відбувається ізольовано. Інструменти, що залежать від TS internals, потребуватимуть часу для адаптації: eslint-typescript, ts-node, Angular compiler pipelines, Storybook TypeScript loaders, Vite + SWC TypeScript transforms, Jest transformers. Не все зламається, але багато інтеграцій зазнають впливу. Рекомендована стратегія міграції: почніть з некритичних пакетів, виправте strictness проблеми рано, перепишіть legacy формати модулів, аудит path aliases, валідуйте всі залежні інструменти, тримайте TS6 доступним під час rollout.

### ✅ DoS та розкриття вихідного коду в React Server Components

**Джерело:** [Denial of Service and Source Code Exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)

**Основна ідея:** Після критичної вразливості React2Shell дослідники виявили дві додаткові вразливості у React Server Components - DoS атаку високої складності та витік вихідного коду середньої складності.

Security дослідники знайшли та розкрили дві додаткові вразливості у React Server Components під час спроби експлуатувати патчі з минулотижневої критичної вразливості. Ці нові вразливості не дозволяють Remote Code Execution - патч для React2Shell залишається ефективним. Нові вразливості: Denial of Service - High Severity (CVE-2025-55184 та CVE-2025-67779 з CVSS 7.5) та Source Code Exposure - Medium Severity (CVE-2025-55183 з CVSS 5.3).

Це звичайна ситуація для критичних CVE - коли критична вразливість розкривається, дослідники ретельно вивчають суміжні code paths, шукаючи варіанти exploit технік для перевірки, чи можна обійти початкову міграцію. Цей паттерн з'являється по всій індустрії. Наприклад, після Log4Shell були повідомлені додаткові CVE, коли спільнота досліджувала оригінальний fix. Додаткові розкриття можуть бути фруструючими, але вони загалом є ознакою здорового response cycle.

**Denial of Service (High Severity)**: Дослідники виявили, що зловмисний HTTP запит може бути створений та відправлений на будь-який Server Functions endpoint, який при deserialize React може спричинити infinite loop, що зависає server process та споживає CPU. Навіть якщо ваш додаток не має React Server Function endpoints, він все одно може бути вразливим, якщо підтримує React Server Components. Це створює vulnerability vector, де атакуючий може заборонити користувачам доступ до продукту та потенційно мати performance вплив на server environment. Патчі, опубліковані сьогодні, пом'якшують, запобігаючи infinite loop. Оригінальний fix був incomplete, залишивши версії 19.0.2, 19.1.3, 19.2.2 вразливими. Версії 19.0.3, 19.1.4, 19.2.3 безпечні.

**Source Code Exposure (Medium Severity)**: Security дослідник виявив, що зловмисний HTTP запит, відправлений на вразливу Server Function, може небезпечно повернути вихідний код будь-якої Server Function. Exploitation вимагає існування Server Function, яка явно або неявно expose stringified argument. Наприклад, функція з `const conn = db.createConnection('SECRET KEY')` може витікати і цей секретний ключ у відповіді, якщо `name` параметр stringified. Важливо: лише secrets hardcoded у source code можуть бути exposed - runtime secrets як `process.env.SECRET` не постраждали. Scope exposed коду обмежений кодом всередині Server Function, що може включати інші функції залежно від кількості inlining вашого bundler.

Вразливості присутні у тих самих пакетах та версіях, що й CVE-2025-55182: versions 19.0.0-19.2.2 пакетів react-server-dom-webpack, react-server-dom-parcel, react-server-dom-turbopack. Fixes backported до версій 19.0.3, 19.1.4, та 19.2.3. Постраждали frameworks та bundlers: next, react-router, waku, @parcel/rsc, @vite/rsc-plugin, rwsdk. Timeline: 3 грудня - leak reported до Vercel та Meta Bug Bounty, 4 грудня - initial DoS reported, 11 грудня - патчі опубліковані та publicly disclosed, додатковий DoS case знайдений internally.

### ✅ React 19.2 - Подальші вдосконалення INP-оптимізації

**Джерело:** [React 19.2. Further Advances INP Optimization](https://calendar.perfplanet.com/2025/react-19-2-further-advances-inp-optimization/)

**Основна ідея:** React 19.2 представляє новий компонент `<Activity />` та Performance Tracks у Chrome DevTools, надаючи розробникам кращі інструменти для розуміння та контролю того, як додаток перевантажує main thread браузера.

React не автоматично швидкий - довгі JavaScript tasks можуть виникати з цілком звичайних конструкцій. Більший DOM та більше компонентів означають більше роботи під час hydration та повільніший UI під час взаємодії. На практиці навіть відносно прості дії користувача можуть займати сотні мілісекунд, змушуючи метрику INP злітати. Release React 19.2 приніс нові можливості, які дають розробникам нові інструменти для розуміння, що відбувається всередині React.

**Новий компонент `<Activity />`** відповідає на проблему, яку розробники вирішували довгий час: як ефективно ховати частини UI без втрати їх стану, не обтяжуючи браузер повним React render щоразу, коли компонент прихований. Використовуючи параметр `mode`, він переключає, чи компонент visible чи hidden. Коли компонент переходить у `mode="hidden"`, React не unmount його з DOM - він візуально ховає його через `display:none`. Це надає дві величезні переваги: збереження Local State (всі `useState`, `useReducer` та context залишаються в пам'яті) та збереження DOM State (стан елементів як текст у `<input>` полях, scroll position, вибраний tab).

Навіть якщо компонент залишається mounted, React концептуально розглядає його як unmounted та видаляє всі `useEffect` hooks. Це гарантує, що приховані частини UI не отримують дані, не запускають таймери тощо, радикально зменшуючи навантаження на систему та пам'ять. Компоненти всередині Activity можуть все ще re-render, якщо дані від їх parent змінюються (props), але React виконує ці оновлення з найнижчим пріоритетом. Оновлення прихованого контенту відбуваються лише коли немає критичної роботи (як user interaction) на видимій частині сторінки.

Контент, загорнутий у `<Activity>`, готується для користувача під час hydration, захищаючи від UI freezing. Це значно прискорює навігацію, tab switching та інші UI displays, оскільки React не повинен рендерити весь контент вперше лише коли користувач вперше активує його. Подібно до `<Suspense>`, `<Activity>` ділить component tree на незалежні юніти, дозволяючи React селективно hydrate частини застосунку. Попередній рендеринг відбувається з нижчим пріоритетом - React розбиває роботу на індивідуальні шматки. Важлива примітка щодо SSR: React не вставляє приховані Activity компоненти у HTML взагалі під час server-side rendering. Будьте обережні, оскільки це може мати негативні наслідки для SEO.

**Performance Tracks у Chrome DevTools** - друга велика нова можливість. До цього треба було використовувати два інструменти одночасно для performance debugging: React Devtools та Performance Timeline. Тепер все видно разом на одній timeline: React events, metrics, network requests, running JavaScript, event loop activity - все поділено на чіткі окремі sub-panels (tracks). **Scheduler Track** показує, над чим React зараз працює, які його пріоритети, як він ділить rendering cycle phases (Update, Render, Commit, Remaining Effects) та скільки вони займають. Особлива увага до Cascading updates - якщо компонент тригерить update чогось іншого під час render, React повинен відкинути частину роботи та почати знову.

**Components Track** візуалізує індивідуальні компоненти, тривалості rendering та effects у формі flamegraph. Це як X-ray, що виявляє, які компоненти мають який вплив на performance. Кожна "смужка" у track відповідає одному конкретному компоненту: коли він рендериться, як довго паузує, наскільки глибоке sub-tree створює, та чи містить effects, які тривають підозріло довго. **Server Track** - якщо використовуєте React Server Components, треба спробувати новий profiling метод. Додаткова Server Track панель показує виклики та операції, що відбуваються під час SSR у Node.js. Це essential, оскільки у hybrid застосунках сьогодні частина логіки працює на клієнті, а частина на сервері.

### ✅ Контрольовані та неконтрольовані компоненти в React

**Джерело:** [Controlled vs Uncontrolled Components in React](https://certificates.dev/blog/controlled-vs-uncontrolled-components-in-react)

**Основна ідея:** Терміни "controlled" та "uncontrolled" у React завжди задають одне питання: хто володіє станом - батьківський компонент через props чи компонент управляє ним внутрішньо?

Обидва використання "controlled" та "uncontrolled" діляться однією базовою концепцією: Controlled означає, що стан належить зовні та передається через props; Uncontrolled означає, що стан належить внутрішньо самому компоненту. Для form inputs "internal state" означає, що DOM управляє значенням. Для custom компонентів "internal state" зазвичай означає React's `useState`. Але це те саме питання: чи батьківський компонент контролює стан, чи компонент управляє ним внутрішньо?

Controlled input має своє значення, керовану батьківським компонентом через React state: `<input value={query} onChange={(e) => setQuery(e.target.value)} />`. React повністю контролює значення цього input. Властивість `value` встановлює, що відображається, а `onChange` оновлює стан. Все, що оновлює `query` - чи то typing, "Clear" кнопка, або вибір suggestion - оновить input. Важливо: `value` та `onChange` повинні працювати разом. Якщо передати `value` без `onChange`, буде неможливо вводити в input - React відкине кожне натискання клавіші назад до вказаного значення.

Uncontrolled input управляє своїм значенням внутрішньо через DOM: `<input name="query" defaultValue="" />`. React не знає про значення цього input - він не встановлює чи оновлює його, та не знає коли воно змінюється. Властивість `defaultValue` встановлює лише початкове значення; після цього DOM володіє станом. Дані читаються на submit через `FormData`.

Цей же патерн застосовується до custom компонентів. Простий `Toggle` компонент з `useState` є uncontrolled, оскільки батьківський компонент не має способу читати чи встановлювати toggle значення. Щоб зробити `Toggle` controlled, переміщуємо стан до батьківського компонента та передаємо через props: `<Toggle isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />`. Тепер батьківський компонент контролює значення toggle - він може читати стан для оновлення теми, скидати його, або координувати множинні toggles.

Деякі компоненти підтримують обидва режими, як нативні `<input>` елементи. Для `Toggle` це може виглядати так: перевірка `isOn !== undefined` визначає режим. Коли controlled, компонент використовує prop та делегує зміни батьківському через `onToggle`. Коли uncontrolled, він управляє власним станом внутрішньо через `defaultOn`. Важливе правило: компонент не повинен переключатися між controlled та uncontrolled режимами під час свого життя.

Real-world приклади: Tabs (uncontrolled управляє активною вкладкою внутрішньо, controlled приймає `activeTab` та `onTabChange` props), Modals (uncontrolled має internal `isOpen` стан, controlled приймає `isOpen` та `onClose` props), Accordions (uncontrolled дозволяє кожній панелі управляти власним open/closed станом, controlled приймає `expandedPanels` для "single panel open" поведінки), Date Pickers (uncontrolled управляє вибором внутрішньо, controlled дозволяє батьківському валідувати дати та sync з іншими полями).

Trade-offs: для форм uncontrolled inputs часто простіші - DOM обробляє стан, значення читаються на submit через `FormData`. Controlled inputs стають цінними, коли потрібне значення під час typing - для real-time validation, transforming input (форматування телефонних номерів), або координації множинних полів. Для custom компонентів питання в тому, чи компонент повинен працювати незалежно чи координуватися батьківським. Uncontrolled простіший коли стан є implementation detail. Controlled дозволяє координацію та складну поведінку.

### ✅ Angular 21 — Signal з формами — чому іноді краще почекати

**Джерело:** [Angular 21 — Signal with Forms — Why Sometimes Waiting Is The Better Choice](https://techhub.iodigital.com/articles/angular21-signals-with-forms)

**Основна ідея:** Angular 21 представляє експериментальні Signal Forms, але для багатьох команд очікування дозрівання API може бути кращою стратегією, ніж негайна міграція.

У світі швидкої розробки команди часто відчувають постійний тиск підтримувати codebase сучасним. Технології еволюціонують швидко, та розробників заохочують - іноді очікується - оновлювати frameworks та архітектури якомога швидше. Але за цими очікуваннями іноді не поспішати, а чекати є кращим вибором. Angular проходить суттєву трансформацію (з версії 16), що змушує багато команд розглядати поступове refactoring або переписування частин застосунків.

Angular почав зміщувати свій change detection механізм, відходячи від підходу, що сильно покладався на zone.js. Раніше zone.js автоматично відстежував зміни і з `OnPush` стратегією селективно перевіряв компоненти лише коли необхідно. З новим підходом Angular переймає signal-based систему - компоненти оновлюються лише коли signal явно вказує, що потрібне оновлення. Ця зміна спроектована для покращення performance та зменшення unnecessary re-renders, але також має implications для існуючих бібліотек та patterns.

До Signal розробники покладалися на Reactive Forms - систему, побудовану навколо класів як `FormGroup`, `FormControl`, `FormArray`, та `Validators`. Reactive Forms надавали структурований та передбачуваний спосіб управління станом форм, застосування validation rules, та реагування на user input. Ключовий interaction pattern був subscribing до `valueChanges` або `statusChanges` observables для реагування на form updates. Ці події покладалися на Angular's change-detection механізм, тому Reactive Forms були тісно зв'язані з zone.js.

Поточна проблема з Signal forms в тому, що їм бракує повністю зрілого API для організації складних форм у grouped структуру з усіма можливостями, які очікуються (nested grouping, dynamic validation, complex logic). Хоча існує "cheat" workaround - повторне використання старого `FormGroup` (з Reactive Forms) всередині signal-based setup - це покладається на legacy zone.js + observable & subscription модель, що підриває багато переваг, які прагнуть надати Signals. В результаті використання Signals з `FormGroup` цим hybrid способом часто надає мало або зовсім не дає реальної користі, тому загалом не рекомендується їх комбінувати таким чином.

Angular розпізнав саме цю проблему та працював над рішенням. 19 листопада 2025 був released Angular 21. Одним з найважливіших доповнень є експериментальний release Signal Forms, які адресують missing feature та сподіваємось будуть successor Reactive Forms. Валідація може бути виконана з новоствореним `schemaPath`, який містить класичну `minLength`, `maxLength`, `required` validation. Signal Forms API позначений як експериментальний, що означає API може еволюціонувати з майбутніми releases - тому він ще не рекомендований для production usage без обережності.

Завдяки сильній відданості Angular зворотній сумісності багато команд вибирають upgrade застосунків до новішої версії, продовжуючи покладатися на Reactive Forms на поточний момент - іншими словами: чекають. Важливо підкреслити, що напрямок Angular до Signal-based моделі дуже обіцяючий. Фундамент, що будується навколо Signal, солідний, і коли form-related APIs дозріють, Signals ймовірно надаватимуть чистіший, більш передбачуваний та ефективніший спосіб обробки reactivity через весь framework.

### ✅ Signal Forms в Angular 21 — повний посібник

**Джерело:** [Signal Forms in Angular 21 – Complete Guide](https://www.angular.love/signal-forms-in-angular-21-complete-guide)

**Основна ідея:** Signal Forms - це переосмислена з нуля імплементація форм в Angular, що надає справжній typing, автоматичну реактивність, спрощені custom controls та реюзабельні схеми валідації.

Signal forms представляють фундаментальну зміну порівняно з Reactive Forms. **Form Model** - writable signal, з яким ініціалізуємо форму: `loginModel = signal({ email: '', password: '' })`. Це критично, оскільки form model безпосередньо відповідає типу форми. Будь-які модифікації та оновлення form model будуть безпосередньо propagated та reflected формою. У попередньому підході форма управляла власним станом незалежно - mapping об'єктних полів до form controls, але стан форми існував незалежно від source об'єкта.

Створення нової форми відбувається через `form()` функцію: `loginForm = form(this.loginModel)`. Перший аргумент - form model, який дасть тип формі та на його основі ініціалізується Form Tree - ієрархічна структура полів, де кожен об'єкт у моделі стає node зі своїми дітьми, а кожне примітивне значення стає terminal field (leaf). Навігація через форму природно відповідає навігації через дані: `loginForm.email`, `loginForm.password`.

**Typing - кінець компромісів**: У Reactive Forms кожен FormControl за замовчуванням має тип T | null. Signal forms - тип приходить безпосередньо з моделі: `myForm.email().value()` є `string`, ніякого null. Метод `get()` в Reactive Forms втрачає типи - навіть якщо форма typed, `form.get('user.email')` повертає `AbstractControl<unknown, unknown> | null`. Signal forms мають повну navigation typing: `myForm.user.email().value()` є `string`, помилка в імені викличе compilation error. FormArray в Reactive Forms втрачає структуру через `at()`. Signal forms зберігають повну структуру з typed iteration.

**Валідація**: Predefined validators включають `required(path)`, `min(path, minValue)`, `max(path, maxValue)`, `minLength(path, length)`, `maxLength(path, length)`, `pattern(path, regex)`, `email(path)`. Custom validators простіші: `validate(f.username, ({ value }) => { if (value().includes(' ')) return customError({ kind: 'no-spaces' }); })`. Validator context дає доступ до `value()`, `valueOf(path)`, `state`, `stateOf(path)`.

Ключова перевага - **автоматичне відстеження залежностей валідаторів**. Validators працюють всередині reactive context, що означає Angular автоматично відстежує всі read signals. Валідатор пароля `validate(f.confirmPassword, ({ value, valueOf }) => value() !== valueOf(f.password) ? error : undefined)` запуститься коли змінюється confirmPassword АБО password. У Reactive Forms це вимагало manual `this.form.get('password').valueChanges.subscribe(() => this.form.get('confirmPassword').updateValueAndValidity())`. В signal forms це відбувається автоматично, zero subscriptions, zero manual `updateValueAndValidity()` викликів.

**Схеми** дозволяють визначити набір правил один раз та застосувати у багатьох місцях: `const addressSchema = schema<Address>((addr) => { required(addr.street); required(addr.city); pattern(addr.zipCode, /^\d{2}-\d{3}$/); })`. Застосування: `apply(customer.billingAddress, addressSchema)`, `applyEach(order.addresses, addressSchema)`. Conditional schemas: `applyWhen(f.payment, ({ valueOf }) => valueOf(f.paymentMethod) === 'card', cardPaymentSchema)`.

**Field directive** - одна дорога для всього замість різних directives (`formControl`, `formControlName`, `formGroupName`): завжди `[field]`. Автоматична state binding з typed template - при спробі bind number type field до input, що очікує string, отримаєте type error у template. Custom controls тепер простіші - замість ControlValueAccessor з 4 методами та magical provider, потрібен лише один `value = model('')` signal з `FormValueControl<T>` interface. Optional inputs як `disabled`, `touched`, `errors` автоматично заповнюються `[field]` directive якщо декларовані.

**Submit та Reset**: `submit(myForm, async (form) => { ... })` автоматично marks fields as touched, перевіряє `valid()`, встановлює `submitting` в true під час виконання, застосовує server errors. `reset()` очищає interaction state (touched, dirty), опціонально приймає нове значення. **Debouncing**: `debounce(f.query, 300)` оновлює model лише 300ms після останньої зміни.

**Migration з compatForm**: Для існуючих застосунків з Reactive Forms, `compatForm()` дозволяє змішувати обидва світи. Model може містити як regular signal forms поля, так і existing FormControl: `const model = signal({ name: 'Jan', age: ageControl })`. Стан синхронізується bidirectionally, validators поважаються, але не можна застосувати signal forms rules безпосередньо до FormControl полів.

Status: Experimental 21.0.0 - API може змінитись, але для нових проєктів вже вартий використання. Signal forms - це не еволюція Reactive Forms, а переосмислена з нуля імплементація. Ключові зміни: Model як source of truth, справжній typing без компромісів, reactivity з коробки, один API, schemas, прості Controls. Для існуючих застосунків - якщо є час та бюджет, так. Якщо ні - compatForm дозволяє вводити поступово. Для нових проєктів - Signal forms є майбутнім форм в Angular.
