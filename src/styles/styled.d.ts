import 'styled-components';


declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string,
			secondary: string,
			warning: string,
			success: string,
			error: string,
			background: string,
			white: string,
			grey: string,
			black: string,
		};
	}
}