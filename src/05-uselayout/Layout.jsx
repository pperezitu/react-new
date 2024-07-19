import {UseFetch} from "../hooks/useFetch";
import {useCounter} from "../hooks/useCounter";
import {LoadingMessage} from "../03-examples/LoadingMessage";
import {PokemonCard} from "../03-examples/PokemonCard";

export const Layout = () => {

	const {counter, decrement, increment} = useCounter(1);
	const {data, hasError, isLoading} = UseFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

	return (
		<>
			<h1>Información del Pokémon</h1>
			<hr/>
			{
				isLoading
					? <LoadingMessage/>
					: (
						<PokemonCard
							id={counter}
							name={data.name}
							sprites={[
								data.sprites.front_default,
								data.sprites.front_shiny,
								data.sprites.back_default,
								data.sprites.back_shiny,
							]
							}
						/>
					)

			}
			{hasError && <p>Problemas tecnicos!! ...</p>}
			<button
				className="btn btn-primary mt-2 mx-1"
				onClick={() => counter > 1 ? decrement() : null}>Anterior
			</button>
			<button
				className="btn btn-primary mt-2 mx-1"
				onClick={() => increment()}>Siguiente
			</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}