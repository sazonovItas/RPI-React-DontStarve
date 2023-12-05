import { Suspense } from "react";
import "./App.css";
import NotFoundPage from "./pages/404Page/404Page.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServerErrorPage from "./pages/500Page/500Page.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/RPI-React-DontStarve/" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  );
}
