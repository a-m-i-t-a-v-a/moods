import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="mb-4">
        <h1 className="my-5 font-mono text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData?.map((album,index)=>(
                <AlbumItem 
                    key={index} 
                    image={album.image} 
                    name={album.name}
                    desc={album.desc}
                    id={album.id}
                />
            ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-mono text-2xl">Today&apos;s greatest hits</h1>
        <div className="flex overflow-auto">
        {songsData?.map((song,index)=>(
            <SongItem 
                key={index}
                name={song.name}
                image={song.image}
                desc={song.desc}
                id={song.id}
            />
        ))}
        </div>
      </div>
    </>
  )
}

export default Home
