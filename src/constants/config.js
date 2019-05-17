const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1',
        noteCount: 16,
        trackList: {
            1: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12],
            },
            2: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [2, 4, 10, 12, 15],
            },
            3: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [8],
            },
            4: {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 4, 5, 6, 7, 12, 14],
            }
        }
    },
    {
        id: 1,
        title: 'Sequence 2',
        noteCount: 16,
        trackList: {
            1: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            },
            2: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [0, 4, 9],
            },
            3: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [12],
            },
            4: {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [3, 7, 11],
            }
        }
    },
    {
        id: 2,
        title: 'Sequence 3',
        noteCount: 16,
        trackList: {
            1: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            2: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 12],
            },
            3: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [2, 6, 10, 14],
            },
            4: {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            }
        }
    }
]

const soundFiles = {
    'kick': '/sounds/kick.wav',
    'snare': '/sounds/snare.wav',
    'hh_open': '/sounds/hh_open.wav',
    'hh_closed': '/sounds/hh_closed.wav'
}

export { sequenceList, soundFiles }
