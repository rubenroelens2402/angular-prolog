interface ITrack {
    id: string;
    title: string;
    artists: string[];
    album: string;
    label: string;
    date: Date;
    length: number;
    bpm: number;
    key: string;
}

export const mockTracks : ITrack[] = [
    {
        id: '1',
        title: 'Track 1',
        artists: ['Artist 1', 'Artist 2'],
        album: 'Album 1',
        label: 'Label 1',
        date: new Date(),
        length: 300,
        bpm: 120,
        key: 'C'
    },
    {
        id: '2',
        title: 'Track 2',
        artists: ['Artist 1', 'Artist 2'],
        album: 'Album 1',
        label: 'Label 1',
        date: new Date(),
        length: 300,
        bpm: 120,
        key: 'C'
    },
    {
        id: '3',
        title: 'Track 3',
        artists: ['Artist 1', 'Artist 2'],
        album: 'Album 1',
        label: 'Label 1',
        date: new Date(),
        length: 300,
        bpm: 120,
        key: 'C'
    },
    {
        id: '4',
        title: 'Track 4',
        artists: ['Artist 1', 'Artist 2'],
        album: 'Album 1',
        label: 'Label 1',
        date: new Date(),
        length: 300,
        bpm: 120,
        key: 'C'
    },
    {
        id: '5',
        title: 'Track 5',
        artists: ['Artist 1', 'Artist 2'],
        album: 'Album 1',
        label: 'Label 1',
        date: new Date(),
        length: 300,
        bpm: 120,
        key: 'C'
    }
];