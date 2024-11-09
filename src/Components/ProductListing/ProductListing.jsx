import React, { useState } from 'react';
import './ProductListingStyle.jsx';
import { CardContainer, ImageContainer, DetailsContainer, Category, Title, Rating, Price, Description, SizeSelector, SizeOption, ColorSelector, ColorOption, BuyButton } from './ProductListingStyle.jsx';
import IMGLayer from '../../assets/Layer.png';
import { useParams } from 'react-router-dom';

const ProductListing = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

const productsData = [
  {
    id:1,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
  brand: "Adidas",
  sizes: [39, 40, 41, 42, 43], 
},
{
    id:2,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
  brand: "Nike",
  sizes: [39, 40, 41, 42, 43], 
},
{
    id:3,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
  brand: "K-Swiss",
  sizes: [39, 40, 41, 42, 43], 
},
{
    id:4,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
  brand: "Adidas",
  sizes: [39, 40, 41, 42, 43], 
},
{
    id:5,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
   brand: "Nike",
   sizes: [39, 40, 41, 42, 43], 
},
{
    id:6,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
   brand: "K-Swiss",
   sizes: [39, 40, 41, 42, 43], 
},
{
    id:7,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
   brand: "Adidas",
   sizes: [39, 40, 41, 42, 43], 
},
{
    id:8,
  title: 'Tênis',
  descricao: 'K-Swiss V8 - Masculino',
  preco: 200,
  desconto: 140,
  imagem: IMGLayer,
 brand: "Nike",
 sizes: [39, 40, 41, 42, 43], 
},
]

  const productData = productsData.find(product => product.id === parseInt(id))
    

  const colors = ['#4AD9D9', '#888888', '#333333', '#D9D9D9'];

  return (
    <CardContainer>
      <ImageContainer>
        <img src={productData.imagem} alt="Product" />
      </ImageContainer>
      <DetailsContainer>
        <Category>Casual | {productData.brand}</Category>
        <Title>{productData.title}</Title>
        <Rating>⭐ 4.7 (90 avaliações)</Rating>
        <Price>
          R$ {productData.preco},00 <span>{productData.desconto},90</span>
        </Price>
        <Description>{productData.descricao}</Description>
        <SizeSelector>
          {productData.sizes.map((size) => (
            <SizeOption
              key={size}
              selected={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeOption>
          ))}
        </SizeSelector>
        <ColorSelector>
          {colors.map((color, index) => (
            <ColorOption
              key={index}
              color={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </ColorSelector>
        <BuyButton>COMPRAR</BuyButton>
      </DetailsContainer>
    </CardContainer>
  );
};

export default ProductListing;
