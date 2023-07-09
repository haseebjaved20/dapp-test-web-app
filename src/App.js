//libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import ConnectWallet from "./pages/connect-wallet/ConnectWallet";
//components
import MainLayout from "./components/layouts/MainLayout";
//constants
import { routes } from "./lib/utils/constants";
//styles
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<ConnectWallet />} path={routes.HOME} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
