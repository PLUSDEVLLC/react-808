import React, { useState, useEffect, memo } from 'react'
import Sound from '../utils/Sound'

const Track = ({
    trackID,
    title,
    noteCount,
    onNotes,
    soundFilePath
}) => {
    const [sound, setSound] = useState()

    useEffect(() => {
        setSound(new Sound(soundFilePath))
    }, [soundFilePath])

    const notes = [...Array(noteCount)].map((el, i) => {
        const isOn = onNotes.indexOf(i) !== -1
        const stepID = i

        return (
            <div key={i}>
                trackID={trackID}
                stepID={stepID}
                isOn={String(isOn)}
                <button onClick={() => sound.play()}>play</button>
            </div>
        )
    })

    return (
        <div className="track">
            <header className="track_title">{title}</header>
            <main className="track_notes">
                {notes}
            </main>
        </div>
    )
}

export default memo(Track)
