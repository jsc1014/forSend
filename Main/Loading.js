import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
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
                    style={{ height: '80%', width: '80%', resizeMode: 'contain' }}>
                </Image>
            </View>

            <View style={styles.ChoiceTable}>
                <Text style={styles.titletable}>KUGA</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    titletable: {
        bottom: 240,
        fontSize: 30,
        color: 'red'
    }
});
