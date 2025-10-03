function Blud(){
    let nom = prompt ("Como quieres llamarte")
    document.getElementById("nom").innerHTML = "NOM: "+nom;



}

function Canvifoto(){
    let foto = prompt("Que quieres ser")
    document.getElementById("foto").src = foto



}

function invis() {
    if(document.getElementById("foto").hidden == true){
        document.getElementById("foto").hidden = false
    }else{
        document.getElementById("foto").hidden = true
    }


}


function Canvifons() {
   let body = document.getElementsByTagName("body")[0]
   let foto = prompt("Donde quieres viajar")
   body.style = "background-image: url('"+foto+"'); background-size: cover;";

}

function Tradueix() {
    let body = document.getElementsByTagName("body")[0];
    body.style = "font-family: 'Times New Roman', Times, serif;"
}

function Info() {
    let llista = document.getElementById("expL");
    let element = document.createElement("li");
    element.innerHTML = prompt("Que vols afegir")
    llista.appendChild(element)
}



