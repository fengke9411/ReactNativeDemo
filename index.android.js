/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  Alert,
  ListView,
  Navigator,
  BackAndroid,
} from 'react-native';
import MyScene from'./component/MyScene.js';
//import Butt from'./component/Butt.js';
//import BlinkText from'./component/BlinkText.js';
//import ListViewBasic from'./component/ListViewBasic.js';

export default class test2 extends Component {

  //var url = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';

    constructor(props) {
      super(props);
    
      this.state = {
        text:'hello',
        accName:'',
        accPwd:'',
        teams:null,
        dataSource:new ListView.DataSource({
          rowHasChanged:(row1,row2)=>row1!==row2,
        }),
        loaded:false,
      };

    }


    componentDidMount(){
     //   this.fetchData();
     let navigator = this._navigator;
       BackAndroid.addEventListener('hardwareBackPress',()=>{
       // Alert.alert('title','11111'+navigator.getCurrentRoutes());

        if (navigator&&navigator.getCurrentRoutes().length>1) {
            navigator.pop();
          return true;
        }
        return false;
      });
    }

    componentWillUnmount(){
      BackAndroid.removeEventListener('hardwareBackPress');
    }


    fetchData(){

        let url = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';

        fetch(url)
        .then((response)=>response.json())
        .then((responseData)=>{
          this.setState({
           // teams:responseData.result.data
            dataSource:this.state.dataSource.cloneWithRows(responseData.result.data),
            loaded:true,
          });
        })
        .done();
    }




    renderScene1(route,navigator){
      this._navigator = navigator;
      let Component = route.component;
      return <Component {...route.params} navigator={navigator}/>;
    }


    renderNavigat(){
      return (
          <Navigator
              initialRoute={{component:MyScene,title:'first场景'}}
              configureScene={()=>Navigator.SceneConfigs.FloatFromRight}
              renderScene={(route,navigator)=>this.renderScene1(route,navigator)}
          />
        );

    }



  render() {
    return  this.renderNavigat();

  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  titleBar:{
     // flex:1,
     // height:40,
      flexDirection:'row',
      backgroundColor:'#333333',
      justifyContent:'space-around',
      alignItems: 'stretch',
  },

  icAvator:{
      height:60,
      width:60,
      margin:20,
      marginTop:60,
      justifyContent:'center',
  },

  icClose:{
      height:25,
      width:25,
      margin:10,
  },
   titleText:{
      flex:1,
      fontSize:25,
      height:40,
      alignItems: 'center',
       justifyContent:'center',
       textAlign:'center',
       color:'#ffffff'
  },
  inputLeftIcon:{
    //flex:1,
     height:20,
      width:20,
     // margin:8,
  },
  textInput:{
      flex:3,
      height:40,
      borderColor:'#00000000',
      backgroundColor:'#ffffff',
      borderWidth:1,
  },

  inputLine:{
     flexDirection:'row',
    borderBottomColor:'#cccccc',
    borderBottomWidth :0.2,
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft:6,
  },
  loginButton:{
    backgroundColor:'#55a9f6',
   // overlayColor:'#5555f6',
    height:50,
    margin:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  }
});

AppRegistry.registerComponent('test2', () => test2);
