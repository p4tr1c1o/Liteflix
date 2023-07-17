import { styled } from "styled-components"

function AvatarCuenta() {
	return (
		<Avatar src="/assets/avatar.png" />
	)
}


const Avatar = styled.img`
	vertical-align: middle;
	width: 40px;
	height: 40px;
	border-radius: 50%;
`


export default AvatarCuenta