import React from 'react'
import { ThemeProvider } from "styled-components"
import AppRoutes from "./routes/AppRouter"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/Theme"

function App() {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<AppRoutes />
			</ThemeProvider>
		</>
	)
}

export default App