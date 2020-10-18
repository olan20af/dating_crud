//henter User model
const User = require('/Model/user');

//hardcoder ny user ud fra model-klasse
let User1 = new User(1, "Peter", 27, "Male", "Nordea", "cbs", "Hej jeg hedder peter", "peter.jpg", 1);
let User2 = new User(2, "Simone", 27, "Female", "Bilka", "Frederiksberg-HF", "Hej jeg hedder Simone", "simone.jpg", 0);

//controller
function userController(req, res) {
    res.end(JSON.stringify(User2))
}


//eksporter controlleren
module.exports = userController;



