/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
 TextInput,Button,SafeAreaView,ScrollView
} from 'react-native';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      isEdit:false,
      buttonText:'Enable',country:''
    };
  }
componentDidMount(){
  this.fetchWeatherInfo();
}
  _handleClick(){
    this.setState({isEdit:!this.state.isEdit});
    this.setState({
      buttonText:this.state.isEdit ? 'Disable' : 'Enable'
    });
    this.fetch();
  }

fetch('https://restcountries.eu/rest/v2/name/India', {
  method: 'POST',
  body: JSON.stringify({
    country: this.state.country,
  })
});


fetchWeatherInfo('http://api.weatherstack.com/current? access_key={{YOUR_ACCESS_KEY}}&query ={{ENTER CAPITAL CITY HERE}}', {
  method: 'GET',
});



render(){
  return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
         <TextInput style={{alignSelf:'center',padding:20,borderWidth:1,width:200}}
         placeholder="Enter country"
         underlineColorAndroid="transparent"
         value={this.state.country}
         editable={this.state.isEdit}/>
         <Button title={this.state.buttonText} onPress={this._handleClick.bind(this)}/>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}
}

export default App;
