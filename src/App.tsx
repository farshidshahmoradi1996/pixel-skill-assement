import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "store";
import { Provider } from "react-redux";
import { HomePage } from "pages";
import { ToastContainer } from "react-toastify";

//styles
import "react-toastify/dist/ReactToastify.css";

function App() {
  //rehydrate store
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomePage />
      </PersistGate>
      <ToastContainer position="bottom-center" closeOnClick={false} />
    </Provider>
  );
}

export default App;
