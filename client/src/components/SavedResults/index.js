import React from "react";
import "./style.css";
import { Row, Col } from "../Grid"

function SavedResults(props) {
    return (props.savedBooks.length === 0) ? (
        <div className="ResultsMenu">
            <div className="ResultsWrapper">
                <h3 className="ResultsH1"> Books you saved: </h3>
                <div className="ResultsDiv">
                </div>
            </div>
        </div>
    ) : (
            <div className="ResultsMenu">
                <div className="ResultsWrapper">
                  <div className="ResultsDiv">
                    <h3 className="ResultsH1"> Books you saved: </h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                        <li className="search-list list-group-item">
                            <Row className="SearchResult row" id={savedbook.title + "Card"} key={savedbook.id}>
                                <Col size="2" className="bookImage">
                                    <img src={savedbook.image} alt={savedbook.title} />
                                </Col>
                                <Col size="1" className="emptyCol" />
                                <Col size="9" className="bookInfo">
                                    <Row>
                                        <h3 className="bookTitle">{savedbook.title}</h3>
                                    </Row>
                                    <Row>
                                        <h4 className="bookAuthor">{savedbook.author}</h4>
                                    </Row>
                                    <Row>
                                        <p className="bookDescription">{savedbook.description}</p>
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                            <Row className="buttonDiv ">
                            <button className="deleteBook btn btn-primary" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                    Delete Book
                                        </button>
                                <a href={savedbook.link}>
                                    <button className="viewBook btn btn-success">
                                        View Book
                                        </button>
                                </a>
                            </Row>
                        </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SavedResults;