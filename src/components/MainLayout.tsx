import React from 'react'

import StickyNavbar from "./StickyNavbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
	return (
		<>
			<StickyNavbar />
			<Outlet />
		</>
	)
}

export default MainLayout