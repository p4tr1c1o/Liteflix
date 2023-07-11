import React, { useContext } from 'react'
import styled, { css } from "styled-components"
import NavbarMobile from "./NavbarMobile"
import { sidenavContext } from "../../contexts/SidenavProvider"
import { isDesktop } from "../../styles/Theme";
import BotonAgregarPelicula from "../BotonAgregarPelicula";

function SideNavMenu() {
	const sidenav = useContext(sidenavContext)
	if (!sidenav) throw new Error("undefined sidenav context");

	return (
		<Container open={sidenav.isOpen}>
			<NavbarMobile position="relative" showCloseButton />
			<Content>
				<StyledUl>
					<li>INICIO</li>
					<li>SERIES</li>
					<li>PELICULAS</li>
					<li>AGREGADAS RECIENTEMENTE</li>
					<li>POPULARES</li>
					<li>MIS PELICULAS</li>
					<li>MI LISTA</li>
				</StyledUl>
				<BotonAgregarPelicula />
				<span > CERRAR SESION </span>
			</Content>
		</Container>
	)
}

const Container = styled.aside<{ open: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colors.background};
	overflow-x: hidden;
	transition: width 0.5s;
	height: 100%;
	width: 0;
	z-index: 999;
	
	${props => {
		if (props.open) {
			return css`width: 23.4rem;`
		}
	}}

	${isDesktop} {
		${props => {
		if (props.open) {
			return css`width: 47.5rem;`
		}
	}}
	}
`

const Content = styled.div`
	padding-left: 1.5rem;
`

const StyledUl = styled.ul`
	margin-top: 2rem;
	overflow: hidden;

	li {
		margin-bottom: 2.5rem;
	}
`

export default SideNavMenu
