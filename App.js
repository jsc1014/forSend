import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./Main/Main";
import Loading from "./Main/Loading";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount = async () => {
    // 1,000가 1초
    setTimeout(() => { this.setState({ isLoading: false }) }, 3000);
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MAIN">
            <Stack.Screen name="MAIN" component={Main}
              options={{
                title: 'KUGA',
            }}/>

          <Stack.Screen name="MAP" component={Map} 
                    options={{
                      title: '맵스크린'
                  }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

// export default function App() {
//   const [isReady, setIsReady] = useState(false);
//   if(isReady){
//     return (<AppLoading />)
//   }
//   return (
//     <View style={styles.container}>
//       <Text>IssueTest555556</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// });W
