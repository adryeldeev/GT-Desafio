import { useState } from 'react';
import './ProductListingStyle.jsx';
import { CardContainer, ImageContainer, DetailsContainer, Category, Title, Rating, Price, Description, SizeSelector, SizeOption, ColorSelector, ColorOption, BuyButton, SubTiles, ProductImageContainer, ProductImagensOptions } from './ProductListingStyle.jsx';
import IMGLayer from '../../assets/Layer.png';
import IMGSnakers from '../../assets/Sneakers.png';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const ProductListing = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

const productsData = [
  {
    id: 1,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers],
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43],
    colors: [
      { colorCode: '#4AD9D9', img: IMGSnakers },
      { colorCode: 'rgba(255, 105, 105, 1)', img: IMGSnakers},
      { colorCode: '#333333', img: IMGSnakers},
      { colorCode: 'rgba(109, 112, 183, 1)', img: IMGSnakers }
    ],
 
  },
{
    id:2,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
{
    id:3,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
{
    id:4,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43],  
},
{
    id:5,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
{
    id:6,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
{
    id:7,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
{
    id:8,
    title: 'Tênis',
    descricao: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGLayer, IMGLayer, IMGLayer], // Array de imagens
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
},
]

  const productData = productsData.find(product => product.id === parseInt(id))
   

  const handleColor = (color)=>{
    setSelectedColor(color.colorCode)
  }

  if(!productData){
    return <div>Não tem produto!</div>
  }
  const selectedProductImages = productData.colors.find(color => color.colorCode === selectedColor)?.img || productData.imagem[0];

  return (
    <CardContainer>
      <ProductImageContainer>
      <ImageContainer>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {productData.imagem.map((imgSrc, index) => (
            <SwiperSlide key={index} className="swiperSlide">
              <img src={selectedProductImages || imgSrc} alt={`${productData.title} imagem ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageContainer>
     
        <ProductImagensOptions  >
      <img src={IMGSnakers} alt="" style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}} /> 
      <img src={IMGSnakers} alt="" style={{backgroundColor:'rgba(255, 232, 188, 1)'}} /> 
      <img src={IMGSnakers} alt="" style={{backgroundColor:'rgba(255, 192, 188, 1)'}} /> 
      <img src={IMGSnakers} alt="" style={{backgroundColor:'rgba(222, 198, 153, 1)'}} /> 
      <img src={IMGSnakers} alt="" style={{backgroundColor:'rgba(232, 223, 207, 1)'}} /> 
      </ProductImagensOptions>
   
      </ProductImageContainer>
      <DetailsContainer>
        <Category>Casual | {productData.brand}</Category>
        <Title>{productData.title}</Title>
        <Rating>⭐ 4.7 (90 avaliações)</Rating>
        <Price>
          R$ {productData.preco},00 <span>{productData.desconto},90</span>
        </Price>
        <SubTiles>Descricação do produto</SubTiles>
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
          {productData.colors.map((color, index) => (
            <ColorOption
              key={index}
              color={color.colorCode}
              selected={selectedColor === color.colorCode}
              onClick={() => handleColor(color)}
            />
          ))}
        </ColorSelector>
        <BuyButton>COMPRAR</BuyButton>
      </DetailsContainer>
    </CardContainer>
  );
};

export default ProductListing;
