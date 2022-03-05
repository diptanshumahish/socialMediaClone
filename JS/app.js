var settingsMenu =document.querySelector(".settingsmenu");
var darkBtn =document.getElementById("darkbtn")


function settingsMenuToggle(){
     settingsMenu.classList.toggle("settingsMenuHeight");
}
darkBtn.onclick=function(){
    darkBtn.classList.toggle("darkbtnon");
    document.body.classList.toggle("darktheme");

}