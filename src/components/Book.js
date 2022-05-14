import React from 'react';

function Book(book) {
  let { title, Author } = book;
  title = 'Mistress of Spices';
  Author = 'Divakaruni';
  return (
    <div>
      <h1>{title}</h1>
      <p>{Author}</p>
    </div>
  );
}

export default Book;
