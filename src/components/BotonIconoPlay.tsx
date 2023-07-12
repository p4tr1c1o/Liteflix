import React from 'react'
import { styled } from "styled-components"
import { ReactComponent as PlayIcon } from "../assets/play.svg";


function BotonIconoPlay() {
	return (
		<Container>
			<StyledIcon />
		</Container>
	)
}

const Container = styled.div`
	border-radius: 50%;
	align-items: center;
	display: flex;
	justify-content: center;
	border: 1px solid;
	height: 3rem;
	width: 3rem;
	background-color: rgba(36, 36, 36, 0.50);
	z-index:10;
`
const StyledIcon = styled(PlayIcon)`
	width: 1.2rem;
	height: 1.2rem;
`

export default BotonIconoPlay