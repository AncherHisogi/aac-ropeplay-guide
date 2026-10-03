# ArcheAge Classic – New Player Guide

A static website (plain HTML/CSS/JS, no build step) ready for GitHub Pages.

```
archeage-guide/
├── index.html      ← ALL the content lives here (edit this)
├── css/style.css   ← look & colors (colors are at the top)
├── js/main.js      ← auto sidebar, combo chips, image zoom (rarely edited)
└── images/         ← screenshots
```

## Put it online (GitHub Pages)

1. Create a new repository on GitHub (e.g. `archeage-guide`), public.
2. Upload **everything inside this folder** (so `index.html` is at the top level of the repo).
   Easiest way: on the repo page click **Add file → Upload files** and drag the contents in.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/archeage-guide/`.

To update later: edit `index.html` on GitHub (pencil icon) or locally, commit, and the site refreshes by itself.

To preview locally, just double-click `index.html`.

## Editing content

Open `index.html`. Each part of the guide is a `<section>`. **The numbering (00, 01, …) and the
sidebar menu are automatic**, so you never have to renumber anything.

### Add a new section
Copy this block anywhere between the other sections (the order in the file = the order on the page):

```html
<section class="guide-section" id="my-section">
  <h2>My New Section</h2>
  <p>Text goes here.</p>
</section>
```
Give it a unique `id` (lowercase, no spaces). It shows up in the sidebar automatically.

### Add a sub-heading, paragraph, list
```html
<h3>Sub heading</h3>
<p>A paragraph with <strong>bold</strong> and <em>italic</em>.</p>
<ul>
  <li>Bullet one</li>
  <li>Bullet two</li>
</ul>
```

### Add a skill combo (turns into little chips with arrows)
Just separate skills with `->`:
```html
<div class="combo" data-title="Optional title">Charge -> Triple Slash -> Whirlwind</div>
```

### Add a new build card (with a screenshot)
1. Put your screenshot in `images/` (use `.webp`, `.jpg` or `.png`).
2. Copy this inside the section you want:
```html
<article class="build" id="my-build">
  <header><h4>Build Name</h4><span class="chip blue">Small scale</span></header>
  <figure>
    <img src="images/my-build.webp" loading="lazy" alt="Describe the image">
  </figure>
  <p>Notes about the build.</p>
</article>
```
Chip colors: `chip`, `chip gold`, `chip blue`, `chip green`, `chip red`.

### A single image with a caption
```html
<figure class="fig-medium">
  <img src="images/my-image.webp" alt="Description">
  <figcaption>Caption text</figcaption>
</figure>
```
Use `fig-narrow` (small), `fig-medium`, or leave the class off for full width.
Several small images in a row: wrap multiple `<figure>`s in `<div class="gallery"> … </div>`.
Clicking any image zooms it.

### Callout boxes
```html
<div class="note"><p>Blue info box</p></div>
<div class="tip"><p>Green tip box</p></div>
<div class="warn"><p>Red warning box</p></div>
<div class="todo"><p>Dashed "coming soon" placeholder</p></div>
```

### Numbered steps
```html
<ol class="timeline">
  <li>First step</li>
  <li>Second step</li>
</ol>
```

### Table
```html
<div class="table-wrap">
  <table>
    <thead><tr><th>Action</th><th>Key</th></tr></thead>
    <tbody>
      <tr><td>Skill 1</td><td class="key">Q</td></tr>
    </tbody>
  </table>
</div>
```

### Link to another part of the guide
```html
<a href="#gold">Go to Gold Making</a>
```

## Changing the theme
Open `css/style.css`. The first block (`:root { … }`) holds every color. The main accent is
`--gold`; swap it for any hex color to re-theme the whole site.

## Image tips
Big PNG screenshots slow the page down. Converting to `.webp` (e.g. with squoosh.app) usually cuts
them to a tenth of the size with no visible loss.
