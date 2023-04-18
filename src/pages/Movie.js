import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row, Table} from "react-bootstrap";

const Movie = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async  () => {
        const address = "https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1";
        try {

            const res = await  axios.get(address)
            setMovies(res.data.results)

        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container style={{marginTop : "4rem"}}>
            <h2>Movie List</h2>
            <Row style={{marginTop : "2rem"}}>
                <Table striped bordered hover size={"sm"} variant="dark">
                    <thead>
                    <tr>
                        <th>영화넘버</th>
                        <th>제목</th>
                        <th>출시일</th>
                        <th>평점</th>
                        <th>성인여부</th>
                        <th>인기지수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies && movies.map(movie => (
                        <tr>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.vote_average}</td>
                            <td>{movie.adult ? "성인" : "모든연령 가능"}</td>
                            <td>{movie.popularity}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default Movie;