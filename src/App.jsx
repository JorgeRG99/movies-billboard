import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WEB_ROUTES } from "./config";
import { Billboard } from "./pages/Billboard";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import Tickets from "./pages/Tickets";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path={WEB_ROUTES.home} element={<Home />} />
        <Route path={WEB_ROUTES.billboard} element={<Billboard />} />
        <Route path={WEB_ROUTES.movie} element={<Movie />} />
        <Route path={WEB_ROUTES.yourTickets} element={<Tickets />} />
        <Route path={WEB_ROUTES.favorites} element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
