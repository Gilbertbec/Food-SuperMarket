var $ = document;
$.addEventListener("DOMContentLoaded", ()=>{
    BindContent();
    BindAddToCartEnents();
});

var fruits = [
    ["1", "Banana", 2, "img/fruits/1.jpg"], 
    ["2", "Apple", 3, "img/fruits/2.jpg"],
    ["3", "Cherry", 5, "img/fruits/3.jpg"], 
    ["4", "Grape", 4, "img/fruits/4.jpg"],
    ["5", "Avocado", 7,  "img/fruits/5.jpg"], 
    ["6", "Strawberry", 9, "img/fruits/6.jpg"],
    ["7", "Blueberry", 8, "img/fruits/7.jpg"], 
    ["8", "Watermelon", 11, "img/fruits/8.jpg"],
    ["9", "Cantaloupe", 12, "img/fruits/9.jpg"], 
    ["10", "Pineapple", 14, "img/fruits/10.jpg"],
    ["11", "Orange", 15, "img/fruits/11.jpg"], 
    ["12", "Lemon", 16, "img/fruits/12.jpg"],
            ];

var vegetables = [
    ["1", "Broccoli", 2, "img/vegetables/1.jpg"], 
    ["2", "Celery", 3, "img/vegetables/2.jpg"],
    ["3", "Mushroom", 5, "img/vegetables/3.jpg"], 
    ["4", "Lettuce", 4, "img/vegetables/4.jpg"],
    ["5", "Cabbage", 7,  "img/vegetables/5.jpg"], 
    ["6", "Yam", 9, "img/vegetables/6.jpg"],
    ["7", "Potato", 8, "img/vegetables/7.jpg"], 
    ["8", "Shallot", 11, "img/vegetables/8.jpg"],
    ["9", "Lotus root", 12, "img/vegetables/9.jpg"], 
    ["10", "Chinese cabbage", 14, "img/vegetables/10.jpg"],
    ["11", "Artemisia", 15, "img/vegetables/11.jpg"], 
    ["12", "Onion", 16, "img/vegetables/12.jpg"],
            ];

var meats = [
    ["1", "Chicken breast", 2, "img/meats/1.jpg"], 
    ["2", "Leg of lamb", 3, "img/meats/2.jpg"],
    ["3", "Salmon", 5, "img/meats/3.jpg"], 
    ["4", "Raw steak", 4, "img/meats/4.jpg"],
    ["5", "Rabbit", 7,  "img/meats/5.jpg"], 
    ["6", "Turkey meat", 9, "img/meats/6.jpg"],
    ["7", "Raw goose", 8, "img/meats/7.jpg"], 
    ["8", "Fatty fish", 11, "img/meats/8.jpg"],
    ["9", "Pigeon meat", 12, "img/meats/9.jpg"], 
    ["10", "Raw lamb", 14, "img/meats/10.jpg"],
    ["11", "Snake meat", 15, "img/meats/11.jpg"], 
    ["12", "Turtle meat", 16, "img/meats/12.jpg"],
            ];

var dairy = [
    ["1", "Milk", 2, "img/dairy/1.jpg"], 
    ["2", "Yogurt", 3, "img/dairy/2.jpg"],
    ["3", "Yogurt cake", 5, "img/dairy/3.jpg"], 
    ["4", "Cheese", 4, "img/dairy/4.jpg"],
    ["5", "Stinky cheese", 7,  "img/dairy/5.jpg"], 
    ["6", "Cheese balls", 9, "img/dairy/6.jpg"],
    ["7", "Goat milk", 8, "img/dairy/7.jpg"], 
    ["8", "Cheese slices", 11, "img/dairy/8.jpg"],
    ["9", "Cheese strips", 12, "img/dairy/9.jpg"], 
    ["10", "Cheese noodles", 14, "img/dairy/10.jpg"],
    ["11", "Cheese powder", 15, "img/dairy/11.jpg"], 
    ["12", "Chocolate milk", 16, "img/dairy/12.jpg"],
            ];

var dessert = [
    ["1", "Green tea cake", 2, "img/dessert/1.jpg"], 
    ["2", "Chocolate cake", 3, "img/dessert/2.jpg"],
    ["3", "Cheese chocolate", 5, "img/dessert/3.jpg"], 
    ["4", "Cream cake", 4, "img/dessert/4.jpg"],
    ["5", "Strawberry Cake", 7,  "img/dessert/5.jpg"], 
    ["6", "Underwear cake", 9, "img/dessert/6.jpg"],
    ["7", "Constellation cake", 8, "img/dessert/7.jpg"], 
    ["8", "Chocolate ball", 11, "img/dessert/8.jpg"],
    ["9", "Milk tea", 12, "img/dessert/9.jpg"], 
    ["10", "Jelly", 14, "img/dessert/10.jpg"],
    ["11", "Coffee dessert", 15, "img/dessert/11.jpg"], 
    ["12", "Ice cream coffee", 16, "img/dessert/12.jpg"],
            ];

var delicatessen = [
    ["1", "Peking duck", 2, "img/cookedFood/1.jpg"], 
    ["2", "Braised trotters", 3, "img/cookedFood/2.jpg"],
    ["3", "Steamed fish", 5, "img/cookedFood/3.jpg"], 
    ["4", "Glass shrimp sashimi", 4, "img/cookedFood/4.jpg"],
    ["5", "Spicy Crab", 7,  "img/cookedFood/5.jpg"], 
    ["6", "Pepper fried frog", 9, "img/cookedFood/6.jpg"],
    ["7", "Boiled fish", 8, "img/cookedFood/7.jpg"], 
    ["8", "Stewed turtle", 11, "img/cookedFood/8.jpg"],
    ["9", "Sea cucumber abalone", 12, "img/cookedFood/9.jpg"], 
    ["10", "Shark's fin", 14, "img/cookedFood/10.jpg"],
    ["11", "Dry crocodile palm", 15, "img/cookedFood/11.jpg"], 
    ["12", "meat ball with soy sauce", 16, "img/cookedFood/12.jpg"],
            ];

function BindContent()
{
    var content = $.getElementById("content");
    var catagary = sessionStorage.getItem("catagary");

    var product;
    switch(catagary)
    {
        case "Fruits":
        product = fruits;
        break;
        case "Vegetables":
        product = vegetables;
        break;
        case "Meats":
        product = meats;
        break;
        case "Dairy":
        product = dairy;
        break;
        case "Dessert":
        product = dessert;
        break;
        case "Delicatessen":
        product = delicatessen;
        break;
    }

    var i = 0;
    var html = "";          
    product.forEach((x)=>{
        i += 1;
        html += "<div class='element'><img src='" + x[3] + "'><div class='name'><h3>" + x[1] + "</h3></div><div class='price'>" + "Price: " + x[2] + "$/Each</div><div class='select'><span>Numbers to buy:</span><select><option value ='1'>1</option><option value ='2'>2</option><option value ='3'>3</option><option value ='4'>4</option><option value ='5'>5</option></select></div><div class='button'><input type='button' name='addtocart' value='Add to Cart' id=" + catagary + "," + x[0] + "></div></div>";
        if(i%3 == 0)
        {html += "<br>";}
    });
    content.innerHTML = html;
}

var cart = [];

var gettedCart = sessionStorage.getItem("cart");
if(gettedCart != null)
{
    cart = JSON.parse(gettedCart);
}
var myTimer;
function BindAddToCartEnents()
{
    var btns = $.getElementsByName("addtocart");
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            AddToCart(e.target);
            //FlyToCart(e.target);
            //GetPosition(e.target);

            // debugger;
            var bird = $.createElement("div");
            console.log(bird);
            bird.setAttribute("id", "bird");
            e.target.parentNode.appendChild(bird);
            console.log("e.target.parentNode: ", e.target.parentNode);

            myTimer = setInterval(ChangPosition, 5);
            var myTimer2 = setInterval(KillBird, 2000);
        })
    });
}

var xx;
var yy;
var i = 0;
function ChangPosition()
{
    var bird = $.getElementById("bird");
    if(bird != null)
    {
        var x = bird.offsetLeft;
        var y = bird.offsetTop;

        if(i == 0)
        {
            xx = x;
            yy = y;
        }
        i += 1;
    
        x += (xx + 300)/300;
        y += (100 - yy)/350;
        console.log("x:", x);
        console.log("y:", y);
      
        bird.style.left = x.toString() + "px";
        bird.style.top = y.toString() + "px";

        // var birdEnd = $.getElementById("bird");
        // var xxx = bird.offsetLeft;
        // var yyy = bird.offsetTop;

        // if(birdEnd != null && xxx == 300 && yyy == 100)
        // {
        //     bird.parentNode.removeChild(birdEnd);
        // }

        // bird.style.right =  "20px";
        // bird.style.top = "100px";
    }

}
function KillBird()
{
    var bird = $.getElementById("bird");
    if(bird != null)
    {
        bird.parentNode.removeChild(bird);
    }
    clearInterval(myTimer);
    clearInterval(myTimer2);
}

function AddToCart(btn)
{
    var id = btn.getAttribute("id");
    var numbersToBuy = parseFloat(btn.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.value);
    dividedResult = id.split(",");
    var subCatagery = dividedResult[0];
    subCatagery.replace(/\s+/g,"");
    var index = dividedResult[1];
    var tempCatagery

    switch(subCatagery)
    {
        case "Fruits":
        tempCatagery = fruits;
        break;
        case "Vegetables":
        tempCatagery = vegetables;
        break;
        case "Meats":
        tempCatagery = meats;
        break;
        case "Dairy":
        tempCatagery = dairy;
        break;
        case "Dessert":
        tempCatagery = dessert;
        break;
        case "Delicatessen":
        tempCatagery = delicatessen;
        break;
    }

    var item = tempCatagery[index - 1];
    var price = item[2];
    var total = price * numbersToBuy;

    var choice = [price, numbersToBuy, total, item, guid()];

    var isProductAddedBefore = false;
    if(cart != null)
    {
        cart.forEach((x)=>
        {
            if(JSON.stringify(x[3]) == JSON.stringify(choice[3]))
            {
                x[1] = x[1] + choice[1];
                x[2] += choice[2];
                isProductAddedBefore = true;
            }
        })
    }

    if(!isProductAddedBefore)
    {
        cart.push(choice);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
//获取坐标位置  
function GetPosition(e) {  
    var t=e.offsetTop;  
    var l=e.offsetLeft;  


    //10 200
    // var height=e.offsetHeight;  
    // while(e=e.offsetParent) {  
    //     t+=e.offsetTop;  
    //     l+=e.offsetLeft;  
    // }  

    // var cart = $.getElementById("shoppingCart");
    // var tcart = cart.offsetTop;
    // var lcart = cart.offsetLeft; 
    // console.log("t", t);
    // console.log("l", l);
    // console.log("tcart", tcart);
    // console.log("lcart", lcart);
    // console.log("height", height);
}  