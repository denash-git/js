import React from 'react';
//import PropTypes from 'prop-types';

import { getUsers } from './../requests/request.js';
import { setUserData, searchUser, actionUser } from './../actions/actions.js';

import { User } from './user.jsx';
import { FormAdd, FormChange } from './form.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userList: [],			//фильтрованный список
			users: [],			//список с сервера
			user: {},
			btn: "add",
			id: ""
		}

		this.searchUser = searchUser.bind(this);
		this.setUserData = setUserData.bind(this);
		this.actionUser = actionUser.bind(this);

	}

	componentDidMount() {
		getUsers().then(users => {
			this.setState({users});
			this.searchUser();
		});
	}

	render() {
		const {userList} = this.state;
		const btn = this.state.btn;
		
		let Form = "";
		if (btn == "add") {
			  Form = <FormAdd setUserData={(e) => this.setUserData(e)} />
		} else { 
			Form = <FormChange setUserData={(e) => this.setUserData(e)} />
		}
	
		return (
			<div>
				<input onChange={(e) => this.searchUser(e)} placeholder="найти юзера" />
				<p />
				{
					userList.map(item => {

						return <User actionUser={(e) => this.actionUser(e)}
							key={item.id}
							name={item.name}
							id={item.id}
							age={item.age}
						/>
					})
					
				}
				{Form}
				
			</div>
		);	
	}
}

//	userList: PropTypes.object,
//	users: PropTypes.array,
//	user: PropTypes.object,
//	btn: PropTypes.string
//}