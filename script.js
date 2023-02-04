//sign up page
// let firstName = document.getElementById("firstname");
// let lastName = document.getElementById("lastname");
// let useNname = document.getElementById("username");
// let email = document.getElementById("email");
// let passWord = document.getElementById("password");
// let submitBtn = document.getElementById("submit");
// let userArr = [];

// submitBtn.addEventListener("click", function() {
//     let userInfo = {
//         username: username.value,
//         email: email.value,
//         password: password.value
//     }
//     console.log(userInfo);
//     // userArr.push(userInfo);
//     // localStorage.setItem("user", JSON.stringify(userInfo));
//     window.location.href = "signin.html";
// });

//login page
let username = document.getElementById("login-username");
let password = document.getElementById("login-password");
let click = document.getElementById("login");


click.addEventListener("click", () => {
    let data = {
        username: username.value,
        password: password.value
    }
    console.log(data);
    //local storage
    // localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "signup";
});

// let myUser = document.getElementById("user");
// let gotten = JSON.parse(localStorage.getItem("user"));
// console.log(gotten);

//blog1 page
