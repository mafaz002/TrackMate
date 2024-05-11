import { useState } from 'react';
import { Link } from 'expo-router';
import {
  Container,
  Title,
  Content,
  TextInput,
  FooterText,
} from '../components/common';
import Button from '../components/button';

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
      <FooterText>
        Don't have an account ? <Link href={'registration'}>Register Now</Link>
      </FooterText>
    </Container>
  );
};

export default Login;
