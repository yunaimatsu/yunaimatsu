import { defineConfig } from 'astro/config';
import customSyntax from './src/layout/utils/remark-custom-syntax'; // Import your custom plugin

export default defineConfig({
  markdown: {
    remarkPlugins: [customSyntax], // Your custom plugin should now be correctly typed
  },
});