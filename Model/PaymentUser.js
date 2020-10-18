const User = require('user.js');

// PaymentUser er extended af User 
// Tror det forkert laavet fordi det er skrevet dobbelt op hvilket ikke giver mening i mit hovedet. 
class PaymentUser extends User{
    constructor(id, email, name, age, gender, work, school, profile_text, profile_img, isPaying, creditcard, cvc, expireDate)
    {
        super(id,email,name,age,gender,work,school,profile_text,profile_img,isPaying);
        this.creditcard = creditcard;
        this.cvc = cvc;
        this.expireDate = expireDate;
    }
}

//eksporter user
module.exports = PaymentUser;