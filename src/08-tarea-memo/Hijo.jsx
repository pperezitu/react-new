import {memo} from 'react';

export const Hijo = memo(({numero, incrementar}) => {

	console.log('  Me volví a generar :(  ');

	return (
		<button
			className="btn btn-primary mr-3" style={{marginRight: 10}}
			onClick={() => incrementar(numero)}
		>
			{numero}
		</button>
	)
})
