import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/book" element={<Reservation />} />

      {/* <Route path="/menu" element={<Order />} /> */}
    </Routes>
  );
}
