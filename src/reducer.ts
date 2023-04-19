import { AnyAction } from "redux";

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

interface CounterAction {
    type: typeof INCREMENT | typeof DECREMENT,
    payload: number
}

// action creators
const increment = (delta: number): CounterAction => ({
  type: INCREMENT,
  payload: delta,
});

const decrement = (delta: number): CounterAction => ({
  type: DECREMENT,
  payload: delta,
});

// action assertions
function isCounterAction(action: AnyAction): action is CounterAction {
    return action.type === INCREMENT || action.type === DECREMENT
}

// reducer
const initialState = { count: 0 };

const counterReducer = (state = initialState, action: AnyAction) => {
  if (!isCounterAction(action)) {
    return state
  }
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload, };
    case DECREMENT:
      return { ...state, count: state.count - action.payload, };
    default:
      return state;
  }
};

export { increment, decrement, counterReducer };
export type State = typeof initialState;
