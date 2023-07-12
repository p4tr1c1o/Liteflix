import React, { useContext } from 'react'
import { styled } from "styled-components"
import SectionDestacada from "./SectionDestacada"
import SectionListado from "./SectionListado"
import { isDesktop } from "../../styles/Theme"
import DestacadaProvider from "../../contexts/DestacadaProvider"
import CartelDestacada from "./CartelDestacada"
import ModalDialog from "../../components/ModalDialog"

function Home() {

	return (
		<DestacadaProvider>
			<Container>
				<Content>
					<SectionDestacada />
					<SectionListado />
				</Content>
				<CartelDestacada />
			</Container>
		</DestacadaProvider>
	)


}

const Container = styled.main`
`

const Content = styled.div`
	display: flex;
	flex-direction: column;	
	max-width: 1280px;
	margin-inline: auto;
	
	${isDesktop} {
		flex-direction: row;
	}
`

export default Home

