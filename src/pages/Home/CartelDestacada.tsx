import { useContext } from 'react'
import styled, { css } from "styled-components"
import { destacadaContext } from "../../contexts/DestacadaProvider"
import { isDesktop } from "../../styles/Theme"

function CartelDestacada() {
	let srcDestacada: string | undefined
	const destacada = useContext(destacadaContext)

	if (destacada?.backdrop_path) srcDestacada = `https://image.tmdb.org/t/p/original${destacada?.backdrop_path}`


	return (
		<>
			{destacada && <CartelDestacadaStyled $src={srcDestacada} />}
		</>
	)
}



const CartelDestacadaStyled = styled.div<{ $src: string | undefined }>`
	position: absolute;
	top: 0;
	width: 100%;
	height: 35rem;
	${props => css`background-image: 
		linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
		url(${props.$src});`
	}
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	z-index: -100;

	${isDesktop} {
		position: fixed;
		height: 100%;
	}

		animation: zoomOut ease 4s;
	animation-iteration-count: 1;
	
	@keyframes zoomOut {
		0% {
			opacity: 0.3;
			transition: transform 1s, filter 2s ease-in-out;
			filter: blur(2px);
			transform: scale(1.1);			
		}
		100% {
			opacity: 1;
			filter: blur(0);
			transform: scale(1);			
		}
	}
`

export default CartelDestacada