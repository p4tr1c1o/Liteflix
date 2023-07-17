import { useContext, DragEvent } from 'react'
import { css, styled } from "styled-components"
import { ReactComponent as CerrarIcon } from "../../assets/cerrar.svg";
import { layoutContext } from "../../contexts/SidenavProvider";
import DialogContent from "./DialogContent";

const preventDrop = (event: DragEvent) => event.preventDefault()


function ModalDialog() {
	const layout = useContext(layoutContext)
	if (!layout) throw new Error("layout context missing");


	return (
		<Overlay onDragOver={preventDrop} onDrop={preventDrop} $isOpen={layout.isDialogOpen}>
			{layout?.isDialogOpen && (
				<StyledDialog open={layout?.isDialogOpen}>
					<Topbar ><CerrarIcon onClick={layout?.toggleDialog} /></Topbar>
					<DialogContent />
				</StyledDialog>
			)}
		</Overlay>
	)
}


const Overlay = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	transition: opacity 200ms;
	visibility: hidden;
	opacity: 0;
	z-index: 9998;

	${props => {
		if (props.$isOpen) {
			return css`
			visibility: visible;
			opacity: 1;
		`}
	}}
	`

const StyledDialog = styled.dialog`
		display: flex;
		flex-direction: column;
		align-items:center;
		justify-content: center;
		border: none;
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.white};
		margin: 10% auto;
		padding: 1.5rem;
		position: relative;
		min-width: 730px;
		min-height: 440px;
`

const Topbar = styled.div`
	display: flex;
	justify-content:flex-end;
	width: 100%;

	svg {
		cursor: pointer;
	}

`


export default ModalDialog