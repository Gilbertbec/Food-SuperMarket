var $ = document;
$.addEventListener("DOMContentLoaded", ()=>{
    RegisterSubmitEvent();
});

function RegisterSubmitEvent(){
    $.getElementById("form1").addEventListener("submit", (e)=>{
        var userName = $.getElementById("userName").value;
        var password = $.getElementById("password").value;
        console.log(userName);
        console.log(password);
        if(!(userName == "admin" && password == "12345"))
        {
            e.preventDefault();
            var lblInfo = $.getElementById("lblInfo");
            lblInfo.innerText = "Username or Password is not correct, please try it again.";
        }
        sessionStorage.setItem("loginState", "Logined");
        localStorage.setItem("userName", userName);
    });
}