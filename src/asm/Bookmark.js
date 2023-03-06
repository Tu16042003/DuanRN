import { StyleSheet, Text, View, FlatList, Image, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import ListView from './Listview'
import AxiosIntance from './ultil/AxiosIntance';
import ItemListView from './ItemListView';

const Bookmark = (props) => {
    const [seachText, setseachText] = useState("");
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { navigation } = props;

    useEffect(() => {
        const getNews = async () => {
            const res = await AxiosIntance().get('/articles');
            if (res.error == false) {
                setdata(res.data);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lay du lieu that bai", ToastAndroid.SHORT);
            }
        }
        getNews();
        return () => { }
    }, []);

    const search = async () => {
        const res = await AxiosIntance().get('/articles/search?title=' + seachText);
        if (res.error == false) {
            setdata(res.data);
            setisLoading(false);
            console.log(res);
        } else {
            ToastAndroid.show("Thất bại", ToastAndroid.SHORT);
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bookmark</Text>
            <View style={styles.seach}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={search}><Image style={{ marginLeft: 12 }} source={require('../images/seach.png')} /></TouchableOpacity>
                    <TextInput placeholder='Seach' onChangeText={setseachText} />
                </View>
                <Image style={{ marginRight: 12 }} source={require('../images/control.png')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoading == true ? (
                    <View>
                        <ActivityIndicator size={'large'} color='#000000' />
                        <Text>Loading...</Text></View>
                ) : (
                    <View>
                        {data.map((item) => <ItemListView dulieu={item} navigation={navigation} key={item._id} />)}
                    </View>
                )
                }
            </ScrollView>
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: '#ffffff'
    },
    title: {
        width: 172,
        height: 48,
        marginTop: 30,
        fontFamily: 'Poppins-Medium',
        fontSize: 32,
        lineHeight: 48,
        fontWeight: 'bold',
        color: '#000000'
    },
    seach: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        height: 48,
        marginBottom: 24
    }
})

