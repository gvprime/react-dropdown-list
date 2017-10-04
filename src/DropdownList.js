import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DropdownList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownIsOpen: props.isOpen,
		}
		this._handleToggleDropdown = this._handleToggleDropdown.bind(this);
	}

	_handleToggleDropdown(){
		this.setState(state => ({ dropdownIsOpen: !state.dropdownIsOpen }));
	}

	componentDidMount() {
		this.eventListener = (event) => {
		  const dropdownTitle = this.menu.contains(event.target);

		  if (!dropdownTitle) {
		    this.setState({ dropdownIsOpen: false });
		  }
		};
		
		document.addEventListener('click', this.eventListener);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.eventListener);
	}

	renderItem(item) {
		const { path, title } = item;
		return (
			<li key={title} className="react-downdown-list__item">
				<a className="react-downdown-list__link" href={path}>{title}</a>
			</li>
		);
	}
	
	render() {
		const { menu } = this.props;
		const { items } = menu;

		return (
			<nav ref={element => this.menu = element} className="react-downdown-list">
				<div className="react-downdown-list__title" onClick={this._handleToggleDropdown}>
					{menu.title}
				</div>
				{
					this.state.dropdownIsOpen &&
					<ul className="react-downdown-list__menu">
						{items.map(this.renderItem)}
					</ul>
				}
			</nav>
		)
	}
}

DropdownList.defaultProps = {
	isOpen: false,
};

DropdownList.propTypes = {
	isOpen: PropTypes.bool,
	menu: PropTypes.object.isRequired,
};

export default DropdownList;
