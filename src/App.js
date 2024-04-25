import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Provider, useDispatch } from "react-redux";
import { configureStore, persistor, store } from "./Redux/Store";
// import PrivateRoutes from "./Routes/PrivateRoutes";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAuth } from "./Redux/action/auth.action";
import Login from "./Pages/Login";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function App() {
  // const [user, setUser] = useState(false);

  // // const dispatch = useDispatch();

  // const login = () => {
  //   setUser(true);
  //   console.log("login");
  // };

  // const logout = () => {
  //   setUser(false);
  //   // dispatch(deleteAuth())
  //   console.log("logout");
  // };

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
