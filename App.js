import React, { Component } from "react";
import {StyleSheet} from 'react-native';
import { Provider } from "react-redux";
import AppNavigation from "./navigation/AppNavigation";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
