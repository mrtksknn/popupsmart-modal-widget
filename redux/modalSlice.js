import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getModalsAsync = createAsyncThunk(
  'modals/getModalasync',
  async () => {
    const response = await fetch(
      'https://633c322b74afaef164040b7d.mockapi.io/modals'
    );

    if (response.ok) {
      const modals = await response.json();

      return {modals};
    }
  }
);

const modalSlice = createSlice({
  name         : 'modals',
  initialState : [],

  reducers      : {},
  extraReducers : {
    [getModalsAsync.fulfilled] : (state, action) => action.payload
  }
});

export default modalSlice.reducer;
