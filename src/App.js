import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Provider, useDispatch } from "react-redux";
import { configureStore, persistor, store } from "./Redux/Store";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
 
  // const store = configureStore();

  return (
    <>
      <div>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {/* <ToastContainer /> */}
          <Provider store={store}>
            <Routes>
              {/* <Route
            path="/*"
            element={<User user={user} login={login} logout={logout} />}
          /> */}
              <Route path="/*" element={<User />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/admin/*" element={<Admin />} />
              </Route>
            </Routes>
          </Provider>
        {/* </PersistGate> */}
      </div>
    </>
  );
}

export default App;


