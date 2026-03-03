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
