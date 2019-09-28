import React from 'react';
import { Text, View, FlatList } from 'react-native';
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
    const dummy = ['Andi', 'Luthfi', 'Leo', 'Pandu'];
    
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={dummy}
          renderItem={({item}) => <View style={{flex: 1, padding:20}}><Text>{item}</Text></View>}
          keyExtractor={({item}, index) => index.toString()}
        />
      </View>
    );
  }
}