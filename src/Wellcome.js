import { View, Text,Button } from 'react-native'
import React,{useState} from 'react'

const Wellcome = (props) => {
    const {name,old,address} = props;
    // useState
    const [hoTen, sethoTen] = useState("Tran van C");

    const click = () =>{
      sethoTen("LOL");
    }
    const clickdung = () => {
      sethoTen('sosososo');
      }
   
  return (
    <View>
      <Text>Wellcome FPT</Text>
      <Text>Wellcome {name}</Text>
      <Text>tuổi {old}</Text>
      <Text>Wellcome {address}</Text>
      <Button title='click' onPress={()=> click}></Button>
      <Button title='clickDung' onPress={()=> clickdung}></Button>
      <Button title='clickSai' onPress={()=> clicksai}></Button>
    </View>
  )
}

export default Wellcome