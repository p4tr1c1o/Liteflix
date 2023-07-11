import React from 'react'
import styled from "styled-components"
import { isDesktop } from "../styles/Theme"

function LogoLiteflix() {
	return (
		<Container>
			<strong>Lite</strong>flix
		</Container>)
}

const Container = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.75rem;
	letter-spacing: 0.25rem;

	${isDesktop}{
		font-size: 2.125rem;
	}
`

export default LogoLiteflix