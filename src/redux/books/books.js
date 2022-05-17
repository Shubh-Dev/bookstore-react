/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const Book = {
  title: '',
  id: Date(),
};

export const AddAction = (data) => ({ type: ADD, payLoad: data });

export const RemoveAction = (id) => ({ type: REMOVE, payLoad: id });

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return state.push(action.payLoad);
    case REMOVE:
      return state.filter((book) => book.id !== id);
    default:
      return state;
  }
}
