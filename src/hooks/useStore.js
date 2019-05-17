import React, { useState, createContext } from 'react'
import { sequenceList } from '../constants/config'

const Context = createContext([{}, () => { }])

const Provider = ({ children }) => {
    const [state, setState] = useState({ ...sequenceList[0] })

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}

export {
    Provider,
    Context
}
