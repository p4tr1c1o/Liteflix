import { useContext } from 'react'
import styled, { css } from "styled-components"
import NavbarMobile from "./NavbarMobile"
import { layoutContext } from "../../contexts/SidenavProvider"
import DialogContent from "./DialogContent";

function RightDialog() {
	const layout = useContext(layoutContext)
	if (!layout) throw new Error("undefined layout context");

	return (
		<Container $open={layout.isDialogOpen}>
			<NavbarMobile position="relative" />
			<DialogContent />
		</Container>
	)
}

const Container = styled.aside<{ $open: boolean }>`
	position: fixed;
	top: 0;
	right: 0;
	background-color: ${({ theme }) => theme.colors.background};
	overflow-x: hidden;
	transition: width 0.5s;
	display: flex;
	flex-direction: column;
	align-items:center;
	height: 100%;
	width: 0;
	z-index: 999;

	${props => {
		if (props.$open) {
			return css`width: 375px;`
		}
	}}
`

export default RightDialog
