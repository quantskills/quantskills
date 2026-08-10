import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("site has landmarks labels and visible focus hooks", () => {
  const html = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
  const css = readFileSync(new URL("../site/styles.css", import.meta.url), "utf8");
  assert.match(html, /<header|<nav|<main|<aside/);
  assert.match(html, /<label/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /--contrast/);
});
