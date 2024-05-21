import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpPage from "./components/HelpPage";

import CityPage from "./components/CityPage";
import BookingRequest from "./components/BookingRequest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CityPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/book" element={<BookingRequest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
