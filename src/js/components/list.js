import React from 'React';

export default class ComponentDetailsList extends React.Component{
	/*componentWillMount(){
      //定义你的逻辑即可
      console.log("ComponentHeader - commponentWillMonut");
    }
    componentDidMount(){
      console.log("ComponentHeader - commponentWillMonut");
    }*/
    constructor(props) {
    	super(props);
	    this.state = {
	      	error: null,
	      	isLoaded: false,
	      	items: []
	    };
	    
  	}
  	componentDidMount() {
	    fetch("http://172.16.120.129:8080/travel/businessKeepsake/findKeepsakeByBid.action?bid=2511150102")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result.data.list
	          });

	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	}

    

//http://172.16.120.194:8080/businessKeepsake/findKeepsakeByBid.action?bid=2511150102

	render(){
		//console.log( this.state.items)
	
		const { error, isLoaded, items } = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else {
	      return (
	        <ul>
	          {items.map(item => (
	            <li key={item.kid}>
	              {item.bid} {item.imgPath} {item.info} {item.kid}
	            </li>
	          ))}

	        </ul>
	      );
	    }
 	}
}