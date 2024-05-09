import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 80px 25px 0px 25px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Content = styled.Text`
  font-size: 20px;
  margin-top: ${(props) => (props.isSpace ? '20px' : '5px')};
`;

export const TextInput = styled.TextInput`
  border: 2px solid grey;
  border-radius: 12px;
  padding: 5px 15px 5px 15px;
  margin-top: ${(props) => (props.isSpaceTop ? '50px' : '15px')};
`;

export const FooterText = styled.Text`
  margin-left: 80px;
  margin-top: 20px;
  font-size: 12px;
  color: gray;
`;
