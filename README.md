# Jake Builds' Personal Website 📝

This is the source code for my personal website and blog, built with [Astro](https://astro.build), styled with Tailwind CSS, and automatically deployed to **GitHub Pages** via GitHub Actions.

---

## 🚀 About

I'm Jake, a software developer, open source enthusiast, and tinkerer of modern web technology. This website hosts my personal blog and portfolio of experiments.

---

## 📁 Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # UI helper components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── LICENSE              # Dual license (CC BY 4.0 + MIT)
```

---

## 🛠️ Local Development Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs project dependencies |
| `pnpm run dev` | Starts the local dev server at `localhost:4321` |
| `pnpm run build` | Builds the production site to `./dist/` |
| `pnpm run preview` | Previews the build locally before deploying |

---

## ⚙️ Deployment

This site is set up for automatic deployment to **GitHub Pages** using GitHub Actions:
* Pushing changes to the `main` branch triggers the [.github/workflows/deploy.yml](.github/workflows/deploy.yml) workflow.
* The workflow sets up Node 24, compiles the Astro codebase to `./dist`, and deploys the static files directly to your GitHub Pages site at `https://jake-builds.github.io/`.

---

## 📄 License

This repository is dual-licensed:
* **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
* **Code & Snippets**: Licensed under the [MIT License](LICENSE)

---

## 🙌 Credits & Thanks

* Special thanks to [Sat Naing](https://github.com/satnaing) for the excellent [AstroPaper theme](https://astro-paper.pages.dev/) that served as the design basis.
* Special thanks to [Peter Steinberger](https://github.com/steipete) for the customized [steipete.me fork](https://github.com/steipete/steipete.me) that served as the foundation template.
