var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace("feelsbadman", "<img class ='emoji' src='img/feelsbadman.png' />");
    chatStr = chatStr.replace(":(", "<img class ='emoji' src='img/feelsbadman.png' />");
    
    chatStr = chatStr.replace("kappa", "<img class ='emoji' src='img/kappa.png' />");
    chatStr = chatStr.replace(":)", "<img class ='emoji' src='img/kappa.png' />");
    
    chatStr = chatStr.replace("bobross", "<img class ='emoji' src='img/bobross.png' />");
    
    chatStr = chatStr.replace("pogchamp", "<img class ='emoji' src='img/OFACE.png' />");
    
    chatStr = chatStr.replace("troll", "<img class ='emoji' src='img/trollface.png' />");
    
    chatStr = chatStr.replace("doggo", "<img class ='emoji' src='img/FrankerZ.png' />");
    
    chatStr = chatStr.replace("pjsalt", "<img class ='emoji' src='img/PJSalt.png' />");
    
    chatStr = chatStr.replace("boogie", "*****");
    chatStr = chatStr.replace("Voldemort", "*********");
    
    
    chatStr = chatStr.replace("/help", "<div id='helpText'>Emoji Commands: [:), kappa], \n[:(, feelsbadman], \nbobross, \npogchamp, \ntroll, \npjsalt, doggo</div>");
}

/* p1Chat */
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    replaceEmojis()
}
/* p2Chat */
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis()
}
/* chatDisplay */
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    if (chatNum == 1){
        ndiv.style.backgroundColor = "#AFA"
    }
    else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF"
    }
    
    ndiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}
/* Interactions */
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});