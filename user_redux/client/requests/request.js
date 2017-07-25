import request from 'superagent';

//запрос на добавление юзера
export const addUser = ({name, age}) => {
	return new Promise((resolve, reject) => {
		request
			.post('/add_user')
			.send({name, age})
			.end((err, res) => {
				if(err) reject(err);

				resolve(res.body);
			})
	})
}

//запрос получения списка юзеров
export const getUsers = () => {
	return new Promise((resolve, reject) => {
		request
			.get('/list')
			.end((err, res) => {
				if(err) reject(err);

				resolve(res.body);
			})
	})
}

// запрос удаление юзера
export const deleteUser = (id) => {
	return new Promise((resolve, reject) => {
		request
			.delete(`/delete/${id}`)
			.end((err, res) => {
				if(err) reject(err);
				resolve(res.body);
			})
	})
}

// запрос изменение юзера
export const changeUser = (data) => {
	return new Promise((resolve, reject) => {
		request
			.patch('/patch')
			.send(data)
			.end((err, res) => {
				if(err) reject(err);
				
				resolve(res.body);
			})
	})
}
