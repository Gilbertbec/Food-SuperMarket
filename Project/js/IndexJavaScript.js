var $ = document;
var loginState = sessionStorage.getItem("loginState");
var userName = localStorage.getItem("userName");
if(loginState == null || loginState != "Logined")
{
    window.location.href="Login.html";
}

var navCatagary = ["Fruits", "Vegetables", "Meats", "Dairy", "Dessert", "Delicatessen"];
$.addEventListener("DOMContentLoaded", ()=>{
    var gree = $.getElementById("greet");
    gree.innerHTML = "Welcome my friend " + userName;
    LoadNav();
    BindCatagaryClickEvents();
    BindShoppingCartClickEvent();

    // var cart = $.getElementById("shoppingCart");
    // var tcart = cart.offsetTop;
    // var lcart = cart.offsetLeft; 
    // console.log("tcart", tcart);
    // console.log("lcart", lcart);
});

function LoadNav()
{
    var nav = $.getElementById("nav");
    var navHtml = "";
    navCatagary.forEach(element => {
        navHtml += "<a target='iframe' text-decoration:'none' href='Products.html'><span id='" + element + "' height='50px'>" + element + "</span></a>";
    });
    nav.innerHTML = navHtml;
}

function BindCatagaryClickEvents()
{
    navCatagary.forEach(element => {
        $.getElementById(element).addEventListener("click", ()=>{
            sessionStorage.setItem("catagary", element);
    });
    });
}

function BindShoppingCartClickEvent()
{
    var shoppingCart = $.getElementById("shoppingCart");
    shoppingCart.addEventListener("click", ()=>{
        self.frames['iframe'].location.href='ShoppingCart.html'
    });
}
