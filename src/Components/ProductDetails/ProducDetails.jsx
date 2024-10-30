import React from 'react';
import './ProductDetails.css';
import IMGLayer from '../../assets/Layer.png'
const ProductDetails = () => {
  let cards = [
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
  ];

  return (
    <>
    <div className="product-container">
        <div className="product-header">
          <p>Produtos em alta</p>
          <div className="view-all">
            <p>Ver todos</p>
          </div>
        </div>
        <div className="product-gallery">
          {cards.map((item, index) => (
          <div className="product-card">
          <div className="product-discount">
              {((item.preco - item.desconto) / item.preco * 100).toFixed(0)}% OFF
          </div>
          <img src={item.imagem} alt={item.title} className="product-image" />
          <p className="product-title">{item.title}</p>
          <span className="product-description">{item.descricao}</span>
          <div className="product-price">
              <span className="original-price">${item.preco.toFixed(2)}</span>
              <span className="discounted-price">${item.desconto.toFixed(2)}</span>
          </div>
      </div>
          ))}
        </div>
    </div>
    </>
  );
};

export default ProductDetails;
