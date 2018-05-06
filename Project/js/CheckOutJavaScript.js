var $ = document;
$.addEventListener("DOMContentLoaded", ()=>{
    FillContentOfSubmitButton();
    BindSubmitForm();
    BindTermCheckedEvent();
});

function FillContentOfSubmitButton()
{
    var content = "Bring my babies to my home...";

    for(var i = 0; i < 10; i++)
    {
        content += content;
    }

    $.getElementById("submit").setAttribute("value", content);
    console.log($.getElementById("submit").getAttribute("value"));
}

function BindSubmitForm()
{
    var submitForm = $.getElementById("submitForm");
    submitForm.addEventListener("submit", (e)=>
    {
        var agreedTerms = $.getElementById("agreeTerms");
        var lblAgreedTerms = $.getElementById("lblAgreeTerms");
        if(agreedTerms.checked == false)
        {
            lblAgreedTerms.setAttribute("class", "Error");
            e.preventDefault();
            return;
        }
        else
        {
            lblAgreedTerms.setAttribute("class", "noError");
        }

        if(ValidateCreditCardInfo(e) && ValidateshippingAddress(e))
        {
            alert("Your babies are on the way!!!");
        }

    });
}

var creditCardInfoPattern = {
    cardNumber: /^[0-9]{12}$/i,
    CVC: /^[0-9]{3}$/,
    nameOnTheCard: /^[a-zA-Z\s]{4,20}$/,
    expriation: /^\d{2}-\d{2}$/
};

var ShippingAddressPattern = {
    customerName:  /^[a-zA-Z\s]{4,20}$/,
    address: /^[0-9a-zA-Z\s]{4,20}$/,
    addressLine2: /^[0-9a-zA-Z\s]{4,20}$/,
    city: /^[0-9a-zA-Z\s]{4,20}$/,
    postalCode: /^[0-9a-zA-Z\s]{8}$/,
    province: /^[0-9a-zA-Z\s]{4,20}$/,
    country: /^[0-9a-zA-Z\s]{4,20}$/
};

function ValidateCreditCardInfo(e){

    var flagCardNumber = false;
    var cardNumber = $.getElementById("cardNumber");
    if(creditCardInfoPattern.cardNumber.test(cardNumber.value))
    {
        cardNumber.setAttribute("class", "noError");
        flagCardNumber = true;
    }
    else
    {
        cardNumber.setAttribute("class", "Error");
        flagCardNumber = false;
        e.preventDefault();
    }

    var flagCVC = false;
    var cvc = $.getElementById("CVC");
    if(creditCardInfoPattern.CVC.test(cvc.value))
    {
        cvc.setAttribute("class", "noError");
        flagCVC = true;
    }
    else
    {
        cvc.setAttribute("class", "Error");
        flagCVC = false;
        e.preventDefault();
    }

    var flagNameOnTheCard = false;
    var nameOnTheCard = $.getElementById("nameOnTheCard");
    if(creditCardInfoPattern.nameOnTheCard.test(nameOnTheCard.value))
    {
        nameOnTheCard.setAttribute("class", "noError");
        flagNameOnTheCard = true;
    }
    else
    {
        nameOnTheCard.setAttribute("class", "Error");
        flagNameOnTheCard = false;
        e.preventDefault();
    }

    var flagExpriation = false;
    var expriation = $.getElementById("expriation");
    if(creditCardInfoPattern.expriation.test(expriation.value))
    {
        expriation.setAttribute("class", "noError");
        flagExpriation = true;
    }
    else
    {
        expriation.setAttribute("class", "Error");
        flagExpriation = false;
        e.preventDefault();
    }

    return flagCardNumber && flagCVC && flagNameOnTheCard && flagExpriation;
}

function BindTermCheckedEvent()
{
    var agreeTerms = $.getElementById("agreeTerms");
    var lblAgreedTerms = $.getElementById("lblAgreeTerms");
    agreeTerms.addEventListener("click", (e)=>{
        if(e.target.checked)
        {
            lblAgreedTerms.setAttribute("class", "noError");
        }
        else
        {
            lblAgreedTerms.setAttribute("class", "Error");
        }
});
}

function ValidateshippingAddress(e){
    var customerName = $.getElementById("customerName");
    var address = $.getElementById("address");
    var addressLine2 = $.getElementById("addressLine2");
    var city = $.getElementById("city");
    var postalCode = $.getElementById("postalCode");
    var province = $.getElementById("province");
    var country = $.getElementById("country");

    if(SubValidate(customerName, e) && 
    SubValidate(address, e) && 
    SubValidate(addressLine2, e) && 
    SubValidate(city, e) && 
    SubValidate(postalCode, e) && 
    SubValidate(province, e) &&
    SubValidate(country, e))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function SubValidate(control, e)
{
    debugger;
    var flag = false;
    //var scriptCode = "creditCardInfoPattern." + control.getAttribute("id") + ".test(control.value)"
    //if(eval(scriptCode))//does not work here
    if(creditCardInfoPattern.customerName.test(control.value))
    {
        control.setAttribute("class", "noError");
        flag = true;
    }
    else
    {
        control.setAttribute("class", "Error");
        flag = false;
        e.preventDefault();
    }
}