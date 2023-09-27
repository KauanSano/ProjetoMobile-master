import {View, Text, TextInput, StyleSheet} from 'react-native';

const InputText = props => {
  const {campoSenha} = props;
  return (
    <View>
      <Text style={estilos.Text}>{props.texto}</Text>
      <TextInput
        style={estilos.TextInput}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        secureTextEntry={campoSenha}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  TextInput: {
    fontSize: 15,
    borderWidth: 1,
    height: 35,
    borderColor: '#555555',
    color: '#3F92C5',
    backgroundColor: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    padding: 10,
    marginBottom: '1%',
  },
  Text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default InputText;
