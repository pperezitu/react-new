import {Fragment} from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://swapi.dev/api/people/');

    console.log({ data, isLoading, hasError});

    return (
        <Fragment>
            <h1>Star Wars Quotes</h1>
            <hr/>

            {
                data ? (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">Hola Mundo</p>
                        <footer className="blockquote-footer"> Pedro </footer>
                    </blockquote>  
                ) : (
                              
                    <div className="alert alert-info text-center">
                        Cargando ...
                    </div>        
                )
            }

        </Fragment>
    )
}