import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = (props) => {
    const { navigation } = props;
    const onclick = () => {
        navigation.navigate('Tab1');
    }
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const [emailUser, setemailUser] = useState("");
    const [passwordUser, setpasswordUser] = useState("");
    const dangKytk = async () => {
        console.log(emailUser, passwordUser);
        try {
            const responseDK = await AxiosIntance().post('/users/register', { email: emailUser, password: passwordUser });
            console.log(responseDK.error);
            if (responseDK.error == false) {
                navigation.navigate("Login");
                ToastAndroid.show("Dang kys thanh cong", ToastAndroid.SHORT);
            } else {
                ToastAndroid.show("Dang ky ko thanh cong", ToastAndroid.SHORT);
            }
        } catch (err) {
            console.log(err);
            ToastAndroid.show("Dang ky that bai", ToastAndroid.SHORT);
        }

    }
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: '#1877F2' }]}>Hello!</Text>
            <Text style={styles.wellcomeText}>Signup to get Started</Text>

            <Text>Username</Text>
            <TextInput style={styles.textInput} onChangeText={setemailUser}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.textInput} onChangeText={setpasswordUser}></TextInput>

            <View style={[styles.viewCheckbox, { justifyContent: 'space-between' }]}>
                <View style={styles.viewCheckbox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#1877F2', false: '#1877F2' }}
                    />
                    <Text>Remember me</Text>
                </View>
            </View >
            <Pressable style={styles.buttonLogin} onPress={dangKytk}>
                <Text style={styles.textLogin}>Login</Text>
            </Pressable>
            <Text style={{ textAlign: 'center', marginTop: 16, marginBottom: 16 }}>or continue with</Text>

            <View style={[styles.viewCheckbox, { justifyContent: 'space-between' }]}>
                <Pressable style={styles.buttonScoial}>
                    <Image style={styles.imageScoial} source={require('../images/Icon.png')} />
                    <Text>Facebook</Text>
                </Pressable>
                <Pressable style={styles.buttonScoial}>
                    <Image style={styles.imageScoial} source={require('../images/Icongg.png')} />
                    <Text>Google</Text>
                </Pressable>
            </View>

            <Text style={{ textAlign: 'center', marginTop: 16 }}>don't have an account? Login</Text>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({

    container: {
        paddingStart: 25,
        paddingEnd: 25,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 40,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#050505'
    },
    wellcomeText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        marginTop: 4,
        marginBottom: 40,
        color: '#4E4B66'
    },
    textInput: {
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 4
    },
    viewCheckbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textForgot: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#5890FF'
    },
    buttonLogin: {
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
    },
    imageScoial: {
        width: 21,
        height: 21,
        marginEnd: 10
    },
    buttonScoial: {
        flexDirection: 'row',
        width: 174,
        height: 48,
        backgroundColor: '#EEF1F4',
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }


})