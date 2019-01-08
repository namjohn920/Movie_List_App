import React from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';
import './Movie.css';


const Movie = ({title, poster, genres, synopsis}) => {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster ={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                    <LineEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis= '...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>

        </div>
    )
}

const MoviePoster = ({poster, alt}) => {
    return (
        <img src={poster} title={alt} className="Movie__Poster" alt={alt} />
    )
}

const MovieGenre = ({genre}) => {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

//Validating the proptype for functional component

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
    
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}


export default Movie;