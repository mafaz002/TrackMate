import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 80px 25px 0px 25px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

/**
|--------------------------------------------------
| TODO:
| . Fix React Devtools Debugging
| . Fix font-weight: bold issue
| . Add support for custom font
|--------------------------------------------------
*/
const Login = () => (
  <Container>
    <Title>Lets Sign you in</Title>
  </Container>
);

export default Login;
