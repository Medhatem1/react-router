import { useParams } from "react-router-dom";
import Json from "./Json"

export default function Page(){
  const { title } = useParams();

  const movie = Json.find((Movie) => Movie.title === title);

  return(
    <div>
     <h1>the title is {title}</h1>
     <p>{movie.extract}</p>
     <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
  )
}