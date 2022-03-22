import {createStore} from 'redux';

/**
 * Reducer function
 * this function takes the state as a parameter and returns it or modifies it and returns it depends on the action type.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const reducer = (state = {counter:  0}, action) => {
    // N.B : We can not use asyncronyous call here
    switch (action.type) {
      case "INC":
        // increments the state.couter and returns the state
        return { ...state, counter: state.counter + 1 };
        break;

      case "DEC":
        // decrements the state.couter and returns the state
        return { ...state, counter: state.counter - 1 };
        break;

      case "ADD":
        // add action.payload to the state.couter and returns the state
        return { ...state, counter: state.counter + action.payload };
        break;

      default:
        // juste return the state
        return state;
        break;
    }
}

// Create a redux store to be provided with the redux Provider
const store = createStore(reducer);

export default store;