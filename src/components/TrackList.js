import React, { useContext, memo } from 'react'
import { Context } from '../hooks/useStore'
import { soundFiles } from '../constants/config'

const TrackList = () => {
    const [{ trackList }] = useContext(Context)

    const content = Object.keys(trackList).map(trackID => {
        const { soundFile } = trackList[trackID]
        const soundFilePath = soundFiles[soundFile]

        return (
            <div key={trackID}>
                {
                    soundFilePath
                }
            </div>
        )
    })

    return (
        <div className="track-list">
            {content}
        </div>
    )
}

export default memo(TrackList)

