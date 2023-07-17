import { useContext } from "react";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { useFileUpload } from "../hooks/useFileUpload";
import styled from "styled-components";
import BotonPrimario from "./BotonPrimario";
import Droplet from "./Droplet";
import ProgressBar from "./ProgressBar";
import TextInput from "./TextInput";
import { desktopSize, isDesktop } from "../styles/Theme";
import { useMediaQuery } from "../hooks/useMediaQuery";

import BotonOutline from "./BotonOutline";
import { layoutContext } from "../contexts/SidenavProvider";

type Props = {
	handleOk: (value) => void
}

function FormNuevaPelicula({ handleOk }: Props) {
	const layout = useContext(layoutContext)
	if (!layout) throw new Error("undefined layout context");

	const showSalir = !useMediaQuery(`(min-width: ${desktopSize})`)
	const { uploadFile, isUploading, progress, error, downloadURL, cancelUpload } = useFileUpload()

	const validation = Yup.object({
		title: Yup.string().required("El titulo es obligatorio"),
	})

	const formik = useFormik({
		initialValues: {
			title: "",
		},
		validationSchema: validation,
		onSubmit: handleSubmit,
	})

	async function handleSubmit(formValues: { title: string }) {
		const data = { title: formValues.title, backdrop_path: downloadURL, }
		const response = await fetch("https://us-central1-liteflix-7359f.cloudfunctions.net/api/peliculas",
			{
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

		if (response.ok) handleOk(await response.json())
	}
	return (
		<>
			<Titulo>AGREGAR PELICULA</Titulo>

			<DropletContainer>
				{isUploading
					? <ProgressBar progress={progress} error={error} onCancel={cancelUpload} />
					: <Droplet handleFile={uploadFile} />
				}
			</DropletContainer>

			<form noValidate onSubmit={formik.handleSubmit}>
				<TextInput
					id="title"
					type="text"
					placeholder="TITULO"
					{...formik.getFieldProps("title")}

				/>
			</form>
			{(formik.errors.title && Boolean(formik.submitCount)) && <LabelError>{formik.errors.title}</LabelError>}
			<ButtonContainer>

				<BotonPrimario disabled={!downloadURL} onClick={() => formik.handleSubmit()}> SUBIR PELICULA </BotonPrimario>
				{showSalir && <BotonOutline onClick={() => layout.toggleDialog()} > salir</BotonOutline>}
			</ButtonContainer>
		</>
	)
}



const Titulo = styled.h5`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.25rem;
	font-weight: 700;
	margin-top: 4.5rem;
	margin-bottom: 2rem;

	${isDesktop}{
		margin-top: 0;
	}
`

const LabelError = styled.span`
	color:${({ theme }) => theme.colors.error};
`

const DropletContainer = styled.div`
	/* min-width: 40rem; */
`
const ButtonContainer = styled.div`
	margin-top: 6rem;

	${isDesktop}{
		margin-top:0;
	}
`
export default FormNuevaPelicula