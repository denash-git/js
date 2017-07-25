import {User} from './classes/user.js';
import {Form} from './classes/form.js';
import request from 'superagent';
import {sendAdd, deleteUser, changeUser, infoUser} from './quest.js';

let newForm = new Form();

//обработчик драг энд дроп
$( function() {
    $( "#draggable" ).draggable();
  } );

// обработчик кнопки добавить юзера
const addUser = document.getElementById('addUser')
addUser.addEventListener('click', () => {

	newForm.renderAdd(); //рендерим форму
	newForm.process(function(){	//ждем действий в форме
		let data = newForm.data;
		sendAdd(data);			//добавляем нового
	})
})

// обработчик кнопки удаление
const selectDel = () => {
	let selectDel = document.getElementsByClassName('Delete');
		for(let i = 0; i < selectDel.length; i++)
			selectDel[i].addEventListener('click', (e) => {
				deleteUser(e.target.dataset.userid); //запрос на удаление
			});
}

// обработчик кнопки изменения
const selectChange = () => {
	let selectChange = document.getElementsByClassName('Change');
		for(let i = 0; i < selectChange.length; i++)
			selectChange[i].addEventListener('click', (e) => {
				formChange(e.target.dataset.userid)		//передаем в обработчик формы id
			});
}

//форма изменения юзера
const formChange = (userId) => {
	infoUser(userId, function(userInfo) {	//запрос инфы о юзере

		newForm.renderChange(userInfo);		//рендерим форму с данными юзера
		newForm.process(function(){			//ожидаем действий в форме
			let data = newForm.data;		//подг/изм данные
			data.id = userInfo.id;
			changeUser(data);				//отправдяем на изменение
		})
	})	
}

//вывод списка юзеров на экран
const render = () => {
	document.getElementById('list').innerHTML = "";
	
	request
		.get('/list')			//получаем весь массив
		.end((err, res) => {
			const users = res.body;
			users.forEach(item => {
				new User(item.name, item.age).renderUser(item.id);
			});

		selectDel();	//подкл кн удаления
		selectChange();	//подкл кн изменения
	})
}

// первичный вывод списка юзеров
render(); 