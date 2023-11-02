import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({

    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []

    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) { //assuming that action.payload === { name: 'abc' , cost: 100}
            state.data.push({ name: action.payload.name , cost: action.payload.cost , id: nanoid() });
        },
        removeCar(state, action) { //assuming that action.payload === the id of the car that we want to remove
            const updated = state.data.filter((car) => {
                return (car.id !== action.payload ) //the action.payload will be the pure id and we want to return all the false values 
                                                    //in order to filter out/remove the specific car                                                   
            });
            state.data = updated;
        },

    }
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;