import "./App.css";
import NotFoundPage from "./pages/404Page/404Page.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServerErrorPage from "./pages/500Page/500Page.tsx";
import { useDatabase } from "./db/DataContext.tsx";

function App() {
  console.log(useDatabase().Characters.length);

  return (
    <Router>
      <Routes>
        <Route path="/RPI-React-DontStarve/" element={<ServerErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
