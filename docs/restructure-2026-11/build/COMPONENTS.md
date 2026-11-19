# dbbettz.com build kit: components (restructure 2026-11)

Internal file for the page builders. Copy the snippets, fill in the text. All CSS is already in `/styles.css`, all JS in `/app.js`. Do not add page-level `<style>` or `<script>` for these parts.

Templates: `TEMPLATE-sw.html` and `TEMPLATE-en.html` in this folder. Delete every `TEMPLATE:` comment before publishing.

## 0. Rules that apply to every snippet

- Every `refpa96317.com` link: `rel="sponsored nofollow noopener" target="_blank"`. No exceptions.
- Bonus amounts: percentages and terms only. Any sentence about the TZS maximum goes in `<span class="tzs-pending">…</span>`. Never SCR or EUR.
- Payment limits: `<span class="limits-pending">Kiwango cha chini na cha juu kinaonyeshwa kwenye cashier.</span>` / `<span class="limits-pending">The minimum and maximum are shown in the cashier.</span>`
- Licence: "Curaçao Gaming Authority, licence OGL/2024/574/0913 (Sport Tech N.V.)" (SW: "leseni"). Never 8048/JAZ.
- 18+, no win promises, no "sure win", no tips/predictions, no "best betting site". Predictors/hacks: warnings only.
- Contacts allowed: info-en@db-bet-team.com, security@db-bet-team.com, marketing@db-bet-team.com, Telegram "DBbet EN" https://telegram.me/dbbeten. Nothing agent-related, no receiving numbers.
- Brand spelling on this site: **DBBet** (as in the existing pages).

## 1. Template placeholders

| Marker | Value |
|---|---|
| `{{TITLE}}` / `{{DESC}}` | title tag / meta description |
| `{{CANONICAL}}` | this page's own full URL (SW page = SW URL, EN page = EN URL) |
| `{{SW_URL}}` / `{{EN_URL}}` | full URLs, e.g. `https://dbbettz.com/casino/aviator/` and `https://dbbettz.com/en/casino/aviator/` |
| `{{SW_PATH}}` / `{{EN_PATH}}` | the same as root-relative paths for the SW/EN toggle |
| `{{OG_TYPE}}` | `website` (pages) or `article` (help posts) |
| `{{OG_TITLE}}` / `{{OG_DESC}}` | share title / text (also used for twitter:*) |
| `{{BREADCRUMB_JSONLD}}` / `{{FAQ_JSONLD}}` / `{{EXTRA_JSONLD}}` | one `<script type="application/ld+json">` each (sections 9-10); delete the line if unused |
| `{{BREADCRUMB}}` | visible crumb (section 10) |
| `{{EYEBROW}}` `{{H1}}` `{{LEAD}}` | hero text |
| `{{HERO}}` / `{{HERO_ALT}}` | hero file stem + alt (section 3) |
| `{{MAIN}}` | all page sections after the hero |

**hreflang pattern (same on both language versions):**
```html
<link rel="canonical" href="https://dbbettz.com/casino/aviator/">            <!-- EN page: https://dbbettz.com/en/casino/aviator/ -->
<link rel="alternate" hreflang="sw" href="https://dbbettz.com/casino/aviator/">
<link rel="alternate" hreflang="en" href="https://dbbettz.com/en/casino/aviator/">
<link rel="alternate" hreflang="x-default" href="https://dbbettz.com/casino/aviator/">
```
x-default is always the Swahili URL. 404 pages: no canonical/hreflang, `noindex, nofollow`.

**Head order:** meta → font preload → styles.css → canonical/hreflang → icons → OG/twitter → JSON-LD → GA (inline, gtag.js injected after `load`). No Google Fonts links. No `<script async src=…gtag…>`.

## 2. Menu and CTA links

Menu (identical on every page except `class="active"`):
- the link whose `href` equals the page path gets `class="active"`;
- `/casino/` → `class="nav-dd-top active"`; `/casino/aviator/` → `class="nav-dd-top active"` and `class="nav-sub active"`;
- new pages `/payments/` and `/blog/` (Msaada / Help) get `class="active"` on their own link.

| CTA | href (write `&amp;` in HTML) | Label SW / EN |
|---|---|---|
| Register, sport (default) | `https://refpa96317.com/L?tag=d_5901886m_11213c_sport&site=5901886&ad=11213` | Jisajili / Register |
| Register, casino (on /casino/ and /casino/aviator/, header + body) | `https://refpa96317.com/L?tag=d_5901886m_11213c_casino&site=5901886&ad=11213` | Jisajili / Register (body: Cheza kasino / Play casino) |
| APK download | `https://refpa96317.com/L?tag=d_5901886m_69585c_apk&site=5901886&ad=69585` | Pakua APK / Download APK |
| Game deep link | casino link + `&r=<path without language>` (section 6) | Cheza … / Play … |

The GA click listener sends `cta_click` with `cta_type` = sport / casino / apk from the `c_…` part of the tag, so keep the tags exactly as above. The sticky mobile bar (app.js) copies the header Register href, so the casino pages get the casino tag automatically.

## 3. Page hero (`.page-hero`)

On phones the image sits ABOVE the text (max ~58vh, centred, radial fade); on ≥900px the text is left and the image right (side + bottom fade). No frame, no box, no shadow: the image melts into the page over a soft pink glow. Hero files (4:5, 480/720/960, AVIF + WebP) in `/images/hero/`:

| `{{HERO}}` | Suggested `alt` SW | Suggested `alt` EN |
|---|---|---|
| `hero-home` | Simu yenye app ya DBBet mbele ya bendera ya Tanzania, mpira, chipu za kasino na Mlima Kilimanjaro | Phone showing the DBBet app in front of the Tanzanian flag, a football, casino chips and Mount Kilimanjaro |
| `hero-betting` | Mpira ukiruka juu ya uwanja wenye taa za pinki, simu yenye DBBet na kidhibiti cha mchezo | Football flying over a pink-lit stadium, a phone with DBBet and a game controller |
| `hero-casino-crash` | Meza ya roulette, chipu za DBBet na karata, na ndege ya crash ikipaa angani usiku | Roulette wheel, DBBet chips and cards, with a crash-game plane climbing in the night sky |
| `hero-bonuses` | Sanduku la zawadi la DBBet likifunguka, na sarafu na zawadi ndogo mbele ya Kilimanjaro | A DBBet gift box opening, with coins and small gifts in front of Kilimanjaro |
| `hero-payment` | Pochi ya DBBet, simu inayoonyesha malipo yamefaulu na ngao ya usalama | A DBBet wallet, a phone showing a successful payment and a security shield |
| `hero-how-to-start` | Simu yenye kitufe cha kupakua app ya DBBet juu ya ngazi zenye sarafu, machweo ya savanna | Phone with the DBBet app download button above coin steps, savanna sunset |
| `hero-help` | Simu yenye fomu ya akaunti ya DBBet, vipokea sauti na viputo vya ujumbe wa msaada | Phone with a DBBet account form, a headset and support chat bubbles |

```html
<section class="page-hero"><div class="wrap page-hero-grid">
 <div class="page-hero-text">
 <div class="crumb"><a href="/">Nyumbani</a> / Kasino &amp; Crash</div>
 <span class="eyebrow">DBBet Tanzania</span>
 <h1>…</h1>
 <p class="lead">…</p>
 <div class="hero-cta">
 <a href="https://refpa96317.com/L?tag=d_5901886m_11213c_casino&amp;site=5901886&amp;ad=11213" class="btn btn-primary btn-lg" rel="sponsored nofollow noopener" target="_blank">Cheza kasino</a>
 <a href="https://refpa96317.com/L?tag=d_5901886m_69585c_apk&amp;site=5901886&amp;ad=69585" class="btn btn-outline btn-lg" rel="sponsored nofollow noopener" target="_blank">Pakua APK</a>
 </div>
 <p class="hero-note">18+ · Cheza kwa busara. Vigezo &amp; masharti vinatumika.</p>
 </div>
 <div class="page-hero-media">
 <picture>
 <source type="image/avif" srcset="/images/hero/hero-casino-crash-480.avif 480w, /images/hero/hero-casino-crash-720.avif 720w, /images/hero/hero-casino-crash-960.avif 960w" sizes="(min-width:900px) 500px, 92vw">
 <source type="image/webp" srcset="/images/hero/hero-casino-crash-480.webp 480w, /images/hero/hero-casino-crash-720.webp 720w, /images/hero/hero-casino-crash-960.webp 960w" sizes="(min-width:900px) 500px, 92vw">
 <img src="/images/hero/hero-casino-crash-720.webp" width="960" height="1200" alt="Meza ya roulette, chipu za DBBet na karata, na ndege ya crash ikipaa angani usiku" fetchpriority="high" decoding="async">
 </picture>
 </div>
</div></section>
```
One hero per page, never lazy-loaded. Keep `fetchpriority="high"` only on the hero.

## 4. Screenshot frame (`.shot-box`)

Empty phone frame for screenshots that are still to come. Neutral icon only, no text. Swap in the `<img>` later.
```html
<div class="shot-row">
 <div class="shot-box" aria-hidden="true"><svg class="shot-ic" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg></div>
 <!-- later: <div class="shot-box"><img src="/images/…/step-1.webp" width="360" height="720" alt="…" loading="lazy" decoding="async"></div> -->
</div>
<p class="shot-cap">…</p>   <!-- optional caption under a single frame -->
```
`.shot-row` = 3 per row (2 on phones). A single `.shot-box` works on its own (max 240px, centred).

## 5. Bonus carousel (`.carousel`) + detail sections

Works without JS (swipe / scroll-snap). app.js adds arrows, dots, 6 s autoplay (pauses on hover, focus, touch, arrow use, hidden tab, reduced motion), ←/→ keys, and the card → section jump with the `.flash` highlight and GA `carousel_click {bonus: id}`.
Cards visible: ~1.15 phones, 2 at ≥700px, 3 at ≥1100px.

Images in `/images/carousel/` (16:9, 600 and 1200 wide, AVIF + WebP):
`bonus-01-sports-welcome`, `bonus-02-deposit-steps`, `bonus-03-saturday`, `bonus-04-promo-store`, `bonus-05-birthday`, `bonus-06-cashback`, `bonus-07-casino-welcome`, `bonus-08-aviator-60-flights`, `bonus-09-games`, `bonus-10-levels`.
No card for the "Daily deposit bonus" (not live on db-bet.com).

```html
<section class="section tight"><div class="wrap">
<div class="carousel" aria-roledescription="carousel" aria-label="Bonasi za DBBet">
 <div class="carousel-head"><div class="section-head" style="margin-bottom:0"><span class="eyebrow">Bonasi</span><h2>…</h2></div></div>
 <div class="carousel-viewport">
 <button class="car-btn car-prev" type="button" aria-label="Iliyotangulia"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button>
 <ul class="carousel-track" tabindex="0" aria-label="Kadi za bonasi">

 <li class="car-card"><a class="car-link" href="#bonasi-karibu-michezo">
 <span class="car-img"><picture>
 <source type="image/avif" srcset="/images/carousel/bonus-01-sports-welcome-600.avif 600w, /images/carousel/bonus-01-sports-welcome-1200.avif 1200w" sizes="(min-width:1100px) 370px, (min-width:700px) 46vw, 82vw">
 <img src="/images/carousel/bonus-01-sports-welcome-600.webp" srcset="/images/carousel/bonus-01-sports-welcome-600.webp 600w, /images/carousel/bonus-01-sports-welcome-1200.webp 1200w" sizes="(min-width:1100px) 370px, (min-width:700px) 46vw, 82vw" width="600" height="338" alt="" loading="lazy" decoding="async">
 </picture></span>
 <div class="car-body"><h3>Bonasi ya karibu: michezo</h3><p>100% kwenye amana yako ya kwanza ya michezo.</p><span class="car-more">Soma zaidi →</span></div>
 </a></li>
 <!-- …one <li class="car-card"> per bonus… -->

 </ul>
 <button class="car-btn car-next" type="button" aria-label="Inayofuata"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button>
 </div>
 <div class="carousel-foot">
 <div class="car-dots"></div>
 <button class="car-pause" type="button" aria-pressed="false" aria-label="Simamisha kuzunguka kwa kadi"><svg class="ic-pause" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg><svg class="ic-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button>
 </div>
</div>
</div></section>
```
EN labels: `aria-label="DBBet bonuses"`, "Previous", "Next", "Bonus cards", "Pause card rotation", card link text "Learn more →". The dots are built by JS (leave `.car-dots` empty). The first card image may drop `loading="lazy"` only if the carousel is in the first screen.

Detail section each card jumps to (the card `href="#id"` must match the section `id`):
```html
<section class="section tight bonus-detail" id="bonasi-karibu-michezo"><div class="wrap prose">
 <h2>Bonasi ya karibu ya michezo: 100%</h2>
 <p>DBBet inaongeza 100% kwenye amana yako ya kwanza ya michezo. <span class="tzs-pending">Kiwango cha juu kwa TZS kinaonyeshwa kwenye akaunti yako ya DBBet.</span></p>
 <ul>
 <li>Chagua bonasi ya michezo kabla ya kuweka pesa, jaza profaili yako na uthibitishe namba ya simu.</li>
 <li>Bonasi ichezwe mara 5 kwenye mkeka wenye mechi 3 au zaidi, na angalau mechi 3 ziwe na odds 1.40 au zaidi.</li>
 <li>Muda: ndani ya siku 30 tangu ujisajili.</li>
 </ul>
 <p><a href="https://refpa96317.com/L?tag=d_5901886m_11213c_sport&amp;site=5901886&amp;ad=11213" class="btn btn-primary" rel="sponsored nofollow noopener" target="_blank">Jisajili</a></p>
</div></section>
```
(The 5x figure follows the official EN page; the official SW page says 3x. Use 5x and flag it NEEDS VERIFICATION in your report.)
Use short ASCII ids, one per bonus, e.g. `bonasi-karibu-michezo`, `amana-ya-2-na-3`, `jumamosi`, `duka-la-promo`, `siku-ya-kuzaliwa`, `rejesho`, `karibu-kasino`, `aviator-jumatano`, `games`, `levels` (EN: `sports-welcome`, `2nd-3rd-deposit`, `saturday`, `promo-store`, `birthday`, `cashback`, `casino-welcome`, `aviator-wednesday`, `games`, `levels`). The id is what GA receives.

## 6. Game tile (`.game-tile`) with a partner deep link

```html
<div class="game-grid">
 <a class="game-tile wide" href="https://refpa96317.com/L?tag=d_5901886m_11213c_casino&amp;site=5901886&amp;ad=11213&amp;r=slots/game/112428/chicken-road" rel="sponsored nofollow noopener" target="_blank">
 <span class="gt-img"><img src="/images/slots/chicken-road.webp" width="600" height="400" alt="Chicken Road" loading="lazy" decoding="async"></span>
 <span class="gt-body"><span class="gt-name">Chicken Road</span><span class="gt-tag">Crash</span></span>
 </a>
</div>
```
- `.game-tile` = square image (1:1). Add `wide` for 3:2 images (all existing `/images/slots/*.webp` are 600×400, so use `wide`).
- Grid: 4 per row desktop, 3 tablet, 2 phones.
- Deep-link format: casino link + `&r=` + the db-bet.com path **without** the `/en/` or `/sw/` prefix, e.g. `&r=slots/game/141086/aviator`. The existing casino links on this site use exactly `tag=d_5901886m_11213c_casino&site=5901886&ad=11213` (checked: 16 links on /casino/ and /en/casino/). **NEEDS VERIFICATION: that the `r` parameter is honoured by the partner redirect and lands on the game page.** Until confirmed, the link still lands on the casino.
- Paths from the official notes (19 Nov 2026), for the existing tile images:

| Image | Name | `r=` value |
|---|---|---|
| (none yet) | Aviator | `slots/game/141086/aviator` |
| prime-coins.webp | Prime Coins Hold to Win | `slots/game/156810/prime-coins-hold-to-win` |
| juicy-fruits.webp | Juicy Fruits Sunshine Rich | `slots/game/63089/juicy-fruits-sunshine-rich` |
| sweet-bonanza.webp | Sweet Bonanza 1000 | `slots/game/95426/sweet-bonanza-1000` |
| money-coming.webp | Money Coming | `slots/game/83501/money-coming` |
| coin-era-2.webp | Coin Era 2 Hold to Win | `slots/game/141629/coin-era-2-hold-to-win` |
| clover-coins.webp | Clover Coins 3x5 | `slots/game/163659/clover-coins-3x5-hit-the-cash` |
| avia-masters-2.webp | Aviamasters 2 | `slots/game/171503/aviamasters-2` |
| sky-of-olympus.webp | Sky of Olympus | `slots/game/163059/sky-of-olympus` |
| chicken-road.webp | Chicken Road | `slots/game/112428/chicken-road` |
| coins-of-alkemor.webp | Coins of Alkemor | `slots/game/100378/coins-of-alkemor-hold-win` |
| wild-hot-40.webp | Wild Hot 40 Free Spins | `slots/game/79555/wild-hot-40-free-spins` |
| jetx.webp | JetX | **do not use**: JetX was not found on db-bet.com |

## 7. Home 6-tile grid (`.tiles-6`)

3 + 3 on desktop, 2 per row on phones. Reuses the `.tile` look. New icons: `/images/brand/icon-wallet.svg` (Malipo) and `/images/brand/icon-help.svg` (Msaada).
```html
<div class="tiles-6">
 <a class="tile" href="/how-to-start/"><div class="ic ic-img"><img src="/images/brand/icon-phone.webp" width="52" height="52" alt="" loading="lazy"></div><h3>Jinsi ya kuanza</h3><p>…</p><span class="go">Anza sasa →</span></a>
 <a class="tile" href="/betting/"><div class="ic ic-img"><img src="/images/brand/icon-ball.webp" width="52" height="52" alt="" loading="lazy"></div><h3>Kubeti</h3><p>…</p><span class="go">…</span></a>
 <a class="tile" href="/casino/"><div class="ic ic-img"><img src="/images/brand/icon-slot.webp" width="52" height="52" alt="" loading="lazy"></div><h3>Kasino &amp; Crash</h3><p>…</p><span class="go">…</span></a>
 <a class="tile" href="/bonuses/"><div class="ic ic-img"><img src="/images/brand/icon-gift.webp" width="52" height="52" alt="" loading="lazy"></div><h3>Bonasi</h3><p>…</p><span class="go">…</span></a>
 <a class="tile" href="/payments/"><div class="ic ic-img"><img src="/images/brand/icon-wallet.svg" width="52" height="52" alt="" loading="lazy"></div><h3>Malipo</h3><p>…</p><span class="go">…</span></a>
 <a class="tile" href="/blog/"><div class="ic ic-img"><img src="/images/brand/icon-help.svg" width="52" height="52" alt="" loading="lazy"></div><h3>Msaada</h3><p>…</p><span class="go">…</span></a>
</div>
```

## 8. Lists and tables

Info grid (esports titles, live-casino categories, crash games):
```html
<div class="info-grid">
 <div class="info-item"><span class="chip">Live</span><h3>CS 2</h3><p>…</p></div>
 <div class="info-item"><h3>Dota 2</h3><p>…</p></div>
</div>
```
Feature list (pink ticks, 2 columns on desktop; add `one-col` for one column):
```html
<ul class="feature-list">
 <li><b>Kubeti live</b> saa 24 kwa siku.</li>
 <li>…</li>
</ul>
```
Data table (payment methods; always wrap limits in `limits-pending`):
```html
<div class="data-table"><table>
 <caption>…</caption>
 <thead><tr><th scope="col">Njia</th><th scope="col">Kuweka</th><th scope="col">Kutoa</th></tr></thead>
 <tbody>
 <tr><th scope="row">…</th><td><span class="limits-pending">Kiwango cha chini na cha juu kinaonyeshwa kwenye cashier.</span></td><td>…</td></tr>
 </tbody>
</table></div>
```
The table scrolls inside its own box on phones (min-width 520px), never the page.

## 9. FAQ (markup + FAQPage JSON-LD)

Visible questions and the JSON-LD must match word for word. First item `open`.
```html
<section class="section tight"><div class="wrap">
 <div class="section-head"><span class="eyebrow">Maswali</span><h2>Maswali yanayoulizwa mara kwa mara</h2></div>
 <div class="faq">
 <details class="qa" open><summary>Swali la kwanza?</summary><div class="a">Jibu fupi.</div></details>
 <details class="qa"><summary>Swali la pili?</summary><div class="a">Jibu fupi.</div></details>
 </div>
</div></section>
```
```html
<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Swali la kwanza?","acceptedAnswer":{"@type":"Answer","text":"Jibu fupi."}},{"@type":"Question","name":"Swali la pili?","acceptedAnswer":{"@type":"Answer","text":"Jibu fupi."}}]}</script>
```
No HTML inside the JSON-LD text. No amounts in TZS/SCR/EUR in answers.

## 10. Breadcrumb (markup + BreadcrumbList JSON-LD)

Root names: SW "Nyumbani" (`/`), EN "Home" (`/en/`). Last crumb is plain text (no link). Help posts sit under SW "Msaada" `/blog/`, EN "Help" `/en/blog/`.
```html
<div class="crumb"><a href="/">Nyumbani</a> / <a href="/casino/">Kasino &amp; Crash</a> / Aviator</div>
```
```html
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Nyumbani","item":"https://dbbettz.com/"},{"@type":"ListItem","position":2,"name":"Kasino & Crash","item":"https://dbbettz.com/casino/"},{"@type":"ListItem","position":3,"name":"Aviator","item":"https://dbbettz.com/casino/aviator/"}]}</script>
```
EN: `"name":"Home","item":"https://dbbettz.com/en/"`, `"Casino & Crash"` → `https://dbbettz.com/en/casino/`, etc. Home pages have no breadcrumb.

## 11. Pending-figure markers

```html
<span class="tzs-pending">Kiwango cha juu kwa TZS kinaonyeshwa kwenye akaunti yako ya DBBet.</span>
<span class="tzs-pending">The TZS maximum is shown in your DBBet account.</span>
<span class="limits-pending">Kiwango cha chini na cha juu kinaonyeshwa kwenye cashier.</span>
<span class="limits-pending">The minimum and maximum are shown in the cashier.</span>
```
They look like normal text. The owner will search for these classes to drop in confirmed figures.
