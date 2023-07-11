import React from 'react'
import { ThemeProvider } from "styled-components"
import AppRoutes from "./routes/AppRouter"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/Theme"
import PeliculasProvider from "./contexts/PeliculasProvider"

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<PeliculasProvider>
					<AppRoutes />
				</PeliculasProvider>
			</ThemeProvider>
		</>
	)
}

export default App