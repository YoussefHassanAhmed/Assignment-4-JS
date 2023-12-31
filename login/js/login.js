var LoginEmail = document.getElementById("LoginEmail")
var LoginPassword = document.getElementById("LoginPassword")
var LoginBtn = document.getElementById("LoginBtn")
var logOutBtn = document.getElementById("logOutBtn")

var userArray = [];
var x = "";
userArray = JSON.parse(localStorage.getItem("users"))

LoginBtn.addEventListener("click", function (e) {

    if (vaildmail(LoginEmail.value) && vaildpass(LoginPassword.value)) {
        for (var i = 0; i < userArray.length; i++) {
            if (LoginEmail.value == userArray[i].userEmail && LoginPassword.value == userArray[i].userPassword) {
                var x = userArray[i].name
                localStorage.setItem("userName", x)
                window.location.href ="../../Assignment-4-JS/home.html"
                break;
            }
        }

    }
})


function vaildmail(email) {
    var emailRegex = /^[\w-\.]+@([\w-]{2,}\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function vaildpass(Password) {
    var passRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (passRegex.test(Password)) {
        return true;
    } else {
        return false;
    }
}




