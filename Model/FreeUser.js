const User = require('../model/User.js');
class FreeUser extends User{
    constructor(id, email, name, age, gender, work, school, profile_text, profile_img, isPaying, creditcard, cvc, expireDate)
    {
        super(id,email,name,age,gender,work,school,profile_text,profile_img,isPaying);
    }
}

module.exports = FreeUser;