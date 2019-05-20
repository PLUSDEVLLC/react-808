import React, { useContext, useEffect, useState, memo } from 'react'
import classNames from 'classnames'
import { Context } from '../hooks/useStore'
import './Note.css'

const Note = ({
    sound,
    trackID,
    stepID,
    isNoteOn,
    isNoteOnCurrentStep
}) => {

    const { toggleNote } = useContext(Context)
    const [playing, setIsPlaying] = useState(false)
    const noteClassNames = classNames('note', {
        'on': isNoteOn,
        'playing': isNoteOn && isNoteOnCurrentStep
    })

    useEffect(() => {
        if (!playing && isNoteOn && isNoteOnCurrentStep) {
            setIsPlaying(true)
            sound.play()
        } else if (playing && !isNoteOnCurrentStep) {
            setIsPlaying(false)
        }

    }, [isNoteOn, isNoteOnCurrentStep, playing, sound])

    const noteClicked = e => {
        e.target.classList.toggle('on')
        toggleNote({ trackID, stepID })
        if (!playing) sound.play()
    }

    return (
        <div
            className={noteClassNames}
            onClick={noteClicked}
        />
    )
}

export default memo(Note)
