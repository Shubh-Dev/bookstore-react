import React from 'react';

function AddBook() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Add Book" />

        <input type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>

    </div>
  );
}

export default AddBook;
