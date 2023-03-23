import { createSlice } from "@reduxjs/toolkit";
import { Dimensions } from "react-native";

const initialState = {
  visibleModalFullScreen: false,
  visibleModalHalfScreen: false,
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height * 0.98,
  currentModalFull: 0,
  currentModalHalf: 0,
  historyOpenModal: [],
  WifiOpenModal: false,
  DarkMode: false,
};

export const ConnectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setVisibleModalFullScreen: (state, action) => {
      state.visibleModalFullScreen = action.payload;
    },
    setVisibleModalHalfScreen: (state, action) => {
      state.visibleModalHalfScreen = action.payload;
    },
    setCurrentModalFull: (state, action) => {
      state.currentModalFull = action.payload;
    },
    setCurrentModalHalf: (state, action) => {
      state.currentModalHalf = action.payload;
    },
    setHistoryOpenModal: (state, action) => {
      state.historyOpenModal = action.payload;
    },
    setWifiOpenModal: (state, action) => {
      state.WifiOpenModal = action.payload;
    },
    setDarkMode: (state, action) => {
      state.DarkMode = action.payload;
    },
  },
});
export const {
  setVisibleModalFullScreen,
  setVisibleModalHalfScreen,
  setCurrentModalFull,
  setCurrentModalHalf,
  setHistoryOpenModal,
  setWifiOpenModal,
  setDarkMode,
} = ConnectionSlice.actions;
export default ConnectionSlice.reducer;
