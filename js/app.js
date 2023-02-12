// Carrusel

const ui = new Interfaz();


const boton = document.querySelector('#enviar');
let buscar = '';
boton.addEventListener('click', function(e){
    e.preventDefault();
    buscar = document.querySelector('#buscador').value;
//    const buscarDefault = "";
    
       const api = new APIComidas(buscar);
     

  api.obtenerComidas()
    .then(comidas =>{
       ui.mostrarComidas(comidas.respuestaJson.meals);

    }).catch((err) => {
        err = 0;
        ui.mostrarComidas(err);

    });
})



setInterval(() => {

    const imagnes = document.querySelector('.imagenes');
let valor = imagnes.children.length;

    
 if(valor <  5){
    ui.carrusel(valor);
 }else{
    valor = 5;
    ui.carrusel(valor);
 }
    
}, 3000);