import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/Store";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  const [user, setUser] = useState(false);

  
  const login = () => {
    setUser(true);
    console.log('login');
  };

  const logout = () => {
    setUser(false);
    console.log('logout');
  };

  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<User user={user} login={login} logout={logout} />} />
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route> */}
          <Route
            path="/admin/*"
            element={
              <PrivateRoutes user={user}>
                <Admin />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;

// export const protectedRoutes = ({ user, children }) => {
//   if (user) {
//     return children;
//   } else {
//     return <Navigate to={"/logins "} />;
//   }
// };
