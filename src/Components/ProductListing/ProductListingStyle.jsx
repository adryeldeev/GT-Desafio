import styled from 'styled-components'



export const CardContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  .swiperSlide img {
    width: 80%;
    height: auto;
    object-fit: cover;
    background-position:center;
  }
`;

export const ProductImagensOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  img {
    width: 80px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border 0.3s;
  }
  img:hover {
    border: 2px solid #000;
  }
`;

export const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
 `

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

export const Category = styled.p`
  font-size: 0.9em;
  color: #888;
`;

export const Rating = styled.div`
  font-size: 0.9em;
  color: #fbb03b;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Price = styled.div`
  font-size: 1.5em;
  color: #333;

  span {
    text-decoration: line-through;
    color: #888;
    font-size: 1em;
    margin-left: 10px;
  }
`;

export const SubTiles = styled.h4`
font-size: 1em;
color: rgba(143, 143, 143, 1);
`
export const Description = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const SizeSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const SizeOption = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ selected }) => (selected ? 'rgba(201, 32, 113, 1)' : '#eee')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: rgba(201, 32, 113, 1);
    color: #fff;
  }
`;

export const ColorSelector = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ColorOption = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${( props ) => props.color};
  border: ${( props ) => (props.selected ? '2px solid #333' : '1px solid #ddd')};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid #333;
  }
`;

export const BuyButton = styled.button`
  background-color: #fbb03b;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  width:40%;

  &:hover {
    background-color: #d99934;
  }
    
`
export const ProductContainer = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    width: 90%;
`
export const ProductHeader = styled.div`
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: -20px;
`
export const ProductGallery = styled.div`
display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  flex-wrap: wrap; /* Permite que os itens quebrem linha */
  gap: 20px; /* Espaço entre os itens */
  margin-top: 40px;
  max-width: 1200px; /* Limita a largura total */
  margin-left: auto;
  margin-right: auto; /* Garante alinhamento central */
  text-align: center; /* Ajusta o alinhamento do texto */
;
`
export const ProductCard = styled.div`
 position: relative;
  width: 250px; /* Tamanho fixo */
  padding: 15px;
  border-radius: 8px;
  text-align: center; /* Centraliza o texto */
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Para melhorar a aparência */
  background: #fff; /* Fundo branco */
`

export const ProductImage = styled.img`
 width: 100%;
  height: auto;
  border-radius: 8px;
  background-color:rgba(184, 181, 181, 0.09);
`

export const ProducDiscont = styled.div`
 position: absolute;
    top: 10px;
    left: 10px;
    background-color: #E7FF86;
    color: #474747;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 14px;
`


