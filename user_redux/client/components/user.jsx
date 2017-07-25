import React from 'react';

export const User = ({actionUser, name, age, id}) =>
	<li>
		{name}, возраст {age}  
		<input id={id} type="submit" value="X" onClick={actionUser} />
		<input id={id} type="submit" value="..." onClick={actionUser} />
	</li>