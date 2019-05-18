import React from 'react'
import TrackList from './components/TrackList'
import { Provider } from './hooks/useStore'

function App() {

    return (
        <Provider>
            <div>
                <h1>React 808</h1>
                <TrackList />
            </div>
        </Provider>
    )
}

export default App
