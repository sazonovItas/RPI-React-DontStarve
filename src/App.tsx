import "./App.css";
import NotFoundPage from "./pages/404Page/404Page.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";
import SearchPage from "./pages/SearchPage/SearchPage.tsx";
import CharacterPage from "./pages/CharacterPage/CharacterPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RPI-React-DontStarve/" element={<MainPage />} />
        <Route
          path="/RPI-React-DontStarve/Characters"
          element={<SearchPage />}
        />
        <Route path="/RPI-React-DontStarve/:id" element={<CharacterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
