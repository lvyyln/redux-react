import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import {withBookstoreService} from "../hoc";
import {booksError, booksLoaded, booksRequested , bookAddedToCart , bookDecreaseFromCart} from "../../actions";
import {bindActionCreators} from 'redux'
import './book-list.css';
import Spinner from "../spinner/spinner";


const BookList = ({books, onAddedToCart}) =>{

    return (
        <ul className="book-list">
            {
                books.map((item) => {
                    return (
                        <li>
                            <BookListItem onAddedToCart={() => onAddedToCart(item.id)} book={item}>

                            </BookListItem>
                        </li>
                    )
                })
            }
        </ul>
    )
};


class BookListContainer extends Component {


    componentDidMount() {
        this.props.fetchBooks();
    }


    render() {
        const {books, loading} = this.props;
        if (loading) return <Spinner></Spinner>
        return <BookList onAddedToCart={this.props.onAddedToCart} books={books}></BookList>
    }
}


const mapStateToProps = (state) => {
    return {
        books : state.bookList.books,
        loading: state.bookList.loading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: () => {
            dispatch(booksRequested());

            ownProps.bookstoreService.getBooks().then((data) => {
                dispatch(booksLoaded(data))
            }).catch((err) => dispatch(booksError(err)));
        },
        onAddedToCart : (id) =>{
            dispatch(bookAddedToCart(id));
        }
    }
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));