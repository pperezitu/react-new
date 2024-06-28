import {UseFetch} from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

	const {data, hasError, isLoading} = UseFetch('https://pokeapi.co/api/v2/pokemon/1');

	return (
		<>
			<h1>Información del Pokémon</h1>
			<hr/>
			{isLoading && <p>Cargando ...</p>}
			{hasError && <p>Problemas tecnicos!! ...</p>}
			<h2>{data?.name}</h2>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	)
}