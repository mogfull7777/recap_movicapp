import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Container} from "react-bootstrap";

const TvDetail = () => {

    const  { tvid } = useParams();

    const [tv, setTv] = useState({})

    const getTvInfo = async () => {
        const address = `https://api.themoviedb.org/3/tv/${tvid}?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US`
        try {
            const result = await axios.get(address)
            console.log(result.data)

            setTv(result.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTvInfo()
    }, []);
    // 유형을 안넣어 주면 무한반복.

    return (
        <Container>
            <h1>{tv.name}</h1>
        </Container>
    );
};

export default TvDetail;