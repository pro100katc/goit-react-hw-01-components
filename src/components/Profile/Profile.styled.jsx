import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #beccdb;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 5px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 5px 0;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 600px;
  margin: 5px 0;
  color: #474545;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 18px;
  color: #474545;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  background-color: rgb(243, 246, 250);
  border-top: 1px solid #e6ecf3;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid #e6ecf3;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #474545;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;