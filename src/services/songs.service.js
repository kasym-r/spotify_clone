import { instance } from "../helpers/api"

export const songsService = {
    getRecomendation: async () => {
        const { data } = await instance.get('songs/list-recommendations')

        return data 
    }
}