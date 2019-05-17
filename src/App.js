import React, { useEffect, useState } from 'react'
import Sound from './utils/Sound'

function App() {
    const [sound, setSound] = useState({ play: () => { } })
    const soundFilePath = '/sounds/snare.wav'

    useEffect(() => {
        setSound(new Sound(soundFilePath))
    }, [soundFilePath])

    return (
        <div>
            <h1>React 808</h1>
            <button onClick={() => sound.play()}>play {soundFilePath}</button>
        </div>
    )
}

export default App
