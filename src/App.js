import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
