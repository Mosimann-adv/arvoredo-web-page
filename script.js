(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 24); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  function closeMenu() {
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = !menu.classList.contains('open');
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || '';
    if (reducedMotion) { el.textContent = target + suffix; return; }
    var dur = 1400;
    var start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = (entry.target.dataset.delay || '0') + 'ms';
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.num[data-count]').forEach(animateCount);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.dataset.delay = (i % 4) * 90;
    io.observe(el);
  });

  var pixText = document.getElementById('pix-key-text');
  var copyBtn = document.getElementById('copy-pix');
  copyBtn.addEventListener('click', function () {
    var text = pixText.textContent.trim();
    function done() {
      copyBtn.textContent = 'Copiado!';
      setTimeout(function () { copyBtn.textContent = 'Copiar'; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      var r = document.createRange();
      r.selectNodeContents(pixText);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      document.execCommand('copy');
      done();
    }
  });

  document.querySelectorAll('.js-plan').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.getElementById('contato').scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      setTimeout(function () { document.getElementById('f-nome').focus({ preventScroll: true }); }, 700);
    });
  });

  var form = document.getElementById('partner-form');
  var status = document.getElementById('form-status');
  var WHATSAPP = '554896641051';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var lines = ['Olá! Vim pelo site do Arvoredo Basquetebol.', ''];
    lines.push('Nome: ' + (data.get('nome') || '—'));
    if (data.get('empresa')) lines.push('Empresa: ' + data.get('empresa'));
    if (data.get('email')) lines.push('E-mail: ' + data.get('email'));
    lines.push('Como quer apoiar: ' + (data.get('tipo') || '—'));
    if (data.get('mensagem')) lines.push('Mensagem: ' + data.get('mensagem'));
    var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
    status.textContent = 'Abrimos o WhatsApp com sua mensagem pronta — é só enviar!';
  });
})();
