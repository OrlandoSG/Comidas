
class Interfaz{

    mostrarComidas(comidas){
        // Valida si existe el mensaje que no se encontraron resultados
        const existe = document.querySelector('#imposible > h1');
         if(existe != null){
            document.querySelector('#imposible').remove();
         }

         const existeComidas = document.querySelector('.contenedor-Comidas > div');
         if(existeComidas != null){
            document.querySelector('.contenedor-Comidas').remove();
         }



        // mostrar la animacion
        this.cargando('block');

        // mostrar despues de 2 segundos
        setTimeout(() => {
            // desactivar la animacion 
            this.cargando('none');
 

            // valida si hay comidas
            if(comidas.length > 0){

                // console.log(comidas.length);

                // console.log(comidas[0].strMeal);
                 
            //   mostrar resultados
               const food = document.createElement('div');
               food.className = 'contenedor-Comidas';
               for (let i = 0; i < comidas.length ; i++) {
                let hmtlFoot = ''
                 hmtlFoot += `
                 <div class="comida">
                 <h3>Plato:  ${comidas[i].strMeal} </h3>
                  <ul> 
                  <li>${comidas[i].strIngredient1} <span> => ${comidas[i].strMeasure1} </li>
                  <li>${comidas[i].strIngredient2} <span> => ${comidas[i].strMeasure2} </li>
                  <li>${comidas[i].strIngredient3} <span> => ${comidas[i].strMeasure3} </li>
                  <li>${comidas[i].strIngredient4} <span> => ${comidas[i].strMeasure4} </li>
                  <li>${comidas[i].strIngredient5} <span> => ${comidas[i].strMeasure5} </li>
                  <li>${comidas[i].strIngredient6} <span> => ${comidas[i].strMeasure6} </li>
                  <li>${comidas[i].strIngredient7} <span> => ${comidas[i].strMeasure7} </li>
                  <li>${comidas[i].strIngredient8} <span> => ${comidas[i].strMeasure8} </li>
                  <li>${comidas[i].strIngredient9} <span> => ${comidas[i].strMeasure9} </li>
                  <li>${comidas[i].strIngredient10}<span> => ${comidas[i].strMeasure10} </li>
                  </ul>
                  <p>INTRUCCIONES: ${comidas[i].strInstructions} </p>
                  <img src="${comidas[i].strMealThumb}" alt="imagen plato">
                  </div>
               `;
                food.innerHTML += hmtlFoot;
               }
              
               const resultado = document.querySelector('#resultado');
               resultado.appendChild(food);
               }else{
                // desactiva la animacion
                this.cargando('none')

                const res = document.querySelector('#resultado');
                
                const mensaje = document.createElement('div')
                mensaje.id = 'imposible';
        
                mensaje.innerHTML = `<h1>No se Encontraron Resultados</h1>`
               
                res.appendChild(mensaje);
        
               }



        }, 2000);
       
       
        

      
    }


    cargando(activarDesactivar){
       const spinner = document.querySelector('.spinner') 
       spinner.style.display = activarDesactivar;

    }

    carrusel(i){

      if(i == 5){
         const existeImagen = document.querySelectorAll('.imagenes img').length;
         if(existeImagen == 5){

            const imagenesHijos = document.querySelectorAll('.imagenes img');
            imagenesHijos[0].remove();
            imagenesHijos[1].remove();
            imagenesHijos[2].remove();
            imagenesHijos[3].remove();
            imagenesHijos[4].remove();

            const imagenes = document.querySelector('.imagenes');
            console.log(imagenes);
                const imgen = document.createElement('img');
                 imgen.src = `img/comidas0.jpg`;
                 imagenes.appendChild(imgen); 
         }
      }else{
         const imagenes = document.querySelector('.imagenes');
         // console.log(imagenes);
             const imgen = document.createElement('img');
              imgen.src = `img/comidas${i}.jpg`;
            //   console.log(imgen);
              imagenes.appendChild(imgen);
      }
      

      
   
    
    
      

    }
} 