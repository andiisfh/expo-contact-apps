import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import axios from 'axios';

export default class DetailContactPage extends React.Component {

  static navigationOptions = {
    title: 'Detail Contact',
  };

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      photo: 'N/A'
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get('https://simple-contact-crud.herokuapp.com/contact/' + this.props.navigation.state.params.id)
    .then(response => {
      this.setState({
        id: response.data.data.id,
        firstName: response.data.data.firstName,
        lastName: response.data.data.lastName,
        age: response.data.data.age,
        photo: response.data.data.photo  
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  navigateToUpdate() {
    const {navigate} = this.props.navigation;
    navigate('UpdateContact', {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo: this.state.photo
    })
  }

  render() {
    return (
      <View style={{flex: 1, padding:40}}>
        <Image
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={{uri: this.state.photo}}
        />
        <Text style={{marginTop:15, alignSelf: 'center'}}>{this.state.firstName} {this.state.lastName}</Text>
        <Text style={{marginBottom:15, alignSelf: 'center'}}>{this.state.age} years old</Text>
        <Button title='Update Contact' onPress={()=> this.navigateToUpdate()}/>
      </View>
    );
  }
}