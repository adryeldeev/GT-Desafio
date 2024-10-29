import React from "react";
import './Home.css'
import Slide from "../../Components/Slide/Slide";
import Colecao from "../../Components/Colecao/Colecao";
import Section from "../../Components/Section/Section";
import SpecialOffter from "../../Components/SpecialOffer/SpecialOffer";

const Home = () => {
  return (
   <>
      <Slide />
      <Section />
      <Colecao />
      <SpecialOffter />
   </>
  );
};

export default Home;
