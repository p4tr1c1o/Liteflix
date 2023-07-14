import { styled } from "styled-components"
import SectionDestacada from "./SectionDestacada"
import SectionListado from "./SectionListado"
import { containerMaxSize, isDesktop } from "../../styles/Theme"
import DestacadaProvider from "../../contexts/DestacadaProvider"
import CartelDestacada from "./CartelDestacada"

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
	width: 90%;
	max-width: ${containerMaxSize};
	margin-inline: auto;
	
	${isDesktop} {
		flex-direction: row;
	}
`

export default Home

