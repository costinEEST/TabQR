import { cwd } from "node:process";
import { defineConfig, loadEnv, type UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

export default defineConfig(({ mode }) => {
  // https://vite.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, cwd(), "");

  const config: UserConfig = {
    plugins: [
      svelte(),
      webExtension({
        browser: env.TARGET,
        manifest: () => {
          const manifest = readJsonFile("src/manifest.json");
          const pkg = readJsonFile("package.json");

          return {
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            ...manifest,
          };
        },
        watchFilePaths: ["package.json", "manifest.json"],
      }),
    ],
  };

  return config;
});
