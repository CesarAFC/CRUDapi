import React, {useState, useEffect} from 'react'
import { helpHttp } from './helpHttps';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(search === null) return;

        const fetchData = async () => {

            let { artist, song } = search;
            artist = artist.toLowerCase();

            let artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songURL = `https://jsonplaceholder.typicode.com/posts/1`;

            setLoading(true);

            //const artistRes =  await helpHttp().get(artistURL);
            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistURL),
                helpHttp().get(songURL),
            ]);
            
            //console.log(artistRes, songRes);

            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        }

        fetchData();

    }, [search])
    

    const handleSearch = (data) => {
        //console.log(data);
        setSearch(data);
    }
    
  return (
    <div>
        <h2>Song Search</h2>
        <article className="grid-1-3">

            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch} />
            {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
                )} 
        </article>
    </div>
  )
}

export default SongSearch