var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    else{
        return;
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<45 && blockLeft>20 && characterTop>=115){
        block.style.animation = "none";
        alert("Game Over. Score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);