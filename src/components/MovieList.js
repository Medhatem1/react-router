import Json from "../Json"
import MovieCard from "./MovieCard"
export default function MovieList({movies}){
    return (
        <>
        <div className="index" >
        {movies.map( (item,index) => 
            <MovieCard {...item} key={index} />
             )}
        </div>
        
        </>
    )
}
