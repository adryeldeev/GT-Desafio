import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "../NoPage";
import Layout from "../Components/Layout/Layout";
import Home from './../Pages/HomePage/Home';
import ProductCard from './../Components/ProductCard/ProductCard';




const Rotas = () => {
  return (
    <BrowserRouter>

       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<ProductCard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>

    </BrowserRouter>
  );
};

export default Rotas;




