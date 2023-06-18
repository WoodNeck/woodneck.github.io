import { defineConfig } from "astro/config";
import remarkBreaks from "remark-breaks";
import codeTitle from "remark-code-title";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://woodneck.github.io",
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "css-variables"
    },
    remarkPlugins: [
      remarkBreaks,
      codeTitle
    ]
  },
  integrations: [
    tailwind(),
    sitemap()
  ]
});
