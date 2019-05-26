const sequenceList = [
    {
        id: 0,
        title: 'Pulse',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 1,
        title: 'Driving thump',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 2,
        title: 'Smooth Backbeat',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 8, 10, 14],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 12],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 3,
        title: 'Boom Chuck',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [2, 6, 10, 14],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 4,
        title: 'Transporter',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0,1,2,3,6,8,10,13,14,15],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4,12],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0,4,8,12],
            }
        ]
    },
]

const soundFiles = {
    'kick': '/sounds/kick.wav',
    'snare': '/sounds/snare.wav',
    'hh_open': '/sounds/hh_open.wav',
    'hh_closed': '/sounds/hh_closed.wav'
}

export { sequenceList, soundFiles }
