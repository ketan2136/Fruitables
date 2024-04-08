import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Provider } from "react-redux";
import { configureStore } from "./Redux/Store";
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<User />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin/*" element={<Admin />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;


