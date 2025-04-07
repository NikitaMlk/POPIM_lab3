/** @type {import('zudoku').ZudokuConfig} */
const config = {
  // Top navigation menu
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" }
  ],

  // Sidebar configuration for documentation categories
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: [
                "docs/about",
                "docs/installation",
                "docs/authorization"
              ],
      },
    ],
  },

  // Redirects setup
  redirects: [
    { from: "/", to: "/docs/about" },
  ],

  // API configuration (for OpenAPI specification)
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",  // Path to your OpenAPI spec file
    navigationId: "api",  // This ties it to the "API Reference" in the navigation
  },

  // Documentation files pattern (where your markdown/MDX files are located)
  docs: {
    files: "/pages/**/*.{md,mdx}",  // Glob pattern to include markdown and MDX files
  },

  // Menu items for docs (this is not necessary now since they're included in topNavigation)
  menu: [
    { title: "About", path: "about.md" },
    { title: "Installation", path: "installation.md" },
    { title: "Authorization", path: "authorization.md" },
  ],
};

export default config;
