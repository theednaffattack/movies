import { Route, Routes } from "react-router-dom";
import "../css/app.css";
import { Home, type Movie } from "../pages/home";
import { Favorites } from "../pages/favorites";
import { NavBar } from "./navbar";

function App() {
  const movies: Movie[] = [
    {
      id: 1,
      category: "Action",
      imgUrl: `https://picsum.photos/200/300?t=1767315405032`,
      title: "John Wick",
      release_date: "Jun 1 2020",
    },
    {
      id: 2,
      category: "Drama",
      imgUrl: `https://picsum.photos/200/300?t=1767315405033`,
      title: "Lawrence of Arabia",
      release_date: "Jun 1 2020",
    },
    {
      id: 3,
      category: "Drama",
      imgUrl: `https://picsum.photos/200/300?t=1767315405035`,
      title: "Bridge on the River Kwai",
      release_date: "Jun 1 2020",
    },
    {
      id: 4,
      category: "Comedy",
      imgUrl: `https://picsum.photos/200/300?t=1767315405037`,
      title: "Friday",
      release_date: "Jun 1 2020",
    },
  ];

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
