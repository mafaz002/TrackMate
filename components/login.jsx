import { useState } from 'react';
import { Container, Title, Content, TextInput, FooterText } from './common';
import Button from './button';

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
      <FooterText>Don't have an account ? Register Now</FooterText>
    </Container>
  );
};

export default Login;
