import React, { Component } from 'react';
import DropdownList from './DropdownList';
//import './App.css';

class MenuOne extends Component {
	render() {
		const menu = {
			title: "My Account",
			items: [ 
				{
					"title":"Billing", 
					"path":"/billing" 
				},
				{
					"title":"Logout", 
					"path":"/logout" 
				},
			]
		}

		return <DropdownList menu={menu} />
	}
}

class MenuTwo extends Component {
	render() {
		const menu = {
			title: "Links",
			items: [ 
				{
					"title":"Google", 
					"path":"http://google.com" 
				},
				{
					"title":"BBC", 
					"path":"http://news.bbc.co.uk" 
				},
			]
		}

		return <DropdownList menu={menu} />
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<MenuOne />
				<MenuTwo />
			</div>
		)
	}
}

export default App;
