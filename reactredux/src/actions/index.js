const booksLoaded = (newBooks) =>{
    return{
        type : 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksRequested = () =>{
    return{
        type : 'FETCH_BOOKS_REQUEST',
    }
};

const booksError = (error) =>{
    return{
        type : 'FETCH_BOOKS_FAILURE',
        payload : error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type : 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const bookDecreaseFromCart = (bookId) => {
    return {
        type : 'DECREASE_BOOK_REQUEST',
        payload : bookId
    }
};

const bookIncreaseFromCart = (bookId) => {
    return {
        type : 'INCREASE_BOOK_REQUEST',
        payload : bookId
    }
};

const bookDeleteFromCart = (bookId) => {
    return {
        type : 'DELETE_BOOK_REQUEST',
        payload : bookId
    }
};

export {
    bookDeleteFromCart,
    bookAddedToCart,
    booksError,
    booksLoaded,
    booksRequested,
    bookDecreaseFromCart,
    bookIncreaseFromCart
}