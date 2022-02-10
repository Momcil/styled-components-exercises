import Card from "./components/card/Card";
import { USERS } from "./db";
import styled from "styled-components/macro";

const App = () => {
  return (
    <AppContainer>
      <Title>ClientBoard</Title>
      <CardGrid rows={3}>
        {USERS.map((user) => (
          <Card user={user} />
        ))}
      </CardGrid>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.main`
  background-color: #12121a;
  color: #ccd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.rows}, 1fr);
  gap: 30px;
  padding: 20px;
`;

const Title = styled.h1`
  border-top: 5px solid #9b9ba7;
  border-bottom: 5px solid #9b9ba7;
  border-radius: 5px;
  color: #fff;
  padding: 0 8px;
`;
