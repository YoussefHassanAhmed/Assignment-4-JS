//  Global varaibles
var signName = document.getElementById('signupName');
var signEmail = document.getElementById('signupEmail');
var signPassword = document.getElementById('signupPassword');
var userArray = [];
var singUpBtn = document.getElementById("singUpBtn");

if (localStorage.getItem("users") != null) {
    userArray = JSON.parse(localStorage.getItem("users"));
} else {
    userArray = [];
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Signup Listener <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
singUpBtn.addEventListener("click", function (e) {
    if (vaild(signName.value) && vaildmail(signEmail.value) && vaildpass(signPassword.value)) {
        var singUp = {
            name: signName.value,
            userEmail: signEmail.value,
            userPassword: signPassword.value
        }
        userArray.push(singUp)
        localStorage.setItem("users", JSON.stringify(userArray));
claer()
    } else if (isOldEmail(signEmail.value)) {
        document.getElementById("pargraph").innerHTML = "Email alrady Exitis"
    } else {
        alert("Your Name or Emali inValied")
    }

})
function claer(){
    signEmail.value=""
    signName.value=""
    signPassword.value=""
}


function isOldEmail(email) {
    for (var i = 0; i < userArray.length; i++) {
        if (email == userArray[i].userEmail) {
            return true;
        }
    }
    return false;

}

function vaild(name) {
    var nameRegex = /^[A-Z]{1}[a-z]{2,15}$/;
    if (nameRegex.test(name)) {
        return true;
    } else {
        return false;
    }
}

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

