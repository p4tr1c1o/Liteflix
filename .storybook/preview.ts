import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyles from "../src/styles/GlobalStyles"
import theme from "../src/styles/Theme"
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			primary: theme,
		},
		defaultTheme: 'primary',
		Provider: ThemeProvider,
		GlobalStyles,
	})];

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
