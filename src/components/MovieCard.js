import React from 'react'
import {Card, Badge} from 'react-bootstrap'

export default function MovieCard(props) {
    let movie = props.movie
    let genres = props.genresFromMovieList

    return (
        <Card className="card" style={{width: "14rem"}}>
            <Card.Img className="cardImg" variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
            <Card.Body className="cardBody">
                <Card.Text className="rating">Rating: {movie.vote_average}</Card.Text>
                {movie.genre_ids.map(id => {return(
                    <div><Badge variant="warning">{genres.find(genre => id === genre.id).name}</Badge></div>
                )})}
            </Card.Body>
        </Card>
    )
}
