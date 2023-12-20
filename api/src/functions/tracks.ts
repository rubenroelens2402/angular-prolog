import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { mockTracks } from "../../mock/tracks";

export async function tracks(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {

    const tracks = mockTracks;

    return { body: JSON.stringify(tracks), status: 200 };
};

app.http('tracks', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: tracks
});
