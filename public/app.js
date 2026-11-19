// dbbettz.com — shared JS
(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.getAttribute('data-copy');
      if (navigator.clipboard) navigator.clipboard.writeText(code);
      var t = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = t; }, 1400);
    });
  });

  // Mobile menu — built from the existing nav so every page gets it automatically
  var header = document.querySelector('header');
  var nav = header && header.querySelector('.nav');
  var links = header && header.querySelector('.nav-links');
  var cta = header && header.querySelector('.nav-cta');
  if (nav && (links || cta)) {
    var toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(toggle);

    var panel = document.createElement('div');
    panel.className = 'mobile-menu';
    if (links) panel.innerHTML = links.innerHTML;
    if (cta) {
      var c = document.createElement('div');
      c.className = 'mm-cta';
      c.innerHTML = cta.innerHTML;
      panel.appendChild(c);
    }
    header.appendChild(panel);

    var close = function () { header.classList.remove('menu-open'); toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('menu-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }
})();

/* ---- sticky mobile registration CTA (bilingual) ---- */
(function () {
  var reg = document.querySelector('.nav-cta a.btn-primary');
  if (!reg || document.querySelector('.sticky-cta')) return;
  var sw = (document.documentElement.lang || 'sw').indexOf('sw') === 0;
  var t = sw
    ? { lbl: 'Wachezaji wapya · 18+', bonus: 'Bonasi ya karibu <b>100%</b>', btn: 'Jisajili' }
    : { lbl: 'New players · 18+',     bonus: '<b>100%</b> welcome bonus',    btn: 'Register' };
  var bar = document.createElement('div');
  bar.className = 'sticky-cta';
  bar.innerHTML =
    '<div class="sc-text">' +
      '<span class="sc-lbl">' + t.lbl + '</span>' +
      '<span class="sc-bonus">' + t.bonus + '</span>' +
    '</div>' +
    '<a class="btn btn-primary sc-btn" href="' + reg.getAttribute('href') + '" rel="sponsored nofollow noopener" target="_blank">' + t.btn + '</a>';
  document.body.appendChild(bar);
})();

/* ---- betting tax calculator: stake excise duty (verified) + optional winnings-tax estimate (user-supplied rate) ---- */
(function () {
  var STAKE_DUTY_RATE = 0.05; // 5% excise duty on stake value — Tanzania FY2026/27 budget, effective 1 Jul 2026

  function fmtTZS(n) {
    var rounded = Math.round(n);
    var s = String(Math.abs(rounded)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (rounded < 0 ? '-' : '') + s + ' TZS';
  }

  var stakeInput = document.getElementById('tc-stake-input');
  var stakeErr = document.getElementById('tc-stake-err');
  var stakeResult = document.getElementById('tc-stake-result');
  var stakeDuty = document.getElementById('tc-stake-duty');
  var stakeNet = document.getElementById('tc-stake-net');

  if (stakeInput && stakeErr && stakeResult && stakeDuty && stakeNet) {
    stakeInput.addEventListener('input', function () {
      var raw = stakeInput.value;
      var v = parseFloat(raw);
      if (raw === '' || isNaN(v) || v <= 0) {
        stakeErr.classList.toggle('show', raw !== '');
        stakeResult.classList.remove('show');
        return;
      }
      stakeErr.classList.remove('show');
      var duty = v * STAKE_DUTY_RATE;
      stakeDuty.textContent = fmtTZS(duty);
      stakeNet.textContent = fmtTZS(v - duty);
      stakeResult.classList.add('show');
    });
  }

  var winInput = document.getElementById('tc-win-input');
  var rateInput = document.getElementById('tc-rate-input');
  var winErr = document.getElementById('tc-win-err');
  var winResult = document.getElementById('tc-win-result');
  var winTax = document.getElementById('tc-win-tax');
  var winNet = document.getElementById('tc-win-net');

  if (winInput && rateInput && winErr && winResult && winTax && winNet) {
    var calcWin = function () {
      var wRaw = winInput.value, rRaw = rateInput.value;
      var w = parseFloat(wRaw), r = parseFloat(rRaw);
      if (wRaw === '' && rRaw === '') {
        winErr.classList.remove('show');
        winResult.classList.remove('show');
        return;
      }
      if (isNaN(w) || w <= 0 || isNaN(r) || r < 0 || r > 100) {
        winErr.classList.add('show');
        winResult.classList.remove('show');
        return;
      }
      winErr.classList.remove('show');
      var tax = w * (r / 100);
      winTax.textContent = fmtTZS(tax);
      winNet.textContent = fmtTZS(w - tax);
      winResult.classList.add('show');
    };
    winInput.addEventListener('input', calcWin);
    rateInput.addEventListener('input', calcWin);
  }
})();

/* ---- bonus carousel: arrows, dots, autoplay, card -> detail jump (runs only if .carousel exists) ---- */
(function () {
  var cars = document.querySelectorAll('.carousel');
  if (!cars.length) return;
  var sw = (document.documentElement.lang || 'sw').indexOf('sw') === 0;
  var T = sw
    ? { slide: 'Kadi', of: 'kati ya' }
    : { slide: 'Card', of: 'of' };
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reduced() { return !!(mq && mq.matches); }
  function behave() { return reduced() ? 'auto' : 'smooth'; }
  var DELAY = 6000, RESUME = 8000, FLASH = 1600;

  Array.prototype.forEach.call(cars, function (car) {
    var track = car.querySelector('.carousel-track');
    if (!track) return;
    var cards = Array.prototype.slice.call(track.querySelectorAll('.car-card'));
    if (!cards.length) return;
    var prevBtn = car.querySelector('.car-prev');
    var nextBtn = car.querySelector('.car-next');
    var dotsWrap = car.querySelector('.car-dots');
    var pauseBtn = car.querySelector('.car-pause');
    var timer = null, resumeTimer = null;
    var userPaused = reduced(), held = false, hovering = false, focused = false;

    function step() {
      return cards.length > 1 ? (cards[1].offsetLeft - cards[0].offsetLeft) : cards[0].offsetWidth;
    }
    function maxX() { return Math.max(0, track.scrollWidth - track.clientWidth); }
    function idx() { var s = step() || 1; return Math.round(track.scrollLeft / s); }
    function toX(x) {
      if (track.scrollTo) track.scrollTo({ left: x, behavior: behave() });
      else track.scrollLeft = x;
    }
    function next() {
      if (track.scrollLeft >= maxX() - 4) toX(0);
      else toX(Math.min(maxX(), (idx() + 1) * step()));
    }
    function prev() {
      if (track.scrollLeft <= 4) toX(maxX());
      else toX(Math.max(0, (idx() - 1) * step()));
    }
    function goTo(i) { toX(Math.min(maxX(), cards[i].offsetLeft - cards[0].offsetLeft)); }

    /* dots, one per card */
    var dots = [];
    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      cards.forEach(function (card, i) {
        var d = document.createElement('button');
        d.type = 'button';
        d.className = 'car-dot';
        d.setAttribute('aria-label', T.slide + ' ' + (i + 1) + ' ' + T.of + ' ' + cards.length);
        d.addEventListener('click', function () { hold(); goTo(i); });
        dotsWrap.appendChild(d);
        dots.push(d);
      });
    }
    function paintDots() {
      if (!dots.length) return;
      var left = track.scrollLeft, w = track.clientWidth, base = cards[0].offsetLeft, first = -1;
      cards.forEach(function (card, i) {
        var x = card.offsetLeft - base - left, cw = card.offsetWidth;
        var inView = x > -cw / 2 && x + cw / 2 < w;
        dots[i].classList.toggle('is-active', inView);
        if (inView && first < 0) first = i;
      });
      dots.forEach(function (d, i) {
        if (i === first) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    }
    var raf = 0;
    track.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = 0; paintDots(); });
    }, { passive: true });
    window.addEventListener('resize', paintDots);

    /* autoplay */
    function canPlay() { return !userPaused && !held && !hovering && !focused && !document.hidden; }
    function stop() { if (timer) { clearTimeout(timer); timer = null; } }
    function schedule() {
      stop();
      if (canPlay()) timer = setTimeout(function () { next(); schedule(); }, DELAY);
    }
    function hold() {
      held = true; stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { held = false; schedule(); }, RESUME);
    }
    function paintPause() {
      if (pauseBtn) pauseBtn.setAttribute('aria-pressed', userPaused ? 'true' : 'false');
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { hold(); prev(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { hold(); next(); });
    if (pauseBtn) pauseBtn.addEventListener('click', function () {
      userPaused = !userPaused; paintPause(); schedule();
    });
    car.addEventListener('mouseenter', function () { hovering = true; stop(); });
    car.addEventListener('mouseleave', function () { hovering = false; schedule(); });
    car.addEventListener('focusin', function () { focused = true; stop(); });
    car.addEventListener('focusout', function (e) {
      if (e.relatedTarget && car.contains(e.relatedTarget)) return;
      focused = false; schedule();
    });
    track.addEventListener('pointerdown', hold);
    track.addEventListener('touchstart', hold, { passive: true });
    car.addEventListener('keydown', function (e) {
      var k = e.key;
      if (k !== 'ArrowLeft' && k !== 'ArrowRight') return;
      var t = e.target && e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
      e.preventDefault(); hold();
      if (k === 'ArrowLeft') prev(); else next();
    });
    document.addEventListener('visibilitychange', schedule);
    if (mq) {
      var onMq = function () { if (mq.matches) { userPaused = true; paintPause(); } schedule(); };
      if (mq.addEventListener) mq.addEventListener('change', onMq);
      else if (mq.addListener) mq.addListener(onMq);
    }

    /* card click -> smooth scroll to its detail section + flash + GA event */
    track.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href').slice(1);
      var el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: behave(), block: 'start' });
      if (history.pushState) history.pushState(null, '', '#' + id);
      el.classList.remove('flash');
      void el.offsetWidth;
      el.classList.add('flash');
      setTimeout(function () { el.classList.remove('flash'); }, FLASH);
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
      try { el.focus({ preventScroll: true }); } catch (err) { /* old browsers */ }
      if (typeof window.gtag === 'function') window.gtag('event', 'carousel_click', { bonus: id });
    });

    car.classList.add('is-ready');
    paintPause();
    paintDots();
    schedule();
  });
})();
