


const domin = 'http://v.juhe.cn/weather/index/';
export default class NetWork{


	getData(action){

		return (
			fetch(domin+action)
			.then((responseData)=>responseData.json())
			.then((responseJson)=>{})
			.done();

			);
	}
}