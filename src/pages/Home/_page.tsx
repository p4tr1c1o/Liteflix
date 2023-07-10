import React from 'react'
import SectionDestacada from "./SectionDestacada"
import SectionListado from "./SectionListado"
import { styled } from "styled-components"

function Home() {
	return (
		<Container>
			<CartelDestacada />
			<SectionDestacada />
			<SectionListado />
		</Container>
	)
}

const Container = styled.main`
	position: relative;
`

const CartelDestacada = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 35rem;
	max-height:35rem;
	background-image: 
		linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
		url(${"/images/bkg.png"});
	background-repeat: no-repeat;
	background-size: cover;
	z-index: -100;
`

export default Home

