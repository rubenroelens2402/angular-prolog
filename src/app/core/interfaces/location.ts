export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[]; // List of URLs to residents
    url: string; // URL to the location's own endpoint
    created: string; // Time at which the location was created in the database
}
