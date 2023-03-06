import { StyleSheet, Text, View, FlatList, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import React ,{useEffect,useState} from 'react'
import ItemListView from './ItemListView';
import AxiosIntance from './ultil/AxiosIntance';

const ListView = (props) => {
    const {navigation} = props;

    const [data,setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getNews = async () => {
            const res = await AxiosIntance().get('/articles');
            if (res.error == false) {
                setdata(res.data);
                setisLoading(false);
                // console.log(res);
            //     ToastAndroid.show("Lay du lieu",ToastAndroid.SHORT);
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
            // <FlatList
            //     data={data}
            //     renderItem={({ item }) => <ItemListView dulieu={item} navigation={navigation} />}
            //     keyExtractor={item => item._id}
            //     showsVerticalScrollIndicator={false}

            // /> 
            <View>{data.map((item)=> <ItemListView dulieu={item} navigation={navigation} key={item._id} />)}</View>
            
        
            )
            }
             
        </View>
    )
}

export default ListView

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginStart:24
    }
})


