import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContentCardDisplayPage from "./Pages/ContentCardDisplayPage";
import TestimonialCardDisplayPage from "./Pages/TestimonialCardDisplayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contentCardDisplayPage"
          element={<ContentCardDisplayPage />}
        />
        <Route
          path="/testimonialCardDisplayPage"
          element={<TestimonialCardDisplayPage />}
        />
        "
      </Routes>
    </BrowserRouter>
  );
}

export default App;
