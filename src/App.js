import React, { useState, useEffect } from 'react'
import TrackList from './components/TrackList'
import ToolBar from './components/Toolbar'
import { Provider } from './hooks/useStore'
import useTimer from './hooks/useTimer'
import './App.css'

function App() {

    const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [debug, setDebug] = useState(true)
    const [BPM, setBPM] = useState(128)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStep, setCurrentStep] = useState(null)

    const timePerSequence = baseBPMPerOneSecond / BPM * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.ceil(totalLapsedTime / timePerStep))
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime])

    const togglePlayback = () => {
        if (isSequencePlaying) {
            setPastLapse(l => l + performance.now() - startTime)
            setStartTime(null)
        } else {
            setStartTime(performance.now())
        }
    }

    const Debug = () => {
        return (
            <ul>
                <li><input
                    type="checkbox"
                    onChange={e => setDebug(e.target.checked)}
                    checked={debug && debug}
                />Debug</li>
                {debug &&
                    <>
                        <li>BPM = {BPM}</li>
                        <li>currentStep = {currentStep}</li>
                        <li>timePerSequence = {timePerSequence}</li>
                        <li>timePerStep = {timePerStep}</li>
                    </>
                }
            </ul>
        )
    }

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        BPM
    }

    return (
        <Provider>
            <div>
                <h1>React 808</h1>
                <ToolBar {...toolBarProps} />
                <button onClick={() => togglePlayback()}>togglePlayback</button><br />
                <Debug />
                <TrackList />
            </div>
        </Provider>
    )
}

export default App
