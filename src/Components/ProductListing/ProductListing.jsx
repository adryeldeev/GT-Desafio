import React, { useState } from 'react';

import './ProductListingStyle.jsx'
import { CardContainer } from './ProductListingStyle.jsx';
import { ImageContainer } from './ProductListingStyle.jsx';
import { DetailsContainer } from './ProductListingStyle.jsx';
import { Category } from './ProductListingStyle.jsx';
import { Title } from './ProductListingStyle.jsx';
import { Rating } from './ProductListingStyle.jsx';
import { Price } from './ProductListingStyle.jsx';
import { Description } from './ProductListingStyle.jsx';
import { SizeSelector } from './ProductListingStyle.jsx';
import { SizeOption } from './ProductListingStyle.jsx';
import { ColorSelector } from './ProductListingStyle.jsx';
import { ColorOption } from './ProductListingStyle.jsx';
import { BuyButton } from './ProductListingStyle.jsx';

const ProductListing = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ['#4AD9D9', '#888888', '#333333', '#D9D9D9'];

  return (
    <CardContainer>
      <ImageContainer>
        <img src="https://via.placeholder.com/300" alt="Product" />
      </ImageContainer>
      <DetailsContainer>
        <Category>Casual | Nike</Category>
        <Title>Tênis Nike Revolution 6 Next Nature Masculino</Title>
        <Rating>
          ⭐ 4.7 (90 avaliações)
        </Rating>
        <Price>
          R$ 219,00 <span>219,90</span>
        </Price>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <SizeSelector>
          {sizes.map(size => (
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
