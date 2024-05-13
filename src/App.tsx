import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./router/paths";
import Login from "./discount page/Login";
import SnackBarProvider from "./context/SnackBarContext";
import CustomSnackBar from "./common/CustomSnackbar";

function App() {
  return (
    <>
          <SnackBarProvider>
      <BrowserRouter>
    
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route path={paths.DISCOUNT} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomSnackBar />
      </SnackBarProvider>
    </>
  );
}

export default App;
