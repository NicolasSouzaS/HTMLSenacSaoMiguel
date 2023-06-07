
document.getElementById("redesignSites").style.display="none";
document.getElementById("otimizacaoSites").style.display="none";
document.getElementById("motorOtimizacao").style.display="block";



document.getElementById("mot").addEventListener("mouseover", function( event ) {
   
    document.getElementById("redesign").style.border = "none";
    document.getElementById("redesign").style.padding = "none";
    document.getElementById("otimi").style.padding = "none";
    document.getElementById("otimi").style.border = "none";
    document.getElementById("redesignSites").style.display="none";
    document.getElementById("otimizacaoSites").style.display="none";
    document.getElementById("motorOtimizacao").style.display="block";
    
});



document.getElementById("red").addEventListener("mouseover", function( event ) {
   
    document.getElementById("motor").style.border = "none";
    document.getElementById("motor").style.padding = "none";
    document.getElementById("otimi").style.padding = "none";
    document.getElementById("otimi").style.border = "none";
    document.getElementById("motorOtimizacao").style.display="none";
    document.getElementById("otimizacaoSites").style.display="none";
    document.getElementById("redesignSites").style.display="block";

});

document.getElementById("oti").addEventListener("mouseover", function( event ) {

    
    document.getElementById("redesign").style.border = "none";
    document.getElementById("redesign").style.padding = "none";
    document.getElementById("motor").style.padding = "none";
    document.getElementById("motor").style.border = "none";
    document.getElementById("motorOtimizacao").style.display="none";
    document.getElementById("redesignSites").style.display="none";
    document.getElementById("otimizacaoSites").style.display="block";
})

