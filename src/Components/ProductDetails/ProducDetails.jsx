import React from 'react';
import './ProductDetails.css';
import IMGLayer from '../../assets/Layer.png';
import Arrow from '../../assets/Line.png';
import { NavLink } from 'react-router-dom';

const ProductDetails = () => {
  let cards = [
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
    {
      title: 'Tênis',
      descricao: 'K-Swiss V8 - Masculino',
      preco: 200,
      desconto: 140,
      imagem: IMGLayer,
    },
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
            <NavLink to='/produto' className='navlink'>
                  Ver todos
              
            <img src={Arrow} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="product-gallery">
          {cards.map((item, index) => (
            <div className="product-card" key={index}>
             {index < 2 && 
             (
              <div className="product-discount">
              {((item.preco - item.desconto) / item.preco * 100).toFixed(0)}% OFF
            </div>
             )}
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
