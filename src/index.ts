import express, { Response, Request } from 'express';
import cors from 'cors'

import { mediasType } from './types/medias';
import { newMediasType } from './types/medias';

import mediasJson from '../resources/medias.json';

const medias: mediasType = mediasJson;
const app = express();
const PORT: Number = 3000;
const urlbaseMediaRoute: String = 'https://storagecdn.codev8.net';
const urlbaseThumbnaialRoute: String = 'https://progressive.codev8.net';

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/getmedias', (_req, res: Response) => {
    let newMedia: newMediasType;
    const media2 = medias.map(media => ({
        ...media,
        thumbnail:
            { ...media.thumbnail, thumbnailroute: `${urlbaseThumbnaialRoute}/userdatanew/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/thumbnails/${media.thumbnail.filename}` },
        mediaroute: `${urlbaseMediaRoute}/ondemand/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/${media.filedata.filename}`,
    }));
    newMedia = media2;
    res.send(newMedia);
})

app.post('/addmedias', (req: Request, res: Response) => {
    console.log(req)

    res.send("llego")
})

app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`)
})