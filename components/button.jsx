import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  color: white;
`;

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 10,
          marginTop: 50,
          borderRadius: 12,
          backgroundColor: 'red',
          ...(props.style ?? {}),
        }}
      >
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
