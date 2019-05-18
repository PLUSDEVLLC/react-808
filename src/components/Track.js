import React, { useState, useEffect, memo } from 'react'
import Sound from '../utils/Sound'
import Note from './Note'
import './Track.css'

const Track = ({
    trackID,
    title,
    noteCount,
    onNotes,
    soundFilePath,
    currentStep
}) => {
    const [sound, setSound] = useState({ play: () => { } })

    useEffect(() => {
        setSound(new Sound(soundFilePath))
    }, [soundFilePath])

    const notes = [...Array(noteCount)].map((el, i) => {
        const isOn = onNotes.indexOf(i) !== -1
        const isInPlayPosition = currentStep === i
        const stepID = i

        return (
            <Note
                key={i}
                trackID={trackID}
                stepID={stepID}
                isOn={isOn}
                isInPlayPosition={isInPlayPosition}
                sound={sound}
            />
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
