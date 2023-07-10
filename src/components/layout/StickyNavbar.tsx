import React, { useContext } from 'react'
import { styled } from "styled-components"
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as CerrarIcon } from "../../assets/cerrar.svg";
import { sidenavContext } from "../../contexts/SidenavProvider";

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

			<NavTitle>
				<strong>Lite</strong>flix
			</NavTitle>
			<AccountAvatar />
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

const NavTitle = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.75rem;
	letter-spacing: 0.25rem;
`
const AccountAvatar = styled.img.attrs({
	src: `${"/images/avatar.png"}`
})`
	vertical-align: middle;
	width: 40px;
	height: 40px;
	border-radius: 50%;
`

export default NavbarMobile