import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React,{useContext} from 'react'
import MyNews from './Mynews';
import { AppContext } from './AppContext';
const Profile = (props) => {
    const { navigation } = props;
    const ClickNe = () => {
        navigation.navigate('Fillprofile');
    }

    const { infoUser} = useContext(AppContext);
    const ClickPost = () => {
        navigation.navigate('Postnews');
    }

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text style={styles.title}>Profile</Text>
                <Image style={styles.iconSetting} source={require('../images/setting.png')} />
            </View>
            <View style={styles.viewProfile}>
                <Image style={styles.image} source={{uri: infoUser.avatar}} />
                <View style={styles.textprofile}>
                    <Text style={styles.number}>2156</Text>
                    <Text style={styles.text}>Followers</Text>
                </View>
                <View style={styles.textprofile}>
                    <Text style={styles.number}>567</Text>
                    <Text style={styles.text}>Following</Text>
                </View>
                <View style={styles.textprofile}>
                    <Text style={styles.number}>23</Text>
                    <Text style={styles.text}>News</Text>
                </View>
            </View>
            <View>
                <Text style={styles.titleContent}>{infoUser.name} </Text>
                <Text style={styles.content} >{infoUser.email}</Text>
            </View>
            <View style={styles.viewButton}>
                <Pressable style={styles.button} >
                    <Text style={styles.textButton} onPress={ClickNe}>Edit profile</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Website</Text>
                </Pressable>
            </View>
                <View style={styles.viewSmall}>
                    <Text style={styles.content}>News</Text>
                    <Text style={styles.content}>Recent</Text>
                </View>
            <ScrollView style={styles.Mynew}>
                <MyNews />
            </ScrollView>
            <TouchableOpacity style={styles.viewAdd} onPress={ClickPost}>
                <Image style={styles.add} source={require('../images/Add.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: '#FFFFFF'
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 214,
        left: 150
    },
    iconSetting: {
        marginTop: 30,
        justifyContent: 'flex-end'
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        marginTop: 30
    },
    viewProfile: {
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    textprofile: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontFamily: 'Popins-Medium',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        color: '#000000'
    },
    text: {
        fontFamily: 'Popins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#4E4B66'
    },
    titleContent: {
        fontFamily: 'Popins-Medium',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 16
    },
    content: {
        fontFamily: 'Popins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#4E4B66'
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    button: {
        borderRadius: 6,
        backgroundColor: '#1877F2',
        width: 172,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontFamily: 'Popins-Medium',
        fontSize: 16,
        lineHeight: 24,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    viewSmall: {
        flexDirection: 'row',
        paddingTop: 13,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    viewAdd: {
        position: 'absolute',
        bottom: 27, right: 24
    },
    add: {
        width: 54, height: 54, borderRadius: 54
    },
    Mynew: {

    }
})