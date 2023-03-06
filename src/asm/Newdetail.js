import { ScrollView, StyleSheet, Text, View, Image, Pressable, ToastAndroid, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListView from './ItemListView'
import axios from 'axios'
import AxiosIntance from './ultil/AxiosIntance'
import ListView from './Listview'

const Newdetail = (props) => {
    const { route } = props;
    const { params } = route;

    const { navigation } = props;
    const ClickNe = () => {
        navigation.goBack();
    }
    const [data, setdata] = useState({});
    const [isLoading, setisLoading] = useState(true)
    console.log(params.id);
    useEffect(() => {
        const getDetail = async () => {
            const response = await AxiosIntance().get("/articles/" + params.id + "/detail");
            console.log(response);
            if (response.error == false) {
                // setimageUrl(response.data[0].image);
                // settitle(response.data[0].title);
                // setcontent(response.data[0].content);
                setdata(response.data[0])
                setisLoading(false);
            } else {
                ToastAndroid.show("Thất bại", ToastAndroid.SHORT);
            }
        }
        getDetail();
        return () => { }
    }, []);
    return (
        <>
            {isLoading == true ?
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size={'large'} color='#000000' />
                    <Text>Loading...</Text></View>
                :
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.iconTop}>
                            <TouchableOpacity onPress={ClickNe}>
                                <Image style={styles.imgBack} source={require('../images/Vector.png')} />
                            </TouchableOpacity>
                            <View style={styles.iconFlexend}>
                                <Image style={styles.imgShare} source={require('../images/share.png')} />
                                <Image style={styles.img3cham} source={require('../images/3cham.png')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center",marginTop:18 }}>

                            <View style={{ flexDirection: "row", justifyContent: 'flex-start', alignItems: "center" }}>
                                <Image source={require('../images/logobaiviet.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                <View style={{ marginStart: 4 }}>
                                    <Text style={{
                                        fontFamily: 'Poppins-Regular',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        lineHeight: 24
                                    }}>BBC News</Text>
                                    <Text style={{
                                        fontFamily: 'Poppins-Regular',
                                        fontSize: 14,
                                        color: '#4E4B66',
                                        lineHeight: 21
                                    }}>14m ago</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 6, backgroundColor: '#1877F2',justifyContent:'center',alignItems:'center' ,width:102,height:34}}>
                                <Text style={{ color: '#ffffff',fontFamily: 'Poppins-Regular',fontSize: 16,fontWeight: 'bold',lineHeight: 24 }}>Following</Text></View>
                        </View>
                        <Image style={styles.image} source={{ uri: data.image }}></Image>
                        <Text style={styles.textTitle}>{'\n'}{data.title}</Text>
                        <Text style={styles.text}>{'\n'}{data.content}{'\n'}</Text>
                    </ScrollView>
                    <View style={styles.viewBottom}>
                        <View style={styles.viewtraitim}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/traitim.png')} />
                                <Text>24.5K</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../images/binhluan.png')} />
                                <Text>1K</Text>
                            </View>
                        </View>
                        <Image source={require('../images/luu.png')} />
                    </View>
                </View>
            }
        </>
    )
}

export default Newdetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: '#ffffff'
    },
    image: {
        width: '100%',
        height: 248,
        marginTop: 20,
        borderRadius: 6
    },
    textTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        lineHeight: 36,
        color: '#000000'
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#4E4B66',
        lineHeight: 24
    },
    viewContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff'

    },
    imgBack: {
        width: 16,
        height: 15
    },
    imgShare: {
        width: 19,
        height: 20
    },
    img3cham: {
        width: 3,
        height: 18,
        marginEnd: 10,
        marginLeft: 21
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
    viewBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 78,
        elevation: 2
    },
    viewtraitim: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 156
    }

})