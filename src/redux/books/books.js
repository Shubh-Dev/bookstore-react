const ADD = 'ADD';
const REMOVE = 'REMOVE';

// let ArrOfBooks = [];
const Book = {
  title: '',
  id: Date(),
  // present: false
};

export const AddAction = (data) => ({ type: ADD, payLoad: data });

export const RemoveAction = (id) => ({ type: REMOVE, payLoad: id });

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return state.push(action.payLoad);
    case REMOVE:
      return state.filter((book) => { book.id !== id; });
    default: state;
  }
}
