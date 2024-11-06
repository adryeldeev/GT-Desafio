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
    },  {
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
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
   
  };
 
  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesSearch = searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchesBrand && matchesSearch;
  });
  return (
    <div className="container-produto"  style={{ display: "flex" }}>
      <Sidebar onFilterChange={handleBrandFilter} />
      <div className="product-gallery">
          {filteredProducts.map((product, index) => (
            <NavLink to={`/produto/${product.id}`} className="product-card" key={product.id}>
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
  );
};

export default ProductCard;
