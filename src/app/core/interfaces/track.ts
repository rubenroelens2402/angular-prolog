export interface ITrack {
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