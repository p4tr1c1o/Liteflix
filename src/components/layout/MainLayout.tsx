
import NavbarMobile from "./NavbarMobile"
import { Outlet } from "react-router-dom"
import SideNavMenu from "./SidenavMenu";
import LayoutProvider from "../../contexts/SidenavProvider";
import { desktopSize } from "../../styles/Theme";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import ModalDialog from "./ModalDialog";
import RightDialog from "./RightDialog";

function MainLayout() {

	const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`)

	return (
		<LayoutProvider>
			{isDesktop
				? <NavbarDesktop />
				: <NavbarMobile position="fixed" />
			}
			<SideNavMenu />
			{isDesktop
				? <ModalDialog />
				: <RightDialog />
			}
			<Outlet />
		</LayoutProvider>
	)
}


export default MainLayout