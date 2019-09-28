import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class PostContactPage extends React.Component {

  render() {
    return (
      <View style={{flex: 1, paddingTop:20, paddingHorizontal: 20}}>
        <TextInput 
          placeholder='First Name'
          style={{height: 40, borderColor: 'lightgrey', borderWidth: 2, marginVertical: 10, paddingLeft: 10}}
        />
        <TextInput 
          placeholder='Last Name'
          style={{height: 40, borderColor: 'lightgrey', borderWidth: 2, marginVertical: 10, paddingLeft: 10}}
        />
        <TextInput 
          placeholder='Age'
          keyboardType={"numeric"}
          style={{height: 40, borderColor: 'lightgrey', borderWidth: 2, marginVertical: 10, paddingLeft: 10}}
        />
        <TextInput 
          placeholder='Photo URL'
          style={{height: 40, borderColor: 'lightgrey', borderWidth: 2, marginVertical: 10, paddingLeft: 10}}
        />
        <Button title='Save'/>
      </View>
    );
  }
} 