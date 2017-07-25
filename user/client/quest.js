import request from 'superagent';

// запрос добавить юзера
export const sendAdd = (data) => {
	request
		.post('/add_user')
		.send(data)
		.end((err, res) => {
			if(err) return console.log(err);
			if(res.text == 'success') render()
		})
}

// запрос удаление юзера
export const deleteUser = (id) => {
	request
		.delete(`/delete/${id}`)
		.end((err, res) => {
			if(err) return console.log(err);
			if(res.text == 'success') render();
		})
}

// запрос изменение юзера
export const changeUser = (data) => {
	request
		.patch('/patch')
		.send(data)
		.end((err, res) => {
			if(err) return console.log(err);
			console.log(res)
			if(res.text == 'success') render();
		})
}

//запрос инфо о юзере
export const infoUser = (id, callback) => {
	request
		.put(`/put/${id}`)
		.end((err, res) => {
			if(err) return console.log(err);
			callback(res.body)
		})
}