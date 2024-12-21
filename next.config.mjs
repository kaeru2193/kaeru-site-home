import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkSlug from "remark-slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMDX = nextMDX({
  extensions: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      remarkSlug,
      remarkMath
    ],
    rehypePlugins: [rehypeKatex]
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['kaeru2193.github.io'],
    },
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    // add any other Next.js config below
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);