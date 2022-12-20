import Message from './Message'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const SongDetails = ({search, lyric, bio}) => {

    if(!lyric || !bio) return null;

  return (
    <> 
        
        { lyric.error || lyric.err || lyric.name === "AbortError" ? <Message msg={`Error, No existe la cancion "${search.song}" `} bgColor='#dc3545' /> : <SongLyrics /> }
        { bio.artists ? <SongArtist artist={bio.artists[0]}/> : <Message msg={`Error, No existe el artista <em> "${search.artist}"</em>`} bgColor='#dc3545' /> }
        
    </>
  )
}

export default SongDetails