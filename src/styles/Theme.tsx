import { DefaultTheme } from "styled-components"


const theme: DefaultTheme = {
	colors: {
		primary: "#64EEBC",
		secondary: "",
		warning: "",
		success: "",
		error: "",
		background: "#242424",
		white: "#FFF",
		grey: "rgba(255, 255, 255, 0.50)",
		black: "#242424"
	},
}

export const desktopSize = "1024px"
export const isDesktop = `@media (min-width: ${desktopSize})`

export default theme