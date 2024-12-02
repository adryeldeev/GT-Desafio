import { useState } from 'react';
import './ProductListingStyle.jsx';
import Arrow from '../../assets/Line.png';
import { CardContainer, ImageContainer, DetailsContainer, Category, Title, Rating, Price, Description, SizeSelector, SizeOption, ColorSelector, ColorOption, BuyButton, SubTiles, ProductImageContainer, ProductImagensOptions, ProductGallery, ProductCard, ProducDiscont, ProductImage, ProductContainer, ProductHeader } from './ProductListingStyle.jsx';
import IMGLayer from '../../assets/Layer.png';
import IMGSnakers from '../../assets/Sneakers.png';
import { NavLink, useParams } from 'react-router-dom';
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
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers],
    imagem2:[IMGLayer],
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
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer ],
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
    id:3,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer],
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43], 
    colors: [
      { colorCode: '#4AD9D9', img: IMGLayer },
      { colorCode: 'rgba(255, 105, 105, 1)', img: IMGLayer},
      { colorCode: '#333333', img: IMGLayer},
      { colorCode: 'rgba(109, 112, 183, 1)', img: IMGLayer }
    ],
  },
{
    id:4,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer ],
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
    id:5,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer],
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
    id:6,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer ],
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
    id:7,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer ],
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
    id:8,
    title: 'Tênis',
    subTitle: 'K-Swiss V8 - Masculino',
    preco: 200,
    desconto: 140,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere ipsum illo explicabo eius animi repellat quaerat maiores quis suscipit!',
    imagem: [IMGSnakers, IMGSnakers, IMGSnakers], // Array de imagens
    imagem2:[IMGLayer],
    brand: "Adidas",
    sizes: [39, 40, 41, 42, 43],
    colors: [
      { colorCode: '#4AD9D9', img: IMGSnakers },
      { colorCode: 'rgba(255, 105, 105, 1)', img: IMGSnakers},
      { colorCode: '#333333', img: IMGSnakers},
      { colorCode: 'rgba(109, 112, 183, 1)', img: IMGSnakers }
    ], 
},
]

  const productData = productsData.find(product => product.id === parseInt(id))
  const displayedProducts = productsData.slice(0, 4);

  const handleColor = (color)=>{
    setSelectedColor(color.colorCode)
  }

  if (!productData) {
    return <div>Produto com ID {id} não foi encontrado!</div>;
  }
  const selectedProductImages = productData.colors.find(color => color.colorCode === selectedColor)?.img || productData.imagem[0];

  return (
    <>
      <div className="lista-Navegacao" style={{display:'flex' }}>
        <NavLink to="/" style={{textDecoration:'none', color:'#000'}}>Home </NavLink>/
        <NavLink to={`/categorias/${productData.brand}`}  style={{textDecoration:'none',  color:'#ccc'}} >{productData.brand}</NavLink>/
        <NavLink to={`/produto/${productData.id}`}  style={{textDecoration:'none',color:'#ccc'}}>{productData.title}</NavLink>/
        <NavLink to={`/produto/${productData.id}`}  style={{textDecoration:'none',  color:'#ccc'}}>{productData.subTitle}</NavLink>
      </div>
    <CardContainer>
      <ProductImageContainer>
      <ImageContainer>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  {(productData.imagem || []).map((imgSrc, index) => (
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
      <>
      <ProductContainer>
        <ProductHeader>
          <p>Produtos em alta</p>
          <div className="view-all">
            <NavLink to='/produto' className='navlink'>
              Ver todos
            <img src={Arrow} alt="" />
            </NavLink>
          </div>
        </ProductHeader>
        <ProductGallery>
      {displayedProducts.map((item, index) => (
        <ProductCard key={index}>
          {index < 2 && (
            <ProducDiscont>
              {((1 - item.desconto / item.preco) * 100).toFixed(0)}% OFF
            </ProducDiscont>
          )}
          <ProductImage src={item.imagem2[0]} alt={item.title} />
          <p className="product-title">{item.title}</p>
          <div className="product-price">
            {item.desconto ? (
              <>
                <span className="original-price">R$ {item.preco.toFixed(2)}</span>
                <span className="discounted-price">R$ {item.desconto.toFixed(2)}</span>
              </>
            ) : (
              <span className="normal-price">R$ {item.preco.toFixed(2)}</span>
            )}
          </div>
        </ProductCard>
      ))}
    </ProductGallery>
      </ProductContainer>
    </>
    </CardContainer>
    </>
  );
};

export default ProductListing;
