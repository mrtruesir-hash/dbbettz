# DBBet Tanzania — Progress & Handoff

*Last updated 2026-07-08. This file is the cross-device/cross-session handoff — read it first to resume.*

## What this project is
Organic player-acquisition site for **DBBet in Tanzania** (drive registered, depositing PLAYERS via organic search — not affiliates). Sibling of the Kenya site.
- **Kenya (done, paused):** `C:\Users\cosev\Desktop\dbbetke.com` → GitHub `mrtruesir-hash/dbbetke` (latest `d8e6a4f`). Phase 1 (SEO heads) + Phase 2 (trust + content pages) complete, 15 pages, noindex, Phase 3 (launch) pending.
- **Tanzania (this repo, in progress):** fully **isolated** from Kenya and from Ray's separate `dbbetaff.com` affiliate business.

## Decisions locked (2026-07-08)
- **Structure: mirror Kenya** — Betting + Casino forward, **Aviator demoted to a casino subsection**.
- **Language: full bilingual Swahili + English** with a header toggle. **Swahili = default at root** (`/`, `/betting/`, …); **English mirror under `/en/`**. hreflang alternates on every page (sw ↔ en, x-default = sw).

## Built so far
- Scaffold: design system copied from Kenya (`styles.css`, `app.js`, favicon/OG assets), `wrangler.toml` (Cloudflare), `robots.txt` (noindex), `README.md`.
- CSS: added `.lang-toggle` (header language switcher).
- **Homepage pair DONE + previewed OK:** `public/index.html` (Swahili) + `public/en/index.html` (English). Renders correctly; language toggle works.
- Research: 5 workstreams complete → `docs/TZ-Market-Intelligence-Report.md` (read it for full detail).

## Localization spec (applied)
- Currency **TZS**; min deposit **~1,000 TZS** (verify).
- Payments = **4 wallets, equal**: M-Pesa, **Mixx by Yas (formerly Tigo Pesa)**, Airtel Money, HaloPesa. Deposits levy-exempt/instant; withdrawals carry a cash-out levy (disclose).
- Offer (confirmed from dbbet.co.tz): welcome **up to $1,600 + 150 free spins** → shown indicatively as **4,000,000 TZS** (confirm real TZS figure).
- Regulator **GBT**; offshore-grey (Curaçao only) → **never claim a GBT licence**. No TV/radio ads (banned 2019) → organic-only.
- Tax: winnings withholding (~12% casino / ~20% other, verify vs TRA) + **5% stake excise from 1 Jul 2026**.
- Responsible gaming: **no TZ helpline** → signpost GamCare / Gamblers Anonymous / BeGambleAware.
- Sport: **NBC Premier League** — Simba, Yanga, Azam; Dar es Salaam Derby; EPL top foreign draw. Don't imply TFF/league partnership.
- Swahili terms: **Jisajili** (sign up), **Weka Dau / Kubeti** (bet), **Weka Pesa / Toa Pesa** (deposit/withdraw); nav **Michezo · Kasino · Jackpot · Bonasi · Mikeka**; **mkeka/mikeka** = bet slip / accumulator (key local term). Avoid "kamari".

## Placeholders to swap before launch
- `DOMAIN_PLACEHOLDER` → real domain (recommended **dbbettz.com**, not yet registered).
- `TRACKING_REGISTER_URL` / `TRACKING_APK_URL` → DBBet-TZ affiliate/tracking links (Ray to provide).
- `DBTZ` promo code, exact TZS offer, verified tax rates, TZ screenshots/logos.

## Remaining work (bilingual — each page needs SW at root + EN at /en/)
Mirror the Kenya page set: how-to-start, bonuses, betting, casino (Aviator subsection), blog, about, contact, responsible-gaming, terms, privacy, cookies, promo-code, how-to-bet, betting-tax → then `sitemap.xml` (both languages) + footer wiring. Kenya versions are the content template to localize.

## Open inputs needed from Ray
Domain · DBBet-TZ tracking links · real offer amounts + promo code · screenshots (deposit/withdraw, app) · verify tax rates.

## Git / sync
Local repo only so far (commits on `main`). **No GitHub remote yet** — to bridge to the SIO/phone session, create GitHub repo `mrtruesir-hash/dbbettz` (public, empty) then `git remote add origin …` + `git push -u origin main`. Cached laptop git creds should work (same as dbbetke).
