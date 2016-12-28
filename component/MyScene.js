import React, {
	Component,
	PropTypes
} from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	NativeModules,
	StyleSheet,
	ViewPagerAndroid,
	Image
} from 'react-native';

import Login from './Login'
export default class MyScene extends Component {

	constructor(props) {
		super(props);
		this.state = {
			code: '',
			msg: '',
			user: null,
			curPage: 0,
			delta: 0,
			progress: 0,
		};
	}

	static propTypes = {
		// title:PropTypes.string.isRequired,
		// onForward:PropTypes.func.isRequired,
		// onBack:PropTypes.func.isRequired,
		navigator: PropTypes.object.isRequired,
	}



	startActivityFromJsforResult() {
		NativeModules.IntentModule
			.startActivityFromJsforResult('com.test2.SimpleActivity')
			.then((map) => {
				this.setState({
					code: map['code'],
					msg: map['msg']
				});
			}, (code, msg) => {
				this.setState({
					code: 'code',
					msg: 'msg'
				});
			}).catch((error) => {
				this.setState({
					code: 'error',
					msg: error
				})
			});
	}



	onPageSelected(event) {
		this.setState({
			curPage: event.nativeEvent.position
		});


		debugger; //设置一个断点

		console.log('event' + event.nativeEvent.toString());
		console.log('event.........');
	}

	onPageScroll(event) {
		this.setState({
			progress: event.nativeEvent.offset
		});
	}


	render() {


		return (


			<View style={{alignItems:'center',justifyContent:'center'}}>
				<Text style={styles.text}>标题</Text>

				<Text style={styles.text}>下一个场景</Text>
				<Text style={styles.text}>返回上一个场景</Text>
				<Text style={styles.text} onPress={()=>NativeModules.IntentModule.startActivityFromJS('com.test2.SimpleActivity','hello')}>跳转原生页面</Text>
				<Text style={styles.text} onPress={()=>this.startActivityFromJsforResult()}>开启活动，并等待活动结果</Text>
				<Text style={styles.text}>结果{this.state.msg}</Text>

				<Text style={styles.text} onPress={()=>NativeModules.IntentModule.showLoading()}>显示dialog</Text>
				<Text style={styles.text} onPress={()=>this.props.navigator.push({component:Login,title:'登录场景',params:{id:this.state.id,getUser:(user)=>this.setState({user:user})}})}> 跳转js页面</Text>
				<Text style={styles.text} onPress={()=>this.viewpager.setPage(1)}>{this.state.user}切换viewpager</Text>
				<ViewPagerAndroid 
					style={{flex:1,height:200,width:200,backgroundColor: '#333333'}}
					initialPage={0}
					onPageScroll={(event)=>this.onPageScroll(event)}
					onPageSelected={(event)=>this.onPageSelected(event)}
					ref={(viewpager)=>{this.viewpager = viewpager;}}
				>

				<View key={1} style={{alignItems:'center',justifyContent:'center'}}>
					<Text >  第一頁 </Text>
					<Login/>
				</View>

				<View key={2} style={{alignItems:'center',justifyContent:'center'}}>
					<Text>  第二頁 </Text>
					<Login/>
				</View>

				<View key={3} style={{alignItems:'center',justifyContent:'center'}}>
					<Text>  第三頁 </Text>
					<Login/>
				</View>

				</ViewPagerAndroid>

				<Text style={styles.text}> {this.state.curPage}</Text>
				<Text style={styles.text}> {this.state.progress}</Text>
			</View>

		);
	}

}


const styles = StyleSheet.create({
	text: {
		height: 30,
		backgroundColor: '#999999'
	},

});