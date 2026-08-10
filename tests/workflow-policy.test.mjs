import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const workflow = readFileSync(new URL("../.github/workflows/daily-build.yml", import.meta.url), "utf8");
test("migration workflow is manual snapshot-only and least privilege", () => {
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /snapshot_url:[\s\S]*required: true/);
  assert.match(workflow, /expected_snapshot_id:[\s\S]*required: true/);
  assert.doesNotMatch(workflow, /schedule:|gh repo list|api\.github\.com|categoryOverride|git add \./);
  assert.match(workflow, /contents: write/);
  assert.match(workflow, /actions\/checkout@v4/);
  assert.match(workflow, /actions\/setup-node@v4/);
  assert.match(workflow, /README\.md README\.en\.md site\/catalog\.json/);
  assert.match(workflow, /213890245\+abgyjaguo@users\.noreply\.github\.com/);
});
