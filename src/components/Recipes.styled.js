import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.li`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  padding: 15px;
  width: 300px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
`;

export const Info = styled.div`
  margin-top: 10px;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 25px;
  margin: 10px 0;
  font-size: 14px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
