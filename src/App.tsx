import "./App.css";
import NotFoundPage from "./pages/404Page/404Page.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDatabase } from "./Database.tsx";

function App() {
  console.log(useDatabase());
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
