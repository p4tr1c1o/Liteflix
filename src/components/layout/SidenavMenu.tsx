import React, { useContext } from 'react'
import styled, { css } from "styled-components"
import NavbarMobile from "./StickyNavbar"
import { sidenavContext } from "../../contexts/SidenavProvider"
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";

function SideNavMenu() {
	const sidenav = useContext(sidenavContext)
	if (!sidenav) throw new Error("undefined sidenav context");

	const handleAgregarClick = () => {
		return
	}

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
				<BotonAgregar onClick={handleAgregarClick}>
					<PlusIcon />
					AGREGAR PELICULA
				</BotonAgregar>
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
	letter-spacing: 0.25rem;
	${props => props.open && css`
		width: 23.4rem;
	`}
`

const Content = styled.div`
	padding-left: 1.5rem
`

const StyledUl = styled.ul`
	margin-top: 2rem;
	overflow: hidden;

	li {
		margin-bottom: 2.5rem;
	}
`

const BotonAgregar = styled.button`
	display: flex;
	padding: 0;
	margin-top: 2rem;
	margin-bottom: 4rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.white};	
	font-size: 1rem;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.25rem;
	border: none;

	svg {
		margin-right: 0.5rem;
	}
`

export default SideNavMenu
