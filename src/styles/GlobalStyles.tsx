import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

	 * {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	 	font-family: Bebas Neue;
		letter-spacing: 0.25rem;
		/* border: 1px solid; */
	 }

	 body { 
		margin: 0;
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.white};
	 }

	 h1,h2,h3,h4,h5,h6 {
		margin: 0;
	 }

	 ul {
		margin: 0;
		padding: 0;
		list-style: none;
	 }
	 
	 button:hover:enabled { 
		opacity: 0.75;
	 }

	 dialog {
		padding: 0;
	 }

	 @keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
`

export default GlobalStyles