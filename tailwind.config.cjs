/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  corePlugins: [
    "display",
    "flex",
    "flexDirection",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "alignItems",
    "justifyContent",
    "padding",
    "preflight",
    "margin",
    "width",
    "minWidth",
    "maxWidth",
    "height",
    "minHeight",
    "maxHeight",
    "backgroundColor",
    "textColor",
    "opacity",
    "container",
    "position",
    "translate",
    "fontSize",
    "fontWeight",
    "gap"
  ],
	theme: {
		extend: {
      colors: {
        // Based on https://lospec.com/palette-list/vanilla-milkshake
        white: "#fbfbfb",
        black: "#28282e",
        red: "#f98284",
        yellow: "#fff7a0",
        green: "#87a889",
        greenBright: "#c2dc97",
        orange: "#ffc384",
        blue: "#718edf"
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            "--tw-prose-links": theme("colors.blue"),
            "--tw-prose-code": "#fffcea",
            "--tw-prose-quotes": "#9a9a97",
            "--tw-prose-quote-borders": theme("colors.green"),
            "--tw-prose-bullets": theme("colors.green"),
            "--tw-prose-th-borders": theme("colors.green"),
            "--tw-prose-td-borders": theme("colors.green"),
            code: {
              backgroundColor: "#383239",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              borderRadius: "0.5rem"
            },
            "pre code": {
              padding: "0",
              margin: "0"
            },
            "blockquote code": {
              color: "#fffcea"
            },
            "code::before": { content: "" },
            "code::after": { content: "" }
          }
        }
      })
    },
	},
	plugins: [
    require("@tailwindcss/typography")
  ],
}
