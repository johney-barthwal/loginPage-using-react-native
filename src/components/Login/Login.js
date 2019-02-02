import React ,{Component} from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux'

class Login extends Component {

  state={
    phonenumber:''
  }


  signUp=()=>{
      const abc=this.state.phonenumber
    
    this.props.dispatch({
      type:'New_items',
      value:abc
    })
      Actions.Signup()
    
    
    
  }
  

  render() {
     // console.warn("MainP"+JSON.stringify(this.props))
        return (
          <View style={styles.container}>
            <View style={styles.headerContainer}>
               <Text style={{fontSize:30}}>Ready to head Out!</Text>
            </View>
            <View style={styles.bodyContainer}>
            <Text>+91</Text><TextInput placeholder='Phone Number' placeholderTextColor="black"  style={styles.inputbox} 
              onChangeText={(phonenumber)=>this.setState({phonenumber})}
            ></TextInput>
            <TouchableOpacity style={styles.btn} onPress={this.signUp}>
              <Text style={styles.TextStyle}>Log in</Text>
            </TouchableOpacity>
            
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={{padding:20}}>
                  <Image source={require('../../images/fb_b_icon.png')} style={styles.ImageIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={{padding:20}} >
                  <Image source={require('../../images/insta_b_icon.png')} style={styles.ImageIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={{padding:20}}>
                  <Image source={require('../../images/twitter_b_icon.png')} style={styles.ImageIconStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={{padding:20}}>
                  <Image source={require('../../images/linkdin_b_icon.jpg')} style={styles.ImageIconStyle} />
                </TouchableOpacity>  
                  
            </View>
          </View>
          );
        }
      }


const mapStateToProps=(state,props)=>{
  return{
    items:state.details.items
  }
}


export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
      },
      
    headerContainer:{
      flex:2,
      justifyContent:'center',
      
    },

    bodyContainer:{
      flex:3,
      justifyContent:"center",
    },
    
    bottomContainer:{
      flex:2,
      flexDirection:'row',
      alignItems:'flex-end'
    },
    inputbox:{
      alignSelf:'stretch',
      borderColor:'black',
      borderWidth:1,
      borderRadius:5,
      margin:5,
      fontSize:25,
      padding:3,
    },
    TextStyle :{
      color: "white",
      marginBottom : 4,
      marginRight :20,
    },
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
    },
    btn:{
      backgroundColor:'black',
      width:300,
      padding:12,
      borderRadius:5,
      alignItems:'center',
      margin:5
    }
});