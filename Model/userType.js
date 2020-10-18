let users = require('../Controller/Users.js');
/*
const payingUsers = require('../Controller/payingUsers.js');
const freeUsers = require('../Controller/freeUsers.js');
*/
const PaymentUser = require('../model/PaymentUser.js');
const FreeUser = require('../model/FreeUser.js');



    // tjekker om det er en betalende bruger eller ej og derefter opretter en PaymentUser hvis isPaying = 1 ellers opretter den en FreeUser hvis isPaying = 0  
function userType(){

    // Opretter et array med betalende brugere
        var i;
        let freeUsers = [];
        let payingUsers = [];

        for (i = 0; i < users.length; i++) {
            let user = users[i];
            if(user.isPaying == 1) {
                    let payingUser = new PaymentUser (
                        user.id, 
                        user.email,
                        user.name,
                        user.age,
                        user.gender,
                        user.work,
                        user.school,
                        user.profile_text,
                        user.profile_img,
                        user.isPaying,
                        // opretter et random kredit kort
                        Math.floor(1000000000000000 + Math.random() * 9000000000000000), 
                        Math.floor(100 + Math.random() * 900), 
                        Math.floor(1 + Math.random() * 10) + "/" + Math.floor(20 + Math.random() * 20)
                    );
                    // putter betalende brugere ind i et array
                    payingUsers.push(payingUser);
                }
                else
                {
                    let freeUser = new FreeUser (
                        user.id, 
                        user.email,
                        user.name,
                        user.age,
                        user.gender,
                        user.work,
                        user.school,
                        user.profile_text,
                        user.profile_img,
                        user.isPaying);
                    
                    // putter gratis brugere ind i et array
                    
                    freeUsers.push(freeUser);
                    console.log(freeUsers);
                }
            }
        }

module.exports = userType();