import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Main = () => {

    const [tvs, setTvs] = useState([]);

    const getTvs = async () => {

        const address = "https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1";

        try {

            const res = await axios.get(address)

            console.log("aaaaaaa", res.data.results)
            setTvs(res.data.results)

        } catch (err) {
            console.log(err)
        };

    }

    useEffect(() => {
        getTvs()
    }, [])

    return (
        <Container>
            <Row>
                {tvs && tvs.map(m => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                style={{height : "250px"}}
                                variant="top"
                                src={
                                    m.poster_path
                                        ? "https://image.tmdb.org/t/p/w500" + m.poster_path
                                        : require("../img/images.png")
                                }
                            />
                            <Card.Body>
                                <Card.Title>{m.name.slice(0, 20)}</Card.Title>
                                <Card.Text>
                                    {m.overview ? m.overview.slice(0,150) : "no overview"}
                                </Card.Text>
                                <Card.Text>
                                    출시일 : {m.first_air_date ? m.first_air_date : "0000-00-00"}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Main;