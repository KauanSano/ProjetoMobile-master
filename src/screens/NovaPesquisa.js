import React from 'react';
import {View, StyleSheet} from 'react-native';
import InputText from '../components/InputText';
import {useState} from 'react';
import Botao from '../components/Botao';
import DataModal from '../components/DateModal';

const NovaPesquisa = props => {
  const [txtNome, setNome] = useState('');
  const [txtData, setData] = useState('');

  const cadastrar = () => {
    props.navigation.navigate('Modificar Pesquisa');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <InputText
          texto="Nome"
          value={txtNome}
          onChangeText={setNome}
          keyboardType="email"
        />
        <DataModal>
        </DataModal>

      </View>

      <View style={styles.container_botoes}>
        <Botao
          texto="CADASTRAR"
          altura={35}
          corFundo="#37BD6D"
          tamanhoTexto={20}
          funcao={cadastrar}
        />
        
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: '#372775',
  },
  container_botoes: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});

export default NovaPesquisa;
