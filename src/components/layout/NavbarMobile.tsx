import React, { useContext } from 'react'
import { styled } from "styled-components"
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CerrarIcon } from "../../assets/cerrar.svg";
import { sidenavContext } from "../../contexts/SidenavProvider";
import LogoLiteflix from "../LogoLiteflix";
import AvatarCuenta from "../AvatarCuenta";

type Props = {
	position: "fixed" | "relative",
	showCloseButton?: boolean,
}

function NavbarMobile({ showCloseButton, position }: Props) {
	const sidenav = useContext(sidenavContext)
	if (!sidenav) throw new Error("Missing sidenav context");


	return (
		<Navbar position={position}>
			{
				showCloseButton
					? <CerrarIcon onClick={sidenav.toggleSidenav} />
					: <MenuIcon onClick={sidenav.toggleSidenav} />
			}

			<LogoLiteflix />
			<AvatarCuenta />
		</Navbar>
	)
}

const Navbar = styled.nav<{ position: "fixed" | "relative" }>`
	display: flex;
	position: ${props => props.position.toString()};
	top: 0;
	width:100%;
	align-items:center;
	justify-content: space-between;
	padding-block: 1rem;
	padding-inline: 1.5rem;
	background-color: transparent;
	z-index: 4;

	svg { 
		cursor: pointer;
	}
`


export default NavbarMobile