import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store";
import BookStoreService from "./services/bookstore-service";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import {BookstoreServiceProvider} from './components/bookstore-service-context/index.js';


const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
           <BookstoreServiceProvider value={bookStoreService}>
               <Router>
                   <App/>
               </Router>
           </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));