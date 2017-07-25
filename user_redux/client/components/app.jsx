import React from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';

import {app} from './../actions/index.js';
import { getUsers } from './../requests/request.js';
import { setUserData, searchUser, actionUser } from './../actions/actions.js';

import { User } from './user.jsx';
import { FormAdd, FormChange } from './form.jsx';

// const mapStateToProps = ({App}) => ({
//     users: app.users,
//     userList: app.userList,
//     user: app.user
// });

const mapStateToProps =	state => (state);

const mapDispatchToProps = dispatch => ({
    setUserData: (e) => dispatch(app.setUserData(e.target)),
    searchUser: (e) => dispatch(app.searchUser(e.target.value)),
    setUsers: (users) => dispatch(app.setUsers(users))
});

class App extends React.Component {
	constructor(props) {
		super(props);

		// this.searchUser = searchUser.bind(this);
		// this.setUserData = setUserData.bind(this);
		// this.actionUser = actionUser.bind(this);

	}

	 componentDidMount() {
		
	 	getUsers().then(users => {
			console.log(users);
			
		});

	}

	render() {
		const {userList} = this.props;
		const btn = this.props.btn;
		
		let Form = "";
		if (btn === "add") {
			  Form = <FormAdd setUserData={this.props.setUserData} />
		} else { 
			Form = <FormChange setUserData={this.props.setUserData} />
		}
	
		return (
			<div>
				<input onChange={this.props.searchUser} placeholder="найти юзера" />
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

//	userList: PropTypes.object,
//	users: PropTypes.array,
//	user: PropTypes.object,
//	btn: PropTypes.string
//} (users => {
	 		this.props.setUsers; 		console.log(users)});