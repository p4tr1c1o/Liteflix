import React, { createContext, useCallback, useState } from 'react'

export const sidenavContext = createContext<{
	toggleSidenav: () => void,
	isOpen: boolean,
} | undefined>(undefined)

function SidenavProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)
	const toggleSidenav = useCallback(() => setIsOpen(value => !value), [])

	const value = { isOpen, toggleSidenav }

	return (
		<sidenavContext.Provider value={value}>
			{children}
		</sidenavContext.Provider>
	)
}

export default SidenavProvider
