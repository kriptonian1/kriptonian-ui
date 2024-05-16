const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
	remotePatterns:[
		{
			protocol: 'https',
			hostname: "images.unsplash.com"
		}
	]
  }
};

module.exports = withNextra(nextConfig);
