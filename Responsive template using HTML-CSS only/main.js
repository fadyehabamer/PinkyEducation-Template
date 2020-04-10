var menu = document.getElementById("menu-btn");
var sidenav = document.getElementById("side-nav");

sidenav.style.right == "-250px";
menu.onclick=function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0"; 
    }else{
        sidenav.style.right = "-250px"
    }
}
