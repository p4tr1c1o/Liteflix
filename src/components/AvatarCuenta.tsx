import React from 'react'
import { styled } from "styled-components"

function AvatarCuenta() {
	return (
		<Avatar />
	)
}


const Avatar = styled.img.attrs({
	src: `${"/images/avatar.png"}`
})`
	vertical-align: middle;
	width: 40px;
	height: 40px;
	border-radius: 50%;
`


export default AvatarCuenta