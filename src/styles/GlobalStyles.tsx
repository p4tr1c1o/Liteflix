import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
	 @import url('https://fonts.cdnfonts.com/css/bebas-neue');
	 
	 * {
	 	font-family: Bebas Neue;
		box-sizing: border-box;
	 }

	 body { 
		margin: 0;
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.white};
	 }

	 h1,h2,h3,h4,h5,h6 {
		margin: 0;
	 }
`

export default GlobalStyles