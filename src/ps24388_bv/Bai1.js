import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Bai1 = (props) => {
    const { navigation } = props;
    const onclick = () => {
        navigation.navigate('Bai2');
    }
  return (
    <View style={styles.container}>
        <View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:111}}>
            <Image source={require('./image/Icon.png')}/></View>
            <Text style={{textAlign:'center',fontSize:16,lineHeight:24,color:'#223263',fontWeight:'bold',marginTop:16,marginBottom:8,fontFamily: 'Poppins-Medium'}}>Let’s Get Started</Text>
            <Text style={{textAlign:'center',fontSize:12,lineHeight:22,color:'#9098B1',marginBottom:28,fontFamily: 'Poppins-Medium',}}>Create an new account</Text>
        </View>
        <View style={styles.input}>
        <Image style={{width:20,height:20,marginStart:18,marginEnd:8}} source={require('../images/traitim.png')}/>
        <TextInput style={styles.text} placeholder='Full name'></TextInput>
        </View>
        <View style={styles.input}>
        <Image style={{width:20,height:20,marginStart:18,marginEnd:8}} source={require('../images/traitim.png')}/>
        <TextInput style={styles.text} placeholder='Your Email'></TextInput>
        </View>
        <View style={styles.input}>
        <Image style={{width:20,height:20,marginStart:18,marginEnd:8}} source={require('../images/traitim.png')}/>
        <TextInput style={styles.text} placeholder='Password'></TextInput>
        </View>
        <View style={styles.input}>
        <Image style={{width:20,height:20,marginStart:18,marginEnd:8}} source={require('../images/traitim.png')}/>
        <TextInput style={styles.text} placeholder='Password Again'></TextInput>
        </View>
      <TouchableOpacity onPress={onclick}>
        <View style={styles.buttom}>
        <Text style={{color:'#ffffff',fontWeight:'bold'}}>Sign Up</Text></View>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:24,fontFamily: 'Poppins-Medium'}}>
      <Text>have a account?</Text>
      <TouchableOpacity><Text style={{color:'#40BFFF'}}> Sign In</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Bai1

const styles = StyleSheet.create({

    container:{
        paddingStart:16,
        paddingEnd:16,
        flex:1
    },
    input:{
        height:48,
        borderColor:'#EBF0FF',
        borderWidth:1,
        borderRadius:5,
        marginTop:8,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        fontFamily: 'Poppins-Medium',

    },
    text:{
        fontSize:12,
        lineHeight:22,
        color:'#9098B1'
    },
    buttom:{
        height:57,
        backgroundColor:'#40BFFF',
        borderRadius:5,
        marginTop:16,
        alignItems:'center',
        justifyContent:'center'
    }
})