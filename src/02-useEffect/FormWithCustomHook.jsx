import { Fragment } from "react"
import {useForm} from "../hooks/useForm";

export const FormCustomHooks = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

//    const {username, email, password} = formState;

    return(
        <Fragment>
            <h1>Formulario con custom Hooks</h1>
            <hr />
            <form action="" className="">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <input 
                    type="text" 
                    className="form-control mt-3"
                    placeholder="pedro@space-x.com"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

                <input 
                    type="password"
                    className="form-control mt-3"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={onInputChange}>
                </input>
                
                <button onClick={onResetForm} className="btn btn-outline-primary mt-3" type="button">Borrar</button>

            </form>
            
        </Fragment>

        
    )
}