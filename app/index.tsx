import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: plum;
  align-items: center;
  justify-content: center;
`;

export default function Index() {
  return (
    <Container>
      <Text>Hello Mafaz!!</Text>
    </Container>
  );
}
