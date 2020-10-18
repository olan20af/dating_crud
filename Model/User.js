//definerer model-klasse for User
// opretter classen User
class User {
    constructor(id, email, name, age, gender, work, school, profile_text, profile_img, isPaying) {
        this.id = id;
        this.email = email;
        this.name= name;
        this.age = age;
        this.gender = gender;
        this.work = work;
        this.school = school;
        this.profile_text = profile_text;
        this.profile_img = profile_img;
        this.isPaying = isPaying;
    }



    // tjekker om det er en betalende bruger eller ej og derefter opretter en PaymentUser hvis isPaying = 1 ellers opretter den en FreeUser hvis isPaying = 0  
    userType(){
        var i;
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
                }
            }
        }
}
//eksporter user
module.exports = User;