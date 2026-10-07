const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const submitLeadForm = async (form, successMessage = 'Gönderildi') => {
  const button = form.querySelector('button[type="submit"]');
  if (!button) return;

  button.disabled = true;
  const originalText = button.textContent;
  button.textContent = successMessage;

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    await fetch('https://formsubmit.co/ajax/yamanmustafa445@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    window.location.href = 'thank-you.html';
  } catch (error) {
    button.textContent = originalText;
    button.disabled = false;
    alert('Form gönderimi sırasında bir hata oluştu. Lütfen e-posta adresine doğrudan yazın veya WhatsApp üzerinden iletişime geçin.');
  }
};

const footerForm = document.getElementById('footerForm');
if (footerForm) {
  footerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLeadForm(footerForm);
  });
}

const salesForm = document.getElementById('salesForm');
if (salesForm) {
  salesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLeadForm(salesForm);
  });
}

const cookieNoticeKey = 'teknoy-cookie-notice-acknowledged';
const cookieNotice = document.createElement('aside');
cookieNotice.className = 'cookie-notice';
cookieNotice.setAttribute('aria-label', 'Gizlilik ve çerez bilgilendirmesi');
cookieNotice.setAttribute('aria-describedby', 'cookieNoticeText');
cookieNotice.innerHTML = `
  <div class="cookie-notice-copy">
    <strong>Gizlilik ve çerezler</strong>
    <p id="cookieNoticeText">Bu sitede analiz veya reklam çerezleri kullanılmıyor. Bu bildirimi kapattığınızı hatırlamak için tercih bilgisi tarayıcınızda saklanır. Ayrıntılar için <a href="cookie-policy.html">Çerez Politikası</a>'nı inceleyin.</p>
  </div>
  <button type="button" class="button button-primary cookie-notice-dismiss">Anladım</button>
`;
document.body.appendChild(cookieNotice);

const dismissCookieNotice = () => {
  cookieNotice.hidden = true;
  try {
    window.localStorage.setItem(cookieNoticeKey, 'true');
  } catch (error) {
    console.warn('Çerez bildirimi tercihi bu tarayıcıda saklanamadı.', error);
  }
};

try {
  cookieNotice.hidden = window.localStorage.getItem(cookieNoticeKey) === 'true';
} catch (error) {
  console.warn('Çerez bildirimi tercihi bu tarayıcıda okunamadı.', error);
}

cookieNotice.querySelector('.cookie-notice-dismiss').addEventListener('click', dismissCookieNotice);
document.querySelectorAll('.cookie-settings-button').forEach((button) => {
  button.addEventListener('click', () => {
    cookieNotice.hidden = false;
    cookieNotice.querySelector('.cookie-notice-dismiss').focus();
  });
});
