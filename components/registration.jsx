import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Container, Title, Content, TextInput, FooterText } from './common';
import Button from './button';

const Error = styled.Text`
  color: red;
  margin-top: 30px;
`;

/**
|--------------------------------------------------
| TODO:
| add password validation support
| add hyperlink support for login text
|--------------------------------------------------
*/
const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    isError && setIsError(false);
  }, [password, confirmPassword]);

  const handlePress = () => {
    if (
      password === '' ||
      confirmPassword === '' ||
      password !== confirmPassword
    ) {
      setIsError(true);
    }
  };

  return (
    <Container>
      <Title>Lets Register</Title>
      <Title>Account</Title>
      <Content isSpace>Hello User, you have</Content>
      <Content>a greatful journey</Content>
      <TextInput
        isSpaceTop
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput
        value={userName}
        onChangeText={setUserName}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Re-enter password"
        secureTextEntry={true}
      />
      {isError && (
        <Error>
          There is a mismatch between passwords. please re-enter the password.
        </Error>
      )}
      <Button
        style={{ backgroundColor: '#a58ef0', marginTop: 30 }}
        onPress={handlePress}
      >
        Sign Up
      </Button>
      <FooterText>Already have an account ? Login</FooterText>
    </Container>
  );
};

export default Registration;
