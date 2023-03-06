import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import AxiosIntance from './ultil/AxiosIntance';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


const Fillprofile = (props) => {
    const { navigation } = props;
    const Clickve = () => {
        navigation.goBack();
    }

    const { infoUser, setinfoUser } = useContext(AppContext);
    // console.log(infoUser);
    const capture = async () => {
        const result = await launchCamera();
        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri, type: 'image/jpeg', name: 'image.jpg',
        });
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        if (response.error == false) {
            setinfoUser({ ...infoUser, avatar: response.data.path });
        } else {
            ToastAndroid.show("ko thanh cong", ToastAndroid.SHORT);
        }
    }
    const updatePro = async () => {
        const response = await AxiosIntance().post("/users/update-profile",
            {
                name: infoUser.name,
                phone: infoUser.phone,
                avatar: infoUser.avatar,
                address: infoUser.address,
                dob: infoUser.dob,
            });
        console.log(response);
        if (response.error == false) {
            ToastAndroid.show("thanh cong", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("ko thanh cong", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={{
            justifyContent: 'space-between', flex: 1,
            backgroundColor: '#ffffff'
        }}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.viewFill} onPress={Clickve}>
                        <Image style={styles.imgBack} source={require('../images/Vector.png')} />
                        <Text style={styles.textFill}>Fill your Profile</Text>
                    </TouchableOpacity>

                    <View style={styles.viewProfile}>
                        <TouchableOpacity onPress={capture}>
                            {
                                infoUser.avatar == "" ?
                                    <Image style={styles.image} source={require('../images/hoahuongduong.jpg')} />
                                    :
                                    <Image style={styles.image} source={{ uri: infoUser.avatar }} />
                            }

                            <Image style={styles.icon} source={require('../images/Frame.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>Username</Text>
                    <TextInput style={styles.textInput} value={infoUser.name} onChangeText={(text) => setinfoUser({ ...infoUser, name: text })}></TextInput>
                    <Text style={styles.text}>Address</Text>
                    <TextInput style={styles.textInput} value={infoUser.address} onChangeText={(text) => setinfoUser({ ...infoUser, address: text })}></TextInput>
                    <Text style={styles.text}>Email Address*</Text>
                    <TextInput style={styles.textInput} value={infoUser.email} onChangeText={(text) => setinfoUser({ ...infoUser, email: text })}></TextInput>
                    <Text style={styles.text}>Phone Number*</Text>
                    <TextInput style={styles.textInput} value={infoUser.phone} onChangeText={(text) => setinfoUser({ ...infoUser, phone: text })}></TextInput>
                </View>
            </ScrollView>
            <View style={styles.viewButton}>
                <Pressable style={styles.buttonLogin} onPress={updatePro}>
                    <Text style={styles.textLogin}>Update</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Fillprofile

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingStart: 25,
        paddingEnd: 25,
        flexDirection: 'column',
        alignItems: 'center'
    },
    viewProfile: {
        width: 140,
        height: 140,
        marginTop: 16
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 140
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 16.5,
        bottom: 0
    },
    text: {
        textAlign: 'left',
        width: '100%',
        color: '#4E4B66',
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginTop: 16
    },
    textInput: {
        height: 48,
        width: '100%',
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 4,
        borderColor: '#4E4B66'
    },
    viewButton: {
        width: '100%',
        paddingBottom: 40,
        paddingEnd: 24,
        paddingStart: 24,
        paddingTop: 40,
        elevation: 2,
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 16,

        fontFamily: 'Poppins-Medium',
    },
    buttonLogin: {
        height: 48,
        width: '100%',
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 24,
        paddingEnd: 24,
        borderRadius: 6
    },

    viewFill: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    imgBack: {
        width: 16,
        height: 15.5,
        position: 'absolute',
        left: 0
    },
    textFill: {
        color: '#000000',
        fontFamily: 'Poppins-Medium',
        fontSize: 16
    }

})