import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContentCardDisplayPage from "./Pages/ContentCardDisplayPage";
import TestimonialCardDisplayPage from "./Pages/TestimonialCardDisplayPage";
import CountriesPage from "./Pages/CountriesPage";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contentCardDisplayPage"
            element={<ContentCardDisplayPage />}
          />
          <Route
            path="/testimonialCardDisplayPage"
            element={<TestimonialCardDisplayPage />}
          />
          <Route path="/countriesPage" element={<CountriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
