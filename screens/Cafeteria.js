import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import TopBar from './components/TopBar';
import PickerComponent from './components/Picker';
import MealTable from './components/MealTable'

class App extends React.Component {
  render() 
  {
    return (
      <View style={styles.container}>
        <View style={styles.MenuName}>
            <TopBar>
            </TopBar>
        </View>

        <View style={styles.ChoiceTable}>
          <PickerComponent>
            
          </PickerComponent>
        </View>

        <View style={styles.MealTable}>
            <MealTable>
            </MealTable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MenuName: {
    flex: 1.5,
    backgroundColor: 'firebrick',
    flexDirection : 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ChoiceTable: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  MealTable: {
    flex: 7,
    backgroundColor: 'white',
  },
});

export default App;