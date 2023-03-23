import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import ModalFullScreen from "./src/compoments/modal/ModalFullScreen";
import ModalSmall from "./src/compoments/modal/ModalSmall";
import AppNavigation from "./src/config/navigator/AppNavigation";
import {navigationRef} from "./src/config/navigator/RootNavigation";
import store from "./src/config/redux";

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <AppNavigation/>
        </NavigationContainer>
        <ModalFullScreen />
        <ModalSmall />
      </Provider>
  );
}
