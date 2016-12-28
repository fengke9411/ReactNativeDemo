import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';
export default class BlinkText extends Component{

	constructor(props){
		super(props);
		this.state = {showText:true};
		setInterval(()=>{
				this.setState({showText:!this.state.showText});
			},1000);
	};

	render(){
		let display = this.state.showText?this.props.text:' ';
		return (<Text>{display}</Text>);
	}

}

//AppRegistry.registerComponent('BlinkText',()=>BlinkText);