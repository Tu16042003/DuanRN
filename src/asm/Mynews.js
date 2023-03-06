import { StyleSheet, Text, View, FlatList, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import React ,{useEffect,useState} from 'react'
import ItemListView from './ItemListView';
import AxiosIntance from './ultil/AxiosIntance';

const MyNews = (props) => {
    const {navigation} = props;

    const [data,setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            const res = await AxiosIntance().get('/articles/my-articles');
            if (res.error == false) {
                setdata(res.data);
                setisLoading(false);
            }else{
                ToastAndroid.show("Lay du lieu that bai",ToastAndroid.SHORT);
            }
        }
        getNews();
        return () => { }
    }, []);

    return (
        <View style={styles.container}>
            {isLoading == true ? (
                <View>
                    <ActivityIndicator size={'large'} color='#000000'/>
                    <Text>Loading...</Text></View>
            ):(
            <View style={styles.view}>{data.map((item)=> <ItemListView dulieu={item} navigation={navigation} key={item._id} />)}</View>
            )
            }
             
        </View>
    )
}

export default MyNews

const styles = StyleSheet.create({
    // container: {
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     marginStart:24
    // },
    view:{
        marginTop:8
    }
})


