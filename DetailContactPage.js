import React from 'react';
import { Text, View, Image } from 'react-native';

export default class DetailContactPage extends React.Component {

  render() {
    return (
      <View style={{flex: 1, padding:40, alignItems:'center'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyZhmWxbI3EXCFQdh0Ig-W7dFJUzqAl9Cdp-hZ5rX6R4NcP-MI'}}
        />
        <Text style={{marginTop:15}}>Andi Insanudin</Text>
        <Text>18 years old</Text>
      </View>
    );
  }
}