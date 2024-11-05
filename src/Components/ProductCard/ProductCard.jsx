import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import IMGLayer from '../../assets/Layer.png';

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
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    setSearchTerm(brand);
    setSearchTerm(""); // Reset search term when brand filter is applied
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
          {filteredProducts.map((products, index) => (
            <div className="product-card" key={index.id}>
             {index < 2 && 
             (
              <div className="product-discount">
              {((products.preco - products.desconto) / products.preco * 100).toFixed(0)}% OFF
            </div>
             )}
              <img src={products.imagem} alt={products.title} className="product-image" />
              <p className="product-title">{products.title}</p>
              <span className="product-description">{products.descricao}</span>
              <div className="product-price">
                <span className="original-price">${products.preco.toFixed(2)}</span>
                <span className="discounted-price">${products.desconto.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProductCard;
