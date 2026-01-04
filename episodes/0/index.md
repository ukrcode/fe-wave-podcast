# #0: Пілотний епізод: WIP

🎙️ Мене звати Станіслав і я фронтенд розробник з Києва. Ідея цього подкасту виникла після того, як я не знайшов нічого подібного українською мовою. Тут кожного тижня я буду розповідати про найважливіші новини фронтенду і веб-розробки.

💅 Цей випуск зроблено на основі [Front-end Digest № 131](https://dou.ua/forums/topic/57099/) і [Front-end Digest № 132](https://dou.ua/forums/topic/57182/) від [Olexander Smolianinov](https://dou.ua/users/dersmoll/), frontend director в [ZFORT Group](https://jobs.dou.ua/companies/zfort/). Обовʼязково підпишіться на його дайджест, там дуже багато корисної інформації.

📝 Нижче наведено оригінальний текст дайджесту з невеличким змінами.

Новини, які увійшли в випуск помічені ✅, решта — рекомендоване читання - 📚. Я зробив таке розділення, бо їх забагато для формату і таймінгу, в який хочу вкластися.

# Front-end Digest № 131: анатомія LCP, оптимізація CLS та WebAssembly для JS-розробників

### **Веброзробка**

- ✅ [Vercel: наш React2Shell-челендж для хакерів на мільйон доларів](https://vercel.com/blog/our-million-dollar-hacker-challenge-for-react2shell)
- 📚 [React2Shell — це Log4j-момент для розробки фронтенду](https://www.csoonline.com/article/4109221/react2shell-is-the-log4j-moment-for-front-end-development-2.html)
- ✅ [State of HTML 2025](https://2025.stateofhtml.com/ua-UA/)
- 📚 [Dynamic Datalist: автозаповнення з API (вебкомпонент)](https://www.aaron-gustafson.com/notebook/dynamic-datalist-autocomplete-from-an-api/)
- ✅ [Вимірювання результативності функцій](https://www.smashingmagazine.com/2025/12/how-measure-impact-features-tars/)
- [Елемент <time> має нарешті щось робити](https://nolanlawson.com/2025/12/14/the-time-element-should-actually-do-something/)
- [Посібник з доступності в WCAG 3.3.9: на шляху до золота](https://auth0.com/blog/an-accessible-guide-to-wcag-3-3-9/)

- **Інструменти**
  - ✅ [Великі перегони JavaScript-бандлерів](https://redmonk.com/kholterhoff/2025/12/16/javascript-bundler-grand-prix/)
  - ✅ [Посібник з впровадження Vitest 4: огляд та міграція з Jest](https://blog.logrocket.com/vitest-adoption-guide/)
- **Продуктивність**
  - 📚 [Lazy Loading зображень залежно від розміру екрана](https://www.aaron-gustafson.com/notebook/lazy-loading-images-based-on-screen-size/)
  - ✅ [Оптимізація CLS для нескінченної прокрутки та Load More](https://calendar.perfplanet.com/2025/optimizing-cls-for-infinite-scroll-and-load-more/)
  - 📚 [Анатомія LCP — детальний аналіз складових частин](https://calendar.perfplanet.com/2025/the-anatomy-of-lcp-a-deep-dive-into-sub-parts/)
  - 📚 [Оптимізація для 75% — це нормально. Оптимізація для 90% — ось де стає цікаво](https://calendar.perfplanet.com/2025/optimizing-for-75-is-fine-optimizing-for-90-is-where-it-gets-interesting/)
- **Ефекти**
  - 📚 [Реалізація адаптивних анімацій по кривих, які активуються скролінгом, на GSAP](https://tympanus.net/codrops/2025/12/17/building-responsive-scroll-triggered-curved-path-animations-with-gsap/)
  - ✅ [Різні переходи між сторінками для різних обставин](https://frontendmasters.com/blog/different-page-transitions-for-different-circumstances/)
  - ✅ [Toon Text від Енді Кларка — класичні титри з мультфільмів, перенесені в веб за допомогою css, js та svg](https://stuffandnonsense.co.uk/toon-text/tool.html)

### **CSS**

- 📚 [Напрямний CSS з урахуванням стану прокрутки (scrolled)](https://una.im/scroll-state-scrolled)
- 📚 [З’єднання кіл за допомогою Anchor Positioning](https://css-tip.com/connected-circles/)
- 📚 [Адаптивний список аватарів із використанням сучасного CSS (частина 2)](https://css-tricks.com/responsive-list-of-avatars-using-modern-css-part-2/)
- ✅ [Masonry-розкладка стала grid-lanes](https://css-tricks.com/masonry-layout-is-now-grid-lanes/)
- ✅ [View Transitions для Dialog](https://medienbaecker.com/articles/dialog-view-transitions)
- ✅ [VoxCSS — CSS-воксельний рушій](https://voxcss.com/)
- ✅ [Bad CSS-Dad Jokes (V)](https://alvaromontoro.com/blog/68087/bad-css-dad-jokes-v)

### **JavaScript**

- ✅ [Дослідження мультибрендових систем за допомогою токенів і компонування у Vue](https://frontendmasters.com/blog/exploring-multi-brand-systems-with-tokens-and-composability/)
- ✅ [Виживання в умовах нестачі RAM: поради з ефективності для JavaScript-розробників](https://blog.codeminer42.com/surviving-the-ram-squeeze-efficiency-tips-for-javascript-developers/)
- 📚 [Коли розробники JavaScript повинні використовувати можливості WebAssembly?](https://thenewstack.io/when-should-javascript-devs-use-the-power-of-webassembly/)
- ✅ 📚 [Angular, React та Vue.js: посібник з продуктивності на 2026 рік](https://blog.logrocket.com/angular-vs-react-vs-vue-js-performance/)
- 📚 [Практичний посібник з управління станом в Angular Services та Signals](https://www.telerik.com/blogs/practical-guide-state-management-using-angular-services-signals)

- **React**
  - 📚 [Представляємо RSC Explorer](https://overreacted.io/introducing-rsc-explorer/)
  - 📚 [Експлойт React2Shell: що сталося і які уроки були винесені](https://blog.logrocket.com/react2shell-exploit/)
  - 📚 [Повний посібник з інтернаціоналізації в Next.js](https://blog.logrocket.com/complete-guide-internationalization-nextjs/)
  - 📚 [Vite чи Webpack для React-застосунків у 2025](https://blog.logrocket.com/vite-vs-webpack-react-apps-2025-senior-engineer/)

### **Фронтенд-меми**

![](https://s.dou.ua/storage-files/image_969237857121766401401238.png)

![](https://s.dou.ua/storage-files/image_948600684131766401401238.png)

![](https://s.dou.ua/storage-files/image_187307971141766401401239.png)

![](https://s.dou.ua/storage-files/image_60369351151766401401240_opt.jpg)

![](https://s.dou.ua/storage-files/image_742970063161766401401241.png)

![](https://s.dou.ua/storage-files/image_173746659171766401401241.png)

![](https://s.dou.ua/storage-files/image_314754338181766401401244_opt.jpg)

![](https://s.dou.ua/storage-files/image_897390079191766401401244.png)

![](https://s.dou.ua/storage-files/image_934741300201766401401245.png)

![](https://s.dou.ua/storage-files/image_196949269211766401401246.png)

# Front-end Digest № 132: Фронтенд в 2025, Заміна JS на HTML та налагодження швидкодії вебсайтів

Привіт, колеги. Мене звати Олександр, я займаюся фронтендом в компанії Zfort Group. Маю для вас свіжий дайджест з цікавими матеріалами зі світу фронтенду за останній тиждень.

### Веб-розробка

- ✅ [Frontend Wrapped 2025: 10 історій, які сформували рік.](https://blog.logrocket.com/frontend-wrapped-2025/)
- ✅ [Вебкомпоненти: повернення, якого ніхто не чекав.](https://thenewstack.io/web-components-are-the-comeback-nobody-saw-coming/)
- ✅ [Коли відеокодек отримує Еммі](https://blog.mozilla.org/en/mozilla/av1-video-codec-wins-emmy/)
- 📚 [Створення ностальгійного 8-бітного всесвіту за допомогою сучасних технологій: Подорож вайбовим кодуванням](https://tympanus.net/codrops/2025/12/23/building-a-nostalgic-8-bit-universe-with-modern-tech-a-vibe-coding-journey/)

### Швидкодія

- 📚 [Chrome DevTools: налагодження швидкодії вебсайтів](https://calendar.perfplanet.com/2025/chrome-devtools-for-debugging-web-performance/)
- 📚 [TTFB не означає те, що ви думаєте](https://calendar.perfplanet.com/2025/ttfb-doesnt-mean-what-you-think-it-means/)
- 📚 [Відкладене завантаження додаткових шрифтів з використанням нативного API браузера.](https://highperformancewebfonts.com/read/lazy-loading-optional-fonts)
- ✅ [Усунення втрати швидкодії через URL-параметри](https://calendar.perfplanet.com/2025/fixing-the-url-params-performance-penalty/)
- ✅ [Порівняння продуктивності: Серверні компоненти та острівна архітектура](https://blog.logrocket.com/server-components-vs-islands-architecture/)
- 📚 [Поради, як зробити панель продуктивності менш обтяжливою.](https://calendar.perfplanet.com/2025/tips-for-making-the-performance-panel-less-overwhelming/)

### CSS

- 📚 [Переключення \`position: sticky\` на \`position: fixed\` при прокручуванні](https://frontendmasters.com/blog/toggle-position-sticky-to-position-fixed-on-scroll/)
- 📚 [text-decoration-inset — це як Padding для текстових декорацій](https://css-tricks.com/text-decoration-inset-is-like-padding-for-text-decorations/)
- ✅ [Container queries у 2026: Потужні, але не панацея](https://blog.logrocket.com/container-queries-2026/)
- 📚 [StringTune-3D: Змушуємо 3D підкорятися CSS](https://dev.to/penev-tech/string3d-forcing-3d-to-obey-css-583h)

### JavaScript

- ✅ [Тенденції, що визначили JavaScript у 2025 році](https://thenewstack.io/trends-that-defined-javascript-in-2025/)
- ✅ [Характеристика Vue.js](https://wtrclred.io/en/posts/07)
- 📚 [Вступ до Zustand](https://www.telerik.com/blogs/introduction-zustand)
- ✅ [Заміна JS на HTML](https://www.htmhell.dev/adventcalendar/2025/27/)

### Фронтенд-меми

![](https://s.dou.ua/storage-files/image_294155881121767007513730.png)

![](https://s.dou.ua/storage-files/image_860746610131767007513732_opt.jpg)

![](https://s.dou.ua/storage-files/image_223852715141767007513732.png)

![](https://s.dou.ua/storage-files/image_598226366151767007513733.png)

![](https://s.dou.ua/storage-files/image_816216163161767007513734.png)

![](https://s.dou.ua/storage-files/image_583350761171767007513735_opt.jpg)

![](https://s.dou.ua/storage-files/image_924904902181767007513736_opt.jpg)

![](https://s.dou.ua/storage-files/image_696667408191767007513737.png)

![](https://s.dou.ua/storage-files/image_324006682201767007513738.png)

![](https://s.dou.ua/storage-files/image_415803973211767007513739_opt.jpg)

[Підписуйтеся на телеграм-канал Front-end спільноти!](https://t.me/frontend%5Fdou)

Теми: [CSS](https://dou.ua/forums/tags/CSS/),[Front-end](https://dou.ua/forums/tags/Front-end/),[front-end digest](https://dou.ua/forums/tags/front-end%20digest/), [HTML](https://dou.ua/forums/tags/HTML/),[JS](https://dou.ua/forums/tags/JS/),[tech](https://dou.ua/forums/tags/tech/)
