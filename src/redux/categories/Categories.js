const CHECK = 'CHECK';

export const CheckStatus = () => ({ type: CHECK, payLoad: 'Under Construction' });

export default function Category(state, action) {
  switch (action.type) {
    case CHECK:
      return state.push(action.payLoad);
    default:
      return state;
  }
}
