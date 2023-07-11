import React, { useContext } from 'react'
import { sidenavContext } from "../../contexts/SidenavProvider";
import { styled } from "styled-components";
import LogoLiteflix from "../LogoLiteflix";
import AvatarCuenta from "../AvatarCuenta";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as BellIcon } from "../../assets/bell.svg";

function NavbarDesktop() {
	const sidenav = useContext(sidenavContext)
	if (!sidenav) throw new Error("Missing sidenav context");

	return (
		<Navbar>
			<LogoLiteflix />
			<ContainerIconos>
				<MenuIcon onClick={sidenav.toggleSidenav} />
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
