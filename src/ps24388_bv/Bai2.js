import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Bai2 = (props) => {
    const { navigation } = props;
    const onclick = () => {
        navigation.goBack();
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onclick} style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:21}}>
            <Image style={{width:6,height:12}} source={require('../images/Vector.png')}/>
            <Text style={{fontSize:16,lineHeight:24,color:'#223263',marginStart:21,fontWeight:'bold'}}>Favorite Product</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:44}}>
        <View style={{flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
        <Image style={styles.img}  source={require('./image/Product01.png')} />
        <Image style={styles.img} source={require('./image/Product02.png')} />
        </View>
        <View style={{flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Image style={styles.img} source={require('./image/Product03.png')} />
        <Image style={styles.img} source={require('./image/Product04.png')} />
        </View>
        </View>
    </View>
  )
}

export default Bai2

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginStart:16,
        marginEnd:16
    },
    img:{
        width:165,
        height:282,
        marginTop:12
    }
})