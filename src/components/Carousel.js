import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function UpcomingMovieList(props) {
    let upcomingMovies = props.upcomingMovieList

    if(upcomingMovies === null) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[0].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[0].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[0].title}</h3>
                        <p>{upcomingMovies[0].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[1].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[1].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[1].title}</h3>
                        <p>{upcomingMovies[1].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[2].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[2].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[2].title}</h3>
                        <p>{upcomingMovies[2].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[3].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[3].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[3].title}</h3>
                        <p>{upcomingMovies[3].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[4].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[4].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[4].title}</h3>
                        <p>{upcomingMovies[4].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[5].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[5].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[5].title}</h3>
                        <p>{upcomingMovies[5].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        alt={upcomingMovies[6].title}
                        src={`https://image.tmdb.org/t/p/original/${upcomingMovies[6].backdrop_path}`}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h3>{upcomingMovies[6].title}</h3>
                        <p>{upcomingMovies[6].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}