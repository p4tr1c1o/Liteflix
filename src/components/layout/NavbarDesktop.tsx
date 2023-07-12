import React, { useContext } from 'react'
import { layoutContext } from "../../contexts/SidenavProvider";
import { styled } from "styled-components";
import LogoLiteflix from "../LogoLiteflix";
import AvatarCuenta from "../AvatarCuenta";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as BellIcon } from "../../assets/bell.svg";
import BotonAgregarPelicula from "../BotonAgregarPelicula";

function NavbarDesktop() {
	const layout = useContext(layoutContext)
	if (!layout) throw new Error("Missing sidenav context");

	return (
		<Navbar>
			<ContainerLogo>
				<LogoLiteflix />
				<BotonAgregarPelicula />
			</ContainerLogo>
			<ContainerIconos>
				<MenuIcon onClick={layout.toggleSidenav} />
				<BellIcon />
				<AvatarCuenta />
			</ContainerIconos>
		</Navbar>
	)
}

const Navbar = styled.nav`
	display: flex;
	align-items:center;
	justify-content: space-between;
	
	top: 0;
	width:100%;
	
	max-width: 1280px;
	margin-inline: auto;
	margin-block: 1.75rem;
	padding-inline: 2rem;
`

const ContainerLogo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	span {
		margin-right: 4rem;
	}

	button {
		margin: 0;
	}
`

const ContainerIconos = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	
	>* { 
		cursor: pointer;
		margin-left: 2.5rem;
	}
`

export default NavbarDesktop

