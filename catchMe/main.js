var user = {username: "sam", password: "123abc"};
const form = document.loginForm


loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    var input = form.login.value
    var password = form.password.value 
    login(input, password);
})

function login(input, password) {
    try {
        if (input == user.username && password == user.password) {
            console.log("You are logged in");
        } else if (input == "" || password == "") {
            throw "Input cannot be empty";
        } else if (input != user.username || password != user.password) {
            throw "Check your username and password and try again";
        }
    } catch(err) {
            alert(err)

        } finally {
            form.login.value = ""
            form.password.value = ""
            console.log("Code ran successfully!")
        }
        
    
}