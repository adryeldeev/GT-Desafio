import styled from 'styled-components'



export const CardContainer = styled.div`
  display: flex;
  max-width: 900px;
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

  &:hover {
    background-color: #d99934;
  }
`;
