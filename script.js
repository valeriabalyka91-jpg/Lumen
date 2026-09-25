const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', opened);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('orderForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Заявка с сайта LUMEN — ${service}`);
  const body = encodeURIComponent(
    `Здравствуйте!\n\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service}\nКомментарий: ${message || 'не указан'}\n\nЗаявка отправлена с сайта LUMEN.`
  );

  window.location.href = `mailto:lumen@mail.ru?subject=${subject}&body=${body}`;
});
