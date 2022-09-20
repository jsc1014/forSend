import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default class BeforeButton extends Component{
  static defaultProps = {
    title: 'back button',
    buttonColor: 'pink',
    titleColor: 'black',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        <View style={styles.BackButton}>
          <TouchableOpacity>
            <Image
                style={{height:'100%',width:'100%', resizeMode:'contain'}}
                source={require('../../assets/icons/go_previous_icon.png')}>
            </Image>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.name}>
              학식
          </Text>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackButton: {
    // justifyContent: 'flex-start',
    // alignItems: 'center'
    marginRight: '80%',
    marginTop : 60,
  },
  name : {
    fontSize : 20,
    bottom:20,
    left:160
  }
});