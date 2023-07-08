import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home/_page.tsx"
import GlobalStyles from "./styles/GlobalStyles.tsx"
import { ThemeProvider } from "styled-components"
import theme from "./styles/Theme.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	</React.StrictMode>,
)
