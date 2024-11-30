import './Home.css'
import Slide from "../../Components/Slide/Slide";
import Colecao from "../../Components/Colecao/Colecao";
import Section from "../../Components/Section/Section";
import SpecialOffter from "../../Components/SpecialOffer/SpecialOffer";
import ProductDetails from "../../Components/ProductDetails/ProducDetails";
const Home = () => {
  return (
   <>
      <Slide />
      <Section />
      <Colecao />
      <ProductDetails/>
      <SpecialOffter />
   </>
  );
};

export default Home;
