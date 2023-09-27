import React, {useState} from "react";
import { View, Pressable } from 'react-native';
import InputText from './InputTextDate';
import DatePicker from 'react-native-date-picker';

const DataModal = props => {
    const [data, setData] = useState(new Date());
    const [open, setOpen] = useState(false);
    const getData = () => {
        return data.toUTCString();
    }
    //onFocus={() => setOpen(true)}
    return (
      <> 
        <View>
            <InputText
                showSoftInputOnFocus = {false}
                onPressIn = {() => setOpen(true)}
                texto="Data"
                value={getData()}
                onChangeText={setData}
            />
        </View>
        <DatePicker
            modal
            open={open}
            date={data}
            onConfirm={(data) => {
                setOpen(false)
                setData(data)
            }}
            onCancel={() => {
                setOpen(false)
            }}    
        />
      </>
    )
}

// <Button title="Icone" onPress={() => setOpen(true)} />

export default DataModal;