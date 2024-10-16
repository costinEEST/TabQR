# CLI 

- `pnpm build:<browserName>`

# Docs 

- https://vite-plugin-web-extension.aklinker1.io/guide/supporting-multiple-browsers.html#dynamic-manifests

# Testing 

- In Firefox:
  - Open Firefox and go to `about:debugging#/runtime/this-firefox`.
  - Click `Load Temporary Add-on...`.
  - Select any file in the `dist` directory (like `manifest.json`), and Firefox will load your extension.
- In Chrome:
  - Open Chrome and go to `chrome://extensions` and enable `Developer mode`.
  - Click `Load unpacked` and select the `dist` folder.
  - Test the extension by clicking its icon in the toolbar.