import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/BooksList';
import Categories from './components/Categories';

/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Book store app</h1>
        <Header />
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/BooksList" element={<BooksList />} />
          <Route path="Categories" element={<Categories />} />

        </Routes>
      </div>
    );
  }
}

export default App;
