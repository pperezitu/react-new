import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        // () => {
        (value) => {
            // console.log('setCounter(counter + 1)')
            // setCounter((value) => value + 1);
            setCounter((c) => c + value);
        }, []
    )

    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>Use Callback hook {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}