import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default class PostContactPage extends React.Component {

  static navigationOptions = {
    title: 'Post Contact',
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      photo: ''
    }
  }
    
  handleSubmit() {
    const { navigation } = this.props;

    axios.post('https://simple-contact-crud.herokuapp.com/contact', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        photo: this.state.photo
    })
    .then(function (response) {
      const refetch = navigation.state.params.refetch;
      if(typeof refetch === 'function') {
        refetch(); 
        navigation.pop();
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

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
          onChangeText={(value) => this.setState({firstName: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Last Name'
          onChangeText={(value) => this.setState({lastName: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Age'
          keyboardType={"numeric"}
          onChangeText={(value) => this.setState({age: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder='Photo URL'
          onChangeText={(value) => this.setState({photo: value})}
          style={styles.inputStyle}
        />
        <Button title='Save' onPress={() => this.handleSubmit()}/>
      </View>
    );
  }
} 