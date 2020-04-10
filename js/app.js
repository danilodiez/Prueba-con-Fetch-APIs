document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarRest);


function cargarTXT(){

    fetch('datos.txt')
        .then(function(res){

            return res.text();

        })
        .then(function(data){

            console.log(data);

        })
        .catch(function(error){
            console.log(error)
        })

};


function cargarJSON(){

    fetch('empleados.json')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data);
        let html = '';
        data.forEach(function(dato){
            html += `<h4>${dato.nombre}</h4>
            <li>${dato.puesto}</li>
            `


        })
        
        document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){
        console.log(error);

    })
    
};

function cargarRest(){
    fetch('https://picsum.photos/list')
    .then(function(resp){
        return resp.json();

    })
    .then(function(imagenes){
        console.log(imagenes);
        let html='';
        imagenes.forEach(function(imagen){
            html += `
            <li>
            <a href = "${imagen.post_url}" target="_blank">Ver Imagen</a>
            ${imagen.author}
            
            </li>
            

            `
            
        })
        document.getElementById('resultado').innerHTML = html;
    })
}