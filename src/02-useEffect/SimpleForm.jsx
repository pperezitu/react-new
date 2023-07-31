import { Fragment, useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'pedro@space-x.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        // console.log('useEffect called!')
    }, []);

    useEffect( () => {
        // console.log('formState change!')
    }, [formState]);

    useEffect( () => {
        // console.log('email change!')
    }, [email]);

    return(
        <Fragment>
            <h1>Formulario Simple</h1>
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
                {
                   ( username === 'strider') && <Message />
                }
                
            </form>
            
        </Fragment>

        
    )
}