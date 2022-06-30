const userService = require("../services/userServices");

//get all users from db with help of services
exports.getUsers = async (req, res) => {                    //with async and await
    let list = [];
    list = await userService.getUsersFromDB();            //await Imp *** //from services
    const loginSubstring = '', limit = 10;
    list.filter(user => user.login.includes(loginSubstring.toString()) && !user.isDeleted) //if user deleted dont display
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, Number(limit));
    res.send(list);
}

//get user by id from db with help of services
exports.getUsersById = async (req, res) => {
    const id = req.params.id;
    let userToFind;
    try {                                             //to handle any errors
        userToFind = await userService.getUserById(id);
        if (!userToFind) {
            res.status(404).send('User not found');
        }
        else {
            res.send(userToFind);
        }
    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
}

//save user in db using services 
exports.saveUser = async (req, res) => {
    const { id, login, age, password } = req.body;
    console.log(id);
    const isdeleted = false;
    try {
        let ret = await userService.saveUserInDB(id, login, age, password, isdeleted);
        if (ret == null) {
            throw Error("Already data is existing with same id");
        }
        res.send("Data inserted successfully ! !");
    }
    catch (err) {
        res.send("Already data is existing with same id");
        throw err;
    }
}

//update user by id in db with help of services
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body;            //Imp - destructuring
    const userToUpdate = await userService.getUserById(id);
    if (!userToUpdate) {
        res.send('User not found');
    }
    try {
        await userService.updateUserInDB(id, login, password, age);
        res.send("Updated successfully ! !");
    } catch (err) {
        res.send(err.message);
        throw err;
    }
}

//dalete user by id from db using services
exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const userToDelete = await userService.getUserById(id);
    if (!userToDelete || userToDelete.isDeleted) {
        res.send('User not found');
    }
    else {
        try {
            await userService.deleteUserFromDB(id)
            res.send("Succesfully deleted ! !");
        }
        catch (err) {
            res.send(err.message);
        }
    }
}