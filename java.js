var imagenes =['img/img1.jpg','img/img2.jpg','img/img3.png','img/img4.jpg']
    cont=0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e=>{

    let atras=contenedor.querySelector('.atras'),
    adelante=contenedor.querySelector('.adelante'),
    img=contenedor.querySelector('img'),
    tgt=e.target;

    if(tgt==atras){
        if(cont>0){
            img.src=imagenes[cont-1];
            cont--;
        }else{
            img.src=imagenes[imagenes.length -1];
            cont=imagenes.length-1;

        }

    }else if(tgt== adelante) {
        
        if(cont < imagenes.length -1){
            img.src=imagenes[cont + 1];
            cont++;
        }else{
            img.src=imagenes[0];
            cont=0;

        }

    }


 })}

 document.addEventListener("DOMContentLoaded",()=>{
     let contenedor= document.querySelector('.contenedor');
     carrousel(contenedor);
 });

 var json={
     "skills":[
         {"nombre":"JavaScript","porcentaje":40},
         {"nombre":"React", "porcentaje":50},
         {"nombre":"CSS", "porcentaje":10},
     ]
 }

 react=json.skills[1].porcentaje+"%"+" "+json.skills[1].nombre
 java=json.skills[0].porcentaje+"%"+" "+json.skills[0].nombre
 csss=json.skills[2].porcentaje+"%"+" "+json.skills[2].nombre
document.getElementById("react").innerHTML=react;
document.getElementById("java").innerHTML=java;
document.getElementById("css").innerHTML=csss;
