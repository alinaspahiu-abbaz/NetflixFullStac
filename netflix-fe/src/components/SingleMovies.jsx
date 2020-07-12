import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"

export default class SingleMovies extends Component {

    deleteMovie = async(imdbID) => {
        const moviesResp = await fetch("http://localhost:3003/movies/" + imdbID, {
            method:"DELETE"
        })
        if(moviesResp.ok){
            // here we contact with parent to delete this is(book). The parent is on the BackOffice Component
            this.props.onDelete(imdbID)
        }
        
    }
    

  
    render() {

        const {Title, imdbID, Poster, Type} = this.props.item
        
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                         {Title} 
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                    <Button className="ml-3" variant="danger"
                          onClick= {() => this.deleteMovie(imdbID) }
                    >Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}
