import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets } from "../assets/assets"

const DisplayAlbum = () => {
    const {id}=useParams()
    const albumData=albumsData
    console.log(albumData)
  return (
    <>
     <Navbar/> 
     <div className="mt-10 flex gap-8 flex-col  md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData[id].image}/>
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData[id].name}</h2>
            <h4>{albumData[id].desc}</h4>
            <p className="mt-1">
                <img className="inline-block w-5" src={assets.spotify_logo}/>
                <b>Spotify Clone </b>
            </p>
        </div>
     </div>
    </>
  )
}

export default DisplayAlbum
