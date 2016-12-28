import React,{Component} from 'react';
import {ListView,Text} from 'react-native';

export default class ListViewBasic extends Component{


	let listData = require('./asset/test.json');

	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
	  this.state = {
	  	dataSource :ds.cloneWithRows(listData)
	  };
	}


	render(){

		return (

			<ListView 
				dataSource={this.state.dataSource} 
				renderRow={(rowData)=><Text> {rowData.title}:{rowData.img}</Text>} 
				/>

			);
	}


}