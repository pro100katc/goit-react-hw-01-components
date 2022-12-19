import styled from "styled-components";

export const Item = styled.li`
    min-width: 200px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.65);

  &:not(:last-child) {
  margin-bottom: 10px;}
`;

export const Status = styled.span`
    width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color:${props=>props.isOnline?'green':'red'};
`;

export const Avatar = styled.img`
    border: 1px solid tomato;
  border-radius: 10px;
  margin: 10px;
`;

export const Name = styled.p`
     font-size: 20px;
  font-weight: 700;
`