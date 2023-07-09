import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import ConnectWallet from "./pages/connect-wallet/ConnectWallet";
import { routes } from "./lib/utils/constants";

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
