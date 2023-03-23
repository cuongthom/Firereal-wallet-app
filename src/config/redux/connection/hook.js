import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  setCurrentModalFull,
  setHistoryOpenModal,
  setVisibleModalFullScreen,
  setCurrentModalHalf,
  setVisibleModalHalfScreen,
  setWifiOpenModal,
  setDarkMode,
} from "./reducer";

export const useConnection = () => {
  const connection = useSelector((state) => state.connection);
  const dispatch = useDispatch();

  const onSetVisibleModalFullScreen = useCallback(
    (visibleModalFullScreen) => {
      dispatch(setVisibleModalFullScreen(visibleModalFullScreen));
    },
    [dispatch]
  );

  const onSetVisibleModalHalfScreen = useCallback(
    (visibleModalHalfScreen) => {
      dispatch(setVisibleModalHalfScreen(visibleModalHalfScreen));
    },
    [dispatch]
  );

  const onSetCurrentModalFull = useCallback(
    (currentModalFull) => {
      dispatch(setCurrentModalFull(currentModalFull));
    },
    [dispatch]
  );

  const onSetCurrentModalHalf = useCallback(
    (currentModalHalf) => {
      dispatch(setCurrentModalHalf(currentModalHalf));
    },
    [dispatch]
  );

  const onSetHistoryOpenModal = useCallback(
    (historyOpenModal) => {
      dispatch(setHistoryOpenModal(historyOpenModal));
    },
    [dispatch]
  );
  const onSetWifiOpenModal = useCallback(
    (wifiOpenModal) => {
      dispatch(setWifiOpenModal(wifiOpenModal));
    },
    [dispatch]
  );
  const onSetDarkMode = useCallback(
    (darkMode) => {
      dispatch(setDarkMode(darkMode));
    },
    [dispatch]
  );

  return {
    connection,
    onSetHistoryOpenModal,
    onSetCurrentModalFull,
    onSetCurrentModalHalf,
    onSetVisibleModalHalfScreen,
    onSetVisibleModalFullScreen,
    onSetWifiOpenModal,
    onSetDarkMode, 
  };
};
