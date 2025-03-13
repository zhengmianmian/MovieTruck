import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import MovieDetails from "./pages/MovieDetails.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
