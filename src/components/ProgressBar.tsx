
import { StorageError } from "firebase/storage"
import { css, styled } from "styled-components"

type Props = {
	progress?: number,
	error?: StorageError,
	onCancel?: () => boolean
}

function ProgressBar({ progress, error, onCancel }: Props) {

	function hancleReintentarClick() {

		return
	}
	function hancleCancelClick() {
		if (onCancel) onCancel()
		return
	}

	const BotonDinamico = () => {
		if (error) return <StyledButton onClick={hancleReintentarClick}>REINTENTAR</StyledButton>
		if (progress && progress >= 100) return <LabelListo>¡LISTO!</LabelListo>
		if (progress && progress < 100) return <StyledButton onClick={hancleCancelClick}>CANCELAR</StyledButton>
	}

	return (
		<Container>
			<LabelProgreso>CARGANDO {progress}%</LabelProgreso>
			<LineaGris>
				<StyledProgressBar $progress={progress} />
			</LineaGris>
			<BotonDinamico />
		</Container>
	)
}

const LabelListo = styled.span`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 1.125rem;
	margin-block: 1.30rem;
	align-self: flex-end;
`

const LabelProgreso = styled.div`
		width: 100%;
		margin-bottom: 1rem;
		font-size: 1rem;
	`
const StyledButton = styled.button`
	border: none;
	color: ${({ theme }) => theme.colors.white};
	background-color: transparent;
	margin-block: 1.25rem;
	font-size: 1.125rem;
	align-self: flex-end;
`

const Container = styled.div`
	display: flex;
	align-items: center;		
	flex-direction: column;
`

const LineaGris = styled.div`
	display: flex;
	align-items: center;	
	background-color:${({ theme }) => theme.colors.grey};
	height: 0.25rem;
	width: 100%;
`

const StyledProgressBar = styled.div<{ $progress?: number }>`
	background-color: ${({ theme }) => theme.colors.primary};
	margin-block: 1rem;
	height: 0.65rem;
	width: ${props => css`${props.$progress}%` ?? 0};	
	transition-delay: 0.2; 
	transition-duration: 0.8; 
`
export default ProgressBar