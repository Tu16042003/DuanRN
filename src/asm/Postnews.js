import { StyleSheet, Text, View, Image, Button, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import AxiosIntance from './ultil/AxiosIntance'

const Postnews = (props) => {
    const { navigation } = props;
    const Clickve = () => {
        navigation.goBack();
    }
    const [imgNe, setimgNe] = useState("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17D4kV.img?w=534&h=712&m=6&x=347&y=100&s=206&d=206");
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("")

    const capture = async () => {
        const result = await launchCamera();
        // console.log(result.assets[0].uri);

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri, type: 'image/jpeg', name: 'image.jpg',
        });
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        if (response.error == false) {
            setimgNe(response.data.path);
        } else {
            ToastAndroid.show("ko thanh cong", ToastAndroid.SHORT);
        }
    }
    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri, type: 'image/jpeg', name: 'image.jpg',
        });
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);

    }
    const dangTin = async () => {
        const response = await AxiosIntance().post("/articles", { title: title, content: content, image: imgNe })
        if (response.error == false) {
            ToastAndroid.show("thanh cong", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("ko thanh cong", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconTop}>
                <TouchableOpacity onPress={Clickve}>
                    <Image style={styles.imgBack} source={require('../images/Vector.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>Create News</Text>
                <Image style={styles.img3cham} source={require('../images/3cham.png')} />
            </View>
            <Image style={styles.img} source={{ uri: imgNe }} />
            <View style={styles.buttonImg}>
                <Button title='chụp ảnh' onPress={capture} />
                <Button title='chọn ảnh' onPress={getImageLibrary} />
            </View>
            <TextInput placeholder='Tiêu đề' onChangeText={settitle} style={styles.texttt}/>
            <TextInput placeholder='Nội dung' onChangeText={setcontent}  style={styles.textct}/>
            <Button title='đăng tin' onPress={dangTin}/>
        </View>
    )
}

export default Postnews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 24,
        marginEnd: 24
    },
    img: {
        height: 300,
        marginTop: 20,
        borderRadius: 6,
        marginBottom: 20
    },
    iconTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        marginTop: 30
    },
    iconFlexend: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    imgBack: {
        width: 16,
        height: 15
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#000000',
        lineHeight: 24
    },
    img3cham: {
        width: 3,
        height: 18,
        marginEnd: 10,
        marginLeft: 21
    },
    buttonImg:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    texttt:{
        borderRadius:6,
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: '#050505',
        lineHeight: 36
    },
    textct:{
        borderRadius:6,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#4E4B66',
        lineHeight: 24
    }
})