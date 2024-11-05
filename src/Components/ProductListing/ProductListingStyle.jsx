import styled from 'styled-components'


export const CardContainer = styled.div`
  max-width: 600px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  display: flex;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  width: 300px;
  position: relative;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

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
  background: ${({ selected }) => (selected ? '#333' : '#eee')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #333;
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
  background: ${({ color }) => color};
  border: ${({ selected }) => (selected ? '2px solid #333' : '1px solid #ddd')};
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