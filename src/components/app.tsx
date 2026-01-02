import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "../contexts/movie-context";
import "../css/app.css";
import { Favorites } from "../pages/favorites";
import { Home } from "../pages/home";
import { NavBar } from "./navbar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
