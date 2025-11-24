# Резюме статей для епізоду 0

## Веброзробка

### ✅ Принципи програмування для фронтендерів-самоучок

**Джерело:** [Programming principles for self taught front-end developers](https://piccalil.li/blog/programming-principles-for-self-taught-front-end-developers/)

Стаття розглядає ключові принципи програмування, які допомагають самоучкам-фронтендерам писати чистіший код. Автор пояснює, як перейти від абстрактних порад до практичних навичок.

**Основні принципи:**
- **Правило трьох**: рефакторити код треба лише після третього повторення, щоб зрозуміти справжню потребу в узагальненні
- **"Зроби робочим, зроби правильним, зроби швидким"**: фокусуйся спочатку на функціональності, потім на коректності, і тільки після цього на оптимізації
- **Ідемпотентність**: функція завжди повертає той самий результат при однакових аргументах
- **Принцип єдиної відповідальності**: кожна функція/модуль має одну причину для змін
- **Один рівень абстракції**: весь код у функції має бути на одному рівні деталізації

Автор наголошує, що ці принципи допомагають уникати передчасної оптимізації та надмірного проектування, роблячи код більш читабельним і підтримуваним.

---

### ✅ Чому заголовки важливі в HTML: структура, доступність та SEO

**Джерело:** [Why Headings Are Important in HTML: Structure, Accessibility, and SEO](https://www.sitepoint.com/headings-in-html-structure/)

Стаття пояснює критичне значення правильного використання HTML-заголовків (`<h1>` - `<h6>`) для структури сторінки, доступності та SEO.

**Ключові моменти:**
- **Семантика, а не стиль**: заголовки визначають ієрархію контенту, а не зовнішній вигляд. Стилі задаються через CSS
- **Структура як в книзі**: один `<h1>` (заголовок сторінки), `<h2>` для основних розділів, `<h3>` для підрозділів тощо
- **Доступність**: користувачі скрінрідерів використовують заголовки для швидкої навігації сторінкою та розуміння її структури
- **SEO**: пошукові системи аналізують заголовки для побудови схеми сторінки та визначення релевантності контенту
- **Правило одного H1**: технічно HTML5 дозволяє кілька `<h1>`, але це може плутати допоміжні технології

Автор наголошує: обирайте рівень заголовка на основі структури контенту, а не бажаного розміру шрифту.

---

### ✅ Perfecting Baseline

**Джерело:** [Perfecting Baseline](https://piccalil.li/blog/perfecting-baseline/)

Стаття Patrick Brosset з команди WebDX розглядає Baseline — новий стандарт для визначення підтримки веб-функцій браузерами, його переваги та обмеження.

Web Platform Baseline brings clarity to information about browser support for web platform features.

**Що таке Baseline:**
- **Три стани**: Not Baseline (функція не підтримується всіма основними браузерами), Newly Available (підтримується в останніх версіях), Widely Available (підтримується 2.5+ років)
- **Базові браузери**: Chrome, Safari (macOS/iOS), Firefox, Edge
- **Мета**: швидка оцінка доступності функції без детального аналізу таблиць сумісності

**Обмеження Baseline:**
- Не враховує всі браузери (наприклад, старіші версії або регіональні браузери)
- Не показує проблеми з доступністю
- Не радить щодо прогресивного покращення або поліфілів

**Покращення що готуються:**
- **Accessibility Compat Data**: інтеграція даних про доступність від Lola Odelola
- **Поліфіли та best practices**: мапінг функцій на рішення для сумісності
- **Розширення браузерів**: підтримка більше браузерів через baseline-browser-mapping та browserslist-config-baseline

**Як використовувати:**
- Widely Available → можна використовувати зараз, перевіривши MDN для деталей
- Newly Available → час дізнатися про функцію, можлива підготовка з фолбеками
- Not Baseline → не ігнорувати, відстежувати нові функції для майбутнього використання
- Baseline year feature sets, for example Baseline 2020, include all features that were Newly available at the end of the specified year.

Baseline — це відправна точка для прийняття рішень, а не остаточна відповідь про можливість використання функції.

---

### ✅ Browserslist & Baseline

**Джерело:** [Browserslist & Baseline](https://frontendmasters.com/blog/browserslist-baseline/)

Стаття Chris Coyier порівнює традиційний Browserslist з новим підходом Baseline для визначення підтримки браузерів.

**Browserslist — це:**
- Спільний конфіг для інструментів (Autoprefixer, Babel, ESLint, Webpack, Lightning CSS)
- Рекомендований стандарт: `"defaults"` = `"> 0.5%, last 2 versions, Firefox ESR, not dead"`
- Підтримка множини браузерів через єдиний `.browserslist` файл

**Baseline конфігурації:**
- `"baseline newly available"` — функції доступні в останніх версіях браузерів
- `"baseline widely available"` — функції доступні 30+ місяців
- `"baseline 2022"` (та інші роки) — функції, що стали новими в кінці зазначеного року

**Практичне порівняння:**
Автор демонструє як Lightning CSS трансформує код залежно від таргета:
- `"baseline 2018"`: `padding-inline-start` → купа `padding-left`/`right` з `:lang()`
- `"baseline 2022"`: `oklch()` → залишається, `light-dark()` → трансформується
- `"baseline widely available"`: мінімальні трансформації для максимальної сумісності

**Рекомендація:** Битва між `"defaults"` та `"baseline widely available"` — автор схиляється до другого як більш сучасного і прогресивного.

Найкращий підхід — використовувати власну аналітику для визначення цільових браузерів через Baseline Target Report.

---

### ✅ Жовтневий дайджест оновлень в Baseline

**Джерело:** [October 2025 Baseline monthly digest](https://web.dev/blog/baseline-digest-oct-2025)

Місячний огляд важливих подій навколо Baseline за жовтень 2025 від Jeremy Wagner.

**Регресія top-level `await`:**
Виявлено проблему з реалізацією в Safari — функція відкотилася з "Widely available" до "Limited availability". Це впливає на розробників, які покладаються на цю можливість для асинхронного завантаження модулів.

**Нові Baseline Newly available:**
- **Same-document view transitions** — великий момент для веб-розробників, більше View Transitions API стає інтероперабельним
- **WebRTC encoded transform** — для роботи з WebRTC потоками

**Нові Baseline Widely available (30+ місяців):**
- HTML `inert` атрибут
- Canvas `roundRect()` метод
- Canvas `createConicGradient()` метод

**Baseline Hackathon завершився:**
- 3000 учасників, сотні проектів
- $10,000 призовий фонд
- Обрано трьох переможців з корисними інструментами для Baseline

**Windsurf IDE тепер підтримує Baseline:**
З версії 1.100 Windsurf показує інформацію про сумісність Baseline при наведенні на HTML та CSS функції — вбудовано, без додаткових пакетів.

**Baseline бот для Discord "Web dev and web design":**
Спільнота розробила бота для швидкого перегляду статусу Baseline будь-якої веб-функції прямо в чаті.

---

### ✅ Організація файлів Figma для MVP та кодогенерації на основі ШІ

**Джерело:** [How to structure Figma files for MCP and AI-powered code generation](https://blog.logrocket.com/ux-design/design-to-code-with-figma-mcp/)

Стаття Chinwike Maduabuchi про нову еру передачі дизайну від дизайнера до AI-агента через Model Context Protocol (MCP).

**Що таке MCP для Figma:**
- Відкритий протокол для надання AI структурованого доступу до даних Figma
- Два підходи: офіційний Figma MCP Server (бета, потребує Dev Seat) та Framelink Figma MCP (безкоштовний, open-source)

**Порівняння серверів:**
- **Офіційний**: більше AI-інструментів (5 tools, 18 prompt resources), Code Connect для мапінгу компонентів, сильна інтеграція з Figma Variables
- **Framelink**: менше інструментів (`get_figma_data`, `download_figma_images`), працює з будь-яким Figma токеном, без Code Connect

**Основи дизайну для AI:**
- **Variables та design tokens**: примітиви для кольорів, відступів, типографіки; семантичні токени як Tailwind класи
- **Auto layout**: аналог CSS Flexbox/Grid — забезпечує гнучкі адаптивні макети
- **Components та variants**: переконайтесь що назви зрозумілі та логічні (Default, Full-width, Loading)
- **Чисті назви шарів**: використовуйте плагіни як Rename It для впорядкування

**Налаштування MCP сервера:**
```
// У Cursor додати Figma MCP (офіційний)
"Figma": { "url": "https://mcp.figma.com/mcp" }

// Або Framelink
"Framelink MCP for Figma": {
  "command": "npx", 
  "args": ["-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY"]
}
```

**Результат:**
Автор демонструє як AI-агент згенерував повноцінну React-сторінку реєстрації з першої спроби, майже pixel-perfect, використовуючи експортовані variables та дизайн-систему.

**Поради для кращих результатів:**
- Додавайте анотації в Figma про поведінку елементів
- Використовуйте Code Connect для зв'язку Figma компонентів з реальним кодом
- Обирайте правильну модель AI (Claude 4.5 дає кращі результати)

MCP знаменує перехід від статичної передачі дизайну до інтелектуальних робочих процесів дизайн-до-коду.

---

### ✅ View Transitions API: плавні анімації між станами DOM

**Джерело:** [View Transitions API: Smooth animations between DOM states](https://www.trevorlasn.com/blog/view-transitions-api)

Trevor Lasn пояснює як View Transitions API дозволяє створювати плавні анімації між різними станами DOM без складних бібліотек анімації.

**Основна ідея:**
API автоматично обробляє анімації: ви вказуєте коли DOM змінюється, браузер захоплює стан до/після та анімує між ними.

**Як це працює:**
1. Браузер робить скріншот поточної сторінки
2. Виконується колбек що оновлює DOM
3. Браузер робить новий скріншот та анімує між ними

```javascript
document.startViewTransition(() => {
  updateTheDOMSomehow();
});
```

**Базові приклади:**
- За замовчуванням — cross-fade
- Для мульти-сторінкових додатків: `@view-transition { navigation: auto; }`

**Кастомні анімації через CSS:**
```css
.thumbnail { view-transition-name: product-image; }
.fullscreen { view-transition-name: product-image; }
```
Браузер морфує елементи з однаковим `view-transition-name`.

**Керування через псевдо-елементи:**
- `::view-transition` — кореневий overlay
- `::view-transition-old()` — старий стан
- `::view-transition-new()` — новий стан

**Performance:**
- Анімації швидкі завдяки GPU
- Браузер обмежує час анімації (max ~1 секунда)
- Не блокує main thread

**Підтримка браузерів:**
- Same-document transitions: Chrome 111+, Firefox 144+, Safari 18+
- Cross-document transitions: Chrome 126+, Safari 18.2+, Firefox не підтримує

API стабільний і готовий до production. Degradation graceful — якщо браузер не підтримує, DOM все одно оновлюється, просто без анімації.

---

### ✅ Невидимий трекінг у браузері (CSS)

**Джерело:** [Невидимий трекінг у браузері: як зловживають каскадними таблицями стилів (CSS)](https://hackyourmom.com/kibervijna/nevydymyj-treking-u-brauzeri-yak-zlovzhyvayut-kaskadnymy-tablyczyamy-styliv-css/)

Детальний розбір методів зловживання CSS для обходу фільтрів та відстеження користувачів.

**Методи приховування контенту:**
- **text-indent: -9999px** — текст переміщується за межі видимої області
- **font-size: 0.001px** — текст стає практично невидимим
- **opacity: 0** — повна прозорість елемента
- **color: transparent** + співпадання з фоном
- **clip / clip-path** — обрізання видимої області елемента
- **position: absolute** + переміщення за екран

**Приклади атак:**
1. **Email phishing з прихованою "сіллю"**: До тіла листа додають невидимі рандомні символи між справжніми словами, що заважає спам-фільтрам розпізнати шаблони
2. **Прихований текст прехедера**: Використання opacity: 0 та color для додавання невидимого нешкідливого тексту в заголовок листа
3. **HTML контрабанда**: Вкладення HTML з прихованими німецькими фразами для обходу систем виявлення

**Методи відстеження:**
- **Відстеження колірної схеми**: різні URL для light/dark режимів через CSS media queries
- **Відстеження друку**: особливий URL спрацьовує при спробі надрукувати лист
- **Fingerprinting ОС**: визначення системи за доступними шрифтами (Segoe UI → Windows, Helvetica Neue → macOS)
- **Відстеження поштового клієнта**: різні стилі для різних клієнтів
- **Media queries для дозволу екрану**: збір інформації про розмір та роздільність
- **Піксель відстеження**: збір IP-адреси та user-agent

**Захист:**
- Використання вдосконалених фільтрів для виявлення прихованого контенту
- Проксі-сервіси для email (переписування CSS, конвертація remote resources в data URLs)
- Використання AI-based систем детекції загроз
- Блокування зовнішніх ресурсів

Головний висновок: CSS перестав бути лише інструментом стилізації — він став вектором атак для обходу безпеки та відстеження користувачів.

---

## CSS

### ✅ CSS Gamepad API: візуальне налагодження

**Джерело:** [CSS Gamepad API Visual Debugging With CSS Layers](https://www.smashingmagazine.com/2025/11/css-gamepad-api-visual-debugging-css-layers/)

Godstime Aburu показує як створити візуальний дебагер для Gamepad API використовуючи CSS Cascade Layers.

**Проблема:**
- Gamepad API не має візуального зворотного зв'язку
- Немає інтеграції з DevTools
- Складно відстежувати 15+ кнопок та 4+ осі одночасно

**Рішення — Gamepad Cascade Debugger:**
Візуальний дебагер що показує стан контролера в реальному часі використовуючи:

**CSS Cascade Layers для організації:**
```css
@layer base, active, debug;

@layer base {
  .button { /* базові стилі */ }
}
@layer active {
  .button.pressed { background: #0f0; }
}
@layer debug {
  .button::after { content: attr(data-value); }
}
```

**JavaScript для оновлення:**
```javascript
function updateGamepad() {
  const gp = navigator.getGamepads()[0];
  btnA.classList.toggle("active", gp.buttons[0].pressed);
  // ... інші кнопки
  if (running) requestAnimationFrame(updateGamepad);
}
```

**Додаткові можливості:**
- **Запис і відтворення**: збереження сесії гри для аналізу
- **Експорт в JSON/CSV**: для тестування та документації
- **Snapshot система**: швидкі знімки стану контролера
- **Ghost replay**: відтворення записаних сесій як "привид"

**Use Cases:**
- Розробники ігор: запис комбо та відтворення
- Тестувальники: передача точних даних про баги
- Accessibility practitioners: аналіз adaptive controllers
- Навчальні відео: демонстрація управління

**Підтримка браузерів:**
- Chrome/Edge 93+, Firefox 91+, Safari 15+
- Graceful degradation — працює з feature detection

Open-source проект доступний на GitHub. Демонструє силу CSS Cascade Layers для створення складних UI систем дебагу без JavaScript бібліотек.

---

### ✅ Псевдокласи CSS :interest-invoker та :interest-target

**Джерело:** [CSS :interest-invoker and :interest-target Pseudo-Classes](https://www.trevorlasn.com/blog/css-interest-pseudo-classes)

Trevor Lasn представляє нові CSS псевдокласи що дозволяють стилізувати зв'язані UI елементи на основі інтересу користувача.

**Що це таке:**
Частина Open UI Interest Invokers proposal, нещодавно прийнята CSS Working Group (липень 2025). Дозволяє створювати інтерактивні UI без JavaScript.

**Як працює:**
```html
<button interestfor="tooltip-1">Hover me</button>
<div id="tooltip-1">Tooltip content</div>
```

```css
:interest-invoker { 
  background-color: lightblue; 
}
:interest-target { 
  opacity: 1;
  visibility: visible; 
}
```

**Два типи інтересу:**
- **partial**: користувач сфокусував елемент (наприклад, hover)
- **total**: повна активація (наприклад, click)

**Практичні приклади:**
1. **Connected Tooltips**: тултипи що з'являються при hover/focus без JS
2. **Navigation Highlighting**: підсвічування nav items при взаємодії з відповідними секціями
3. **Form Field Relationships**: показ helper text при фокусі на input
4. **Contextual Helpers**: зв'язані підказки та валідаційні повідомлення

**Підтримка браузерів:**
- Поки що немає жодної імплементації (proposal прийнято в липні 2025)
- Автор надає JavaScript симуляцію поведінки для демонстрації
- Детекція підтримки: `@supports selector(:interest-invoker) { }`

**Майбутні можливості:**
- `interest-delay-start` / `interest-delay-end` — CSS властивості для контролю тайміну
- Параметр `possible` для edge cases з focusability (відкладено)

Це значний крок до декларативних інтерактивних UI в CSS. Коли браузери почнуть імплементацію, розробники зможуть створювати складні інтерактивні компоненти без JavaScript.

---

## JavaScript

### ✅ Практичний посібник з Blobs, File API

**Джерело:** [A Practical Guide to Blobs, File APIs, and Memory Optimization](https://jsdev.space/howto/blob-file-handling-guide/)

Комплексний гайд від JSdev.space про ефективну роботу з файлами на фронтенді.

**1. Створення Blob об'єктів:**
```javascript
const createBlob = (parts, options = {}) => {
  return new Blob(parts, {
    type: options.type ?? 'text/plain',
    endings: options.endings ?? 'transparent'
  });
};
```
- Blob — легка обгортка навколо бінарних даних
- Браузер може стрімити та slicing без копіювання
- Завжди встановлюйте правильний MIME type

**2. Chunking великих файлів:**
```javascript
async function processFileInChunks(file, chunkSize = 1024 * 1024) {
  for (let i = 0; i < totalChunks; i++) {
    const chunk = file.slice(start, end);
    await readChunk(chunk, i);
  }
}
```
- Уникає завантаження всього файлу в пам'ять
- Ідеально для upload великих файлів (з прогресом)

**3. Стиснення зображень:**
```javascript
const compressImage = (file, { maxWidth, quality = 0.8 }) => {
  // Canvas draw → toBlob()
  canvas.toBlob(blob => resolve(blob), 'image/jpeg', quality);
};
```
- Зменшення розміру на 60-80%
- Підходить для аватарів та thumbnails

**4. Unified File Preview:**
Клас `FilePreviewer` що розпізнає тип (image/text/audio/video/pdf) та рендерить відповідний preview.

**5. Export/Download:**
```javascript
class DownloadService {
  downloadJson(data, fileName) {
    const blob = new Blob([JSON.stringify(data)]);
    this.triggerDownload(blob, fileName);
  }
}
```
- JSON, CSV експорт без дублювання даних
- BOM для UTF-8 сумісності з Excel

**6. Blob URL менеджмент:**
```javascript
class BlobUrlManager {
  createUrl(blob) {
    const url = URL.createObjectURL(blob);
    this.urls.set(url, { blob, createdAt: Date.now() });
    return url;
  }
  cleanupExpired() { /* автоматична очистка */ }
}
```
- Запобігає memory leaks
- Автоматична очистка expired URLs

**Коли використовувати Blobs:**
- Створення файлів на клієнті
- Стрімінг/chunking великих файлів
- Компресія та конвертація форматів
- Unified file preview
- Export великих датасетів

Blob + File API — основа для robust файл-хендлінгу на фронтенді.

---

### ✅ Ланцюжок помилок в JavaScript: Error.cause

**Джерело:** [Error chaining in JavaScript: cleaner debugging with Error.cause](https://allthingssmitty.com/2025/11/10/error-chaining-in-javascript-cleaner-debugging-with-error-cause/)

Matt Smith пояснює як використовувати `Error.cause` для збереження контексту при обробці помилок.

**Проблема традиційного підходу:**
```javascript
throw new Error('Something went wrong: ' + err.message);
// Втрата оригінального stack trace та типу помилки
```

**Рішення через Error.cause:**
```javascript
try {
  JSON.parse('{ bad json }');
} catch (err) {
  throw new Error('Failed to fetch user data', { cause: err });
}
```

**Переваги:**
- Збереження оригінального stack trace (`err.cause.stack`)
- Збереження типу помилки (`err.cause instanceof SyntaxError`)
- Чистий top-level message з деталями в `cause`

**Практичний приклад:**
```javascript
try {
  fetchUserData();
} catch (err) {
  console.error(err.message);        // "Failed to fetch user data"
  console.error(err.cause);          // [SyntaxError: ...]
  console.error(err.cause instanceof SyntaxError); // true
}
```

**З Custom Errors:**
```javascript
class DatabaseError extends Error {
  constructor(message, { cause } = {}) {
    super(message, { cause });
    this.name = 'DatabaseError';
  }
}
```

**Рекурсивний логер:**
```javascript
function logErrorChain(err, level = 0) {
  console.error(' '.repeat(level * 2) + `${err.name}: ${err.message}`);
  if (err.cause instanceof Error) {
    logErrorChain(err.cause, level + 1);
  }
}
```

**Підтримка:**
- Chrome 93+, Firefox 91+, Safari 15+
- Node.js 16.9+
- TypeScript: `"target": "es2022"`

**Важливо:**
- `console.error(err)` не показує `cause` автоматично — треба логувати вручну
- Не зловживайте — використовуйте де контекст дійсно важливий
- Не забувайте про graceful degradation

Error chaining робить debugging простішим, stack traces чистішими, а тести — надійнішими.

---

### ✅ Не діліть рядки навмання: Intl.Segmenter

**Джерело:** [Stop Splitting Strings the Wrong Way: Discover Intl.Segmenter](https://dev.giuseppeciullo.it/stop-splitting-strings-the-wrong-way-discover-intlsegmenter)

Giuseppe Ciullo показує як `Intl.Segmenter` розв'язує проблеми традиційного `.split()` при роботі з текстом.

**Проблема `.split(" ")`:**
```javascript
"I love pizza".split(" ");  // OK
"J'aime le café".split(" "); // Проблеми з апострофами
"私は寿司が好きです。".split(" "); // Немає пробілів!
```

**Рішення — Intl.Segmenter:**
```javascript
const segmenter = new Intl.Segmenter("en", { 
  granularity: "word" 
});

const words = [...segmenter.segment(text)]
  .filter(s => s.isWordLike)
  .map(s => s.segment);
```

**Три рівня granularity:**
- `grapheme` → символи (user-perceived symbols)
- `word` → слова з урахуванням правил мови
- `sentence` → речення з автоматичним виявленням пунктуації

**Приклад — одна фраза, три мови:**
```javascript
en: ['I', 'love', 'sushi']           // 3 слова
fr: ['J'aime', 'les', 'sushis']      // 3 слова
ja: ['私', 'は', '寿司', 'が', '好き', 'です'] // 6 слів
```

**Grapheme segmentation:**
```javascript
"Café résumé" → ["C","a","f","é"," ","r","é","s","u","m","é"]
// Кожен акцентований символ = один grapheme
```

**Практичне застосування — Word Counter:**
```javascript
function countWords(text, locale = "en") {
  const segmenter = new Intl.Segmenter(locale, { 
    granularity: "word" 
  });
  return [...segmenter.segment(text)]
    .filter(s => s.isWordLike)
    .length;
}
```

**Переваги:**
- Без regex
- Без бібліотек
- Повна locale-awareness
- Працює з будь-якою мовою

`Intl.Segmenter` дає JavaScript силу розуміти слова, речення та значення, а не просто символи.

---

### ✅ 15 поширених помилок useEffect

**Джерело:** [15 common useEffect mistakes to avoid in your React apps](https://blog.logrocket.com/15-common-useeffect-mistakes-react/)

Shruti Kapoor розбирає найчастіші помилки з `useEffect` що призводять до проблем у React додатках.

**Три питання перед useEffect:**
1. **Чи є зовнішня система?** (API, WebSocket, localStorage тощо)
2. **Хто тригерить?** (користувач → event handler, lifecycle → effect)
3. **Як обчислюється значення?** (з props/state → render, cleanup → effect)

**Категорія 1: Dependency mismanagement**
- Помилка 1: Відсутній масив залежностей → infinite loop
- Помилка 2: Читання stale state відразу після set
- Помилка 3: Забуті props в dependencies
- Помилка 4: Множинні useEffect з однаковими deps → об'єднати
- Помилка 5: Нестабільні об'єкти/функції → мемоїзація або примітиви

**Категорія 2: Derived state**
- Помилка 6: Обчислення derived state в effect → render time
- Помилка 7: Зайві dependencies → computed values
- Помилка 8: Reset state в effect → використовувати `key`

**Категорія 3: Cleanup**
- Помилка 9: Не скасовувати fetch запити → AbortController
- Помилка 10: Set state після unmount → `isMounted` flag
- Помилка 11: Не видаляти event listeners → memory leak

**Категорія 4: Неправильне використання**
- Помилка 12: Event-specific logic в effect → event handler
- Помилка 13: App-level ініціалізація в компоненті → App.tsx
- Помилка 14: Неправильний хук (useLayoutEffect для DOM)
- Помилка 15: Non-reactive logic → useEffectEvent (React 19.2+)

**Головне правило:**
useEffect повинен бути винятком, а не правилом. Якщо він зустрічається часто — перепроектуйте архітектуру.

**Кращі практики:**
- Custom hooks для ізоляції логіки
- State management (Zustand, Redux) для глобального стану
- Event-driven design замість ланцюжків effects
- Мемоїзовані селектори для derived state

useEffect не потрібно "рятувати" — потрібно рятувати розробників від неправильного використання.

---

### ✅ Чи є рендеринг на стороні сервера Святим Граалем React

**Джерело:** [Is Server-Side Rendering React's Holy Grail?](https://thenewstack.io/is-server-side-rendering-reacts-holy-grail/)

Інтерв'ю з Matteo Collina (CTO Platformatic) та Luca Maraschi (CEO) про майбутнє React SSR.

**Головна теза:**
SSR — це екзистенційна проблема React що потребує вирішення. Більшість зусиль йде на micro-optimization фронтенду, тоді як серверний рендеринг залишається неоптимізованим 10+ років.

**React Compiler потенціал:**
- Зараз: усуває потребу в memoization компонентів
- Майбутнє: може масштабуватися на server-driven optimization
- Можливість: pre-render chunk of HTML на компонентах

**Чому SSR не оптимізований:**
Facebook не використовує JavaScript на сервері — тому SSR ніколи не планувався для оптимізації.

**Тільки Solid.js досяг holy grail:**
- Не React-based, але JSX-based
- Використовує інший компілятор для JSX
- Значно швидший за React SSR

**Фреймворки та SSR:**
- Vercel (Next.js) під тиском оптимізувати
- Cloudflare починає контрибутити в Next.js
- Борба за edge market між Cloudflare та Vercel

**Еволюція екосистеми:**
- Можлива консолідація: features з різних frameworks → React
- Enterprises шукають "Switzerland of technology"
- При виході з Next.js розробники йдуть в Remix (React Router), не чистий React

**React Foundation надія:**
Нова React Foundation під Linux Foundation може стимулювати vendor-driven optimization та нові use cases.

**Висновок:**
React не зникне (занадто багато enterprise проектів), але потребує радикального покращення SSR performance для залишення конкурентоспроможним.

---

### ✅ UseEffect у React — це місце злочину

**Джерело:** [React's UseEffect Is a Crime Scene Covered in Fingerprints](https://thenewstack.io/reacts-useeffect-is-a-crime-scene-covered-in-fingerprints/)

Alexander Williams про культурну проблему overuse `useEffect` в React спільноті.

**Cult of useEffect:**
useEffect став дефолтним problem-solver для всього:
- Data fetching? useEffect
- State sync? useEffect  
- LocalStorage? useEffect

Результат: 300-line компоненти що re-render частіше ніж потрібно.

**Справжня проблема:**
Не технічна — культурна. Команди нормалізують хаки "що працюють", називають це рефакторингом.

**React не був створений для side-effect soup:**
- React genius: unidirectional data flow
- useEffect: для винятків (зовнішні системи)
- Проблема: коли все стає "винятком" — модель React руйнується

**Архітектурна проблема:**
Якщо компоненти заповнені useEffect — це не React проблема, це system design проблема. Розробники розмивають відповідальність між шарами.

**Кращі патерни замість useEffect:**
- Custom hooks для ізоляції поведінки (наприклад, `useFetch`)
- State management (Zustand, Redux, Jotai) централізує відповідальність
- Event-driven design замість ланцюжків effects
- Мемоїзовані helpers для обчислень

**Коли effects справді необхідні:**
- Fetching data
- Local storage
- DOM events
- One concern per effect

**Ключова ідея:**
useEffect повинен бути boundary tool, а не central nervous system вашого додатка.

**Рефакторинг шлях:**
- Computations → pure functions
- Data → stores/contexts
- Effects → boundary only

Не React потрібно рятувати. Розробники потрібно рятувати від себе. Next time reaching for useEffect — питайте: вирішую проблему чи залишаю ще один "відбиток пальця" на місці злочину?

---

## JavaScript - React (продовження)

### ✅ Створення MCP-сервера для Nuxt

**Джерело:** [Building an MCP Server for Nuxt](https://nuxt.com/blog/building-nuxt-mcp)

Hugo Richard та Sébastien Chopin показують як побудувати MCP сервер для Nuxt документації.

**Що таке MCP:**
Model Context Protocol — відкритий стандарт для AI асистентів отримувати безпечний доступ до даних та інструментів.

**Три primitives:**
- **Resources**: дані з контекстом (URI-based, як документація)
- **Tools**: операції для AI (search, API calls)
- **Prompts**: reusable шаблони з аргументами

**Чому MCP краще RAG:**
- Structured in/out → без галюцинацій
- Composable tools → ланцюжок операцій
- Швидше та точніше → без chunking на query time
- Завжди актуальне → прямий доступ до content layer
- Context-aware → AI навігує зв'язки між контентом

**Архітектура Nuxt MCP:**
```
server/routes/mcp.ts        # Main MCP server
server/api/mcp/             # API endpoints
  ├── list-documentation-pages.get.ts
  ├── get-documentation-page.get.ts
  └── search-content.get.ts
```

**Resource приклад:**
```typescript
server.registerResource(
  'nuxt-documentation-pages',
  'resource://nuxt-com/documentation-pages',
  async (uri) => {
    const result = await $fetch('/api/mcp/list-documentation-pages');
    return { contents: [{ uri: uri.href, text: JSON.stringify(result) }] };
  }
);
```

**Tool приклад:**
```typescript
server.tool(
  'search_content',
  'Searches across all Nuxt content',
  { query: z.string(), type: z.enum(['docs', 'blog', 'all']) },
  async (params) => {
    const result = await $fetch('/api/mcp/search-content', { query: params });
    return { content: [{ type: 'text', text: JSON.stringify(result) }] };
  }
);
```

**Як використовувати:**
- **Cursor**: one-click install через deep link
- **Claude Desktop, Windsurf, VSCode, ChatGPT**: підтримка через конфігурацію

**Створення власного MCP сервера:**
1. `npm install @modelcontextprotocol/sdk zod`
2. Створити `server/routes/mcp.ts`
3. Додати resources та tools
4. Створити API endpoints для даних

Nuxt MCP сервер використовує Nuxt Content через `queryCollection()` та кешує результати через `defineCachedEventHandler`.

Open-source код: [github.com/nuxt/nuxt.com](https://github.com/nuxt/nuxt.com)

MCP робить AI асистентів точнішими та кориснішими для розробників.

---

## JavaScript - Vue

### ✅ Використання Vite з Vue та Django

**Джерело:** [Using Vite with Vue and Django](https://wedgworth.dev/using-vite-with-vue-and-django/)

Patrick Altman ділиться досвідом інтеграції Vite bundler з Vue frontend та Django backend.

**Проблема:**
`vite build` генерує файли з cache-busting хешами:
```
main-2uqS21f4.js
main-BCI6Z1XL.css
```
Без інструментів треба комітити build output та hardcode імена файлів. Неприйнятно.

**Рішення — Template Tag:**
Template tag `{% vite_styles %}` та `{% vite_scripts %}` що читає Vite manifest.json та динамічно генерує теги.

**Ключові features:**
1. **Dev mode підтримка**: bypass manifest, load від dev server (http://localhost:3001) для HMR
2. **Caching**: використання Django cache backend з ключем прив'язаним до RELEASE_VERSION (git sha)
3. **Multi-node support**: management command для cache invalidation через Redis

**Template tag логіка:**
```python
def vite_manifest(entries_names):
    if settings.DEBUG:
        # Dev server URLs
        return [f"{DEV_SERVER_ROOT}/@vite/client", ...]
    
    manifest = get_manifest()
    # Process entries, imports, CSS...
    return scripts, styles
```

**Cache invalidation command:**
```python
# Зберігає останні 6 версій в Redis stack
redis_client.lpush(recent_versions_key, current_version)
redis_client.ltrim(recent_versions_key, 0, 5)

# Видаляє старі версії
# Seed cache з поточною версією
```

**Vite config:**
```typescript
{
  build: {
    manifest: true,  // Генерує .vite/manifest.json
  }
}
```

**Settings:**
```python
MANIFEST_LOADER = {
    "cache": not DEBUG,
    "cache_key": f"vite_manifest:{RELEASE_VERSION}",
    "output_path": f"{STATIC_ROOT}/.vite/manifest.json",
}
```

**Використання в template:**
```django
{% load vite %}
<head>
  {% vite_styles 'main.ts' %}
</head>
<body>
  {% vite_scripts 'main.ts' %}
</body>
```

**Майбутнє:**
Автор планує переглянути [django-vite](https://github.com/MrBin99/django-vite) як можливу альтернативу та можливо контрибутити Redis backend.

Рішення дозволяє безперебійні rolling deployments на multi-node кластері без maintenance mode.

---

