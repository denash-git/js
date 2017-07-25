import React from 'react';

export const FormAdd = ({setUserData}) => {
	
		return (
			<div>
				<p><b>Ввести нового юзера :</b></p>
				<input type="text" id="name" onChange={setUserData} placeholder="Имя" />
				<input type="number" id="age" onChange={setUserData} placeholder="Возраст" />
				<input type="submit" id="add" onClick={setUserData} value="ОК" />
			</div>
		)
}

export const FormChange = ({setUserData}) => {
	
		return (
			<div>
				<p><b>Внесите изменения :</b></p>
				<input type="text" id="name" onChange={setUserData} placeholder="*****" />
				<input type="number" id="age" onChange={setUserData} placeholder="**" />
				<input type="submit" id="change" onClick={setUserData} value="ОК" />
			</div>
		)
}
