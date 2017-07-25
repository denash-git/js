const express = require('express'),
	  path = require('path'),
	  fs = require('fs'),
	  router = express.Router(),
	  fd = path.join(__dirname, '../userData.json');
let userList = readData();

function readData() {
	let file = fs.readFileSync(fd, 'utf8');
	let data = JSON.parse(file);
	return data;
};

function writeData(userList) {
	let data = JSON.stringify(userList);
	fs.writeFileSync(fd, data);
};
 
// получение всех юзеров
router.get('/list', (req, res) => {
	res.send(userList);
});

//изменение юзера
router.patch('/patch', (req, res) => {
	let changeUser = req.body;
	let findUser = userList.findIndex(userList => userList.id == changeUser.id);
	userList[findUser] = changeUser
	writeData(userList);
	res.send('success');
})

//инфо о юзере
router.put('/put/:id', (req, res) => {
	let id = req.params.id;
	let findUser = userList.findIndex(userList => userList.id == id);
	res.send(userList[findUser]);
})

//добавление юзера
router.post('/add_user', (req, res) => {
	let newUser = req.body;
	newUser.id = new Date();
	userList.push(newUser);
	writeData(userList);
	res.send('success');
})

//удаление юзера
router.delete('/delete/:id', (req, res) => {
	let id = req.params.id;
	let findUser = userList.findIndex(userList => userList.id == id);
	userList.splice(findUser, 1);
	writeData(userList)
	res.send('success');
})


module.exports = router;