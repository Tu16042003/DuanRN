import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Explore = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topic}>
                    <Text style={styles.textTopic}>Topic</Text>
                    <Text style={styles.seeall}>See all</Text>
                </View>
                <View style={styles.imgtopic}>
                    <View style={styles.itemTP}>
                        <View style={styles.flextart}>
                            <Image style={styles.img} source={require('../images/hoahuongduong.jpg')} />
                            <View style={styles.titlecontent}>
                                <Text style={styles.titleTp}>Technology</Text>
                                <Text style={styles.contentTp} numberOfLines={2}>the application of scientific knowledge to the practi...</Text>
                            </View>
                        </View>
                        <Pressable style={styles.viewsave}>
                            <Text style={styles.save}>Save</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.imgtopic}>
                    <View style={styles.itemTP}>
                        <View style={styles.flextart}>
                            <Image style={styles.img} source={require('../images/hoahuongduong.jpg')} />
                            <View style={styles.titlecontent}>
                                <Text style={styles.titleTp}>Technology</Text>
                                <Text style={styles.contentTp} numberOfLines={2}>the application of scientific knowledge to the practi...</Text>
                            </View>
                        </View>
                        <Pressable style={styles.viewsave}>
                            <Text style={styles.save}>Save</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.imgtopic}>
                    <View style={styles.itemTP}>
                        <View style={styles.flextart}>
                            <Image style={styles.img} source={require('../images/hoahuongduong.jpg')} />
                            <View style={styles.titlecontent}>
                                <Text style={styles.titleTp}>Technology</Text>
                                <Text style={styles.contentTp} numberOfLines={2}>the application of scientific knowledge to the practi...</Text>
                            </View>
                        </View>
                        <Pressable style={styles.viewsave}>
                            <Text style={styles.save}>Save</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.textTopic}>Popular Topic</Text>

                <View>
                    <Image style={styles.image} source={require('../images/image1.png')} />
                    <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                    <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
                </View>
                <View>
                    <Image style={styles.image} source={require('../images/image1.png')} />
                    <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                    <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
                </View>
                <View>
                    <Image style={styles.image} source={require('../images/image1.png')} />
                    <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                    <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
                </View>
                <View>
                    <Image style={styles.image} source={require('../images/image1.png')} />
                    <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                    <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
                </View>
                <View>
                    <Image style={styles.image} source={require('../images/image1.png')} />
                    <Text style={{ marginTop: 8, fontSize: 13, lineHeight: 20, color: '#4E4B66' }}>Europe</Text>
                    <Text style={styles.textTitle} numberOfLines={1}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Image style={{ width: 364, height: 20, marginTop: 4 }} source={require('../images/news.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
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
    topic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    imgtopic: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius:6
    },
    textTopic: {
        fontFamily: 'Arial',
        fontSize: 16,
        lineHeight: 22,
        color: '#000000',
        fontWeight: 'bold',
        marginTop:12
    },
    seeall: {
        fontFamily: 'Arial',
        fontSize: 14,
        lineHeight: 22,
        color: '#4E4B66'
    },
    image: {
        width: '100%',
        height: 183,
        marginTop: 24,
        borderRadius: 6
    },
    textTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
        marginTop: 4
    },
    titleTp: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    },
    contentTp: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        lineHeight: 21,
        color: '#4E4B66'
    },
    viewsave: {
        width: 78,
        height: 34,
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    save: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    itemTP:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    flextart:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    titlecontent:{
        width:204,
        marginStart:8
    }
})