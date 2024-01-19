import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WEB_ROUTES } from "./config";
import { Billboard } from "./pages/Billboard";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={WEB_ROUTES.home} element={<Home />} />
        <Route path={WEB_ROUTES.billboard} element={<Billboard />} />
        <Route path={WEB_ROUTES.movie} element={<Movie />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
