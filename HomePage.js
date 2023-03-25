
function changeText1(){
    var btn1 = document.getElementById("btn1");
    ChangeTextBtn(btn1)
    btn1.innerHTML = "(collection 1 info.)";
}

function changeText2(){
    var btn2 = document.getElementById("btn2");
    ChangeTextBtn(btn2)
    btn2.innerHTML = "(collection 2 info.)";
}

function changeText3(){
    var btn3 = document.getElementById("btn3");
    ChangeTextBtn(btn3)
    btn3.innerHTML = "(collection 3 info.)";
}

function changeText4(){
    var btn4 = document.getElementById("btn4");
    ChangeTextBtn(btn4)
    btn4.innerHTML = "(collection 4 info.)";
}

function ChangeTextBtn(num){
    num.style.color = "black";
    num.style.backgroundImage = "none"
    num.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.50),0 17px 50px 0 rgba(0,0,0,0.40)";

}

function changeTextBack(){
    btn1.innerHTML = "collection 1";
    btn1.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn1.style.color = "white";
    btn1.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn2.innerHTML = "collection 2";
    btn2.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn2.style.color = "white";
    btn2.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn3.innerHTML = "collection 3";
    btn3.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn3.style.color = "white";
    btn3.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

    btn4.innerHTML = "collection 4";
    btn4.style.backgroundImage = "url(https://assets.vogue.com/photos/616f075332e6aee08ea490e9/16:9/w_2580,c_limit/100_story.jpg)";
    btn4.style.color = "white";
    btn4.style.boxShadow = "0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)";

}