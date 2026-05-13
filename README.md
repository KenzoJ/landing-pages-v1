# Landing Page Hubspot Template 

HubSpot **theme** project for [CMS React](https://developers.hubspot.com/docs/cms/react/overview) templates. The theme lives under `src/theme/` (see `theme-hsmeta.json` → `my-theme`).

## Requirements

- **Node.js** ≥ 20 ([`package.json`](package.json) `engines`)
- [HubSpot CLI](https://developers.hubspot.com/docs/getting-started/quickstart) (`hs`), authenticated to the target account

## Setup

From the repo root:

```bash
npm install
cd src/theme/my-theme && npm install && cd ../../..
```

## Local development

```bash
npm start
```

Runs the theme dev server (`hs-cms-dev-server`) from `src/theme/my-theme`.

You can also use HubSpot project commands from this directory, for example `hs project dev` (see `hs project --help`).

## Deploy

Upload the project and create a new build:

```bash
npm run deploy
```

Equivalent to `hs project upload`.

Optional workflow:

- `hs project validate` — validate before uploading
- `hs project deploy` — deploy a build after upload
- `hs project list-builds` — list builds for the project

More detail: [HubSpot projects quickstart](https://developers.hubspot.com/docs/getting-started/quickstart).
