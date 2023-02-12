
class APIComidas{

    constructor(buscar){
        this.buscar = buscar
    }

    async obtenerComidas(){
     const url = await `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.buscar}`;
     const respuesta = await fetch(url);

         const respuestaJson = await respuesta.json();
    
         return{
            respuestaJson
         }
    //  console.log(respuestaJson.meals);
    }
}