import React, { useEffect, useState } from 'react'
import Sound from './utils/Sound'
import TrackList from './components/TrackList'
import { Provider } from './hooks/useStore'

function App() {
    const [sound, setSound] = useState({ play: () => { } })
    const soundFilePath = '/sounds/snare.wav'

    useEffect(() => {
        setSound(new Sound(soundFilePath))
    }, [soundFilePath])

    return (
        <Provider>
            <div>
                <h1>React 808</h1>
                <button onClick={() => sound.play()}>play {soundFilePath}</button>
                <TrackList />
            </div>
        </Provider>
    )
}

export default App
