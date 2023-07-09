import React from 'react'
import { styled } from "styled-components"
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";

function StickyNavbar() {
	return (
		<Navbar>
			<MenuIcon />
			<NavTitle>
				<strong>Lite</strong>flix
			</NavTitle>
			<AccountAvatar />
		</Navbar>
	)
}

const Navbar = styled.nav`
	position: sticky;
	display: flex;
	align-items:center;
	justify-content: space-between;
	padding-block: 1rem;
	padding-inline: 1.5rem;
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

export default StickyNavbar