# DBBet Tanzania — organic player-acquisition site

Static, multi-page, mobile-first site driving registered depositing **players** to DBBet in Tanzania via organic search. Sibling of `dbbetke.com` (Kenya); **fully isolated** from it and from Ray's separate `dbbetaff.com` affiliate business.

## Stack
Static HTML/CSS/JS in `public/`, deployed on Cloudflare (Git-connected auto-deploy). `wrangler.toml` has `[assets] directory = "./public"`. Brand skin reused from Kenya: dark `#121212` / accent `#ff335c` / Montserrat / DBbet wordmark.

## Strategy decisions (2026-07-08)
- **Structure: mirror Kenya** — Betting + Casino forward; **Aviator demoted to a casino subsection** (Ray's call, for cross-GEO consistency).
- **Language: full bilingual, Swahili + English, with a header toggle** from day one.

## Bilingual architecture
- **Swahili = default**, at root paths: `/`, `/betting/`, `/casino/`, `/bonuses/`, `/how-to-start/`, `/blog/`, trust pages, content pages.
- **English = mirror under `/en/`**: `/en/`, `/en/betting/`, … Each page pairs 1:1 with its Swahili version.
- Every page carries `hreflang` alternates (sw ↔ en, x-default = Swahili) + a language toggle in the header. Slugs kept English-based for both for now; localize slugs (`/kubeti/`, `/kasino/`, `/bonasi/`) in a later SEO pass.

## Localization spec (from TZ Market Intelligence Report)
- **Currency:** TZS. **Min deposit:** ~1,000 TZS (verify).
- **Payments (4, equal weight):** M-Pesa, **Mixx by Yas (formerly Tigo Pesa)**, Airtel Money, HaloPesa. Deposits = instant, levy-exempt (merchant/paybill); withdrawals carry a cash-out levy (be transparent).
- **Offer (confirmed from dbbet.co.tz):** welcome up to **$1,600 + 150 free spins**; promo-code / loyalty store. (Convert headline to TZS at launch.)
- **Regulator:** Gaming Board of Tanzania (GBT). Operating model = offshore-grey (Curaçao licence only). **Never claim a GBT licence.** No local TV/radio ads (banned 2019) → organic-only.
- **Tax:** winnings withholding (~12% casino / ~20% other, verify vs TRA) + **5% stake excise scheduled 1 Jul 2026**. Disclose honestly.
- **Responsible gaming:** no TZ helpline → signpost GamCare / Gamblers Anonymous / BeGambleAware; provide limits / self-exclusion / reality-checks.
- **Sport:** NBC Premier League (Ligi Kuu Bara) — Simba, Yanga, Azam; Dar es Salaam Derby flagship; EPL top foreign draw. Avoid implying TFF/league partnership.
- **Swahili terms:** CTAs — **Jisajili** (sign up), **Weka Dau / Kubeti** (bet), **Weka Pesa / Toa Pesa** (deposit/withdraw). Nav — **Michezo · Kasino · Jackpot · Bonasi · Mikeka**. **mkeka/mikeka** = bet slip / accumulator (key local term). Avoid "kamari".

## Placeholders to swap before launch
- `DOMAIN_PLACEHOLDER` → real domain (recommended **dbbettz.com**; not yet registered).
- `TRACKING_PLACEHOLDER` → DBBet TZ affiliate/tracking link (Ray to provide).
- Real promo code, exact offer in TZS, verified tax rates, TZ screenshots/logos.

## Status
Scaffold + design system in place. Building pages: homepage pair first, then roll out. `noindex` until launch.
