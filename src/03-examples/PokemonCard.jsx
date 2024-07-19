import {useLayoutEffect, useRef, useState} from "react";

export const PokemonCard = ({id, name, sprites = []}) => {

	const Pref = useRef();
	const [boxSize, setBoxsize] = useState({width: 0, height: 0})
	useLayoutEffect(() => {
		console.log(Pref.current.getBoundingClientRect());
		const {width, height} = Pref.current.getBoundingClientRect();
		setBoxsize({width, height})
	}, [name])

	return (
		<div style={{height: 200, display: 'flex'}}>
			<h2 ref={Pref} className="text-capitalize"> #{id} - {name}</h2>
			{/* Imágenes */}
			<div>
				{
					sprites.map(sprite => (
						<img key={sprite} src={sprite} alt={name}/>
					))
				}
			</div>
			<code>{JSON.stringify(boxSize)}</code>
		</div>

	)
}
