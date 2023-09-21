import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './CounterActionType';

export const incrementCountAction = parameter => {
  return {
    type: INCREMENT_COUNTER,
    payload: parameter,
  };
};

export const decerementCountAction = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
