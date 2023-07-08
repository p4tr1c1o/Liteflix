import React from 'react'
import { styled } from "styled-components"

const BotonSecundario = styled.button`
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.white};
	padding-block: 1rem;
	margin-block: 0.75rem;
	min-width: 15.5rem;
	border: 1px solid ${({ theme }) => theme.colors.grey};;

	font-size: 1.125rem;
	line-height: normal;
	letter-spacing: 0.25rem;
`

export default BotonSecundario