# KTS General Solution LLC Website

Single-page marketing site for **KTS General Solution LLC** (AC repair, plumbing, HVAC troubleshooting, home maintenance, building cleaning/painting, and valet trash services).

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173/`).

## Build for production

```bash
npm run build
npm run preview
```

## Request service form (email)

Job requests from the **Request service** modal are sent with **[Web3Forms](https://web3forms.com)** (no backend required; works on Netlify static hosting).

1. Create a free access key at [web3forms.com](https://web3forms.com).
2. In the Web3Forms dashboard, set the **notification email** to the address where you want submissions (e.g. `ktsgeneralsolution@gmail.com`).
3. **Local development**: copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY` to your key.
4. **Netlify**: add the same variable under **Site settings → Environment variables** as `VITE_WEB3FORMS_ACCESS_KEY`, then trigger a new deploy so the build picks it up.

The form can include optional file attachments (images/PDF). After deploy, submit a test request and confirm the email arrives and **Reply-To** behaves as expected in your inbox.

## Update business info / content

- **Main page**: `src/App.jsx`
- **Request modal**: `src/RequestModal.jsx`
- **Styles**: `src/styles.css`
