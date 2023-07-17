import { styled } from "styled-components"
import avatarSrc from "../assets/avatar.png"
function AvatarCuenta() {
	return (
		<Avatar src={avatarSrc} />
	)
}


const Avatar = styled.img`
	vertical-align: middle;
	width: 40px;
	height: 40px;
	border-radius: 50%;
`


export default AvatarCuenta