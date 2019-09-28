import React from 'react';
import { Text, View, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Fab, Icon } from 'native-base';

export default class App extends React.Component {

  static navigationOptions = {
    title: 'List Contact',
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
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
    <TouchableOpacity onPress={() => this.navigateToDetail(item.id)}>
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
   </TouchableOpacity>
  );

  navigateToDetail(contactId) {
    const {navigate} = this.props.navigation;
    navigate('DetailContact', {id: contactId})
  }
  
  addContact = () => {
    const {navigate} = this.props.navigation;
    navigate('PostContact', {refetch: this.getData})
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this.renderViewItem(item)}
          keyExtractor={({item}, index) => index.toString()}
        />
        <Fab
          active="true"
          style={{ backgroundColor: 'dodgerblue' }}
          position="bottomRight"
          onPress={()=> this.addContact()}>
          <Icon name="add" />
      </Fab>
      </View>
    );
  }
}