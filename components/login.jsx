import { useState } from 'react';
import styled from 'styled-components/native';
import Button from './button';

const Container = styled.View`
  flex: 1;
  padding: 80px 25px 0px 25px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Content = styled.Text`
  font-size: 20px;
  margin-top: ${(props) => (props.isSpace ? '20px' : '5px')};
`;

const RegisterText = styled.Text`
  margin-top: 20px;
  font-size: 12px;
`;

const TextInput = styled.TextInput`
  border: 2px solid grey;
  border-radius: 12px;
  padding: 5px 15px 5px 15px;
  margin-top: ${(props) => (props.isSpaceTop ? '50px' : '15px')};
`;

/**
|--------------------------------------------------
| TODO:
| . Fix React Devtools Debugging
| . Fix font-weight: bold issue
| . Add hyperlink support for RegisterNow, once the tab is inplace 
|--------------------------------------------------
*/
const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => alert('Implement Login');

  return (
    <Container>
      <Title>Lets Sign you in</Title>
      <Content isSpace>Welcome Back,</Content>
      <Content>You have been missed</Content>
      <TextInput
        isSpaceTop
        value={name}
        onChangeText={setName}
        placeholder="Email/Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button style={{ backgroundColor: '#a58ef0' }} onPress={handlePress}>
        Sign in
      </Button>
      <RegisterText>Don't have an account ? Register Now</RegisterText>
    </Container>
  );
};

export default Login;
