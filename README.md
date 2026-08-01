# Site config

Canonical config files for website projects.

| File                 | What it does                                                                                           |
| :------------------- | :----------------------------------------------------------------------------------------------------- |
| `.editorconfig`      | Editor defaults: tabs, LF, utf-8, final newline, 120 cols                                              |
| `.env.example`       | The two env vars a build expects: `ELEVENTY_ENV`, `URL`                                                |
| `.gitignore`         | Standard ignores plus a Claude Code section                                                            |
| `.npmrc`             | `save-exact=true`, `engine-strict=true` for reproducible installs                                      |
| `.nvmrc`             | Pins Node to 22                                                                                        |
| `.prettierignore`    | Keeps Prettier off build output, lockfiles, generated html                                             |
| `.prettierrc`        | Prettier: single quotes, tabs, no trailing commas, Jinja/njk + html parsing                            |
| `ai.gitignore`       | Full AI-tool ignore list (Claude, Cursor, Copilot, Gemini, MCP, agents)                                |
| `eleventy.config.js` | Minimal Eleventy config wiring the Baseline plugin: inline settings + `addGlobalData`                  |
| `eslint.config.js`   | Flat ESLint config: recommended JS rules, node/browser globals per folder                              |
| `netlify.toml`       | Build command, publish dir, and the security headers block                                             |
| `package.json`       | Site scaffold: standard scripts, eslint/prettier tooling, Baseline deps                                |
| `robots.txt`         | Plain robots: allow all, `Content-Signal` (search yes, ai-input yes, ai-train no), sitemap             |
