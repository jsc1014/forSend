import AppLoading from 'expo-app-loading';
// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import IconButton  from '../IconButton/Button1';
// import { images } from '../images';

export default function App({navigation}) {
    const [isReady, setIsReady] = useState(false);
    if (isReady) {
        return (
            <AppLoading />
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.MealTable}>
                <Image
                    source={require("../assets/kor_logo.jpg")}
                    style={{ height: '50%', width: '50%', resizeMode: 'contain' , top:50}}>
                </Image>
            </View>

            <View style={styles.ChoiceTable}>
                <Text style={styles.titletable}>KU          GA</Text>
            </View>

            
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('MAP')}>
                    <Image style={styles.Image1} source={require("../assets/mainIcon/address.png")} />
                </TouchableOpacity>
                {/* <Image
                    source={require("../assets/mainIcon/address.png")}
                    style={styles.Image1}>
                </Image> */}
                <Text style={styles.tableMaterial}>지도</Text>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/mainIcon/school.png")}
                        style={styles.Image2}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.tableMaterial2}>학사 일정</Text>

                <TouchableOpacity>
                    <Image
                        source={require("../assets/mainIcon/check-all.png")}
                        style={styles.Image3}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.tableMaterial3}>
                    의무리스트
                </Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Image
                        source={require("../assets/mainIcon/bus.png")}
                        style={styles.Image4}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.tableMaterial4}>
                    버스
                </Text>
                
                <TouchableOpacity>
                    <Image
                        source={require("../assets/mainIcon/bowl.png")}
                        style={styles.Image5}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.tableMaterial5}>
                    학식
                </Text>
                
                <TouchableOpacity>
                    <Image
                        source={require("../assets/mainIcon/news.png")}
                        style={styles.Image6}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.tableMaterial6}>
                    수강신청
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    MenuName: {
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ChoiceTable: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MealTable: {

        flex: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    titletable: {

        bottom: 420,
        fontSize: 50,
        color: 'red'
    },

    Image1: {
        position:'absolute',
        bottom: 210,
        left : 20,
        height: 60, 
        width: 60, 
        resizeMode: 'contain'
    },

    Image2: {
        position:'absolute',
        height:60, 
        width: 60,
        bottom:240,
        left : 160,
        alignItems: 'center',
        justifyContent: 'center', 
        resizeMode: 'contain'
    },

    Image3: {
        position:'absolute',
        height:60, 
        width: 60,
        bottom:260,
        left : 290,
        alignItems: 'center',
        justifyContent: 'center', 
        resizeMode: 'contain'
    },

    Image4:{
        position:'absolute',
        height:60, 
        width: 60,
        bottom:130,
        left : 20,
        alignItems: 'center',
        justifyContent: 'center', 
        resizeMode: 'contain'
    },

    
    Image5:{
        position:'absolute',
        height:60, 
        width: 60,
        bottom:160,
        left : 160,
        alignItems: 'center',
        justifyContent: 'center', 
        resizeMode: 'contain'
    },

    
    Image6: {
        position:'absolute',
        height:60, 
        width: 60,
        bottom:180,
        left : 290,
        alignItems: 'center',
        justifyContent: 'center', 
        resizeMode: 'contain'
    },

    tableMaterial:{
        bottom: 200,
        left: 35,
        fontSize: 17,
        color: 'black'
    },

    tableMaterial2:{
        bottom: 225,
        left: 160,
        fontSize: 17,
        color: 'black'
    },

    tableMaterial3:{
        bottom: 250,
        left: 285,
        fontSize: 17,
        color: 'black'
    },

    tableMaterial4:{
        bottom: 110,
        left: 35,
        fontSize: 17,
        color: 'black'
    },

    
    tableMaterial5:{
        bottom: 135,
        left: 175,
        fontSize: 17,
        color: 'black'
    },

    tableMaterial6:{
        bottom: 160,
        left: 290,
        fontSize: 17,
        color: 'black'
    },
});
