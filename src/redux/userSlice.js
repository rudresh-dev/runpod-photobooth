import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gender: null,
  name: '',
  email: '',
  selectedPresetImage: null,
  prompt: '',
  webcamImageUrl: null,
  swappedImageUrl: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSelectedPresetImage: (state, action) => {
      state.selectedPresetImage = action.payload;
    },
    setPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    setWebcamImageUrl: (state, action) => {
      state.webcamImageUrl = action.payload;
    },
    setSwappedImageUrl: (state, action) => {
      state.swappedImageUrl = action.payload;
    },
  },
});

export const {
  setGender,
  setName,
  setEmail,
  setSelectedPresetImage,
  setPrompt,
  setWebcamImageUrl,
  setSwappedImageUrl,
} = userSlice.actions;

export default userSlice.reducer;
