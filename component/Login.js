import React, {
  Component
} from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.icClose} source={require('../image/ic_close.png')}/>

        <View style={{alignItems:'center'}}>
        <Image style={styles.icAvator} source={require('../image/ic_avator.png')}/>
        </View>
        
        <View style={styles.inputLine}>
        <Image style={styles.inputLeftIcon} source={require('../image/ic_accname.png')}/>
        <TextInput style={styles.textInput} underlineColorAndroid='transparent' onEndEditing={(text)=>this.setState({accName:text})}/>
        </View>

        <View style={styles.inputLine}>
        <Image style={styles.inputLeftIcon} source={require('../image/ic_pwd.png')}/>
        <TextInput style={styles.textInput} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({text:text})} onEndEditing={(text)=>this.setState({accName:text})}/>
        </View>
        <TouchableHighlight style={styles.loginButton} underlayColor='#cccccc' onPress={()=>{
        	this.props.getUser('login back');
        	this.props.navigator.pop();
        }}>
            <Text style={{fontSize:20,color:'white'}}>登录{this.state.text}</Text>
        </TouchableHighlight>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    alignItems: 'stretch',
    //  backgroundColor: '#ffffff',
  },
  titleBar: {
    // flex:1,
    // height:40,
    flexDirection: 'row',
    backgroundColor: '#333333',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },

  icAvator: {
    height: 60,
    width: 60,
    margin: 20,
    marginTop: 60,
    justifyContent: 'center',
  },

  icClose: {
    height: 25,
    width: 25,
    margin: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff'
  },
  inputLeftIcon: {
    //flex:1,
    height: 20,
    width: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  textInput: {
    flex: 3,
    height: 50,
    borderColor: '#00000000',
    backgroundColor: '#ffffff',
    borderWidth: 1,
  },

  inputLine: {
    flexDirection: 'row',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
  },
  loginButton: {
    backgroundColor: '#55a9f6',
    // overlayColor:'#5555f6',
    height: 50,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});