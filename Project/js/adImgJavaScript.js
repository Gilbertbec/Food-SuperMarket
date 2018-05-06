var $ = document;
$.addEventListener("DOMContentLoaded", ()=>{
    LoadAdPics();
});

var timeSpan = 2000;
var difference = 0.1 * timeSpan;
var myTimer;
var myTimer1
var i = 0;
function LoadAdPics()
{
    var adImg = $.getElementById("adImg");
    adImg.setAttribute("src", "adPics/5.jpg");

    var pics = localStorage.getItem("pics");
    var pics = ["adPics/1.jpg", "adPics/2.jpg", "adPics/3.jpg", "adPics/4.jpg", "adPics/5.jpg", "adPics/6.jpg"];
    var counter = 0;

    function changePics(){
        if(counter >= pics.length)
        {
            counter = 0;
        }

        adImg.setAttribute("src", pics[counter]);
        counter++;

        timeSpan -= difference;
        difference = 0.1 * timeSpan;

        if (timeSpan <= 1000)
        {timeSpan = 2000; }

        if (i == 9)
        {
            clearInterval(myTimer);
            clearInterval(myTimer1);
            myTimer1 = setInterval(changePics, timeSpan);
            i = 0
        }
        i = i + 1;
    }
    myTimer = setInterval(changePics, timeSpan);
}