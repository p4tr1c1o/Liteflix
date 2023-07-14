import BotonPrimario from "../BotonPrimario"
import TextInput from "../TextInput"
import Droplet from "../Droplet";
import ProgressBar from "../ProgressBar";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useFileUpload } from "../../hooks/useFileUpload";
import styled from "styled-components";

function FormNuevaPelicula() {
	const { uploadFile, isLoading, progress, error, downloadURL, cancelUpload } = useFileUpload()
	const validation = Yup.object({
		titulo: Yup.string().min(1, "El titulo debe tener almenos 1 caracter").required("El titulo es obligatorio"),
	})

	const formik = useFormik({
		initialValues: {
			titulo: "",
		},
		validationSchema: validation,
		onSubmit: handleSubmit,
	});

	function handleSubmit(values: { titulo: string }) {
		alert(JSON.stringify(values, null, 2));
		console.log(downloadURL);
	}

	return (
		<>
			<Titulo>AGREGAR PELICULA</Titulo>

			<DropletContainer>
				{isLoading
					? <ProgressBar progress={progress} error={error} onCancel={cancelUpload} />
					: <Droplet handleFile={uploadFile} />}
			</DropletContainer>

			<form noValidate onSubmit={formik.handleSubmit}>
				<TextInput
					id="titulo"
					type="text"
					placeholder="TITULO"
					{...formik.getFieldProps("titulo")}

				/>
			</form>
			{(formik.touched.titulo && formik.errors.titulo && Boolean(formik.submitCount)) && <LabelError>{formik.errors.titulo}</LabelError>}
			<BotonPrimario disabled={!downloadURL} onClick={() => formik.handleSubmit()}> SUBIR PELICULA </BotonPrimario>
		</>
	)
}


const Titulo = styled.h5`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.25rem;
	font-weight: 700;
	margin-bottom: 2rem;
`

const LabelError = styled.span`
	color:${({ theme }) => theme.colors.error};
`

const DropletContainer = styled.div`
	min-width: 40rem;
`


export default FormNuevaPelicula