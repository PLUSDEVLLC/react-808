import React, { useContext, useEffect, useState, memo } from 'react'
import classNames from 'classnames'
import { Context } from '../hooks/useStore'
import './Note.css'

const Note = ({
    trackID,
    stepID,
    isOn,
    sound,
    isInPlayPosition
}) => {
    const [state, setState] = useContext(Context)
    const [playing, setIsPlaying] = useState(false)
    const shouldAnimate = isInPlayPosition && isOn
    const shouldPlay = !playing && shouldAnimate
    const noteClassNames = classNames('note', {
        'on': isOn,
        'playing': shouldAnimate
    })

    useEffect(() => {
        if (shouldPlay) {
            setIsPlaying(true)
            sound.play()
        } else if (playing && !isInPlayPosition) {
            setIsPlaying(false)
        }
    }, [isInPlayPosition, playing, shouldPlay, sound])

    const noteClicked = e => {
        e.target.classList.toggle('on')
        let newOnNotes
        const onNotes = state.trackList[trackID].onNotes
        if (onNotes.indexOf(stepID) === -1) {
            newOnNotes = [...onNotes, stepID]
        } else {
            newOnNotes = onNotes.filter(col => col !== stepID)
        }
        setState({
            ...state,
            trackList: {
                ...state.trackList,
                [trackID]: {
                    ...state.trackList[trackID],
                    onNotes: newOnNotes
                }
            }
        })
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
