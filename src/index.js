"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const medias_json_1 = __importDefault(require("../resources/medias.json"));
let medias = [...medias_json_1.default];
const app = (0, express_1.default)();
const PORT = 3000;
const urlbaseMediaRoute = 'https://storagecdn.codev8.net';
const urlbaseThumbnaialRoute = 'https://progressive.codev8.net';
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
app.get('/getmedias', (_req, res) => {
    let newMedia;
    const media2 = medias.map(media => (Object.assign(Object.assign({}, media), { thumbnail: Object.assign(Object.assign({}, media.thumbnail), { thumbnailroute: `${urlbaseThumbnaialRoute}/userdatanew/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/thumbnails/${media.thumbnail.filename}` }), mediaroute: `${urlbaseMediaRoute}/ondemand/b4ab8f95-bc2b-4d88-8ff0-df4df19d206c/${media.filedata.filename}` })));
    newMedia = media2;
    res.send(newMedia);
});
app.post('/addmedias', (req, res) => {
    const newMedia = req.body;
    const lastId = medias[medias.length - 1].id;
    const lastThumbnailid = medias[medias.length - 1].thumbnail.id;
    newMedia.id = lastId + 1;
    newMedia.thumbnail.id = lastThumbnailid + 1;
    medias.push(newMedia);
    res.status(201).send({ message: "Media added successfully", media: medias });
});
app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`);
});
