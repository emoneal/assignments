var user = {username: "sam", password: "123abc"};
const form = document.loginForm
let input = ""
let password = ""

loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    input = form.login.value
    password = form.password.value 
    login(input, password);
})

function login(input, password) {
    try {
        if (input == user.username && password == user.password) {
            console.log("You are logged in");
        } else if (input || password == "") {
            throw "Input cannot be empty";
        } else if (input != user.username || password != user.password) {
            throw "Check your username and password and try again";
        }    
    } catch(err) {
            console.log(err)

        } finally {
            input = ""
            password = ""
        }
        
    
}