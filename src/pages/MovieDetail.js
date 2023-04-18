import React, {useEffect, useState} from 'react';
// 1. useParams 들고오기
import { useParams } from "react-router-dom";
import axios from "axios";
import {Container} from "react-bootstrap";

const MovieDetail = () => {

    //2.
    const { movieid } = useParams();

    const [movie, setMovie] = useState({})

    const getMovieInfo = async () => {
        const address = `https://api.themoviedb.org/3/movie/${movieid}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`;
        try {
            const result = await axios.get(address)
            console.log(result.data)

            setMovie(result.data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getMovieInfo()
    }, [])

    return (
        <Container>
            <h1>{movie.original_title}</h1>
            <h2>출시일 : {movie.release_date}</h2>
            <p>
                {movie.overview}
            </p>
        </Container>
    );
};

export default MovieDetail;