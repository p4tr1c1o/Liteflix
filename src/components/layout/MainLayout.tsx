import React from 'react'

import NavbarMobile from "./NavbarMobile"
import { Outlet } from "react-router-dom"
import SideNavMenu from "./SidenavMenu";
import LayoutProvider from "../../contexts/SidenavProvider";
import { desktopSize } from "../../styles/Theme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import ModalDialog from "../ModalDialog";

function MainLayout() {

	const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`)

	return (
		<LayoutProvider>
			{isDesktop
				? <NavbarDesktop />
				: <NavbarMobile position="fixed" />
			}
			<SideNavMenu />
			<ModalDialog showdialog={true} />
			<Outlet />
		</LayoutProvider>
	)
}


export default MainLayout