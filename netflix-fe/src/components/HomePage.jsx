import React, { Component } from 'react'
import SingleMovies from "./SingleMovies"
import {Col, Container, Row} from "react-bootstrap"

export default class HomePage extends Component {
    state = {
        movies: []
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.state.movies.map(movie =>
                   <Col md={3} sm={6}>
                   <SingleMovies item={movie} 
                   onDelete = {(asin) => this.setState({ books: this.state.books.filter(book => book.asin !== asin)})
                }/>
                 
                   </Col>
                   )}
                </Row>
           </Container>
        )
    }

    componentDidMount = async () => {

        const moviesResp = await fetch("http://localhost:3030/movies")
        const movies = await moviesResp.json()
        this.setState({movies:movies.slice(0,12)})
       console.log(movies)
    }
}


