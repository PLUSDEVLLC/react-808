const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1',
        noteCount: 16,
        trackList: {
            0: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12],
            },
            1: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [2, 4, 10, 12, 15],
            },
            2: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [8],
            },
            3: {
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
            0: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            },
            1: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [0, 4, 9],
            },
            2: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [12],
            },
            3: {
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
            0: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            1: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 12],
            },
            2: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [2, 6, 10, 14],
            },
            3: {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            }
        }
    },
    {
        id: 3,
        title: 'Sequence 4',
        noteCount: 16,
        trackList: {
            0: {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            1: {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            2: {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            3: {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
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
