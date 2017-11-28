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
	  	width: 150,
	  	//render: text => <a href="#">{text}</a>,
	}, {
	  	title: 'ImgPath',
	  	dataIndex: 'imgPath',
	  	key: 'imgPath',
	  	width: 70,
	},{
	  	title: 'Info',
	  	dataIndex: 'info',
	  	key: 'info',
	  	width: 120,
	}, {
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
	    fetch("http://172.16.120.129:8080/travel/businessKeepsake/findKeepsakeByBid.action?bid=2511150102")
	      	.then(res => res.json())
	      	.then(
	        	(result) => {
	        		// console.log(result.data.list)
			        for(let i=0;i<result.data.list.length;i++){
			        	// console.log(result.data.list[i])
			        	data.push({
			        		key: result.data.list[i].kid,
						    id: i+1,
						    imgPath: 'http://172.16.120.129:8080'+result.data.list[i].imgPath,
						    info: result.data.list[i].info,
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
	componentWillUnmount() {
	 	/*data = [];*/
	 	//等组件销毁的时候 清空数据
	 	data.splice(0,data.length);
	}

	render(){
		const state = this.state;
		const { error, isLoaded, items } = this.state;

	    if (error) {
	      	return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      	return <div>Loading...</div>;
	    } else {
	      	return (
		        <div>
	        		<Table id="BussinessInfo" {...this.state} columns={columns} dataSource={data} />
	      		</div>
		      );
		    }
	  	}
		
	
}



