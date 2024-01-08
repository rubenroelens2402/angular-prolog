export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; // List of URLs to characters
    url: string; // URL to the episode's own endpoint
    created: string; // Time at which the episode was created in the databaseF
}
