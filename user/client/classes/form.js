export function Form() {

	this.data = {};

	//рендер формы добавления нового юзера
	this.renderAdd = () => {
		document.getElementById('draggable').innerHTML = (`
		введите данные ...
		<input type="text" id="name" placeholder="Имя">
		<input type="number" id="age" placeholder="Возраст">
		<input type="submit" id="add" value="ОК">
		`);
	}

	//рендер формы изменения юзера
	this.renderChange = (userInfo) => {
		document.getElementById('draggable').innerHTML = (`
		измените  данные ...
		<input type="text" id="name" value=${userInfo.name}>
		<input type="number" id="age" value=${userInfo.age}>
		<input type="submit" id="add" value="ОК">
		`);
	}

	//обработчик ввода формы, результат data
	this.process = (callback) => {
		const age = document.getElementById('age');
		const name = document.getElementById('name');
		const addButton = document.getElementById('add');
		addButton.addEventListener('click', () => {
			if (age.value != "" && name.value != "" ) {
					this.data = {
						id: null,
						age: age.value,
						name: name.value
					}
				callback();
			} else alert ("Введите пожалуйста значения !");
		});
	}
}