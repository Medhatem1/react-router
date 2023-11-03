import Json from "../Json"
export default function MovieCard(Json){
    return (
        <>
        <div className="Card">
            <a href={Json.href}> <img src={Json.thumbnail} alt="the grudge" width={Json.thumbnail_width} height={Json.thumbnail_height} /></a>
            <h1 className="title">{Json.title}</h1>
            <p className="year">{Json.year}</p>
            <p>{Json.genres}</p>
            <p>{Json.cast}</p>
            <p className="descr">{Json.extract}</p>
        </div>
        </>
    )
}