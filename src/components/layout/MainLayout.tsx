import React from 'react'

import NavbarMobile from "./StickyNavbar"
import { Outlet } from "react-router-dom"
import SideNavMenu from "./SidenavMenu";
import SidenavProvider from "../../contexts/SidenavProvider";

function MainLayout() {

	return (
		<SidenavProvider>
			<NavbarMobile position="fixed" />
			<SideNavMenu />
			<Outlet />
		</SidenavProvider>
	)
}

export default MainLayout