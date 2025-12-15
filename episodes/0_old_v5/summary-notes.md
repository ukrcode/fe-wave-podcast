# Front-end Digest № 129 - Підсумки статей

## Веброзробка

### ✅ SVG Filters — Clickjacking 2.0

**Джерело:** [SVG Filters — Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)

**Основна ідея:** Дослідження демонструє новітню техніку атак через SVG-фільтри, яка дозволяє створювати інтерактивні багатоетапні clickjacking-атаки з повною логічною функціональністю.

Дослідниця Lyra представила революційний метод проведення clickjacking-атак, використовуючи SVG-фільтри. На відміну від традиційних методів, цей підхід дозволяє не просто приховувати або підміняти елементи інтерфейсу, а створювати повноцінні логічні схеми безпосередньо в SVG-фільтрах.

**Основні компоненти техніки:**

Дослідження базується на використанні примітивів SVG-фільтрів:

- `feImage` - завантаження зображень з cross-origin кадрів
- `feFlood`, `feOffset` - створення базових форм
- `feDisplacementMap` - зміщення пікселів на основі інших зображень
- `feGaussianBlur`, `feTile` - розмиття та тайлінг
- `feMorphology` - морфологічні операції над пікселями
- `feBlend`, `feComposite` - композитинг шарів
- `feColorMatrix` - маніпуляції з кольорами та прозорістю

**Атакуючі примітиви:**

Техніка включає набір базових операцій:

- Генерація фейкових CAPTCHA у SVG
- Приховування сірого тексту на сірому фоні
- Зчитування окремих пікселів з cross-origin iframe
- Реалізація логічних воріт: NOT, AND, OR, XOR, NAND, NOR, XNOR

**Функціональна повнота:**

Ключова особливість - можливість створювати будь-які логічні схеми у SVG-фільтрах. Це означає Turing-completeness у контексті статичних зображень, що дозволяє створювати складну умовну логіку без JavaScript.

**Реальні приклади атак:**

Дослідження включає два практичні приклади:

1. **Експлойт Google Docs** - атака отримала винагороду $3,133.70 від Google VRP. Використовувала детектування стану діалогу та чекбокса для показу відповідного фейкового UI.
2. **Генератор QR-кодів** - повноцінний генератор QR-кодів, реалізований виключно через SVG-фільтри без жодного JavaScript.

**Багатоетапні інтерактивні атаки:**

Техніка дозволяє створювати атаки з множинними кроками:

- Детектування стану діалогових вікон
- Визначення позиції чекбоксів
- Відстеження стану завантаження
- Показ різних фейкових UI в залежності від контексту
- Маскування справжніх елементів інтерфейсу

Дослідження було вперше представлено на конференції BSides у вересні 2025 року і відкриває нові вектори атак через, здавалося б, безпечні SVG-фільтри. Техніка особливо небезпечна тим, що не потребує JavaScript і може обходити багато існуючих захисних механізмів.

### ✅ Bun joins Anthropic

**Джерело:** [Bun joins Anthropic](https://bun.com/blog/bun-joins-anthropic)

**Основна ідея:** Anthropic придбала Bun - швидкий JavaScript runtime, який залишиться open-source і збереже фокус на Node.js-сумісність, отримуючи додаткові ресурси для розвитку.

2 грудня 2025 року Anthropic оголосила про придбання Bun - альтернативного JavaScript runtime, що конкурує з Node.js та Deno. Це рішення викликало широкий резонанс у спільноті розробників, оскільки Bun став одним із найбільш обговорюваних інструментів останніх років.

**Що залишається незмінним:**

Команда Bun заспокоїла спільноту, підкресливши ключові аспекти, які не зміняться:

- **Open-source статус**: Bun залишається під ліцензією MIT
- **Публічна розробка**: Весь розвиток продовжиться на GitHub у публічному доступі
- **Команда**: Той самий колектив продовжить працювати над проєктом
- **Node.js сумісність**: Фокус на сумісності з Node.js екосистемою залишається пріоритетом

**Що зміниться:**

Придбання принесе позитивні зміни для проєкту:

- Тісніша співпраця з командою Claude Code
- Більше ресурсів для швидшого розвитку
- Можливість швидше впроваджувати нові можливості
- Довгострокова стабільність і підтримка проєкту

**Історія зростання:**

Bun розпочався 5 років тому з незвичайної задачі - розробник хотів оптимізувати відображення вокселів для Minecraft. З того часу проєкт виріс у повноцінний runtime:

- 7.2 мільйони завантажень на місяць
- 25% зростання лише у жовтні 2025
- Команда з 14 осіб
- $26 мільйонів фінансування до придбання

**Стратегічне значення для AI:**

Придбання має глибокий стратегічний сенс для Anthropic:

- **Single-file executables**: Можливість Bun компілювати у один файл ідеально підходить для розповсюдження CLI-інструментів на кшталт Claude Code
- **AI coding tools**: Багато сучасних AI-інструментів для коду (Claude Code, FactoryAI, OpenCode) вже побудовані з використанням Bun
- **Інфраструктура майбутнього**: Bun стає базовою інфраструктурою для AI-driven розробки програмного забезпечення
- **Front-row seat**: Anthropic отримує можливість впливати на інструменти, які формують майбутнє AI-асистованого програмування

**Відповіді на поширені запитання:**

У FAQ команда підтвердила ключові обіцянки:

- Open-source статус незмінний
- Публічна розробка продовжиться
- Node.js сумісність залишається першочерговою метою
- Жодних планів закривати проєкт чи обмежувати доступ

Це придбання демонструє зростаючу важливість швидких, ефективних runtimes в епоху AI-асистованої розробки, де інструменти повинні бути не лише потужними, але й зручними для інтеграції в різноманітні workflow.

### ✅ What's New in ViteLand November 2025

**Джерело:** [What's New in ViteLand November 2025](https://voidzero.dev/posts/whats-new-nov-2025)

**Основна ідея:** Комплексне оновлення екосистеми VoidZero: реліз Vite 8 Beta з Rolldown, покращення Vitest, розвиток Oxc та масове впровадження у великих проєктах.

Листопад 2025 року приніс значні оновлення для всієї екосистеми інструментів веб-розробки від VoidZero. Компанія демонструє амбіційну мету - створити end-to-end toolchain від build tool до компілятора, написаного на Rust для максимальної продуктивності.

**Vite 8 Beta - революційний реліз:**

Найважливіше оновлення - Vite 8 Beta тепер використовує Rolldown замість комбінації esbuild + Rollup:

- **Rolldown** - новий бандлер, написаний на Rust, який замінює обидва попередні інструменти
- Значне покращення продуктивності завдяки нативній реалізації
- Єдиний інструмент для dev і production builds
- Повна сумісність з існуючими Vite проєктами

**End-to-end toolchain:**

VoidZero будує єдину екосистему інструментів:

- **Vite** - build tool (фреймворк для збірки)
- **Rolldown** - bundler (бандлер на Rust)
- **Oxc** - compiler (компілятор на Rust)

Усі інструменти написані на Rust і тісно інтегровані між собою.

**Vitest - оновлення тестового фреймворка:**

Нові можливості для тестування:

- **Diff slider/tabbed view** - покращене відображення візуальних регресій
- **File-system cache** - кешування на файловій системі для швидших повторних запусків
- **Standard schema matching API** - підтримка Zod, Valibot, Arktype для валідації схем
- **Imports Breakdown** - детальний аналіз імпортів у тестах

**Rolldown - новий бандлер:**

Ключові покращення:

- **Tsconfig auto-discovery** - автоматичне виявлення налаштувань TypeScript
- **Stable URL generation** - стабільна генерація URL для asset-ів
- **Module.exports interop** - покращена сумісність з CommonJS модулями

**Oxc - швидкий компілятор:**

Значні оновлення екосистеми Oxc:

- **Oxfmt alpha** - форматер коду, у 30 разів швидший за Prettier
- **PrintWidth 80→100** - нове значення за замовчуванням для ширини рядка
- **Security policy** - опублікована політика безпеки
- **Lexer optimization** - покращення парсера на 2-7%

**Community adoption - впровадження спільнотою:**

Великі проєкти переходять на інструменти VoidZero:

**Angular v21:**

- Vitest тепер за замовчуванням для нових проєктів Angular
- Заміна Karma як стандартного тестового фреймворка

**Canva:**

- 66x покращення продуктивності з oxc-transform
- Масштабне впровадження в production

**Інші міграції:**

- Inquirer - мігрував на Oxfmt
- Tailwind plugin - оптимізації з використанням інструментів VoidZero
- TresJS - перехід на tsdown
- Множинні проєкти тестують Oxfmt як заміну Prettier

**Стратегічне значення:**

Оновлення демонструє стратегію VoidZero:

- Побудова повного стеку інструментів на Rust
- Фокус на продуктивності без компромісів
- Збереження сумісності з існуючими екосистемами
- Активне впровадження у великих проєктах

Ці оновлення позиціонують VoidZero як серйозного конкурента традиційним JavaScript-based інструментам, пропонуючи значні покращення швидкості завдяки нативним реалізаціям на Rust.

### ✅ 2025 In Review: What's New In Web Performance?

**Джерело:** [2025 In Review: What's New In Web Performance?](https://www.debugbear.com/blog/2025-in-web-performance)

**Основна ідея:** Огляд найважливіших змін у веб-перформансі за 2025 рік: кросбраузерна підтримка Core Web Vitals, покращення інструментів, нові API та поступове зростання швидкості сайтів.

2025 рік став знаковим для веб-перформансу з точки зору стандартизації метрик, покращення інструментів розробника та зростаючого впровадження нових технологій. DebugBear підготував комплексний огляд 15 найважливіших змін року.

**1. ⭐ Кросбраузерна підтримка Core Web Vitals:**

Революційний крок для індустрії - Core Web Vitals більше не є метриками лише для Chrome:

- **Firefox 144** (жовтень 2025) - повна підтримка Interaction to Next Paint (INP)
- **Safari Technology Preview** - робоча імплементація INP та LCP
- **Interop 2025** - спільний проєкт для стандартизації метрик
- Cumulative Layout Shift поки не включений, але є пропозиція для Interop 2026

**2. Insights audits в Lighthouse:**

Google об'єднав два двигуни аналізу перформансу:

- Insights з DevTools Performance tab тепер доступні в Lighthouse
- Уніфікований код для ідентифікації проблем у обох інструментах
- **LCP Request Discovery audit** - новий аудит для аналізу завантаження LCP елементів
- Синхронізація рекомендацій між DevTools і PageSpeed Insights

**3. ⭐ Scheduler API у Firefox:**

Розширення підтримки Scheduler API для кращого контролю CPU:

- `scheduler.yield()` - простий спосіб розбивати довгі задачі
- Firefox додав підтримку у серпні 2025
- Chrome підтримує з 2024
- Safari поки без підтримки

**4. Нові безкоштовні інструменти:**

DebugBear розширив набір безкоштовних інструментів:

- **Global TTFB Test** - перевірка часу відповіді сервера по всьому світу
- **HTML Size Analyzer** - повністю перероблений аналізатор розміру HTML
- **HAR File Analyzer** - візуалізація HAR файлів у вигляді waterfall
- **NoScript Test** - перевірка роботи сайту без JavaScript

**5. DevTools MCP та AI функції:**

Google запустив інтеграцію AI в інструменти розробника:

- **Model Context Protocol (MCP) server** - контроль Chrome через AI
- Автоматичні локальні зміни коду та ре-тестування
- AI анотації для задач у Performance panel
- Аналіз повільних задач через LLM

**6. LCP subparts у Chrome UX Report:**

Детальніша аналітика для Largest Contentful Paint:

- CrUX тепер публікує дані по компонентах LCP з лютого 2025
- Розбивка: TTFB, resource load time, element render delay
- Доступно через CrUX Vis та DebugBear website speed test
- Дані лише для випадків, коли LCP елемент - зображення

**7. Перформанс у реальному світі:**

Найцікавіша стаття року:

- **Supermarket self-checkout latency analysis** - аналіз затримок інтерфейсів самообслуговування
- Вимірювання interaction times у різних супермаркетах
- Lidl показав екстраординарну швидкість

**8. ⭐ Позитивні ознаки для JPEG XL:**

Новий формат зображень отримує підтримку:

- **Safari** підтримує з вересня 2023
- **Firefox** змінив позицію у вересні 2024, планує Rust-based decoder
- **Chrome** більше не проти (листопад 2025), але активних планів імплементації немає
- Переваги: менші файли, швидше кодування, progressive decoding, lossless recompression

**9. ⭐ Throttling окремих запитів у Chrome:**

Нова можливість DevTools:

- Throttling тепер можна застосовувати до конкретних запитів
- Доступно в Chrome Canary
- Stable реліз у січні 2026

**10. Новий origin trial для soft navigations:**

Другий виток експерименту з soft navigations:

- Серпень 2025 - новий origin trial
- Детектування soft navigations у SPA
- Вимірювання load times для кожної soft navigation
- Спостереження за DOM модифікаціями у відповідь на взаємодії

**11. Поступове покращення Core Web Vitals scores:**

Статистика з HTTP Archive CrUX Report (жовтень 2025):

- **Desktop**: 57.1% сайтів проходять CWV (+1.8% за рік)
- **Mobile**: 49.7% сайтів проходять CWV (+3.0% за рік)
- Стабільне зростання протягом останніх років

**12. Покращений моніторинг сайтів:**

DebugBear покращив свій продукт:

- Проактивне виявлення проблем
- Нові дашборди з overview швидкості
- Візуалізація Long Animation Frames
- Breakdown скриптів з favicon та поясненнями

**13. Зміни у вимірюванні TTFB, LCP та INP:**

Уточнення метрик для точніших вимірів:

- **TTFB та early hints** - Chrome тепер враховує early hints (лютий 2025)
- **LCP та cross-origin images** - точніше вимірювання без Timing-Allow-Origin
- **INP та text highlighting** - виключення scrolling-triggered highlighting
- **Separate paint and presentation time** - розділення paintTime та presentationTime

**14. Зростання впровадження speculation rules:**

Масове впровадження speculation rules:

- **Shopify** (червень 2025) - значні покращення LCP
- **WordPress** (2025) - platform-wide adoption
- **Safari** - робоча імплементація (не ввімкнена за замовчуванням)
- **Firefox** - працює над прототипом

**15. Нові widely available browser APIs:**

Baseline проєкт відстежує доступність APIs:

- **Вересень 2025** - measuring resources size, server timings стали baseline
- **2025 baseline**: container queries, CompressionStream API, MathML rendering

**Погляд у 2026:**

Очікування на наступний рік:

- Покращений throttling simulation для Lighthouse
- AVIF стане baseline у липні 2026
- fetchpriority стане baseline у квітні 2027
- Compression Dictionaries - Firefox активно працює над підтримкою
- LCP та INP у Safari - критично важливо для повної картини перформансу

Рік продемонстрував перехід від Chrome-only метрик до справжніх веб-стандартів, покращення інструментів розробника та зростаючу увагу до реального користувацького досвіду.

### ✅ Fast by Default

**Джерело:** [Fast by Default](https://fastbydefault.com/)

**Основна ідея:** Fast by Default - це модель розробки ПЗ від Den Odell, де перформанс є першочерговою вимогою, що формує рішення в архітектурі, коді, тестуванні та звичках команди.

Fast by Default - це не інструмент чи фреймворк, а дисциплінований підхід до розробки програмного забезпечення, де швидкість і responsiveness виникають природно з щоденної роботи, замість того щоб впроваджуватись у panic mode після скарг користувачів.

**Проблема Performance Decay Cycle:**

Більшість команд потрапляють у передбачуваний цикл:

1. Shipping (випуск)
2. Complaining (скарги користувачів)
3. Panicking (паніка)
4. Patching (латання)
5. Повторення циклу

Fast by Default розриває цей цикл, роблячи перформанс природною частиною процесу розробки.

**Система Fast by Default коли:**

Система вважається Fast by Default, якщо:

1. **Архітектура** залишає простір для швидкості, уникаючи design patterns, які неминуче будуть повільними
2. **Розробники** бачать вплив своєї роботи на перформанс під час написання коду, а не тижні після релізу
3. **Автоматизовані бюджети** ловлять сповільнення до production
4. **Рішення** базуються на даних реальних користувачів
5. **Вся команда** розділяє відповідальність за швидкість

**Сім принципів Fast by Default:**

**I. Design for Speed Before You Write Code**

- Розглядайте перформанс як вимогу з самого початку
- Плануйте під час архітектури, а не виправляйте пізніше

**II. Make Performance Visible During Development**

- Надайте розробникам інструменти, що показують вплив змін
- Виявляйте повільні операції під час написання коду

**III. Protect the Experience with Clear Budgets**

- Встановлюйте чіткі ліміти: response times, payload sizes, startup costs
- Автоматично enforc'те ці ліміти

**IV. Optimise Complete User Flows**

- Тестуйте повні journey, а не ізольовані екрани
- Включайте transitions та моменти між діями

**V. Use Real-World Data to Guide Decisions**

- Трекайте що реально відбувається у production
- Відстежуйте response times, errors на реальних пристроях

**VI. Treat Performance as a Shared Responsibility**

- Швидкість створює вся команда разом
- Backend, frontend, mobile, design, QA, infrastructure - усі мають роль

**VII. Prevent Decay Through Regular Cleanup and Review**

- Перформанс має тенденцію погіршуватись з часом
- Виділяйте час на review dependencies, видалення unused коду

**Fast by Default Cycle:**

Модель використовує повторюваний цикл:

1. **Measure** - зрозумійте реальний досвід користувачів
2. **Build** - проектуйте системи, що добре працюють в реальних умовах
3. **Own** - перевіряйте перформанс через automated tests, budgets, tools
4. **Maintain and Refine** - спостерігайте за реальними користувачами, вчіться

**П'ять практичних кроків:**

**Architect:**

- Починайте з design, що залишає простір для швидкості
- Тримайте dependencies простими
- Думайте про caching рано
- Уникайте структур, що неминуче будуть повільними

**Implement:**

- Пишіть код з performance feedback поруч
- Бачте коли щось повільне під час розробки

**Verify:**

- Перевіряйте перформанс автоматично в build process
- Використовуйте budgets і tests
- Ловіть сповільнення до production

**Observe:**

- Вимірюйте реальний досвід користувачів
- Трекайте response times, errors, slow operations
- Різні пристрої та локації

**Refine:**

- Беріть insights з реального usage
- Вносьте зміни в designs та код
- Виправляйте проблеми, що мають значення
- Видаляйте непотрібну складність

**Fast by Default Checklist:**

Модель включає детальний чеклист для різних етапів:

**Architecture:**

- Видаляйте непотрібні round trips
- Тримайте critical-path роботу shallow
- Плануйте caching, preloading рано

**Development:**

- Показуйте long tasks під час coding
- Показуйте resource costs, response times
- Використовуйте profiling для раннього виявлення регресій

**Code Review:**

- Перевіряйте на непотрібну роботу при ініціалізації
- Шукайте нові blocking operations
- Підтверджуйте дотримання budgets

**CI and Budgets:**

- Визначайте budgets для payload size, latency, startup time
- Enforce автоматично
- Fail builds що сповільнюють метрики

**Testing:**

- Тестуйте complete flows
- Симулюйте реальні пристрої, мережі, регіони
- Тестуйте interactions, не лише load times

**Observability:**

- Трекайте response times, throughput, error rates
- Інструментуйте найважливіші user flows
- Алертуйте на user-visible проблеми

**Team Habits:**

- Включайте performance goals у планування
- Запускайте scheduled cleanup cycles
- Тримайте dependencies healthy
- Ділить ownership across команди

**Самоперевірка для команди:**

П'ять питань для оцінки:

1. Чи ловите performance проблеми під час розробки?
2. Чи визначені та enforced performance budgets автоматично у CI?
3. Чи використовуєте real user data для пріоритизації виправлень?
4. Чи бачать розробники performance impact своїх змін?
5. Чи проводите regular cleanup cycle?

Якщо "ні" більше ніж на два питання - команда ймовірно у performance decay cycle.

Fast by Default пропонує вихід, роблячи перформанс частиною everyday work замість emergency work.

## CSS

### ✅ scrollbar-gutter - недоліки властивості

**Джерело:** [scrollbar-gutter](https://css-tricks.com/scrollbar-gutter/)

**Основна ідея:** CSS властивість scrollbar-gutter дозволяє резервувати простір для scrollbar gutter, запобігаючи reflow контенту та забезпечуючи консистентний UX незалежно від типу scrollbar.

Властивість `scrollbar-gutter` надає гнучкість у визначенні того, як браузер використовує простір для відображення scrollbar, що взаємодіє з контентом на екрані. Специфікація описує це як "reserving space for the scrollbar" - резервування простору для scrollbar.

**Проблема, яку вирішує:**

Історично існувало два типи scrollbar:

- **Classic scrollbars** - традиційні візуальні контейнери з sliding indicator, які займають фізичний простір на екрані
- **Overlay scrollbars** - мінімалістичні, частково або повністю прозорі, розташовані поверх контенту

Різниця між ними створювала проблеми:

1. Контент міг reflow в залежності від наявності scrollbar
2. Непослідовний UX для користувачів з різними типами scrollbar

**Синтаксис:**

```css
.my-element {
  scrollbar-gutter: auto | stable && both-edges?;
}
```

**Значення властивості:**

**`auto` (initial value):**

- Default поведінка
- Classic scrollbars споживають реальний простір у UI
- Застосовується коли `overflow: scroll` або `overflow: auto`
- Overlay scrollbars не займають простір взагалі

**`stable`:**

- Додає opinionated поведінку
- Завжди резервує простір для scrollbar gutter
- Працює коли `overflow: scroll` або `overflow: auto`
- Діє лише для classic scrollbars
- Резервує простір навіть коли box не overflowing
- Не впливає на overlay scrollbars

**`both-edges` (опціональний модифікатор):**

- Може комбінуватися з `stable`
- Резервує простір з обох сторін елемента

**Таблиця поведінки з специфікації:**

| Overflow         | Scrollbar Type      | Space Reserved |
| ---------------- | ------------------- | -------------- |
| `scroll`, `auto` | Classic, not forced | yes (G)        |
| `scroll`, `auto` | Overlay, not forced | yes (G)        |
| `scroll`, `auto` | Classic, forced     | yes (G)        |
| `scroll`, `auto` | Overlay, forced     | yes (G)        |
| `hidden`, `clip` | Classic, not forced | no             |
| `hidden`, `clip` | Overlay, not forced | no             |

"G" - випадки де резервується простір для gutter

**Практичне використання:**

```css
body {
  scrollbar-gutter: stable both-edges;
}
```

Цей код:

- Запобігає content reflow при появі scrollbar
- Забезпечує консистентний layout
- Створює симетричний spacing з обох сторін

**Специфікація:**

Властивість визначена у [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#scollbar-gutter-property):

- Статус: Working Draft
- Означає що це ще work in progress
- Може змінитись до Candidate Recommendation
- Overflow Module Level 3 також у Working Draft

**Браузерна підтримка:**

На момент написання статті підтримка обмежена, властивість знаходиться у процесі імплементації у різних браузерах.

**Пов'язані властивості:**

- `overflow` - базова властивість для контролю переповнення
- `scrollbar-width` - контроль ширини scrollbar
- `scrollbar-color` - кастомізація кольору scrollbar
- `scrollbar` - shorthand для scrollbar стилізації

**Переваги використання:**

1. **Prevents Layout Shift**: Контент не "стрибає" при появі scrollbar
2. **Consistent Experience**: Однаковий UX для всіх користувачів
3. **Predictable Layout**: Більш передбачуваний layout для дизайнерів
4. **Better UX**: Покращений користувацький досвід

**Недоліки та обмеження:**

1. **Limited Browser Support**: На момент 2025 року підтримка ще обмежена
2. **Working Draft Status**: Специфікація може змінитись
3. **No Control Over Width**: Неможливо контролювати ширину gutter (визначається UA)
4. **Overlay Scrollbars**: Обмежений вплив на overlay scrollbars

**Коли використовувати:**

- Коли важливо запобігти content shifting
- Для створення більш стабільного layout
- У додатках де scrollbar може з'являтись/зникати динамічно
- Для забезпечення консистентного spacing

Властивість `scrollbar-gutter` є частиною еволюції CSS у напрямку більшого контролю над scrollbar поведінкою та покращення загального користувацького досвіду веб-застосунків.

## JavaScript

### ✅ AdventJS 2025 - Різдвяні челенджі з коду

**Джерело:** [AdventJS](https://adventjs.dev/)

**Основна ідея:** AdventJS - щорічний адвент-календар з програмістськими челенджами для JavaScript, TypeScript та Python від Midudev, 24 задачі з 1 по 24 грудня.

AdventJS - це адаптація популярної традиції Advent календарів для світу програмування. Створений іспанським розробником Midudev, проєкт пропонує щоденні програмістські виклики протягом грудня, наслідуючи успіх Advent of Code, але з фокусом на JavaScript, TypeScript та Python.

**Концепція та історія:**

Традиція Advent календарів має католицьке коріння, де діти отримували шоколад щодня протягом 4 тижнів з 1 по 24 грудня. AdventJS адаптує цю традицію для розробників:

- **2015** - Advent of Code започаткував традицію програмістських челенджів
- **AdventJS** - фокусується на JavaScript/TypeScript/Python екосистемі
- **Щорічний формат** - нові челенджі кожного грудня

**Формат та структура:**

**Часові рамки:**

- 24 дні - з 1 по 24 грудня
- Один новий челендж щодня
- Можна розв'язувати у будь-який час після публікації

**Підтримувані мови:**

- JavaScript
- TypeScript
- Python

**24 челенджі різної складності:**

- **EASY** (легкі) - Challenge 1, 2, 3, 5, 6, 8 та інші
- **MEDIUM** (середні) - Challenge 4, 7 та інші
- Челенджі розділені за тематикою (wreath, santa, snowman, deer, hat, ornament, house, cup, fireplace та інші)

**Система оцінювання:**

**Фактори оцінки:**

- **Cognitive complexity** - когнітивна складність рішення
- **Execution speed** - швидкість виконання
- **Кількість рядків НЕ є визначальним фактором**

**Правила сабмітів:**

- Можна надсилати стільки рішень, скільки хочете
- Зберігається ваш найкращий результат
- Змагайтеся за вищий score

**Secret tests:**

Система включає приховані тести:

- **Мета**: Запобігти рішенням, що просто повертають очікувані результати тестів
- **Випадковий порядок**: Secret tests виконуються у випадковому порядку
- **Валідність рішення**: Рішення має бути валідним для всіх можливих випадків проблеми
- Якщо fail secret test - рішення не є універсальним

**Санкції за порушення:**

Рішення можуть бути видалені якщо:

- Базуються на повертанні результатів тестів замість реального розв'язання
- Не є валідними для всіх випадків проблеми
- Можете втратити зірки або score на челендж

**Безкоштовність та підтримка:**

**Повністю безкоштовно:**

- Грати у AdventJS цілком безплатно
- Доступ до всіх 24 челенджів
- Без прихованих платежів

**Як підтримати проєкт:**

- Поділитись у соціальних мережах
- Розказати друзям
- Допомагати іншим у Discord
- Приєднуватись до Twitch streams на каналі Midudev

**Код проєкту:**

- Source code не є публічно доступним

**Leaderboard та змагання:**

- Таблиця лідерів для змагання
- Потрібен sign in для участі у конкурсі
- Hi-score система
- Можливість порівняти свої результати з іншими

**Бонус - XMAS Snake Game:**

Платформа включає гру XMAS Snake:

- Використовуйте arrow keys для керування
- Різдвяна тематика
- Додаткова розвага між челенджами

**Спільнота та ресурси:**

**Соціальні мережі Midudev:**

- X (Twitter): @midudev
- Twitch: midu.live
- Instagram: midu.dev
- YouTube: midu.tube
- Facebook: midudev.frontend
- TikTok: @midudev
- LinkedIn: midudev

**Додаткові ресурси:**

- JScamp.dev - bootcamp від Midudev
- midu.dev - Academy
- GitHub issues - для пропозицій та feedback

**Освітня цінність:**

AdventJS надає:

- Практику алгоритмічного мислення
- Покращення навичок JavaScript/TypeScript/Python
- Досвід оптимізації коду
- Змагальний елемент для мотивації
- Щоденну практику протягом місяця

**Різдвяна атмосфера:**

Кожен челендж оформлений у різдвяній тематиці:

- Стікери з різдвяними персонажами
- Тематичні іконки (ялинка, Санта, сніговик, олень, шапка, прикраси)
- Святкова атмосфера для навчання

AdventJS став популярною традицією у іспаномовній розробницькій спільноті і продовжує залучати тисячі розробників щороку для покращення своїх навичок у святковій атмосфері.

### ✅ Method Shorthand Syntax Considered Harmful

**Джерело:** [Method Shorthand Syntax Considered Harmful](https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful)

**Основна ідея:** Method shorthand syntax в TypeScript може призводити до runtime помилок через bivariance, краще використовувати object property syntax для безпечнішого коду.

Matt Pocock, відомий TypeScript експерт, розкриває небезпечну особливість TypeScript, яка може призвести до runtime помилок, що TypeScript не виявить. Це стосується двох способів анотації функцій на об'єктах.

**Два синтаксиси:**

```typescript
interface Obj {
  // Method shorthand syntax
  version1(param: string): void;
  // Object property syntax
  version2: (param: string) => void;
}
```

На перший погляд різниця здається косметичною, але насправді вона має глибокі наслідки для type safety.

**Чому Method Shorthand Syntax небезпечний:**

**Проблема з bivariance:**

Method shorthand syntax дозволяє параметри бути bivariant - приймати типи як вужчі, так і ширші за оригінальний тип. Це створює можливість для runtime помилок.

**Практичний приклад:**

```typescript
interface Dog {
  barkAt(dog: Dog): void;
}

interface SmallDog extends Dog {
  whimper: () => void;
}

const brian: Dog = {
  barkAt(smallDog: SmallDog) {
    smallDog.whimper(); // Викликаємо метод, що існує лише у SmallDog
  },
};

const normalDog: Dog = {
  barkAt() {},
};

brian.barkAt(normalDog); // Runtime error! normalDog не має whimper()
```

**Що відбувається:**

1. `brian` типізований як `Dog`, але його `barkAt` приймає `SmallDog` (вужчий тип)
2. TypeScript **не кидає помилку** при такому звуженні
3. Всередині `barkAt` викликається `smallDog.whimper()`
4. Коли передаємо `normalDog` (який є валідним `Dog`), відбувається runtime помилка
5. TypeScript не зміг запобігти runtime помилці

**Правильне рішення:**

**Object Property Syntax:**

```typescript
interface Dog {
  // Змінюємо на object property syntax
  barkAt: (dog: Dog) => void;
}

interface SmallDog extends Dog {
  whimper: () => void;
}

const brian: Dog = {
  // Тепер TypeScript кидає помилку!
  barkAt(dog: SmallDog) {}, // ERROR: Type '(dog: SmallDog) => void' is not assignable...
};
```

З object property syntax TypeScript правильно виявляє несумісність типів і кидає compile-time помилку, запобігаючи runtime проблемі.

**Розвінчування міфів:**

**Це НЕ про arrow functions:**

Поширена помилка - думати що різниця у arrow functions vs function declarations:

```typescript
interface Obj {
  methodShorthand(param: string): void;
  objectProperty: (param: string) => void;
}

function functionDeclaration(param: string) {}
const arrowFunction = (param: string) => {};

// Обидва синтаксиси можуть використовувати обидва типи функцій
const examples: Obj[] = [
  {
    methodShorthand: arrowFunction,
    objectProperty: functionDeclaration,
  },
  {
    methodShorthand: functionDeclaration,
    objectProperty: arrowFunction,
  },
];
```

Синтаксис не обмежує використання arrow functions або function declarations.

**Працює з type, не лише interface:**

Проблема стосується і `type`, не лише `interface`:

```typescript
type Dog = {
  barkAt(dog: Dog): void;
};

type SmallDog = {
  whimper: () => void;
} & Dog;

const brian: Dog = {
  barkAt(smallDog: SmallDog) {
    smallDog.whimper();
  },
};

const normalDog: Dog = {
  barkAt() {},
};

brian.barkAt(normalDog); // Runtime error!
```

**Причина існування:**

**Bivariance за задумом:**

Method shorthand syntax є bivariant за design. Це означає:

- Метод може приймати типи вужчі ніж оригінальний
- Метод може приймати типи ширші ніж оригінальний

Object property syntax:

- Приймає лише типи вужчі ніж оригінальний (contravariant)
- Це очікувана поведінка для функцій

**Рідкісні use cases:**

Іноді bivariance потрібна для специфічних сценаріїв. Michael Arnaldi з EffectTS team [пояснював такі випадки](https://twitter.com/MichaelArnaldi/status/1753759092558929957), хоча вони рідкісні.

**ESLint Rule для захисту:**

**@typescript-eslint/method-signature-style:**

```json
{
  "rules": {
    "@typescript-eslint/method-signature-style": ["error", "property"]
  }
}
```

Це правило:

- Enforce використання object property syntax
- Показує помилку: "Shorthand method signature is forbidden. Use a function property instead."
- Запобігає bivariance проблемам на рівні linting

**Коли побачите помилку:**

Якщо ваш проєкт має цю ESLint rule і ви бачите:

> "Shorthand method signature is forbidden. Use a function property instead."

Це означає що хтось розумний у команді налаштував захист від цієї проблеми.

**Рекомендації:**

1. **Уникайте method shorthand syntax** в interfaces та types
2. **Використовуйте object property syntax**: `methodName: (params) => returnType`
3. **Налаштуйте ESLint rule** для автоматичного виявлення
4. **Поширюйте знання** у команді про цю проблему
5. **Code review** - звертайте увагу на цей паттерн

**Висновок:**

Method shorthand syntax здається зручним, але несе ризик runtime помилок через bivariant поведінку. Object property syntax забезпечує type safety і має бути preferred choice для method definitions в TypeScript interfaces та types.

Ця стаття Мета Покока стала важливою для TypeScript спільноти, оскільки виявляє subtle але потенційно небезпечну особливість мови, яку багато розробників могли не помічати.
