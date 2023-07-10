import React from 'react'
import SectionDestacada from "./SectionDestacada"
import SectionListado from "./SectionListado"
import { styled } from "styled-components"
import { laptop } from "../../styles/Theme"

function Home() {
	return (
		<Container>
			<Content>
				<SectionDestacada />
				<SectionListado />
			</Content>
			<CartelDestacada />
		</Container>
	)
}

const Container = styled.main`
`

const Content = styled.div`
	display: flex;
	flex-direction: column;	
	max-width: 1280px;
	margin-inline: auto;
	
	${laptop} {
		flex-direction: row;
	}
`

const CartelDestacada = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 35rem;
	background-image: 
		linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
		url(${"/images/bkg.png"});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	z-index: -100;

		
	${laptop} {
		position: fixed;
		height: 100%;
    }
`

export default Home

