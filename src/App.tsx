import MainLayout from "./pages/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1200} />
    </>
  );
};

export default App;
