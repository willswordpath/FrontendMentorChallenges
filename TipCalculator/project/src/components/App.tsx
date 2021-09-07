import * as React from 'react'
import { useSelector } from 'react-redux'
import { dispatch, stateType, tipCalculator } from '../states/store'

export default function App() {
    const title = useSelector((state: stateType) => state.tipCalculator.title)
    return <>
        <h1>{ title }</h1>
        <button onClick={() => void dispatch(tipCalculator.hideInitTitle())}>Change Text</button>
        <button onClick={() => void dispatch(tipCalculator.showInitTitle())}>Change Text</button>
    </>
}