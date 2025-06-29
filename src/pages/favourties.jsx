import "../css/favourties.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/Moviescars" 



function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites){
        return(
            <div className="favorites"> 
                <h2>Your Favoirtes</h2>
            <div className="movies-grid">
                {favorites.map((movie) =>( 
                    <MovieCard movie={movie} key={movie.id}/>     
                ))}
            </div>
            </div>
         )
    }
    return <div className="favorites-empty">
        <h2>No Favorites movies</h2>
        <p>Start adding Movies to your favourite page</p>
    </div>
}
export default Favorites