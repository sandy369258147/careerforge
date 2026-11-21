# Careerforge Consulting – React website

A Vite + React + React Router rebuild of https://carrerforge.com/ that runs locally.

## Run it

```bash
npm install
npm run assets    # optional: downloads the original images/logo from the live site
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run deploy    # build and publish to the gh-pages branch
```

The site works without `npm run assets`: every image has a local SVG placeholder.
When a real file exists (e.g. `src/assets/images/service-talent.webp`), it replaces the placeholder automatically.

The deploy command clears the temporary checkout before staging the build, avoiding Windows command-line length limits when the published branch has many files.

## Where things live

```
src/assets/
  logo/          logo.<ext> (downloaded) + logo-mark.svg (footer mark)
  images/        photos and client logos (downloaded, named by key)
  icons/         one .svg per icon (mail, phone, pin, check, social...)
  placeholders/  fallback SVG for every image key
  manifest.js    every image key -> original URL, folder, alt text
  index.js       asset(key) and icons helpers
public/favicon.svg
src/data/content.js   all copy: nav, services, steps, FAQs, testimonials, contact details
src/pages/            Home, About, Services, Career, Contact, BookDemo
src/components/       Header, Footer, ContactForm, Faq, Testimonials, ...
src/lib/submitForm.js form handler (currently opens a mailto: link)
```

To swap an image, drop a file named `<key>.<ext>` into `src/assets/images/` (or `logo/`).

## Notes

- Only the home page was readable from the live site. About, Services, Career, Contact and
  Get Consultation pages were composed from the home page content. Edit them in `src/pages`.
- FAQ copy was rewritten for staffing (the live FAQ is about website development).
- Case-study captions and testimonial avatars (initials) are neutral stand-ins; the live site
  uses lorem ipsum and stock photos there.
- The live footer shows a placeholder phone number (+91 123456778); it was left out.
- Social links are `#`; set real URLs in `src/data/content.js`.
