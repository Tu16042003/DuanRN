import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const ItemListView = (props) => {
    const { dulieu } = props;
    const navigation = useNavigation();
    const clickItem = ()=>{
        navigation.navigate('Newdetail',{id: dulieu._id});
        console.log(dulieu);
    }
    return (
        <TouchableOpacity onPress={clickItem}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: dulieu.image}} />
            <View style={styles.textBig}>
                <Text style={styles.title} numberOfLines={1} >{dulieu.title}</Text>
                <Text style={styles.content} numberOfLines={1}>{dulieu.content}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default ItemListView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 10,
        marginTop: 10,
        
    },
    textBig:{
        marginLeft:4
    },
    title: {
        fontSize:16,
        lineHeight:24,
        fontFamily:'Poppins-Medium',
        color:'#000000'
    },
    content: {
        fontSize:16,
        lineHeight:24,
        fontFamily:'Poppins-Medium',
        color:'#000000'
    }
})