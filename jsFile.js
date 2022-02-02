const showhidePass = document.querySelector(".showHide");
const pswrd = document.querySelector("#password");
const phoneNo = document.querySelector("#phnNo");

//  show  Hide password
function showhide() {
    if (pswrd.type == "password")
        pswrd.type = "text";
    else {
        pswrd.type = "password";
    }
}

//User name Checking
function usernamePhnnoChecking() {
    var userName = document.getElementById("userName");
    var disable = document.createAttribute("disabled");
    var warrning = document.getElementById("userWarrning");
    var loginButton = document.getElementById("loginButton");
    document.getElementById("loginButton").style.backgroundColor = "#007bff";
    document.getElementById("loginButton").style.borderColor = "gray";
    if (userName.value == "") {
        loginButton.setAttributeNode(disable);
        userName.style.border = "1px solid red";
        warrning.style.visibility = "visible";
        warrning.innerText = "! Please Enter Username or phone number";

    } else if (userName.value.length < 8) {
        loginButton.setAttributeNode(disable);
        userName.style.border = "1px solid red";
        warrning.style.visibility = "visible";
        warrning.innerText = "! Enter a Valid Username ";
    } else if (!isNaN(userName.value)) {
        if (userName.value.length != 10) {
            loginButton.setAttributeNode(disable);
            userName.style.border = "1px solid red";
            warrning.style.visibility = "visible";
            warrning.innerText = "! Incorrect Phone number";
        } else {
            loginButton.removeAttribute("disabled");
            warrning.style.visibility = "hidden";
            userName.style.border = "1px solid gray";
            loginButton.style.border = "1px solid gray";
        }
    } else {
        loginButton.removeAttribute("disabled");
        warrning.style.visibility = "hidden";
        userName.style.border = "1px solid gray";
        loginButton.style.border = "1px solid gray";
    }
}

// Password Validation
function passChecking() {
    var passLength = document.getElementById("password").value.length;
    if (passLength < 4) {
        loginButton.setAttributeNode(disable);
        document.getElementById("passWarrning").style.visibility = "visible";
    } else {
        loginButton.removeAttribute("disabled");
    }
}

// PhoneNo. Checking For sign Up
function PhnNo() {
    document.getElementById("signupNextBtn").style.backgroundColor = "#007bff";
    document.getElementById("signupNextBtn").style.borderColor = "gray";

    if (isNaN(phoneNo.value) || phoneNo.value.length > "10" || phoneNo.value.length < "10") {
        var disable = document.createAttribute("disabled");
        document.getElementById("signupNextBtn").setAttributeNode(disable);
        phoneNo.style.border = "1px solid red";
        var warrning = document.getElementById("noWarrning");
        warrning.style.visibility = "visible";
    } else {
        document.getElementById("signupNextBtn").removeAttribute("disabled");
        document.querySelector("#noWarrning").style.visibility = "hidden";
        document.getElementById("signupNextBtn").removeAttribute("disabled");
        phoneNo.style.border = "1px solid gray";
    }

}
// OTP Verification
var otpNextBtn = document.getElementById("otpNext");
var otpInput = document.getElementById("otpNo");
var warrning = document.getElementById("otpWarrning");

function otpVerification() {
    otpNextBtn.style.backgroundColor = "#007bff";
    otpNextBtn.style.borderColor = "gray";
    if (otpInput.value.length != 6 || isNaN(otpInput.value)) {
        warrning.style.visibility = "visible";
        otpInput.style.border = "1px solid red";
    } else {
        warrning.style.visibility = "hidden";
        otpInput.style.border = "1px solid gray";
        otpNextBtn.removeAttribute("disabled");
    }
}
//
function welcome() {
    if (!otpNextBtn.hasAttribute("disabled")) {
        document.getElementsByClassName("modalheaderWelcome").innerText = "Welcome !"
    }
}