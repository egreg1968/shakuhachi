# 佐山尺八教室

Japanese-first, English-second site for a shakuhachi class in **佐山, Yamaguchi City**. Static files only. Hosted for free on **GitHub Pages**.

**Share this URL** (no custom domain needed):

https://egreg1968.github.io/shakuhachi/

Japanese is the homepage. English is at `/en/`.

## Buy a custom domain later (optional)

These were unregistered when we checked:

| Domain | Why |
| --- | --- |
| **sayama-shakuhachi.com** | Best first choice. Readable on a flyer, clear in both languages. |
| sayamashakuhachi.com | Backup if you want no hyphen. |
| yamaguchi-shakuhachi.com | Use if you want the prefecture in the name. |

Skip `.jp` for now. It costs more and usually wants a Japanese contact address.

On Namecheap: search `sayama-shakuhachi.com` → add to cart → pay. Turn on **auto-renew**. Ignore upsells (privacy is fine; hosting, email, and SSL are not needed).

## Put the site on GitHub Pages

1. Create a GitHub repository (public is fine).
2. Push this folder.
3. Repo **Settings → Pages**
   - Source: **GitHub Actions** or **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
4. After it publishes, the temporary URL is:

   `https://egreg1968.github.io/shakuhachi/`

## Point Namecheap at GitHub Pages

Namecheap → Domain List → **Manage** → **Advanced DNS**. Add:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `egreg1968.github.io` |

Then in the GitHub repo: **Settings → Pages → Custom domain** → `sayama-shakuhachi.com`. Turn on **Enforce HTTPS**. GitHub will add a `CNAME` file; keep it.

Namecheap’s own guide: [How do I link my domain to GitHub Pages](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/).

## Before the site goes public

Edit `js/config.js`:

```js
window.SITE_CONFIG = {
  email: "you@example.com",
  phone: "083-000-0000",
  lineUrl: "https://line.me/R/ti/p/@yourid",
  venueName: "会場名",
  venueAddress: "山口県山口市佐山…",
  mapsQuery: "山口県山口市佐山…"
};
```

Phone, email, and LINE stay hidden until those fields are filled. Confirm with the teacher:

- Exact room / 佐山地域交流センター or elsewhere
- Whether Saturday 13:00, ¥4,000, private ¥1,000, and flutes from ¥5,000 are still right
- LINE QR for flyers (often better than email in Japan)

## Local preview

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) (Japanese) and [http://127.0.0.1:8080/en/](http://127.0.0.1:8080/en/) (English).

## What this stack costs

- Domain: about $10–15 / year
- Hosting: $0
- HTTPS: $0

GitHub Pages is served through Fastly, including Tokyo/Osaka, so Japanese visitors do not need a Japan-based host for a site this small.
