import React, { useContext, memo } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'
import Track from './Track'

const TrackList = () => {
    const [{ trackList, noteCount }] = useContext(Context)

    const content = Object.keys(trackList).map(trackID => {
        const { title, onNotes, soundFile } = trackList[trackID]
        const soundFilePath = soundFiles[soundFile]

        return (
            <Track
                trackID={+trackID}
                key={title}
                title={title}
                noteCount={noteCount}
                onNotes={onNotes}
                soundFilePath={soundFilePath}
            />
        )
    })

    return (
        <div className="track-list">
            {content}
        </div>
    )
}

export default memo(TrackList)

