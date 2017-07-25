export function User(_name, _age) {
	this.name = _name;
	this.age = _age;

	//рендер списка юзеров на экран
	this.renderUser = function(id) {
		document.getElementById('list').innerHTML += (`
			${this.name}, возраст ${this.age} 
			<input type="submit" value="X" class="Delete" data-userId=${id}>
			<input type="submit" value="..." class="Change" data-userId=${id}>
			</br>
		`)
	}
}