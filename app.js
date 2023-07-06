var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false ){
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none" ;
        menu_visible = false ;

    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let coreldraw = document.getElementById("coreldraw");
crearBarra(coreldraw);
let fotografia = document.getElementById("fotografia");
crearBarra(fotografia);
let java = document.getElementById("java");
crearBarra(java);

let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 11, 2, intervalPhotoshop);
        },100);
        const intervalCoreldraw = setInterval(function(){
            pintarBarra(coreldraw, 15, 3, intervalCoreldraw);
        },100);
        const intervalFotografia = setInterval(function(){
            pintarBarra(fotografia, 16, 4, intervalFotografia);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 11, 5, intervalJava);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#863900";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
