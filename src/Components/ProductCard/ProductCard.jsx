import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import IMGLayer from '../../assets/Layer.png';
import { NavLink } from "react-router-dom";

let productsData = [
    {
        id:1,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
      brand: "Adidas"
    },
    {
        id:2,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
      brand: "Nike"
    },
    {
        id:3,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
      brand: "K-Swiss"
    },
    {
        id:4,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
      brand: "Adidas",
    },
    {
        id:5,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
       brand: "Nike"
    },
    {
        id:6,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
       brand: "K-Swiss"
    },
    {
        id:7,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
       brand: "Adidas"
    },
    {
        id:8,
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
     brand: "Nike"
    },  
  ];
const ProductCard = () => {
  const [products, setProducts] = useState(productsData); 
  const [selectedBrand, setSelectedBrand] = useState(""); 
 
  
  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);

   
  };
 
  const filteredProducts = products.filter((product) => {
    // Se nenhuma marca for selecionada, retorna todos os produtos
    if (!selectedBrand || selectedBrand === "0") {
      return true; 
    }

    // Retorna apenas os produtos que correspondem à marca selecionada
    return product.brand === selectedBrand;
  });

  // Verifica se não há produtos para a marca selecionada
  if (filteredProducts.length === 0) {
    return <div>Não tem produto!</div>;
  }
  
  return (
    <>
    <div className="Content-results">
      <div className="Content-opcoes">
      <h4>
        <b>
        Resultados para "Tênis" -
        </b>
         <span style={{color:'rgba(71, 71, 71, 1)', marginLeft:'10px'}}>
          390 produtos
          </span>
        </h4>
        <select  id="dropdown" style={{width:'25%', heigth:'100px', border:'1px solid', padding:'10px', outline:'none'}}>
          <option value="ordernarPor">Ordernar por : <span style={{color:'rgba(71, 71, 71, 1)'}}>mais relevantes</span></option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
      </div>
    </div>
    <div className="container-produto"  style={{ display: "flex"}}>
      <Sidebar onFilterChange={handleBrandFilter} />
      <div className="product-gallery" style={{maxWidth:'900px'}}>
        
          {filteredProducts.map((product, index) => (
            <NavLink to={`/produto/${product.id}`} className="product-card" style={{textDecoration:'none', color:'#000'}} key={index}>
             {index < 2 && 
             (
              <div className="product-discount">
              {((product.preco - product.desconto) / product.preco * 100).toFixed(0)}% OFF
            </div>
             )}
              <img src={product.imagem} alt={product.title} className="product-image" />
              <p className="product-title">{product.title}</p>
              <span className="product-description">{product.descricao}</span>
              <div className="product-price">
                <span className="original-price">${product.preco.toFixed(2)}</span>
                <span className="discounted-price">${product.desconto.toFixed(2)}</span>
              </div>
            </NavLink>
          ))}
        </div>
    </div>
          </>
  );
};

export default ProductCard;
