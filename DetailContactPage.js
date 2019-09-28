import React from 'react';
import { Text, View, Image } from 'react-native';
import axios from 'axios';

export default class DetailContactPage extends React.Component {

  static navigationOptions = {
    title: 'Detail Contact',
  };

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <View style={{flex: 1, padding:40, alignItems:'center'}}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state.photo}}
        />
        <Text style={{marginTop:15}}>{this.state.firstName} {this.state.lastName}</Text>
        <Text>{this.state.age} years old</Text>
      </View>
    );
  }
}