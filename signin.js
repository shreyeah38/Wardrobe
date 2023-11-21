let signin = document.getElementById("signin");
let signup = document.getElementById("signup");
let title = document.getElementById("title");
let namefield = document.getElementById("namefield");
let forgotPassword = document.getElementById("forgot");
let forgotPassword2 = document.getElementById("forgot2");


signin.onclick = function()
{
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    forgotPassword.innerHTML = "Forgot Password?";
    forgotPassword2.innerHTML = "Click Here";
    signup.classList.add("disabled");
    signin.classList.remove("disabled");
    // forgotPassword.style.maxHeight = "20px";
}

signup.onclick = function()
{
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signin.classList.add("disabled");
    signup.classList.remove("disabled");
    // forgotPassword.style.maxHeight ="0";
}
