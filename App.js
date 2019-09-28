import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get('https://simple-contact-crud.herokuapp.com/contact')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
    return (
      <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
    );
  }
}