import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListView from './ItemListView'
import AxiosIntance from './ultil/AxiosIntance'
import ListView from './Listview'

const Home = () => {

    const [seachText, setseachText] = useState("");
    const search = async ()=>{
        const res= await AxiosIntance().get('/articles/search?title='+seachText);
        if (res.error == false) {
            console.log(res);
        } else {
            ToastAndroid.show("Thất bại",ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.toplogo}>
                <Image source={require('../images/logo.png')} />
                <Image source={require('../images/chuong.png')} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.seach}>
                <View style={{justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={search}><Image style={{ marginLeft: 12 }} source={require('../images/seach.png')} /></TouchableOpacity>
                <TextInput placeholder='Seach' onChangeText={setseachText}/>
                </View>
                <Image style={{ marginRight: 12 }} source={require('../images/control.png')} />
            </View>
            
            <View style={styles.toplogo}>
                <Text style={styles.text}>Trending</Text>
                <Text style={styles.seeall}>See all</Text>
            </View>
            <View>
                <Image style={styles.image} source={require('../images/image1.png')} />
                <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>

                <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
            </View>
            <View style={styles.latest}>
                <Text style={styles.text}>Latest</Text>
                <Text style={styles.seeall}>See all</Text>
            </View>
            <View style={styles.all} numberOfLines={1}>
                <Text style={[styles.textAll, { color: '#000000' }]}>All</Text>
                <Text style={styles.textAll}>Sports</Text>
                <Text style={styles.textAll}>Politics</Text>
                <Text style={styles.textAll}>Bussiness</Text>
                <Text style={styles.textAll}>Health</Text>
                <Text style={styles.textAll}>Travel</Text>
                <Text style={styles.textAll}>Science</Text>
            </View>
            <View style={{marginStart:24}}><ListView /></View></ScrollView>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 32,
        paddingEnd: 32,
        backgroundColor: '#FFFFFF'
    },
    toplogo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    latest: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24
    },
    all: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 24
    },
    seach: {
        marginTop: 42,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4E4B66',
        height: 48,
    },
    seeall: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        lineHeight: 21,
        color: '#4E4B66'
    },
    image: {
        width: '100%',
        height: 183,
        marginTop: 25,
        borderRadius: 6
    },
    textTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        marginTop: 4
    },
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    },
    textAll: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#4E4B66',
        paddingRight: 10
    },
    viewContainer: {
        flexDirection: 'row'
    },
    imgBack: {
        position: 'absolute',
        bottom: 0,
    }

})

