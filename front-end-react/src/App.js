import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./layout/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
