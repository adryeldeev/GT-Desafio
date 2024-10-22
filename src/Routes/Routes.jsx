import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import NoPage from "../NoPage";
import Footer from "../Components/Footer/Footer";
import SpecialOffer from "../Components/specialOffer/specialOffer";


const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/specialOffer" element={<SpecialOffer />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
