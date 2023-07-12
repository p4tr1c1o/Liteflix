import React, { DragEvent, MouseEvent } from 'react'
import { useToggle } from "../hooks/useToggle";
import { ReactComponent as ClipIcon } from "../assets/clip.svg";
import styled, { css } from "styled-components";


function Droplet() {
	const [isDragActive, toggleDrag] = useToggle()
	const inputRef = React.useRef<HTMLInputElement>(null)

	function handleFile(file) {
		console.log(file);

	}

	function handleDrag(event: DragEvent) {
		event.preventDefault()
		event.stopPropagation()

		if (event.type === "dragenter" || event.type === "dragover") {
			toggleDrag()
		} else if (event.type === "dragleave") {
			toggleDrag()
		}
		return undefined
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault()
		event.stopPropagation()
		toggleDrag()

		if (event.dataTransfer?.files && event.dataTransfer?.files[0]) {
			console.log(event.dataTransfer?.files[0]);

			handleFile(event.dataTransfer.files);
		}
		return
	}

	// function handleChange(event: DragEvent) {
	// 	event.preventDefault();
	// 	if (event.target?.files && event.target.files[0]) {
	// 		handleFile(event.target.files);
	// 		return
	// 	}
	// }

	function handleClick() {
		inputRef.current?.click()
	}

	const StyledDroplet = styled.div`
		cursor:	pointer;
		display: flex;
		align-items:center;
		justify-content: center;
		margin-block: 1.5rem;
		margin-inline: 1.5rem;
		padding-block: 2rem;
		padding-inline: 4.5rem;
		border: 1px dashed ${({ theme }) => theme.colors.white};
		
		${isDragActive && (css`background-color:rgba(255, 255, 255, 0.35)`)}
		
		svg {
			margin-right: 1rem;
		}

		input {
			display: none;
			visibility: hidden;
		}
	`


	return (
		<StyledDroplet
			onDragEnter={toggleDrag}
			onDragLeave={toggleDrag}
			onDrop={handleDrop}
			onClick={handleClick}
			draggable={true}
		>
			<input type="file" ref={inputRef} />
			<ClipIcon />
			AGREGA UN ARCHIVO O ARRASTRALO Y SOLTALO AQUI
		</StyledDroplet>
	)
}



export default Droplet