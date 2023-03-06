import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

const Tinhtoan = () => {

    const [so1, setso1] = useState(0);
    const [so2, setso2] = useState(1);
    const [result, setresult] = useState(3);

    const luachon = (isChoose) => {
        let tong = so1 + so2;
        if ((tong == result && isChoose == true) || (tong != result && isChoose == false)) {
            // alert('Ban chon dung');
            setso1(Math.floor(Math.random() * 10+1));
            setso2(Math.floor(Math.random() * 10+1));
            setresult(Math.floor(Math.random() * 20));
        } else {
            alert('chon sai roi');
        }

    }
    return (
        <View>
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 30,marginBottom:20 }}>BẠN GIỎI PHÉP CỘNG ?</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 40 }}>{so1}+{so2}</Text>
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 40 }}>=</Text>
            <Text style={{ color: 'red', textAlign: 'center', fontSize: 40 ,marginBottom:20}}>{result}</Text>
            {/* dung pressable de lam button */}
            <Pressable onPress={() => luachon(true)} style={{ borderWidth: 1, borderColor: 'white', padding: 10, backgroundColor: 'green', marginBottom: 10 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Dung</Text>
            </Pressable>
            <Pressable onPress={() => luachon(false)} style={{ borderWidth: 1, borderColor: 'white', padding: 10, backgroundColor: 'grey' }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Sai</Text>
            </Pressable>

        </View>
    )
}

export default Tinhtoan