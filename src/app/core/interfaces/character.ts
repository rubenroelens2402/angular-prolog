export interface ICharacter {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    type: string;
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string; // URL to the character's image
    episode: string[]; // List of URLs to episodes
    url: string; // URL to the character's own endpoint
    created: string; // Time at which the character was created in the database
}
