import BotonPrimario from "../BotonPrimario"
import TextInput from "../TextInput"
import Droplet from "../Droplet";
import ProgressBar from "../ProgressBar";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useFileUpload } from "../../hooks/useFileUpload";
import styled from "styled-components";
// import { usePost } from "../../hooks/usePost";

function FormNuevaPelicula() {
	const { uploadFile, isLoading, progress, error, downloadURL, cancelUpload } = useFileUpload()
	// const { isSubmiting, handlePost } = usePost()
	const validation = Yup.object({
		title: Yup.string().min(1, "El titulo debe tener almenos 1 caracter").required("El titulo es obligatorio"),
	})

	const formik = useFormik({
		initialValues: {
			title: "",
		},
		validationSchema: validation,
		onSubmit: handleSubmit,
	});

	async function handleSubmit(formValues: { title: string }) {
		const data = { title: formValues.title, backdrop_path: downloadURL, }

		alert(JSON.stringify(data, null, 2));
		const result = await fetch("https://us-central1-liteflix-7359f.cloudfunctions.net/api/peliculas",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' },
			})

		// console.log(await result.json());
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
					id="title"
					type="text"
					placeholder="TITULO"
					{...formik.getFieldProps("title")}

				/>
			</form>
			{(formik.touched.title && formik.errors.title && Boolean(formik.submitCount)) && <LabelError>{formik.errors.title}</LabelError>}
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