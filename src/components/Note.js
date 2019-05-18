import React, { useContext, memo } from 'react'
import classNames from 'classnames'
import { Context } from '../hooks/useStore'
import './Note.css'

const Note = ({
    trackID,
    stepID,
    isOn,
    sound,
}) => {
    const [state, setState] = useContext(Context)
    const noteClassNames = classNames('note', {
        'on': isOn
    })

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
