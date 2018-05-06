var $ = document;
$.addEventListener("DOMContentLoaded", ()=>{
    DisplayCartItems();
    BindDeleteEvents();
    BindQuantityChangedEvents();
    BindCheckOutEvents();
});

function DisplayCartItems(){
    var placeHolder = $.getElementById("placeHolder");
    var html = "";

    var gettedCart = sessionStorage.getItem("cart");
    if(gettedCart != null)
    {
        Array(JSON.parse(gettedCart)).forEach((x)=>{
            console.log("x", x);
            x.forEach((y)=>{
                console.log("y", y);
                html += "<tr><td>Product name: " + y[3][1] + "</td><td>Price: " + y[0] + "$/each</td><td>Numbers to buy: <input type='number' name='quantity' class='" + y[4] + "' min=0 value='" + y[1] + "'> </td><td>Sub total: " + y[2] + "</td><td><input type='button' value='Delete' name='delete' id='" + y[4] + "'></td></tr>";
            });
        });
        var tableStartHtml = "<table>";
        var tableEndHtml = "</table>";
        placeHolder.innerHTML = tableStartHtml + html + tableEndHtml;
    }
}

function BindDeleteEvents()
{
    var deleteBtns = $.getElementsByName("delete");
    var gettedCart = sessionStorage.getItem("cart");

    var parsedCart;
    Array.from(deleteBtns).forEach((x)=>{
        x.addEventListener("click", (e)=>{
            if(gettedCart != null)
            {
                parsedCart = JSON.parse(gettedCart);
                Array(parsedCart).forEach((x)=>{
                    x.forEach((y)=>{
                        if(y[4] == e.target.id)
                        {
                            console.log("x before", x);
                            x = x.splice(y,1);
                            console.log("x later", x);
                        }
                        });
                });
            }
            sessionStorage.setItem("cart", JSON.stringify(parsedCart));
            DisplayCartItems();
            BindDeleteEvents();
            BindQuantityChangedEvents();
            BindCheckOutEvents();
        });
    });
}

function BindQuantityChangedEvents()
{
    var quantityInputs = $.getElementsByName("quantity");
    var gettedCart = sessionStorage.getItem("cart");

    var parsedCart;
    Array.from(quantityInputs).forEach((x)=>{
        x.addEventListener("change", (e)=>{
            if(gettedCart != null)
            {
                parsedCart = JSON.parse(gettedCart);
                Array(parsedCart).forEach((x)=>{
                    x.forEach((y)=>{
                        console.log("className:", e.target.getAttribute("class"));
                        if(y[4] == e.target.getAttribute("class"))
                        {
                            y[1] = parseFloat(e.target.value)
                            y[2] = y[0] * y[1];
                        }
                        });
                });
            }
            sessionStorage.setItem("cart", JSON.stringify(parsedCart));
            DisplayCartItems();
            BindDeleteEvents();
            BindQuantityChangedEvents();
            BindCheckOutEvents();
        });
    });
}

function BindCheckOutEvents()
{
    var gettedCart = sessionStorage.getItem("cart");
    var checkOut = $.getElementsByClassName("checkOut");

    if(gettedCart != null)
    {
        Array.from(checkOut).forEach((x)=>{
            x.addEventListener("click", ()=>{
                window.location.href="CheckOut.html";
        });
        });
    }
    else
    {
        alert("Please add products into the cart first.");
    }
}

   

