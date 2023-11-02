import { createSlice } from "@reduxjs/toolkit";
import { addCar } from './carsSlice';

const formSlice = createSlice({

    name:'form',
    initialState: {
        name:'',
        cost:0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state,action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
          state.name = '';
          state.cost = 0;
        });
      }

});

export const { changeName, changeCost } = formSlice.actions; //these are the mini reducers
export const formReducer = formSlice.reducer; //this is the macro reducer