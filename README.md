# Omni View Journal

A multidisciplinary journal website exploring technology, science, culture, and the ideas shaping our world.

**Live site:** [omniviewjournal.com](https://omniviewjournal.com)

## Project Structure

```
├── index.html          # Main journal homepage
├── css/
│   └── style.css       # Site styles
├── js/
│   └── main.js         # Client-side interactivity
├── images/
│   └── logo.svg        # Site logo (placeholder — replace with final logo)
└── README.md
```

## Getting Started

This is a static website. To view it locally, open `index.html` in a browser or use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

## Replacing the Logo

Drop your logo file into the `images/` directory and update the `<img>` tag in `index.html` to reference it:

```html
<img src="images/your-logo.png" alt="Omni View Journal logo" class="logo-img">
```

Also update the favicon `<link>` in the `<head>` section if using a different format.

## Deployment

This site is deployed automatically to **GitHub Pages** when changes are pushed to the `main` branch.

**To enable deployment:**

1. Go to your repository **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Merge this PR into `main` — the workflow will run and deploy the site automatically

Your live site will be available at:
`https://<your-username>.github.io/chatgenius/`

To use a custom domain (e.g. omniviewjournal.com), configure it in **Settings → Pages → Custom domain**.
