import React,{Component} from 'react';
import {View,Text,AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

  componentDidMount(){
    this.props.facebookLogin();//action
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps){//runs when a component is about to rerender
    //reducer updates the state and we receive new state as props from mapStateToProps
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props){
    if (props.token){
      this.props.navigation.navigate('map');
    }
  }

  render(){
    return (
      <View />
    );
  }
}

function mapStateToProps({auth}){
  return {token:auth.token};
}

export default connect(mapStateToProps,actions)(AuthScreen);
