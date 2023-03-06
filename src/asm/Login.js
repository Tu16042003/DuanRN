import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './AppContext';
const Login = (props) => {

    const { navigation } = props;
    const onclick = () => {
        navigation.navigate('Signup');
    }
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [emailUser, setemailUser] = useState("");
    const [passwordUser, setpasswordUser] = useState("");
    const { setisLogin,setinfoUser } = useContext(AppContext);
    
    const dangnhapTK = async () => {
        console.log(emailUser);
        try {
            const responseDN = await AxiosIntance().post('/auth/login', { email: emailUser, password: passwordUser });
            console.log(responseDN.error);
            if (responseDN.error == false) {
                // navigation.navigate("Login");
                await AsyncStorage.setItem('token', responseDN.data.token);
                ToastAndroid.show("Dang nhap thanh cong", ToastAndroid.SHORT);

                setinfoUser(responseDN.data.user);
                setisLogin(true);
            } else {
                ToastAndroid.show("Dang nhap ko thanh cong", ToastAndroid.SHORT);
            }
        } catch (err) {
            console.log(err);
            ToastAndroid.show("Dang nhap that bai", ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
            <Text style={[styles.text, { color: '#1877F2' }]}>Again!</Text>
            <Text style={styles.wellcomeText}>Wellcome back you've {'\n'}been missed</Text>

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

                <Text style={styles.textForgot}>Forgot the password ?</Text>
            </View >
            <Pressable style={styles.buttonLogin} onPress={dangnhapTK}>
                <Text style={styles.textLogin}>Login</Text>
            </Pressable>
            <Pressable style={styles.buttonLogin} onPress={onclick}>
                <Text style={styles.textLogin}>Register</Text>
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

            <Text style={{ textAlign: 'center', marginTop: 16 }}>don't have an account?</Text>
        </View>
    )
}

export default Login

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