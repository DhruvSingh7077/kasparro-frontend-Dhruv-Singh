// next.config.js - REPLACE WITH THIS (JavaScript, no TypeScript issues)
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ONLY this line for src/app support
  experimental: {
    appDir: true,
  },
  // ✅ Fix @ alias for src/
};

module.exports = nextConfig;
