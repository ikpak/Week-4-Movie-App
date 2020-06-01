import React from 'react'
import MovieCard from './MovieCard.js'
import { Row, Col } from 'react-bootstrap'

export default function MovieList(props) {


    if (props.movieList === null) {
        return <div>Loading...</div>
    }

    function moveDataToHigher(id) {
        props.moveDataToHigher(id)
    }

    return (
        <Row>
            {props.movieList.map(item => {
                return <Col className="cards" lg="3" xs="12"><MovieCard movie={item} genresFromMovieList={props.genresFromApp} openModal={props.openModal} moveDataToHigher={moveDataToHigher} /></Col>
            })}
        </Row>
    )
}