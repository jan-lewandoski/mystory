/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "naszsklep-api.vercel.app", protocol: "https" },
			{ hostname: "media.graphassets.com", protocol: "https" },
		],
	},
	redirects: async () => [],
};

const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
