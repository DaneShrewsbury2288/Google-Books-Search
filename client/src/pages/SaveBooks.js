import React, { Component } from "react";
import API from "../utils/API";

import Header from "../components/Header";
import { Container } from "../components/Grid";
import SavedResults from "../components/SavedResults";


class SaveBooks extends Component {
    state = {
        savedBooks: []
    };


    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = _id => {
        console.log(_id)
        API.deleteBook(_id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Header />
                <Container fluid>
                    <SavedResults 
                    savedBooks={this.state.savedBooks} 
                    handleDeleteButton={this.handleDeleteButton} 
                    />
                </Container>


            </div>



        )
    }



}

export default SaveBooks;