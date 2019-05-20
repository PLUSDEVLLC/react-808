import React, { useState, useEffect, useCallback, memo } from 'react'
import Sound from '../utils/Sound'
import Note from './Note'
import './Track.css'

const Track = ({
    trackID,
    currentStepID,
    title,
    noteCount,
    onNotes,
    soundFilePath,
}) => {
    const [sound, setSound] = useState({ play: () => { } })
    const play = useCallback(() => sound.play(), [sound])

    useEffect(() => {
        setSound(new Sound(soundFilePath))

    }, [soundFilePath])

    const notes = [...Array(noteCount)].map((el, i) => {
        const isNoteOn = onNotes.indexOf(i) !== -1
        const isNoteOnCurrentStep = currentStepID === i
        const stepID = i

        return (
            <Note
                key={i}
                trackID={trackID}
                stepID={stepID}
                isNoteOn={isNoteOn}
                isNoteOnCurrentStep={isNoteOnCurrentStep}
                play={play}
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
