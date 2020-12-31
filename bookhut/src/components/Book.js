import React from "react";
import defaultBook from "../Images/book.gif"

const Book = (props) => {

    //const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;

    return (
        <div className="col s12 m4" >
            <div className="card">
                <div className="card-image">
                    {props.data.volumeInfo.imageLinks === undefined ? (
                        <img
                            //src="https://picsum.photos/200/300/?blur=2"
                            src={defaultBook}
                            alt={props.data.volumeInfo.title}
                        />
                    ) :
                        (
                            <img src={props.data.volumeInfo.imageLinks.smallThumbnail} alt={props.data.volumeInfo.title} />
                        )
                    }
                    <a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">add</i></a>

                </div>
                <div class="card-content">
                    <span className="card-title" style={{ fontSize: 20 }}>{props.data.volumeInfo.title}</span>
                    <p><b>Published by: </b>{props.data.volumeInfo.publisher}</p>
                    <p><b>Rating: </b>{props.data.volumeInfo.averageRating}</p>
                </div>
            </div>
        </div>
    )
}

export default Book;



