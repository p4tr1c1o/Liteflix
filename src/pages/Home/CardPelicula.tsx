import React from 'react'
import { styled } from "styled-components"
import BotonIconoPlay from "../../components/BotonIconoPlay"
import { isDesktop } from "../../styles/Theme"


function CardPelicula() {
	return (
		<Container>
			<ImagenPelicula />
			<BotonIconoPlay />
			<TituloPelicula>house of cards</TituloPelicula>
			<GradientOverlay />
		</Container>
	)
}

const Container = styled.article`
	position: relative; 
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	border-radius: 0.25rem;
	width: 20.4rem;
	height: 10.7rem;
	overflow: hidden;
	margin-block: 0.6rem;

	${isDesktop} {
		width:  13.75rem;
		height:  9rem;
	}
`
const ImagenPelicula = styled.img.attrs({
	src: `${"/images/image-2.png"}`
})`
	position: absolute;
  	top: 0;
	z-index: -1;
`

const TituloPelicula = styled.h6`
	margin-top: 1.5rem;
	margin-bottom: 2rem;
	color: #FFF;
	font-size: 1rem;
	font-weight: 400;
	
	z-index: 666;
`

const GradientOverlay = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 7.8rem;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
`

export default CardPelicula