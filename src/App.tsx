import { ThemeProvider } from "styled-components"
import AppRoutes from "./routes/AppRouter"
import GlobalStyles from "./styles/GlobalStyles"
import theme from "./styles/Theme"
import DestacadaProvider from "./contexts/DestacadaProvider"

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<DestacadaProvider>
					<AppRoutes />
				</DestacadaProvider>
			</ThemeProvider>
		</>
	)
}

export default App