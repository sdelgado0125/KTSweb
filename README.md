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

Job requests from the **Request service** modal are sent with **[Web3Forms](https://web3forms.com)** (no backend required; works on Netlify static hosting). Submissions use **`application/json`** (text fields only). **Web3Forms charges for file uploads on paid plans**—this project does not send attachments so the free tier works.

**Where do messages go?** The **inbox is chosen in your Web3Forms account**, not in this repo. After you create an access key, open the Web3Forms dashboard and set the **notification / destination email** to your company address (e.g. `ktsgeneralsolution@gmail.com`). That address must match what you want on the site; the site only stores the public access key in `VITE_WEB3FORMS_ACCESS_KEY`.

1. Create a free access key at [web3forms.com](https://web3forms.com).
2. In the Web3Forms dashboard, set the **notification email** to the company inbox that should receive every request (e.g. `ktsgeneralsolution@gmail.com`).
3. **Local development**: in the **project root** (the folder that contains `package.json`), ensure a `.env` file exists (copy `.env.example` to `.env` if needed). Paste your Web3Forms key on the line `VITE_WEB3FORMS_ACCESS_KEY=` with **no spaces** around `=` and **no quotes**. Stop the dev server and run `npm run dev` again so Vite reloads env. If the key line is empty, the request form cannot send email.
4. **Netlify**: add the same variable under **Site settings → Environment variables** as `VITE_WEB3FORMS_ACCESS_KEY`, then trigger a new deploy so the build picks it up.

After deploy, submit a test request and confirm the email arrives (check spam). **Reply-To** should be the customer’s address. To accept uploads via Web3Forms, upgrade their plan and re-add attachment handling in code.

### “No Web3Forms key” / form won’t send

That message means the app did not receive `VITE_WEB3FORMS_ACCESS_KEY` at **build or dev-server start**—it is **not** caused by attaching a photo or file.

- **Local**: Ensure the file is named `.env` (in the project root next to `package.json`), the line looks like `VITE_WEB3FORMS_ACCESS_KEY=your_key_here` with no spaces around `=`, then **stop and restart** `npm run dev` (Vite only reads env when the server starts).
- **Netlify**: Add `VITE_WEB3FORMS_ACCESS_KEY` under environment variables (exact name, including the `VITE_` prefix), then **Deploy** again. Client-side Vite variables are baked in at build time, so a new deploy is required after adding or changing the variable.

## Update business info / content

- **Main page**: `src/App.jsx`
- **Request modal**: `src/RequestModal.jsx`
- **Styles**: `src/styles.css`
