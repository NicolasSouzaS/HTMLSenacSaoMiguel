document.getElementById("mot").onclick = ()=>{
    document.getElementById("motor").style.border = "1px solid blue";
    document.getElementById("motor").style.padding = "20px"
    document.getElementById("motor").style.padding = "10px 40px 10px 40px";
    document.getElementById("redesign").style.border = 0;
    document.getElementById("redesign").style.padding = 0;
    document.getElementById("otimi").style.border = 0;
    document.getElementById("otimi").style.padding = 0;
}   


document.getElementById("red").onclick = ()=> {
    document.getElementById("redesign").style.border = "1px solid blue";
    document.getElementById("redesign").style.padding = "10px 40px 10px 40px";
    document.getElementById("motor").style.border = 0;
    document.getElementById("motor").style.padding = 0;
    document.getElementById("otimi").style.border = 0;
    document.getElementById("otimi").style.padding = 0;  
}

document.getElementById("oti").onclick = ()=> {
    document.getElementById("otimi").style.border = "1px solid blue";
    document.getElementById("otimi").style.padding = "20px";
    document.getElementById("otimi").style.padding = "10px 40px 10px 40px";
    document.getElementById("redesign").style.border = 0;
    document.getElementById("redesign").style.padding = 0;
    document.getElementById("motor").style.border = 0;
    document.getElementById("motor").style.padding = 0;
}


document.getElementById("mot").addEventListener("mouseover", function( event ) {

    document.getElementById("motor").style.border = "1px solid blue";
    document.getElementById("motor").style.padding = "10px 40px 10px 40px";

})