import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { ADD } from '../store/actions/actions';

class MyClassComponenet_Task40 extends Component
    {
        render()
        {
            return(
                <TextInput style={styles.input} value ={this.props.text} onChangeText={(value)=> this.props.ADD(value)}></TextInput>
            )
        }
    }   
    const mapStateToProps = (state) =>
    (
        {
            text: state.text
        }
    )
    const mapDispatchToProps = (dispatch) => 
    (
        {
            ADD: (payload) => dispatch(ADD(payload))
        }
    )


    styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})


export default connect(mapStateToProps,mapDispatchToProps)(MyClassComponenet_Task40); 