import styled from "styled-components";

function Card({ user }) {
  return (
    <CardContainer>
      <Company>{user.profile.company}</Company>
      <h2>{user.profile.name}</h2>
      <p>{user.profile.about}</p>
      <button>contact</button>
      <button>delete</button>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.article`
  padding: 20px;
  background-color: #335;
  border-radius: 14px;
  border-left: 14px solid #ccd;
  opacity: 0.8;
  transition: 0.2s;

  p {
    color: white;
  }

  &:hover {
    opacity: 1;
  }

  h2 {
    font-style: italic;
  }

  button:hover {
    opacity: 0.7;
  }
`;

const Company = styled.span`
  border: 2px solid white;
  color: white;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: bold;
`;
