import React,{Component} from 'react';
import {View,Text,Platform} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreen extends Component {

  static navigationOptions=({navigation})=>{
    return{
      title:'Review jobs',
      headerRight:(
        <Button
        title='Settings'
        onPress={()=>navigation.navigate('settings')}
        type='clear'
        />
      ),
      style:{
        marginTop:Platform.OS === 'android' ? 24 : 0
      }
    };
  };



  render(){
    return(
      <View>
        <Text>I am ReviewScreen</Text>
        <Text>I am ReviewScreen</Text>
        <Text>I am ReviewScreen</Text>
        <Text>I am ReviewScreen</Text>
        <Text>I am ReviewScreen</Text>
        <Text>I am ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
