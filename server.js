const Joi = require ('joi');
const express = require('express');
var bodyParser = require('body-parser');
const { string, valid } = require('joi');
const app = express();
app.use(express.json());

const User = require('./model/user.js');
const PaymentUser = require('./model/PaymentUser.js');


// Opretter et array med betalende brugere
const payingUsers = [];
const freeUsers = [];

class FreeUser extends User{
    constructor(id, email, name, age, gender, work, school, profile_text, profile_img, isPaying, creditcard, cvc, expireDate)
    {
        super(id,email,name,age,gender,work,school,profile_text,profile_img,isPaying);
    }
}

// Hardcoder forskellige users
let User1 = new User(1, "peter@cbs.dk", "Peter", 27, "Male", "Nordea", "cbs", "Hej jeg hedder peter", "peter.jpg", 1);
let User2 = new User(2, "simone@bilka.dk", "Simone", 27, "Female", "Bilka", "Frederiksberg-HF", "Hej jeg hedder Simone", "simone.jpg", 0);
let User3 = new User(3, "Alfons@bi.dk","Alfons", 27, "Male", "Bog&Ide", "KU", "Hej jeg hedder Alfons Åberg", "alfons.jpg", 1);
let User4 = new User(4, "Matilde@arla.dk","Matilde", 28, "Female", "Arla", "Landbrugsskolen", "Hej jeg hedder Matilde", "matilde.jpg", 0);

// ligger users ind i et array 
const users = [
    User1,
    User2,
    User3,
    User4,
    
];

// Valdering med Joi til når man skal update og insert
function validateUser(user) {
    const schema = {
        email: Joi.string().email().required(),  
        name: Joi.string().required(),
        age: Joi.number().required(),
        gender: Joi.string().required(),
        work: Joi.string().required(),
        school: Joi.string().required(),
        profile_text: Joi.string().required(),
        profile_img: Joi.string().required(),
        isPaying: Joi.required()
                     
     };

    return Joi.validate(user, schema);

}

// Forsiden af dating appen med teksten "Dating App"
app.get('/', (req, res) => {
    res.send("Dating App");
});

// henter alle brugere fra users array
app.get('/users', (req, res) => {
    res.send(users);
});

// tilføj en bruger
let id = users.length+1;
app.post('/users', (req, res) =>{

    // valdieret om alt er indtastet 
    const result = validateUser(req.body); // result.error
    if(result.error) {
        res.status(400).send(result.error.details);
        console.log(result.error.details);
        return;
    }
    // Indsætter data fra brugeren i et objekt.
    var user_temp = {
        id: users.length + 1,
        email: req.body.email,
        name: req.body.name, 
        age: req.body.age,
        gender: req.body.gender,
        work: req.body.work,
        school: req.body.school,
        profile_text: req.body.profile_text,
        profile_img: req.body.profile_img,
        isPaying: req.body.isPaying
        
    };
    // opertter en nyt object af classen User fra input data
    let user = new User(
        user_temp.id, 
        user_temp.email, 
        user_temp.name, 
        user_temp.age, 
        user_temp.gender,
        user_temp.work,
        user_temp.school,
        user_temp.profile_text,
        user_temp.profile_img,
        user_temp.isPaying);

    // sender det nye objekt til arrayet    
    users.push(user);

    // sender user til serveren
    res.send(user);
    user.userType();

    console.log(payingUsers);
    console.log(freeUsers);
    
});


// update bruger
app.put('/users/:id', (req, res) => {

    // Find brugeren 
    const user = users.find(c => c.id === parseInt(req.params.id));

    // hvis brugeren ikke findes returner 404
    if (!user) {
        res.status(404).send('Brugeren med det givne id kan ikke findes')
        return;
    }

    //Validering af bruger
    // Hvis bruger ikke findes 400 - bad request
    const result = validateUser(req.body); // result.error
    if (result.eror) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //Update Bruger
    user.email = req.body.email;
    user.name = req.body.name;
    user.age = req.body.age;
    user.gender = req.body.gender;
    user.work = req.body.work;
    user.school = req.body.school;
    user.profile_text = req.body.profile_text;
    user.profile_img = req.body.profile_img;
    user.isPaying = req.body.isPaying;
    // Returner den opdataeret bruger
    res.send(user);
});

app.delete('/users/:id', (req, res) => {
        // Find brugeren 
        const user = users.find(c => c.id === parseInt(req.params.id));

        // hvis brugeren ikke findes returner 404
        if (!user) {
            res.status(404).send('Brugeren med det givne id kan ikke findes')
            return
        }

        //Slet
        const index = users.indexOf(user);
        users.splice(index, 1);
        
        // Returner den samme bruger
        res.send(user);

});

// Henter en bruger med et given id i urlen eks: 'users/1'
app.get('/users/:id', (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) {
      res.status(404).send('Brugeren med det givne id kan ikke findes')
      return;
    }
  res.send(user);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}`));