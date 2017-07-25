import { addUser, deleteUser, changeUser } from './../requests/request.js';

export function searchUser(e) {
	let name;
	e && (name = e.target.value);

	let users = this.state.users;
	let userList = [];

	userList = users.filter(item => {
		if(!name) return false;

		let lowName = item.name.toLowerCase();
		let lowValue = name.toLowerCase();

		return lowName.indexOf(lowValue) !== -1;
	});

	if(!userList.length) userList = users;
	this.setState({userList});
}

export function setUserData(e) {
	let user = this.state.user;
	let users = this.state.users;

	switch(e.target.id) {
		case 'name':
			user.name = e.target.value;
			break;
		case 'age':
			user.age = e.target.value
			break;
		case 'add':
			addUser(user).then(newList => {
				this.setState({users: newList});
				this.setState({userList: newList});
			});
			break;
		case 'change':
			user.id = this.state.id
			console.log(user);
			changeUser(user).then(newList => {
				this.setState({users: newList});
				this.setState({userList: newList});
				this.setState({btn: "add"});
			});
			break;
	}
	//this.setState({user});
}

//действия с юзером удалить/изменить
export function actionUser(e) {
	let id = e.target.id;
	let value = e.target.value;
	switch(value) {
		case 'X':
			deleteUser(id).then(newList => {
				this.setState({users: newList});
				this.setState({userList: newList});
			});
		break;
		case '...':
			this.setState({btn: "change"});
			this.setState({id: id} )
		break;
	}
	
}