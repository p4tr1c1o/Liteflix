
import { styled } from "styled-components"
import BotonIconoPlay from "../../components/BotonIconoPlay"
import { isDesktop } from "../../styles/Theme"
import Pelicula from "../../models/Pelicula"

type Props = {
	pelicula: Pelicula,
}

function CardPelicula({ pelicula }: Props) {
	const fromFirestore = pelicula.backdrop_path.startsWith("https://firebasestorage.")
	const srcPelicula = fromFirestore
		? pelicula.backdrop_path
		: `https://image.tmdb.org/t/p/w300${pelicula.backdrop_path}`


	return (
		<Container>
			<ImagenPelicula src={srcPelicula} />
			<BotonIconoPlay />
			<TituloPelicula>{pelicula.title}</TituloPelicula>
			<GradientOverlay />
		</Container>
	)
}

const Container = styled.article`
	position: relative; 
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	border-radius: 0.25rem;
	width: 300px;
	height: 10.7rem;
	overflow: hidden;
	margin-block: 0.6rem;

	${isDesktop} {
		width:  13.75rem;
		height:  9rem;
	}
`
const ImagenPelicula = styled.img`
	position: absolute;
	top: 0;
	z-index: -1;
	animation: fadeIn ease 3s;
	animation-iteration-count: 1;
	max-width:300px;
	
`

const TituloPelicula = styled.h6`
	margin-top: 1.5rem;
	margin-bottom: 0.8rem;
	color: #FFF;
	font-size: 1rem;
	font-weight: 400;
	text-align:center;
	
	z-index: 666;
`

const GradientOverlay = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 7.8rem;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
`

export default CardPelicula