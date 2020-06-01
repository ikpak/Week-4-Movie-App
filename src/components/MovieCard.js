import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import YouTube from '@u-wave/react-youtube';
import ReactModal from 'react-modal'

export default function MovieCard(props) {


    const apiKey = process.env.REACT_APP_APIKEY
    let movie = props.movie
    let genres = props.genresFromMovieList
    let [modalOpen, setModalOpen] = React.useState(false)
    let [videoID, setVideoID] = React.useState(null)

    function cardClicked(id) {
        //get the function openModel from MovieList  
        openModal()

        //get youtube id 
        getMovieVideoFromAPI(id)

    }
    const openModal = () => {
        setModalOpen(true)
    }

    async function getMovieVideoFromAPI(id) {
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)

        //set videoID as first video of data result
        setVideoID(data.results[0].key)
    }
    return (
        <>
            <Card className="card" style={{ width: "14rem" }} onClick={() => cardClicked(movie.id)}>
                <Card.Img className="cardImg" variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
                <Card.Body className="cardBody">
                    <Card.Text className="rating">Rating: {movie.vote_average}</Card.Text>
                    {movie.genre_ids.map(id => {
                        return (
                            <div><Badge variant="warning">{genres.find(genre => id === genre.id).name}</Badge></div>
                        )
                    })}
                </Card.Body>
            </Card>
            <div className="modal">
                <ReactModal isOpen={modalOpen}>
                    <i className="fas fa-times my-icon" onClick={() => setModalOpen(false)}></i>
                    <div className="video-section">
                        <YouTube
                            video={videoID}
                            autoplay
                            muted
                            allowFullscreen={true}
                        />
                    </div>

                </ReactModal>
            </div>
        </>
    )
}
