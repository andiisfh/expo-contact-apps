import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    axios.get('https://simple-contact-crud.herokuapp.com/contact')
    .then(response => {
      this.setState({
        dataSource: response.data.data,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  renderViewItem = (item) => (
    <View style={{flex: 1, padding:20, flexDirection: 'row'}}>
      <Image
        style={{width: 50, height: 50, marginRight: 15}}
        source={{uri: item.photo}}
      />
      <View>
        <Text>{item.firstName} {item.lastName}</Text>
        <Text>{item.age} years old</Text>
      </View>
   </View>
  );
  
  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this.renderViewItem(item)}
          keyExtractor={({item}, index) => index.toString()}
        />
      </View>
    );
  }
}