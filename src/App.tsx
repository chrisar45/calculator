/* eslint no-eval: 0 */
import React, { useState, FC } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

import './App.css'

const App: FC = () => {
    const [ stack, setStack ] = useState("")
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"
    return (
        <main className="react-calculator">
            <Result value={value}/>
            <Functions 
                onContentClear={clear => setStack("")} 
                onDelete={() => {
                    if(stack.length > 0){
                        const newStack = stack.substring(0, stack.length -1 )
                        setStack(newStack)
                    }
                }}
                onPercent={() => {
                    if(stack.length > 1) {
                        console.log("No me salió como hacer el porcentaje")
                    }
                }}
            />
            <Numbers onClickNumber={number => setStack(`${stack}${number}`)} />
            <MathOperations 
                onClickOperation={operation => setStack(`${stack}${operation}`)}
                onClickEqual={equal => setStack(eval(stack.toString()))}
            />
        </main>
    )
}

export default App