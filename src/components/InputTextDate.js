import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const InputText = props => {
  return (
    <View>
      <Text style={estilos.Text}>{props.texto}</Text>
      <TextInput
        style={estilos.TextInput}
        defaultValue={props.value} //muda conforme o usuário insere valores
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        onChangeText={props.onChangeText}
        onPressIn={() => props.onPressIn()}
        right={<TextInput.Icon style={estilos.TextInputIcon} size={35} icon={require('../../assets/images/calendar.png')}/>}
      />
    </View>
  );
};
//right={<TextInput.Icon icon={require('../../assets/images/calendar.png')}/>}
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
  TextInputIcon: {
    
  },
  Text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default InputText;
