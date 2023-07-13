import { createContext } from 'react'
import { useToggle } from "../hooks/useToggle"

export const layoutContext = createContext<{
	isOpen: boolean,
	isDialogOpen: boolean,
	isDrawerOpen: boolean,
	toggleSidenav: () => void,
	toggleDialog: () => void,
	toggleDrawer: () => void,
} | undefined>(undefined)

function LayoutProvider({ children }) {
	const [isOpen, toggleSidenav] = useToggle()
	const [isDialogOpen, toggleDialog] = useToggle()
	const [isDrawerOpen, toggleDrawer] = useToggle()

	const value = {
		isOpen, toggleSidenav,
		isDialogOpen, toggleDialog,
		isDrawerOpen, toggleDrawer
	}

	return (
		<layoutContext.Provider value={value}>
			{children}
		</layoutContext.Provider>
	)
}

export default LayoutProvider
