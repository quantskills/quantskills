import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const app = readFileSync(new URL("../site/app.mjs", import.meta.url), "utf8");

test("client filters catalog data and restores URL state", () => {
  for (const token of ["category", "subcategory", "stage", "project_type", "platform", "profile", "compatibility", "URLSearchParams", "catalog.json"]) assert.match(app, new RegExp(token));
  assert.match(app, /No results/);
});
