import { useContext, DragEvent } from 'react'
import { css, styled } from "styled-components"
import { ReactComponent as CerrarIcon } from "../../assets/cerrar.svg";
import { layoutContext } from "../../contexts/SidenavProvider";
import FormNuevaPelicula from "./FormNuevaPelicula";

const preventDrop = (event: DragEvent) => event.preventDefault()


function ModalDialog() {
	const layout = useContext(layoutContext)
	if (!layout) throw new Error("");

	const Overlay = styled.div`
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

	${layout.isDialogOpen && (
			css`
			visibility: visible;
			opacity: 1;
		`)
		}
	`
	return (
		<Overlay onDragOver={preventDrop} onDrop={preventDrop}>
			{layout?.isDialogOpen && (
				<StyledDialog open={layout?.isDialogOpen}>
					<Topbar ><CerrarIcon onClick={layout?.toggleDialog} /></Topbar>
					<FormNuevaPelicula />
				</StyledDialog>
			)}
		</Overlay>
	)
}

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