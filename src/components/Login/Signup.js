import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'

 class SignUp extends Component {
    
    render() {
        
        
        return (
            <View>
            <Text>HEllo {this.props.items.phnOfUser}</Text>
            </View>
        );
    }
  }

  
const mapStateToProps=(state,props)=>{
    return{
      items:state.details.items
    }
  }
  
  export default connect(mapStateToProps)(SignUp)