import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

class PickerComponent extends Component {
    state = {
        restaurant: '식당선택',
      };

    render() {
        return (
        <View style={styles.container}>
            <Picker style={{height: 50, width: 250}}
            selectedValue={this.state.restaurant}
            onValueChange={(val, idx) => this.setState({restaurant: val})}>
            <Picker.Item label="학생식당" value={'StudentRes'} />
            <Picker.Item label="교직원식당" value={'EmployeeRes'} />
            </Picker>
        </View>
        );  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
});

export default PickerComponent;