import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/_page"
import MainLayout from "../components/MainLayout"


const router = createBrowserRouter([
	{
		path: "/", Component: MainLayout, children: [
			{ index: true, Component: () => <Home /> },
		]
	}
])

function AppRoutes() {
	return (
		<RouterProvider router={router} />
	)
}

export default AppRoutes