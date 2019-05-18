import React, { useState } from 'react'
import './Debug.css'

const Debug = (props) => {
    const {
        enabled,
        BPM,
        currentStep,
        timePerStep,
        timePerSequence,
        totalLapsedTime
    } = props
    const [on, setOn] = useState(enabled)

    return (
        <ul className="debug">
            <li><input
                type="checkbox"
                onChange={e => setOn(e.target.checked)}
                value={on}
                checked={on}
            />Debug</li>
            {on &&
                <>
                    <li>BPM = {BPM}</li>
                    <li>currentStep = {currentStep}</li>
                    <li>timePerStep = {timePerStep}</li>
                    <li>timePerSequence = {timePerSequence}</li>
                    <li>totalLapsedTime = {totalLapsedTime}</li>
                </>
            }
        </ul>
    )
}

export default Debug
