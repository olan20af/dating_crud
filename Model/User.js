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
}
//eksporter user
module.exports = User;