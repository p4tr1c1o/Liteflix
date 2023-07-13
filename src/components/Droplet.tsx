import React, { ChangeEvent, DragEvent } from 'react'
import { useToggle } from "../hooks/useToggle";
import { ReactComponent as ClipIcon } from "../assets/clip.svg";
import styled, { css } from "styled-components";


function Droplet() {
	const [isDragActive, toggleDrag, setActive] = useToggle()
	const inputRef = React.useRef<HTMLInputElement>(null)

	function handleFile(file) {
		console.log(file);

	}

	function handleDrop(event: DragEvent) {
		event.preventDefault()
		event.stopPropagation()
		toggleDrag()

		if (event.dataTransfer?.files && event.dataTransfer?.files[0]) {
			handleFile(event.dataTransfer.files[0]);
		}
		return
	}

	function handleClick() {
		inputRef.current?.click()
	}

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		console.log(event.target.files && event.target.files[0]);

		return
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
		z-index: 99999;
		${isDragActive && (css`background-color:rgba(255, 255, 255, 0.35);`)}
		
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
			onDragOver={() => setActive(true)}
			onDrop={handleDrop}
			onClick={handleClick}
		>
			<input type="file" ref={inputRef} onChange={handleChange} accept="image/png, image/gif, image/jpeg" />
			<ClipIcon />
			AGREGA UN ARCHIVO O ARRASTRALO Y SOLTALO AQUI
		</StyledDroplet>
	)
}



export default Droplet