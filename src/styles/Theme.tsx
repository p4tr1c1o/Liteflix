import { DefaultTheme } from "styled-components"


const theme: DefaultTheme = {
	colors: {
		primary: "#64EEBC",
		secondary: "",
		warning: "",
		success: "",
		error: "#FF3333",
		background: "#242424",
		white: "#FFF",
		grey: "rgba(255, 255, 255, 0.50)",
		black: "#242424"
	},
}

export const desktopSize = "1024px"
export const isDesktop = `@media (min-width: ${desktopSize})`
export const containerMaxSize = "1728px"

export default theme