interface MediasType {
    id: string
    title: string
    description: string
    duration: number
    tags: string
    filedata: {
        bitrate: number
        fileSize: number
        filename: string
    }
    thumbnail: {
        id: string
        name: string
        filename: string
    },
}

interface NewMediasType {
    id: string
    title: string
    description: string
    duration: number
    tags: string
    filedata: {
        bitrate: number
        fileSize: number
        filename: string
    }
    thumbnail: {
        id: string
        name: string
        filename: string,
        thumbnailroute?: String
    },
    mediaroute: String
}

export type mediasType = MediasType[];
export type newMediasType = NewMediasType[];