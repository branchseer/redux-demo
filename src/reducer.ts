import { AnyAction } from "redux";

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators
const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

// reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export { increment, decrement, counterReducer };
export type State = typeof initialState;
