import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import meal from "../../assets/pictures/meal_table.jpg";

function App (){
  return (
    <View style={styles.container}>
      <Image 
        source={meal}
				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용한다
                // 위에 처럼 uri를 넣거나 폴더에 있는 이미지를 사용할 때는 
                //'source={favicon}' 이렇게 작성해주면 된다.
        resizeMode={"contain"}
        style={styles.imageStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },
  imageStyle: {
    width:"80%",
    height:"80%",
    alignItems:"center",
    justifyContent:"center",
    left : 30,
  }
});

export default App;