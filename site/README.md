# GTA 6 Launch Playbook — site

The public one-page site for the playbook, built with [Astro](https://astro.build).

## Develop

```bash
cd site
npm install
npm run dev
```

## Build

```bash
npm run build   # static output in site/dist/
```

## Deploy

Automatic. A push to `main` that touches `site/**` triggers
[`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which builds
with `withastro/action` and publishes to GitHub Pages at
<https://cfpperche.github.io/gta6-launch-playbook/>.

One-time setup: in **repo Settings → Pages**, set the source to **GitHub Actions**.

## Configure the email capture

The subscribe form needs a real endpoint. Create a free form at
[Formspree](https://formspree.io) (or use Beehiiv / Buttondown) and paste its
endpoint into the `SUBSCRIBE_ENDPOINT` constant near the top of
`src/pages/index.astro`. Until then the form renders a small "not configured"
note and does not deliver.
