import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		'@storybook/addon-styling',
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	previewHead: (head) => `
    ${head}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
		<link href="https://fonts.cdnfonts.com/css/bebas-neue" rel="stylesheet">
		`,
};
export default config;
