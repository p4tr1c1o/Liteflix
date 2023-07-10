import React, { useContext } from 'react'
import styled, { css } from "styled-components"
import NavbarMobile from "./StickyNavbar"
import { sidenavContext } from "../../contexts/SidenavProvider"

function SideNavMenu() {
	const sidenav = useContext(sidenavContext)
	if (!sidenav) throw new Error("undefined sidenav context");

	return (
		<Container open={sidenav.isOpen}>
			<NavbarMobile position="relative" showCloseButton />
			<StyledUl>
				<li>INICIO</li>
				<li>SERIES</li>
				<li>PELICULAS</li>
				<li>AGREGADAS RECIENTEMENTE</li>
				<li>POPULARES</li>
				<li>MIS PELICULAS</li>
				<li>MI LISTA</li>
			</StyledUl>
		</Container>
	)
}

const Container = styled.aside<{ open: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.background};
	overflow-x: hidden;
	transition: width 1s;
	/* padding-top: 60px; */
	height: 100%;
	width: 0;
	z-index: 999;
	${props => props.open && css`
		width: 23.4rem;
	`}

`

const StyledUl = styled.ul`
	margin-left: 1.5rem;

	li {
		overflow: hidden;
		margin-block-end: 1.25rem;
	}
`

export default SideNavMenu
