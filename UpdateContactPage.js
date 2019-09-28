import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { StackActions, NavigationActions } from 'react-navigation'

export default class UpdateContactPage extends React.Component {

  static navigationOptions = {
    title: 'Update Contact',
  };

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.navigation.state.params.firstName,
      lastName: props.navigation.state.params.lastName,
      age: props.navigation.state.params.age,
      photo: props.navigation.state.params.photo
    }
  }
    
  handleSubmit() {
    const { navigation } = this.props;

    axios.put('https://simple-contact-crud.herokuapp.com/contact/' + this.props.navigation.state.params.id, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        photo: this.state.photo
    })
    .then(function (response) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ListContact' })],
      });
      navigation.dispatch(resetAction);  
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
          placeholder={this.props.navigation.state.params.firstName}
          onChangeText={(value) => this.setState({firstName: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder={this.props.navigation.state.params.lastName}
          onChangeText={(value) => this.setState({lastName: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder={this.props.navigation.state.params.age.toString()}
          keyboardType={"numeric"}
          onChangeText={(value) => this.setState({age: value})}
          style={styles.inputStyle}
        />
        <TextInput 
          placeholder={this.props.navigation.state.params.photo}
          onChangeText={(value) => this.setState({photo: value})}
          style={styles.inputStyle}
        />
        <Button title='Update' onPress={() => this.handleSubmit()}/>
      </View>
    );
  }
} 