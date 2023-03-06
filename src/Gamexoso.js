import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'

const Gamexoso = () => {

    const [number, setnumber] = useState('so du doan');
    const [KQ, setKQ] = useState('Ket qua o day');

    const dudoan = () => {
        let numRand = Math.floor(Math.random() * 10) + 1;
        if (number == numRand) {
            setKQ('Bạn dự đoán đúng số ' + numRand + ' CHÚC MỪNG ');
        } else {
            setKQ('Dự đoán sai rồi kết quả là :' + numRand);

        }
        setnumber("");
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 40, color: 'blue', fontWeight: '500' }}>XỔ SỐ ĐÊ !!!</Text>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'green', height: 40, fontWeight: '100' }}>Nhập một số từ 1 đến 100</Text>
            <TextInput
                placeholder='Nhập số dự đoán'
                style={{ borderWidth: 1, margin: 10, fontSize: 15, borderRadius: 15 }}
                onChangeText={newText => setnumber(newText)}
            ></TextInput>
            <Pressable onPress={dudoan} style={{ borderColor: 'red', backgroundColor: 'red', borderWidth: 1, margin: 10 }}>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', padding: 14, fontWeight: '100' }}>Dự đoán</Text>
            </Pressable>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'pink', fontWeight: '100' }}>{KQ}</Text>
        </View>
    )
}

export default Gamexoso