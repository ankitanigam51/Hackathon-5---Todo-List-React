import React, { Component } from "react";
import "./../styles/App.css";

export default class App extends Component() 
{
	constructor(props){
		super(props);

		this.state = {
			userInput: "",
			list: []
		}
	}
   
   changeUserInput(input) {
    this.setState({
		userInput: input
	});
   }

   addToList(input) {
	   let listArray = this.state.list;
	   listArray.push(input);
	   this.setState({
		   list: listArray,
		   userInput: ""
	   })
   }

   render() {
	return (
	 <div className="to-DO-List">
	 <input onChange=
	 {(e) => this.changeUserInput(e.target.value)} 
	 value={this.state.userInput} type="text" />
	 <button onClick={ () => this.addToList(this.state.userInput)}>Click Here</button>
	 <ul>
		 {this.state.list.map( (val) => <li>{val}</li>)}
	 </ul>
	
	 </div>
	);
 }
}


