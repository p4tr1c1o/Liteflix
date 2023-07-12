import React from 'react'
import { css, styled } from "styled-components"
import BotonPrimario from "./BotonPrimario"
import TextInput from "./TextInput"
import { ReactComponent as CerrarIcon } from "../assets/cerrar.svg";
import Droplet from "./Droplet";

type Props = {
	showdialog: boolean
}

function ModalDialog({ showdialog }: Props) {
	return (
		<Overlay showdialog={showdialog}>
			<StyledDialog open={showdialog}>
				<Topbar ><CerrarIcon /></Topbar>
				<Titulo>AGREGAR PELICULA</Titulo>
				<Droplet />
				<form method="dialog">
					<TextInput />
					<BotonPrimario> SUBIR PELICULA </BotonPrimario>
				</form>
			</StyledDialog>
		</Overlay>
	)
}

const Overlay = styled.div<Props>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
	transition: opacity 200ms;
	visibility: hidden;
	opacity: 0;

	${props => {
		if (props.showdialog) {
			return css`
			visibility: visible;
			opacity: 1;
		`
		}
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

`

const Topbar = styled.div`
	display: flex;
	justify-content:flex-end;
	width: 100%
`

const Titulo = styled.h5`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.25rem;
	font-weight: 700;
`



export default ModalDialog