import React, { Component } from 'react';

class DropdownList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownIsOpen: this.props.isOpen === true ? true : false,
		}
		this._handleToggleDropdown = this._handleToggleDropdown.bind(this);
	}

	_handleToggleDropdown(){
		this.state.dropdownIsOpen === false ? this.setState({ dropdownIsOpen: true }) : this.setState({ dropdownIsOpen: false })
	}

	componentDidMount(){
		const self = this;

		document.addEventListener('click', function(e) {
		  const dropdownTitle = document.getElementById(self.props.menu.title).contains(e.target);

		  if ( ! dropdownTitle) {
		    self.setState({ dropdownIsOpen: false })
		  }
		});
	}
	
	render() {
		const items = this.props.menu.items.map((item, index) => {
			return (
				<li key={index} className="react-downdown-list__item">
					<a className="react-downdown-list__link" href={item.path}>{item.title}</a>
				</li>
			)
		})

		return (
			<nav id={this.props.menu.title} className="react-downdown-list">
				<div className="react-downdown-list__title" onClick={this._handleToggleDropdown}>
					{this.props.menu.title}
				</div>
				{
					this.state.dropdownIsOpen &&
					<ul className="react-downdown-list__menu">
						{items}
					</ul>
				}
			</nav>
		)
	}
}

export default DropdownList;