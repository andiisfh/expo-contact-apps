import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PostContactPage extends React.Component {

  render() {
    const styles = StyleSheet.create({
        inputStyle : {
          height: 40, 
          borderColor: 'lightgrey', 
          borderWidth: 2, 
          marginVertical: 10, 
          paddingLeft: 10
        }
    });

    return (
      <View style={{flex: 1, paddingTop:20, paddingHorizontal: 20}}>
        <TextInput 
          placeholder='First Name'
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Last Name'
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Age'
          keyboardType={"numeric"}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Photo URL'
          style={styles.inputStyle}
        />
        <Button title='Save'/>
      </View>
    );
  }
} 