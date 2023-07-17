import { useContext, useState } from "react";
import FormNuevaPelicula from "./FormNuevaPelicula";
import LogoLiteflix from "../LogoLiteflix";
import Pelicula from "../../models/Pelicula";
import { styled } from "styled-components";
import BotonPrimario from "../BotonPrimario";
import { layoutContext } from "../../contexts/SidenavProvider";

function DialogContent() {
	const [response, setResponse] = useState<Pelicula | undefined>()
	const layout = useContext(layoutContext)

	return (
		response
			? <>
				<LogoLiteflix />
				<Titulo>¡Felicitaciones!</Titulo>
				<Subtitulo>{response.title} fue correctamente subida.</Subtitulo>
				<BotonPrimario onClick={() => layout?.toggleDialog()}> ir a home</BotonPrimario>
			</>
			: <FormNuevaPelicula handleOk={setResponse} />
	)
}

const Titulo = styled.h3`
	margin-top: 4.5rem; 
	font-weight: 700;
`

const Subtitulo = styled.p`
	margin-top: 1.5rem;
	margin-bottom: 4.5rem;
	font-size: 1.25rem;
`


export default DialogContent