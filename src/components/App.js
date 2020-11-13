import React from "react";
import "./../styles/App.css";

function App() 
{
	return (
	<div id="main">
		<input type="text" id="task"></input>
		<button type="button" id="btn" onclick="add()">Add Items</button>
	<ul>
		<li className="list">Item 1</li>
		<li className="list">Item 2</li>
		<li className="list">Item 3</li>
	</ul>
	<button type="button" id="clear-list" onclick="removeAll()">Clear Items</button>
	</div>
	);
}


export default App;
