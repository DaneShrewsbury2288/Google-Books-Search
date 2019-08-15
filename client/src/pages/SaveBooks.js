import React, { Component } from "react";
import API from "../utils/API";

import Header from "../components/Header";
import Results from "../components/Results";

class SaveBooks extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Header />
                <Results />


            </div>



        )
    }



}

export default SaveBooks;