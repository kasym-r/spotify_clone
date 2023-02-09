import React, { useEffect } from 'react'
import { useSongs } from '../../Hooks/useSongs'
import MusicCard from '../../MusicCard'
import { songsService } from '../../services/songs.service'

//styles 
import './Main.scss'

const Main = () => {
  const { songs, saveSongs } = useSongs()

  useEffect(() => {
    const fetch = async () => {
      const songs = await songsService.getRecomendation()

      saveSongs(songs.tracks)
    }

    fetch()
  }, [])

  return (
    <div className="main_page">
      {
        songs?.length && songs.map((item, idx) => (
          <MusicCard key={idx} {...item} />
        ))
      }
    </div>
  )
}

export default Main