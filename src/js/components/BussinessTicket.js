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
	  	//render: text => <a href="#">{text}</a>,
	}, {
	  	title: 'Price',
	  	dataIndex: 'price',
	  	key: 'price',
	  	width: 70,
	}, {
	  	title: 'Tname',
	  	dataIndex: 'tname',
	  	key: 'tname',
	 	width: 120,
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
	    fetch("http://172.16.120.129:8080/travel/ticket/findTicketByBid.action?bid=2511150102")
	      	.then(res => res.json())
	      	.then(
	        	(result) => {
			        for(let i=0;i<result.data.length;i++){
			        	data.push({
			        		key: result.data[i].tid,
						    id: i+1,
						    price: result.data[i].price,
						    tname: result.data[i].tname,
						    info: result.data[i].info,
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
	        		<Table {...this.state} columns={columns} dataSource={data} />
	      		</div>
		      );
		    }
	  	}
		/*return (
			<div>
        		<Table {...this.state} columns={columns} dataSource={data} />
      		</div>
		);
		<ul>
		          {items.map(item => (
		            <li key={item.tid}>
		              {item.bid} {item.price}
		            </li>
		          ))}
		        </ul>

		*/
	
}



