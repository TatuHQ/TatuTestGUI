import { defineConfig, devices } from "@playwright/test";

/**
 * The browser accessibility gate (#123).
 *
 * The suite runs against `vite preview` of the real production bundle, with
 * the recorded fixture API behind it (scripts/e2e-api.mjs). Unlike jsdom,
 * axe's colour-contrast rule runs here for real — which is the check #170
 * showed was missing. The build is part of the webServer command so a stale
 * dist can never be what CI green-lights.
 */
const port = Number(process.env.E2E_PORT ?? 4173);
const apiPort = Number(process.env.E2E_API_PORT ?? 4174);

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  // The shared runner host is busy; a 5s visibility window is too tight for
  // the login/bootstrap round trip when several jobs run at once.
  timeout: process.env.CI ? 60_000 : 30_000,
  expect: { timeout: process.env.CI ? 15_000 : 5_000 },
  reporter: process.env.CI
    ? [["github"], ["html", { open: "never" }]]
    : [["list"]],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: "retain-on-failure",
    // A failure must be debuggable without a re-run (AgentRules/test/ui.md).
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "node scripts/e2e-api.mjs",
      port: apiPort,
      reuseExistingServer: !process.env.CI,
    },
    {
      // `npm run test:e2e` builds first; the static server is Node built-ins
      // only, so the Playwright container in CI never touches the host's
      // native build toolchain.
      command: "node scripts/e2e-static.mjs",
      port,
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
  ],
});
