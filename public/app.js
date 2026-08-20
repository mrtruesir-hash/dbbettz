// DBBet Kenya — shared JS
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
    ? { lbl: 'Bonasi ya karibu', bonus: 'Hadi <b>4,000,000 TZS</b> + spins 150', btn: 'Jisajili' }
    : { lbl: 'Welcome bonus',    bonus: 'Up to <b>4,000,000 TZS</b> + 150 FS',  btn: 'Register' };
  var bar = document.createElement('div');
  bar.className = 'sticky-cta';
  bar.innerHTML =
    '<div class="sc-text">' +
      '<span class="sc-lbl">' + t.lbl + '</span>' +
      '<span class="sc-bonus">' + t.bonus + '</span>' +
    '</div>' +
    '<a class="btn btn-primary sc-btn" href="' + reg.getAttribute('href') + '">' + t.btn + '</a>';
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
