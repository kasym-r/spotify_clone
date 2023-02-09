import { useContext } from 'react'
import { SongsContext } from "../context/songs.context"

export const useSongs = () => {
    const { songs, setSongs } = useContext(SongsContext)

    const saveSongs = (value) => {
        setSongs(value)
    }

    return {
        songs,
        saveSongs
    }
}