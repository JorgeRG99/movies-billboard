import { Navbar } from "./components/Navbar";
import { WEB_ROUTES } from "./config";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={WEB_ROUTES.home} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
