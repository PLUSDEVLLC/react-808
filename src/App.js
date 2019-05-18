import React, { useState, useEffect } from 'react'
import TrackList from './components/TrackList'
import ToolBar from './components/Toolbar'
import Debug from './components/Debug'
import { Provider } from './hooks/useStore'
import useTimer from './hooks/useTimer'
import useStyles from './hooks/useStyles'
import './App.css'

function App() {

    const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [BPM, setBPM] = useState(128)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStep, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / BPM * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.ceil(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerSequence, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        BPM
    }

    const trackListProps = {
        currentStep
    }

    const debugProps = {
        BPM,
        currentStep,
        timePerStep,
        timePerSequence,
        totalLapsedTime
    }

    return (
        <Provider>
            <div>
                <h1>React 808</h1>
                <ToolBar {...toolBarProps} />
                <Debug enabled {...debugProps} />
                <TrackList {...trackListProps} />
            </div>
        </Provider>
    )
}

export default App
