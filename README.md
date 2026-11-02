# David Angelou, engineering portfolio

Static site built with [Astro](https://astro.build). Live at https://angeloudavidj-png.github.io.

## Where the words live

Almost all text is in one file: `src/data/projects.ts`.

| What you want to change | Where in `projects.ts` |
|---|---|
| Name, one-line statement, school, email, links | `profile` at the top |
| A project's title, summary, role, dates | that project's block in `projects` |
| "What I did" bullets | `did: [ ... ]` |
| Big blue numbers on a project page | `results: [ { value, label } ]` |
| Image captions and alt text | `figure` and `gallery` |
| Experience list | `experience` |
| Tools and methods | `skills` |

Two things live outside that file:

- The results table at the top of the home page: `ledger` in `src/pages/index.astro`.
- The "Get in touch" sentence: bottom of `src/pages/index.astro`.

## Editing rules that keep the site building

- Text sits between single quotes: `'like this'`. For an apostrophe inside, use `’` (as in `team’s`) or switch that line to double quotes.
- Keep the comma after each item in a list.
- Order of projects in the file is the order on the site. Projects with a `figure` show as large features on the home page; the rest show in the list below them.
- House style: no em dashes or double hyphens.
- To add an image: put it in `src/assets/figures/`, add an `import` line at the top of `projects.ts`, then reference it in `figure` or `gallery`.

## Preview and build

Needs Node 22 or newer. Run these in a copy that is not inside iCloud, because `node_modules` is large and iCloud will try to sync it.

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
```

## Publishing (when ready)

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`. Pushing it needs a GitHub login with the `workflow` permission (`gh auth refresh -h github.com -s workflow`). The site URL is set in `astro.config.mjs`.
