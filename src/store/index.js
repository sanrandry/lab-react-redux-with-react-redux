import {configureStore, createSlice} from '@reduxjs/toolkit';

// Use the createSlice function to generate the state and the action
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            state.counter +=1;
        },
        decremente: (state, action) => {
            state.counter -=1;
        },
        add: (state, action) => {
            state.counter += action.payload;
        }
    }
});

// Export the actions so it can be used by outside
export const actions = counterSlice.actions;

// Use the configureStore function to configure and create the store
const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;