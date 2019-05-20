import React, { useContext, useEffect, memo } from 'react'
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
    const noteClassNames = classNames('note', {
        'on': isNoteOn,
        'playing': isNoteOn && isNoteOnCurrentStep
    })

    useEffect(() => {
        if (isNoteOn && isNoteOnCurrentStep) {
            sound.play()
        }

    }, [isNoteOn, isNoteOnCurrentStep, sound])

    const noteClicked = e => {
        e.target.classList.toggle('on')
        toggleNote({ trackID, stepID })
        sound.play()
    }

    return (
        <div
            className={noteClassNames}
            onClick={noteClicked}
        />
    )
}

export default memo(Note)
