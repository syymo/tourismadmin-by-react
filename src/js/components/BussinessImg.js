import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Icon, Switch, Radio, Form } from 'antd';
//import { Table, Icon } from 'antd';

const FormItem = Form.Item;
const showHeader = true;

			
const columns = [
	{
	  	title: 'Id',
	  	dataIndex: 'id',
	  	key: 'id',
	  	width: 70,
	},{
	  	title: 'ImgPath',
	  	dataIndex: 'imgPath',
	  	key: 'imgPath',
	  	width: 70,
	  	className: 'BussinessImg'
	},{
	  	title: 'CreateTime',
	  	dataIndex: 'createTime',
	  	key: 'createTime',
	  	width: 70,
	},{
	  	title: 'Action',
	  	key: 'action',
	  	width: 360,
	  	render: (text, record) => (
		    <span>
		      	<a href="#">添加</a>
		      	<span className="ant-divider" />
		      	<a href="#">删除</a>
		      	<span className="ant-divider" />
		      	<a href="#" className="ant-dropdown-link">修改</a>
		    </span>
	  	),
}];



const data = [];
export default class BussinessInfo extends React.Component {
	constructor(props){
        super(props); //调用基类的所有初始化方法
        this.state = {
            bordered: true,
			loading: false,
			pagination: true,
			size: 'default',
			expandedRowRender:false,
			showHeader,
			rowSelection: {},
			scroll: undefined,
			filtered:true,
			items: []
        };
	};
	componentDidMount() {
	    fetch("http://172.16.120.129:8080/travel/businessImg/selectImgByBid.action?bid=2511150102")
	      	.then(res => res.json())
	      	.then(
	        	(result) => {

			        for(let i=0;i<result.data.list.length;i++){
			        	data.push({
			        		key: result.data.list[i].imgid,
						    id: i+1,
						    imgPath: <span className="BussinessSpan" dangerouslySetInnerHTML = {{__html:'<img class="" src="http://172.16.120.129:8080'+result.data.list[i].imgPath+'" />'}} />,
						    createTime: result.data.list[i].createTime
			        	})
			        }
			        this.setState({
			            isLoaded: true,
			            items: result.data
			        });
		        },
		        (error) => {
		          this.setState({
		            isLoaded: true,
		            error
		          });
		        }
	      	)

	 }

//<p dangerouslySetInnerHTML = {{__html:'<img src="http://172.16.120.129:8080"'+result.data.list[i].imgPath+>'" >'}} />
	render(){
		const state = this.state;
		const { error, isLoaded, items } = this.state;

	    if (error) {
	      	return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      	return <div>Loading...</div>;
	    } else {
	    	//console.log(document.getElementsByClassName("bussinessInfo")[0])
	      	return (
		        <div className="bussinessInfo">
	        		<Table {...this.state} columns={columns} dataSource={data} />
		        	

	      		</div>
		      );
		    }
	  	}
	
}



