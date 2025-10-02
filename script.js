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
        document.getElementById("foto").hiden = false
    }else{
        document.getElementById("foto").hidden = true
    }


}

