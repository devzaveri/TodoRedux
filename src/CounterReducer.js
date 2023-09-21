import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './CounterActionType';

const initialValue = {
  counter: 0,
};

const CounterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
