import React, { useEffect } from 'react';
import { Fragment } from "react"

export const Message = () => {

    useEffect(() => {
        console.log('Message mounted')
        return () => {
            console.log('Message unmounted')
        }
    })

    return (
        <Fragment>
            <h3>Usuario ya existe</h3>
        </Fragment>
    )
}