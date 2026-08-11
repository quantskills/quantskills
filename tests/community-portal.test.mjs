import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Pages deployment builds the verified static site with least required permissions", () => {
  const workflow = readFileSync(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");
  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /contents: read[\s\S]*pages: write[\s\S]*id-token: write/);
  assert.match(workflow, /npm run build[\s\S]*verify-build[\s\S]*upload-pages-artifact/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.doesNotMatch(workflow, /curl|api\.github\.com|gh api/);
});

test("site presents community onboarding and accessible, safe catalog controls", () => {
  const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  const app = readFileSync(new URL("../site/app.mjs", import.meta.url), "utf8");
  assert.match(html, /加入社区[\s\S]*贡献 Skill[\s\S]*registry/);
  assert.match(html, /id="status"/);
  assert.match(html, /<main id="results"[^>]*aria-live/);
  assert.match(html, /skip/);
  assert.match(app, /textContent/);
  assert.doesNotMatch(app, /innerHTML|insertAdjacentHTML/);
});
