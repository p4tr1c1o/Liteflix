import React from 'react'

import NavbarMobile from "./NavbarMobile"
import { Outlet } from "react-router-dom"
import SideNavMenu from "./SidenavMenu";
import SidenavProvider from "../../contexts/SidenavProvider";
import { desktopSize } from "../../styles/Theme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";

function MainLayout() {

	const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`)

	return (
		<SidenavProvider>
			{isDesktop
				? <NavbarDesktop />
				: <NavbarMobile position="fixed" />
			}
			<SideNavMenu />
			<Outlet />
		</SidenavProvider>
	)
}


export default MainLayout