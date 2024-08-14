import {useReducer} from "react";
import {todoReducer} from "./todoReducer";

const initialState = [
	{
		id: new Date().getTime(),
		description: 'recolectar piedra del tiempo',
		done: false
	},
	{
		id: new Date().getTime() * 2,
		description: 'recolectar piedra de la realidad',
		done: false
	},
]
export const TodoApp = () => {

	const [todos, dispatch] = useReducer(todoReducer, initialState);

	return (
		<>
			<div className='container'>
				<h1>TodoApp</h1>
				<hr/>
				<div className="row">
					<div className="col-7">
						<ul className='list-group'>
							<li className='list-group-item d-flex justify-content-between'>
								<span className='align-self-center'>Item 1</span>
								<button className='btn btn-danger'>Borrar</button>
							</li>
						</ul>
					</div>
					<div class="col-5">
						<h4>
							Agregar TODO
						</h4>
						<hr/>
						<form className='d-flex flex-column'>
							<input type="text" placeholder="¿Qué hay que hacer?" id="" className='form-control'/>
							<button type="submit" className='btn btn-outline-primary mt-2'>Agregar</button>
						</form>
					</div>
				</div>

			</div>
		</>
	)
}