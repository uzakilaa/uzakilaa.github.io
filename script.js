/* ========================================
   UKI — CONFIGURATION
   ======================================== */

const CONFIG = {
  tg: 'utiko31',
  email: 'kazikhanilias1@gmail.com',
  github: 'https://github.com/uzakilaa',
  instagram: 'https://www.instagram.com/uzakilaa/',

  // Отзывы: Google Форма (клиент пишет) + таблица ответов (сайт читает только одобренные).
  reviewForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeYmDkxMSnXjDF_fDq9BxSfuVjSnDagzUYUCSQ1OL-z9swdKQ/viewform',
  reviewsCsv: 'https://docs.google.com/spreadsheets/d/1qyT6NDZq3ReAZ_9y6INqOn38eEdA1IVGhWTCejVJS-A/gviz/tq?tqx=out:csv&gid=697844443',
  reviewsPage: 'https://uzakilaa.github.io/reviews/',

  // Необязательно: адрес Edge Function / бота для заявок. Пусто = заявка через Telegram / Email.
  orderUrl: ''
};


/* ========================================
   PROJECTS
   ======================================== */

const PROJECTS = [
  {
    t: 'North Barber',
    d: {
      ru: 'Сайт барбершопа: услуги и цены, мастера, онлайн-запись с проверкой формы и маской телефона.',
      en: 'Barbershop website: services and prices, barbers, online booking with form validation and a phone mask.'
    },
    s: 'HTML / CSS / JS',
    demo: 'https://uzakilaa.github.io/north-barber/',
    code: 'https://github.com/uzakilaa/north-barber',
    img: 'img/north-barber.png'
  },
  {
    t: 'Music Player',
    d: {
      ru: 'Адаптивный лендинг музыкального сервиса с эффектным первым экраном.',
      en: 'Responsive landing page for a music service with a bold hero section.'
    },
    s: 'HTML / CSS',
    demo: 'https://uzakilaa.github.io/music-player/',
    code: 'https://github.com/uzakilaa/music-player',
    img: 'img/music-player.png'
  },
  {
    t: 'Vintage Food',
    d: {
      ru: 'Лендинг доставки бургеров: акция на первом экране и «резиновый» каталог меню на CSS Grid.',
      en: 'Burger delivery landing page: hero promo and a fluid CSS Grid menu catalog.'
    },
    s: 'HTML / CSS Grid',
    demo: 'https://uzakilaa.github.io/vintage-food/',
    code: 'https://github.com/uzakilaa/vintage-food',
    img: 'img/vintage-food.png'
  }
];


/* ========================================
   TRANSLATIONS
   Ключи из data-ih могут содержать <span>/<br> — это наши константы, не ввод пользователя.
   ======================================== */

const I = {
  ru: {
    n_work: 'Работы',
    n_services: 'Услуги',
    n_about: 'Обо мне',
    nav_cta: 'Обсудить проект',

    hero_status: 'Открыт для проектов',
    hero_kicker: 'Frontend developer / Independent',
    hero_desc: 'Создаю современные сайты, которые выглядят хорошо, быстро работают и помогают бизнесу находить клиентов.',
    hero_work: 'Смотреть работы',
    hero_order: 'Обсудить задачу',

    work_title: 'Избранные <span>работы.</span>',
    work_note: 'Небольшая подборка проектов, над которыми я работал.',
    work_demo: 'Демо',
    work_code: 'Код',
    work_more_note: 'ВЕСЬ КОД ОТКРЫТ НА GITHUB',
    work_more: 'Все проекты на GitHub',

    services_title: 'Чем могу <span>помочь.</span>',
    services_note: 'От идеи и макета до готовой адаптивной страницы.',
    services_link: 'Есть задача? Давайте обсудим',

    services: [
      {
        title: 'Лендинги',
        desc: 'Одностраничные сайты для бизнеса, услуг и продуктов. Продуманная структура, аккуратный дизайн и адаптация под разные устройства.',
        price: 'от 60 000 ₸',
        icon: '↗'
      },
      {
        title: 'Вёрстка',
        desc: 'Переношу дизайн из Figma в работающий сайт. Чистая структура, точность деталей и корректное отображение на телефонах и компьютерах.',
        price: 'от 8 000 ₸ / блок',
        icon: '⌘'
      },
      {
        title: 'Доработка сайтов',
        desc: 'Исправление ошибок, новые блоки, формы, интерактивные элементы и адаптация существующего сайта под телефоны.',
        price: 'от 5 000 ₸',
        icon: '✳'
      }
    ],

    about_title: 'За каждым сайтом <span>стоит человек.</span>',
    about_lead: 'Привет, я Илияс. Но в интернете меня чаще знают как Uki.',
    about_text1: 'Я frontend-разработчик из Казахстана. Мне нравится превращать идеи в понятные, аккуратные и удобные цифровые продукты.',
    about_text2: 'Стараюсь не просто написать код, а разобраться в задаче, предложить подходящее решение и объяснить процесс человеческим языком.',
    about_text3: 'До разработки работал в клиентской поддержке. Это научило меня слушать людей, задавать правильные вопросы и спокойно решать проблемы.',

    fact_location: 'Локация',
    fact_focus: 'Фокус',
    fact_stack: 'Технологии',
    fact_languages: 'Языки',
    github_link: 'Посмотреть мой GitHub',

    process_title: 'Без сложностей. <span>По шагам.</span>',
    step1_title: 'Знакомство',
    step1_desc: 'Обсуждаем вашу задачу, цели, пожелания и примерный бюджет.',
    step2_title: 'План',
    step2_desc: 'Определяем структуру, внешний вид, сроки и объём работы.',
    step3_title: 'Разработка',
    step3_desc: 'Создаю сайт, показываю результат и учитываю согласованные правки.',
    step4_title: 'Запуск',
    step4_desc: 'Проверяем адаптивность и передаю готовый результат.',

    reviews_title: 'Что говорят <span>люди.</span>',
    reviews_all: 'Все отзывы',
    leave_review: 'Оставить отзыв ↗',

    order_title: 'Есть идея?<br><span>Давайте создадим.</span>',
    order_desc: 'Расскажите немного о проекте. Я изучу задачу и свяжусь с вами, чтобы обсудить детали.',
    direct_label: 'ИЛИ НАПИШИТЕ НАПРЯМУЮ',

    form_name: 'Как вас зовут?',
    form_via: 'Куда ответить?',
    form_contact: 'Ваш Telegram или Email',
    form_type: 'Что нужно сделать?',
    form_desc: 'Расскажите о проекте',
    form_urg: 'Когда нужно?',
    form_budget: 'Бюджет',
    form_send: 'Отправить заявку',
    form_privacy: 'Никакого спама. Только ответ по вашему проекту.',

    types: [
      'Лендинг',
      'Сайт-визитка',
      'Вёрстка по макету',
      'Доработка сайта',
      'Другое'
    ],

    urgency: [
      'Не срочно',
      'В течение месяца',
      'В течение 2 недель',
      'Как можно скорее'
    ],

    budgets: [
      'До 60 000 ₸',
      '60 000 – 120 000 ₸',
      'От 120 000 ₸',
      'Не знаю, обсудим'
    ],

    fill: 'Укажите, как с вами связаться.',
    sent: 'Заявка отправлена. Спасибо!',
    fallback_tg: 'Текст заявки скопирован. Открываю Telegram — вставьте его в чат и отправьте.',
    fallback_tg_nocopy: 'Открываю Telegram — опишите задачу в чате.',
    fallback_email: 'Открываю почту с готовым письмом.',
    fail: 'Не удалось отправить заявку. Напишите напрямую.',
    bot: 'Заявка с сайта',

    footer_cta: 'LET’S MAKE IT REAL <span>↗</span>',
    back_top: 'Наверх ↑'
  },

  en: {
    n_work: 'Work',
    n_services: 'Services',
    n_about: 'About',
    nav_cta: 'Discuss a project',

    hero_status: 'Available for projects',
    hero_kicker: 'Frontend developer / Independent',
    hero_desc: 'I build modern websites that look good, work smoothly and help businesses reach their customers.',
    hero_work: 'Explore work',
    hero_order: 'Start a project',

    work_title: 'Selected <span>work.</span>',
    work_note: 'A small collection of projects I have worked on.',
    work_demo: 'Live demo',
    work_code: 'Code',
    work_more_note: 'ALL CODE IS OPEN ON GITHUB',
    work_more: 'All projects on GitHub',

    services_title: 'What I <span>can do.</span>',
    services_note: 'From an idea or mockup to a finished responsive page.',
    services_link: 'Have a project? Let’s talk',

    services: [
      {
        title: 'Landing pages',
        desc: 'One-page websites for businesses, services and products. Thoughtful structure, clean design and responsive layouts.',
        price: 'from 60,000 ₸',
        icon: '↗'
      },
      {
        title: 'Frontend layout',
        desc: 'Turning Figma designs into working websites. Clean structure, attention to detail and reliable responsive behavior.',
        price: 'from 8,000 ₸ / block',
        icon: '⌘'
      },
      {
        title: 'Website improvements',
        desc: 'Bug fixes, new sections, forms, interactive elements and making existing websites mobile-friendly.',
        price: 'from 5,000 ₸',
        icon: '✳'
      }
    ],

    about_title: 'Behind every website <span>is a person.</span>',
    about_lead: 'Hey, I’m Ilyas. Online, most people know me as Uki.',
    about_text1: 'I’m a frontend developer from Kazakhstan. I enjoy turning ideas into clear, thoughtful and useful digital experiences.',
    about_text2: 'I don’t just want to write code. I want to understand the task, suggest a suitable solution and explain the process in plain language.',
    about_text3: 'Before development, I worked in customer support. It taught me to listen, ask the right questions and solve problems calmly.',

    fact_location: 'Location',
    fact_focus: 'Focus',
    fact_stack: 'Stack',
    fact_languages: 'Languages',
    github_link: 'Explore my GitHub',

    process_title: 'Simple process. <span>Clear steps.</span>',
    step1_title: 'Discovery',
    step1_desc: 'We discuss your goals, requirements, ideas and approximate budget.',
    step2_title: 'Planning',
    step2_desc: 'We define the structure, design direction, timeline and scope.',
    step3_title: 'Development',
    step3_desc: 'I build the website, share progress and implement agreed revisions.',
    step4_title: 'Launch',
    step4_desc: 'We check responsiveness and I hand over the finished result.',

    reviews_title: 'Kind <span>words.</span>',
    reviews_all: 'All reviews',
    leave_review: 'Leave a review ↗',

    order_title: 'Have an idea?<br><span>Let’s build it.</span>',
    order_desc: 'Tell me a little about your project. I’ll review it and get back to you to discuss the details.',
    direct_label: 'OR REACH OUT DIRECTLY',

    form_name: 'Your name',
    form_via: 'Preferred contact',
    form_contact: 'Your Telegram or Email',
    form_type: 'What do you need?',
    form_desc: 'Tell me about your project',
    form_urg: 'Timeline',
    form_budget: 'Budget',
    form_send: 'Send request',
    form_privacy: 'No spam. Just a reply about your project.',

    types: [
      'Landing page',
      'Business card website',
      'Layout from a mockup',
      'Website improvements',
      'Other'
    ],

    urgency: [
      'Not urgent',
      'Within a month',
      'Within 2 weeks',
      'As soon as possible'
    ],

    budgets: [
      'Under 60,000 ₸',
      '60,000 – 120,000 ₸',
      '120,000 ₸ and up',
      'Not sure yet'
    ],

    fill: 'Please enter your contact details.',
    sent: 'Request sent. Thank you!',
    fallback_tg: 'Your request was copied. Opening Telegram — paste it into the chat and send.',
    fallback_tg_nocopy: 'Opening Telegram — describe your project in the chat.',
    fallback_email: 'Opening your email with a ready message.',
    fail: 'Could not send the request. Please contact me directly.',
    bot: 'Website request',

    footer_cta: 'LET’S MAKE IT REAL <span>↗</span>',
    back_top: 'Back to top ↑'
  }
};


/* ========================================
   HELPERS
   ======================================== */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

let lang = 'ru';
let reviewsCache = null;

try {
  const savedLang = localStorage.getItem('uki-lang');

  if (savedLang === 'ru' || savedLang === 'en') {
    lang = savedLang;
  } else {
    lang = (navigator.language || '').startsWith('ru') ? 'ru' : 'en';
  }
} catch (e) {
  lang = 'ru';
}

const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));

const currentText = () => I[lang];


/* ========================================
   RENDER PROJECTS
   ======================================== */

function renderProjects() {
  const t = currentText();

  $('#featured').innerHTML = PROJECTS.map(project => `
    <article class="project-card">
      <a
        class="project-visual project-shot"
        href="${esc(project.demo)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${esc(project.t)} — ${esc(t.work_demo)}"
      >
        <span class="project-topline">
          <span>${esc(project.t.toUpperCase())}</span>
          <span>LIVE</span>
        </span>
        <span class="project-shot-frame">
          <span class="project-shot-bar"><i></i><i></i><i></i></span>
          <img src="${esc(project.img)}" alt="${esc(project.t)}" loading="lazy" width="1440" height="900">
        </span>
        <span class="project-open">↗</span>
      </a>

      <div class="project-info">
        <div>
          <h3>${esc(project.t)}</h3>
          <p>${esc(project.d[lang])}</p>
          <div class="project-links">
            <a href="${esc(project.demo)}" target="_blank" rel="noopener noreferrer">${esc(t.work_demo)} ↗</a>
            <a href="${esc(project.code)}" target="_blank" rel="noopener noreferrer">${esc(t.work_code)} ↗</a>
          </div>
        </div>
        <span class="project-stack">${esc(project.s)}</span>
      </div>
    </article>
  `).join('');
}


/* ========================================
   RENDER SERVICES
   ======================================== */

function renderServices() {
  const services = currentText().services;

  $('#srv').innerHTML = services.map((service, index) => `
    <article class="service-card">
      <span class="service-index">0${index + 1} / SERVICE</span>
      <span class="service-icon">${esc(service.icon)}</span>
      <h3>${esc(service.title)}</h3>
      <p>${esc(service.desc)}</p>
      <span class="service-price">${esc(service.price)}</span>
    </article>
  `).join('');
}


/* ========================================
   SELECT OPTIONS
   ======================================== */

function fillSelect(selector, values) {
  const element = $(selector);
  const previousIndex = element.selectedIndex;

  element.innerHTML = values.map(value => `
    <option value="${esc(value)}">${esc(value)}</option>
  `).join('');

  // При смене языка сохраняем выбранный пункт по позиции
  if (previousIndex > 0 && previousIndex < values.length) {
    element.selectedIndex = previousIndex;
  }
}


/* ========================================
   MAIN RENDER
   ======================================== */

function render() {
  const t = currentText();

  document.documentElement.lang = lang;

  $$('[data-i]').forEach(element => {
    const key = element.dataset.i;
    if (t[key] !== undefined) element.textContent = t[key];
  });

  // Заголовки с выделением (<span>) и переносом (<br>) — доверенные строки из I
  $$('[data-ih]').forEach(element => {
    const key = element.dataset.ih;
    if (t[key] !== undefined) element.innerHTML = t[key];
  });

  $$('.lang-switch button').forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
    button.setAttribute('aria-pressed', button.dataset.lang === lang);
  });

  fillSelect('#type', t.types);
  fillSelect('#urg', t.urgency);
  fillSelect('#bud', t.budgets);

  renderProjects();
  renderServices();
  renderReviews();

  $('#directTelegram').href = 'https://t.me/' + CONFIG.tg;
  $('#directEmail').href = 'mailto:' + CONFIG.email;
  $('#footerTelegram').href = 'https://t.me/' + CONFIG.tg;
  $('#footerGithub').href = CONFIG.github;
  $('#footerReview').href = CONFIG.reviewForm;
  $('#reviewsAll').href = CONFIG.reviewsPage;
}


/* ========================================
   LANGUAGE SWITCH
   ======================================== */

$$('.lang-switch button').forEach(button => {
  button.addEventListener('click', () => {
    lang = button.dataset.lang;

    try {
      localStorage.setItem('uki-lang', lang);
    } catch (e) {}

    render();
  });
});


/* ========================================
   MOBILE MENU
   ======================================== */

const menuButton = $('.menu-toggle');
const navigation = $('.nav');

function closeMenu() {
  navigation.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.setAttribute('aria-expanded', 'false');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');

  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

$$('.nav a').forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});


/* ========================================
   ORDER FORM
   ======================================== */

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    return false;
  }
}

$('#orderForm').addEventListener('submit', async event => {
  event.preventDefault();

  const form = event.currentTarget;
  const message = $('#msg');
  const t = currentText();

  message.className = 'form-message';
  message.textContent = '';

  // Honeypot anti-spam
  if (form.website.value) return;

  const contact = form.contact.value.trim();

  if (!contact) {
    message.classList.add('error');
    message.textContent = t.fill;
    form.contact.focus();
    return;
  }

  const data = {
    name: form.name.value.trim(),
    via: form.via.value,
    contact,
    type: form.type.value,
    desc: form.desc.value.trim(),
    urgency: form.urg.value,
    budget: form.bud.value,
    lang
  };

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    if (CONFIG.orderUrl) {
      const response = await fetch(CONFIG.orderUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Request failed');

      message.textContent = t.sent;
      form.reset();
      return;
    }

    const text = [
      t.bot,
      '',
      `${t.form_name}: ${data.name || '—'}`,
      `${t.form_contact}: ${data.contact} (${data.via})`,
      `${t.form_type}: ${data.type}`,
      `${t.form_urg}: ${data.urgency}`,
      `${t.form_budget}: ${data.budget}`,
      '',
      data.desc || '—'
    ].join('\n');

    if (data.via === 'Email') {
      message.textContent = t.fallback_email;
      const subject = encodeURIComponent(t.bot);
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${encodeURIComponent(text)}`;
    } else {
      // Telegram не умеет вставлять текст в личный чат по ссылке,
      // поэтому копируем заявку в буфер обмена и открываем чат.
      const copied = await copyText(text);
      message.textContent = copied ? t.fallback_tg : t.fallback_tg_nocopy;
      window.open(`https://t.me/${CONFIG.tg}`, '_blank', 'noopener');
    }

  } catch (error) {
    console.error(error);
    message.classList.add('error');
    message.textContent = t.fail;

  } finally {
    submitButton.disabled = false;
  }
});


/* ========================================
   REVIEWS (Google Sheets CSV)
   Показываются только строки со словом «да» в столбце «Одобрено».
   ======================================== */

function parseCSV(text) {
  const rows = [];
  let row = [], cell = '', quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (ch !== '\r') cell += ch;
  }

  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

const findCol = (headers, words) =>
  headers.findIndex(h => words.some(w => h.toLowerCase().includes(w)));

const APPROVED = ['да', 'yes', '+', 'true', '1', '✓', '✔'];

async function loadReviews() {
  if (!CONFIG.reviewsCsv) return;

  try {
    const response = await fetch(CONFIG.reviewsCsv + '&t=' + Date.now());
    if (!response.ok) throw new Error(response.status);

    const [headers = [], ...rows] = parseCSV(await response.text());
    const col = {
      name: findCol(headers, ['имя', 'name']),
      project: findCol(headers, ['проект', 'project']),
      rating: findCol(headers, ['оцен', 'rating']),
      text: findCol(headers, ['отзыв', 'review']),
      ok: findCol(headers, ['одобр', 'approved'])
    };
    const get = (row, i) => (i >= 0 && row[i] ? row[i].trim() : '');

    reviewsCache = rows
      .filter(row => APPROVED.includes(get(row, col.ok).toLowerCase()))
      .map(row => ({
        name: get(row, col.name) || 'Клиент',
        project: get(row, col.project),
        rating: Math.max(0, Math.min(5, parseInt(get(row, col.rating), 10) || 0)),
        text: get(row, col.text)
      }))
      .filter(review => review.text)
      .reverse()
      .slice(0, 6);

    renderReviews();
  } catch (error) {
    console.error('Reviews:', error);
  }
}

function renderReviews() {
  const section = $('#reviews');
  if (!reviewsCache || !reviewsCache.length) {
    section.style.display = 'none';
    return;
  }

  $('#rvlist').innerHTML = reviewsCache.map(review => `
    <article class="review-card">
      <div class="review-stars" aria-label="${review.rating} / 5">${'★'.repeat(review.rating)}</div>
      <blockquote>“${esc(review.text)}”</blockquote>
      <cite>${esc(review.name)}${review.project ? ' · ' + esc(review.project) : ''}</cite>
    </article>
  `).join('');

  section.style.display = 'block';
}


/* ========================================
   OLD REVIEW LINK
   Старая ссылка «сайт/#review» ведёт на Google Форму.
   ======================================== */

if (location.hash === '#review') {
  location.replace(CONFIG.reviewForm);
}


/* ========================================
   INITIALIZATION
   ======================================== */

render();
loadReviews();
