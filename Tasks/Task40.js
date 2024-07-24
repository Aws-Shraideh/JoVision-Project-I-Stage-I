import React, { Component, } from 'react';
import { Provider } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import MyClassComponent_Task40 from '../Components/MyClassComponent_Task40';
import store from '../store/store';

class Task40 extends Component {
    constructor(){
        super()
        this.state = {
            title: 'show',
            display: false
        }
    }


 showComponent()
  {
    this.setState({title: 'show',display :false})
  }

  hideComponent()
  {
    this.setState({title: 'hide',display :true})
  }

  render(){
  return (
        <View style={styles.view}>
            <Provider store={store}>
            <Button title={this.state.title} onPress={() => { this.state.display? this.showComponent() : this.hideComponent()}}/>
            {this.state.display && <MyClassComponent_Task40></MyClassComponent_Task40>}
            </Provider>
        </View>

  );
};
}

styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
export default Task40
