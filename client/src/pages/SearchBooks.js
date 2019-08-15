import React, { Component } from "react";
import API from "../utils/API";

import Header from "../components/Header";
import SearchMenu from "../components/SearchMenu";
import Results from "../components/Results";

class SearchBooks extends Component {
    state = {
        search: "",
        books: []
    };

    componentDidMount() {
        this.loadBooks();
      };

    loadBooks = () => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <Header />
                <SearchMenu />
                <Results />


            </div>



        )
    }



}

export default SearchBooks;